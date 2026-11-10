import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface SendContactEmailParams {
  fullName: string
  email: string
  organisation?: string
  subject: string
  enquiryType: string
  message: string
}

export async function sendContactEmail(params: SendContactEmailParams) {
  const { fullName, email, organisation, subject, enquiryType, message } = params

  // Email to you (website owner)
  const emailToOwner = {
    from: 'GENESIS Contact Form <onboarding@resend.dev>', // Resend verified sender
    to: process.env.CONTACT_EMAIL || 'contact@genesis.com',
    replyTo: email, // So you can reply directly to the enquirer
    subject: `New Contact Form Enquiry: ${subject}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #3977B8 0%, #315A83 100%);
      color: white;
      padding: 30px;
      border-radius: 8px 8px 0 0;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      background: #f8f9fa;
      padding: 30px;
      border-radius: 0 0 8px 8px;
    }
    .field {
      margin-bottom: 20px;
      background: white;
      padding: 15px;
      border-radius: 6px;
      border-left: 4px solid #3977B8;
    }
    .label {
      font-weight: 600;
      color: #071426;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
      font-size: 16px;
    }
    .message-box {
      background: white;
      padding: 20px;
      border-radius: 6px;
      border: 1px solid #e0e0e0;
      margin-top: 10px;
      white-space: pre-wrap;
      line-height: 1.6;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
      color: #666;
      font-size: 12px;
    }
    .badge {
      display: inline-block;
      padding: 4px 12px;
      background: #3977B8;
      color: white;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>📧 New Contact Form Enquiry</h1>
    <p style="margin: 10px 0 0 0; opacity: 0.9;">From GENESIS Website</p>
  </div>
  
  <div class="content">
    <div class="field">
      <div class="label">Enquiry Type</div>
      <div class="value"><span class="badge">${enquiryType}</span></div>
    </div>

    <div class="field">
      <div class="label">From</div>
      <div class="value">${fullName}</div>
    </div>

    <div class="field">
      <div class="label">Email</div>
      <div class="value"><a href="mailto:${email}" style="color: #3977B8; text-decoration: none;">${email}</a></div>
    </div>

    ${
      organisation
        ? `
    <div class="field">
      <div class="label">Organisation</div>
      <div class="value">${organisation}</div>
    </div>
    `
        : ''
    }

    <div class="field">
      <div class="label">Subject</div>
      <div class="value">${subject}</div>
    </div>

    <div class="field">
      <div class="label">Message</div>
      <div class="message-box">${message}</div>
    </div>

    <div style="margin-top: 30px; padding: 15px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #2196F3;">
      <strong>💡 Quick Action:</strong> Click "Reply" in your email client to respond directly to ${fullName}.
    </div>
  </div>

  <div class="footer">
    <p>This enquiry was submitted via the GENESIS website contact form</p>
    <p style="margin-top: 10px;">
      <strong>GENESIS</strong> - Intelligence. Automation. Transformation.
    </p>
  </div>
</body>
</html>
    `,
  }

  try {
    const result = await resend.emails.send(emailToOwner)
    return { success: true, data: result }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error }
  }
}
