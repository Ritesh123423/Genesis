import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { sendContactEmail } from '@/lib/email'
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
    
    // Validate with Zod
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }
    
    const validatedData = validationResult.data

    // Get user agent for logging
    const userAgent = request.headers.get('user-agent') || 'unknown'

    // Save to database (with error handling)
    let enquiry
    try {
      enquiry = await prisma.contactEnquiry.create({
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
    } catch (dbError) {
      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Failed to save enquiry. Please check database connection.' },
        { status: 503 }
      )
    }

    // Send email notification
    if (process.env.RESEND_API_KEY) {
      try {
        await sendContactEmail({
          fullName: validatedData.fullName,
          email: validatedData.email,
          organisation: validatedData.organisation,
          subject: validatedData.subject,
          enquiryType: validatedData.enquiryType,
          message: validatedData.message,
        })
      } catch (emailError) {
        // Log error but don't fail the request
        console.error('Email notification failed:', emailError)
        // Enquiry is still saved to database
      }
    }

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
