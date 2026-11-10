# GENESIS Website - Deployment Guide

## Quick Start Checklist

### ✅ Completed
- [x] Full-stack Next.js application built
- [x] All pages created (Home, About, Technology, Solutions, Products, Contact)
- [x] PostgreSQL database schema defined
- [x] Contact form with validation and rate limiting
- [x] Responsive design for all screen sizes
- [x] Advanced animations with Framer Motion
- [x] SEO optimization (sitemap, robots.txt, metadata)
- [x] Premium visual design with GENESIS brand colors
- [x] TypeScript throughout
- [x] Production-ready configuration

### ⏳ Before Launch

1. **Logo - COMPLETED ✅**
   - Your GENESIS logo is active: `/public/images/genesis-logo.webp`
   - WebP format for optimal performance
   - Used across all pages

2. **Generate Favicons**
   - Use https://realfavicongenerator.net/
   - Place files in `/public/` directory

3. **Configure Database**
   - Set up PostgreSQL database
   - Update `DATABASE_URL` in environment variables

4. **Legal Review**
   - Review and customize Privacy Policy
   - Review and customize Terms of Use
   - Ensure GDPR/CCPA compliance if applicable

5. **Optional: Email Notifications**
   - Configure SMTP settings for contact form notifications
   - Update environment variables with SMTP credentials

## Deployment to Render

### Step 1: Prepare Repository

```bash
# Initialize git (if not done)
git init
git add .
git commit -m "Initial commit: GENESIS corporate website"

# Push to GitHub
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Blueprint"
3. Connect your GitHub repository
4. Render will use `render.yaml` to create:
   - PostgreSQL database (`genesis-db`)
   - Web service (`genesis-website`)

### Step 3: Configure Environment Variables

In Render dashboard, set these environment variables:

```env
DATABASE_URL=<auto-filled-by-render>
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-site.onrender.com
CONTACT_EMAIL=contact@genesis.com
RATE_LIMIT_MAX_REQUESTS=10
RATE_LIMIT_WINDOW_MS=900000
```

### Step 4: Custom Domain (Optional)

1. In Render service settings, go to "Custom Domains"
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` to match your domain

## Local Development

### Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your PostgreSQL credentials
# DATABASE_URL="postgresql://user:password@localhost:5432/genesis"

# Generate Prisma client and push schema
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

### Access

- Website: http://localhost:3000
- Health check: http://localhost:3000/api/health

## Testing Production Build

```bash
# Build
npm run build

# Start production server
npm start
```

## Project Structure

```
Genesis-1/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   ├── contact/        # Contact form endpoint
│   │   └── health/         # Health check endpoint
│   ├── contact/            # Contact page
│   ├── products/           # Products page
│   ├── solutions/          # Solutions page
│   ├── technology/         # Technology page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of use
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Sitemap generation
│   ├── robots.ts           # Robots.txt
│   └── not-found.tsx       # 404 page
├── components/
│   ├── home/               # Homepage components
│   ├── layout/             # Layout components (Nav, Footer)
│   ├── ui/                 # Reusable UI components
│   └── animations/         # Animation components
├── lib/
│   ├── constants.ts        # Site-wide constants
│   ├── db.ts               # Prisma client
│   └── utils.ts            # Utility functions
├── prisma/
│   └── schema.prisma       # Database schema
├── public/
│   └── images/             # Static images
├── .env.example            # Environment variables template
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── render.yaml             # Render deployment config
└── README.md               # Full documentation
```

## Features Implemented

### Pages
- ✅ Homepage with hero, vision, technology pillars, products, approach
- ✅ About page with mission, vision, philosophy
- ✅ Technology page with focus areas and tech stack
- ✅ Solutions page with solution categories
- ✅ Products page with all 8 GENESIS products and detailed modals
- ✅ Contact page with functional form
- ✅ Privacy Policy (requires legal review)
- ✅ Terms of Use (requires legal review)
- ✅ 404 error page

### Technical Features
- ✅ Server-side rendering (SSR)
- ✅ PostgreSQL database integration
- ✅ Contact form with validation (Zod)
- ✅ Rate limiting on API endpoints
- ✅ SEO optimization
- ✅ Responsive design
- ✅ Advanced animations (Framer Motion)
- ✅ TypeScript throughout
- ✅ Accessibility features
- ✅ Performance optimized

### Design Features
- ✅ Premium GENESIS brand colors
- ✅ Sophisticated animations
- ✅ Interactive components
- ✅ Consistent visual identity
- ✅ Modern typography (Manrope font)
- ✅ Glassmorphism effects
- ✅ Gradient accents
- ✅ Smooth transitions

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `DATABASE_URL` | PostgreSQL connection | Yes | `postgresql://...` |
| `NODE_ENV` | Environment | Yes | `production` |
| `NEXT_PUBLIC_SITE_URL` | Public URL | Yes | `https://genesis.com` |
| `CONTACT_EMAIL` | Contact email | No | `contact@genesis.com` |
| `RATE_LIMIT_MAX_REQUESTS` | Rate limit max | No | `10` |
| `RATE_LIMIT_WINDOW_MS` | Rate limit window | No | `900000` |

## Support

For issues or questions:
- Check README.md for detailed documentation
- Review code comments
- Check Render logs for deployment issues

## Next Steps After Deployment

1. **Test all pages** - Navigate through entire website
2. **Test contact form** - Submit test enquiries
3. **Check mobile responsiveness** - Test on actual devices
4. **Verify database** - Check that contact form saves to database
5. **Monitor performance** - Check Lighthouse scores
6. **Set up analytics** - Add Google Analytics or similar
7. **Configure backups** - Set up database backups
8. **Monitor errors** - Set up error tracking (e.g., Sentry)

## Security Checklist

- [x] Server-side validation
- [x] Rate limiting
- [x] SQL injection protection (Prisma)
- [x] XSS protection (React)
- [x] Environment variables for secrets
- [x] HTTPS (handled by Render)
- [ ] Add Content Security Policy headers (optional)
- [ ] Add security headers (optional)

---

**Built with GENESIS. Ready to transform.**
