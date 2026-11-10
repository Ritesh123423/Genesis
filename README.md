# GENESIS - Corporate Website

**Intelligence. Automation. Transformation.**

Premium corporate website for GENESIS, an emerging technology brand focused on developing intelligent automation solutions for professional and business environments.

![GENESIS](public/images/genesis-logo.png)

## Overview

This is the official public digital identity of GENESIS. It is a complete, multi-page, full-stack corporate website with exceptional visual design, sophisticated animations, responsive layouts, and functional contact capabilities.

## Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animation library
- **Lucide React** - Modern icon library

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **PostgreSQL** - Relational database
- **Prisma ORM** - Type-safe database client
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## Features

### Pages
- **Homepage** - Full-featured hero, technology pillars, product ecosystem, vision, approach
- **About** - Company mission, vision, philosophy, values
- **Our Technology** - Technology focus areas and stack
- **Solutions** - Solution categories across business domains
- **Our Products** - Complete product portfolio with detailed modals
- **Contact** - Functional contact form with validation and database storage
- **Privacy Policy** - Privacy information (requires legal review)
- **Terms of Use** - Terms and conditions (requires legal review)

### Key Features
- Premium visual identity with consistent brand colors
- Sophisticated animations and transitions
- Fully responsive design (mobile, tablet, desktop)
- Functional contact form with server-side validation
- Rate limiting for API endpoints
- SEO optimized with metadata and sitemap
- 404 error page
- Accessibility considerations
- Performance optimized

## Local Development

### Prerequisites
- Node.js 18+ and npm 9+
- PostgreSQL database

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Genesis-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/genesis?schema=public"
   
   # Application
   NODE_ENV="development"
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   
   # Contact
   CONTACT_EMAIL="contact@genesis.com"
   
   # Rate Limiting
   RATE_LIMIT_MAX_REQUESTS="10"
   RATE_LIMIT_WINDOW_MS="900000"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm start         # Start production server
npm run lint      # Run ESLint
```

## Production Build

### Build the application
```bash
npm run build
```

### Test the production build locally
```bash
npm start
```

## Deployment to Render

### 1. Prepare Your GitHub Repository

1. Initialize git (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: GENESIS corporate website"
   ```

2. Create a GitHub repository and push:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### 2. Deploy to Render

#### Option A: Using render.yaml (Recommended)

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will automatically detect `render.yaml` and create:
   - PostgreSQL database
   - Web service

#### Option B: Manual Setup

1. **Create PostgreSQL Database**
   - Go to Render Dashboard
   - Click "New" → "PostgreSQL"
   - Name: `genesis-db`
   - Select plan and region
   - Create database
   - Copy the "Internal Database URL"

2. **Create Web Service**
   - Click "New" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: `genesis-website`
     - **Region**: Choose closest to your users
     - **Branch**: `main`
     - **Build Command**: `npm install && npx prisma generate && npm run build`
     - **Start Command**: `npm start`
   
3. **Add Environment Variables**
   ```
   DATABASE_URL=<your-postgres-internal-url>
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://your-domain.onrender.com
   CONTACT_EMAIL=contact@genesis.com
   RATE_LIMIT_MAX_REQUESTS=10
   RATE_LIMIT_WINDOW_MS=900000
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Render will build and deploy automatically

### 3. Custom Domain Configuration

1. Go to your web service settings
2. Click "Custom Domains"
3. Add your custom domain
4. Update DNS records as instructed by Render
5. Update `NEXT_PUBLIC_SITE_URL` environment variable with your custom domain

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Yes | - |
| `NODE_ENV` | Environment mode | Yes | development |
| `NEXT_PUBLIC_SITE_URL` | Public site URL | Yes | - |
| `CONTACT_EMAIL` | Contact email address | No | contact@genesis.com |
| `RATE_LIMIT_MAX_REQUESTS` | Max requests per window | No | 10 |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window (ms) | No | 900000 |
| `SMTP_HOST` | SMTP server (future) | No | - |
| `SMTP_PORT` | SMTP port (future) | No | - |
| `SMTP_USER` | SMTP username (future) | No | - |
| `SMTP_PASSWORD` | SMTP password (future) | No | - |

## Logo and Assets

The GENESIS logo is located at:
```
public/images/genesis-logo.webp
```

Logo specifications:
- **Format**: WebP with transparency
- **Optimized**: For web performance
- **Usage**: Navigation bar, footer, and general branding
- **Favicon**: Generate from logo at 512x512px, then create ico file

To generate favicons:
1. Use a favicon generator tool
2. Place files in `public/` directory
3. Files needed:
   - `favicon.ico`
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

## Database Schema

The application uses a single table for contact enquiries:

```prisma
model ContactEnquiry {
  id           String   @id @default(cuid())
  fullName     String
  email        String
  organisation String?
  subject      String
  enquiryType  String
  message      String   @db.Text
  ipAddress    String?
  userAgent    String?
  createdAt    DateTime @default(now())
}
```

## Performance Optimization

The website is built with performance in mind:

- **Image Optimization**: Uses Next.js Image component with AVIF/WebP
- **Code Splitting**: Automatic code splitting per page
- **Font Optimization**: Self-hosted fonts with display swap
- **CSS Optimization**: Tailwind CSS with PurgeCSS
- **Animation Performance**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Components load on demand
- **Reduced Motion**: Respects prefers-reduced-motion

## SEO Features

- Unique page titles and meta descriptions
- Open Graph metadata for social sharing
- Sitemap.xml generation
- Robots.txt configuration
- Semantic HTML structure
- Descriptive alt text for images
- Canonical URLs

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome)

## Accessibility

- Semantic HTML elements
- ARIA labels where appropriate
- Keyboard navigation support
- Focus visible styles
- Color contrast compliance
- Reduced motion support
- Screen reader friendly

## Security

- Server-side validation with Zod
- Rate limiting on API endpoints
- SQL injection protection via Prisma
- XSS protection via React
- CSRF protection via Next.js
- Environment variable protection
- No sensitive data in client-side code

## Future Enhancements

### Email Notifications
Configure SMTP settings to send email notifications when contact forms are submitted:

1. Add SMTP credentials to environment variables
2. Install nodemailer: `npm install nodemailer`
3. Update `/app/api/contact/route.ts` to send emails

### Analytics
Add analytics tracking (e.g., Google Analytics, Plausible):

1. Install analytics library
2. Add tracking code to layout
3. Configure in environment variables

### CMS Integration
For easier content management:

1. Consider headless CMS (Sanity, Contentful, Strapi)
2. Migrate static content to CMS
3. Fetch content dynamically

## Legal Notes

**Important**: The Privacy Policy and Terms of Use pages are placeholders and MUST be reviewed and customized by qualified legal counsel before launching in production. Ensure compliance with:

- GDPR (if serving EU users)
- CCPA (if serving California users)
- Other applicable data protection laws
- Industry-specific regulations

## Support

For questions or issues:
- Create an issue in the GitHub repository
- Contact the development team
- Review documentation in `/docs` (if applicable)

## License

Copyright © 2024 GENESIS. All rights reserved.

---

**Built with precision. Designed for impact. Ready for the future.**
