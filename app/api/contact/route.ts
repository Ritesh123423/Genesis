import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { ENQUIRY_TYPES } from '@/lib/constants'

// Rate limiting map (in-memory, suitable for single-instance deployments)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limit configuration
const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '10')
const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000') // 15 minutes

function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false
  }

  record.count++
  return true
}

// Validation schema
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address').max(255),
  organisation: z.string().max(200).optional(),
  subject: z.string().min(3, 'Subject must be at least 3 characters').max(200),
  enquiryType: z.enum([
    'General Enquiry',
    'Product Enquiry',
    'Business Collaboration',
    'Technology Partnership',
    'Career Enquiry',
    'Other',
  ]),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
})

export async function POST(request: NextRequest) {
  try {
    // Get IP address for rate limiting
    const forwardedFor = request.headers.get('x-forwarded-for')
    const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Get user agent for logging
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save to database
    const enquiry = await prisma.contactEnquiry.create({
      data: {
        fullName: validatedData.fullName,
        email: validatedData.email,
        organisation: validatedData.organisation || null,
        subject: validatedData.subject,
        enquiryType: validatedData.enquiryType,
        message: validatedData.message,
        ipAddress: ip,
        userAgent: userAgent,
      },
    })

    // TODO: Send email notification (configure SMTP settings in .env)
    // This would integrate with nodemailer or similar service
    // For now, we're just storing in the database

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been received successfully.',
        id: enquiry.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to process your enquiry. Please try again.' },
      { status: 500 }
    )
  }
}
