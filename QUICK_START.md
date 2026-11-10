# GENESIS Website - Quick Start

## Get Running in 5 Minutes

### 1. Logo Already Added ✅
Your GENESIS logo (WebP format) is already in place at:
```
public/images/genesis-logo.webp
```

### 2. Set Up Database (2 minutes)

Install PostgreSQL if you don't have it:
```bash
# macOS
brew install postgresql
brew services start postgresql

# Create database
createdb genesis
```

### 3. Configure Environment (1 minute)

Create `.env` file:
```bash
cat > .env << 'ENVEOF'
DATABASE_URL="postgresql://localhost:5432/genesis"
NODE_ENV="development"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
CONTACT_EMAIL="contact@genesis.com"
ENVEOF
```

### 4. Start Development Server (30 seconds)
```bash
# Database setup
npx prisma db push

# Start server
npm run dev
```

### 5. Open Your Browser
```
http://localhost:3000
```

## That's It! 🎉

Your GENESIS website is now running locally.

## Test These Features

- ✅ Homepage with animations
- ✅ All 8 pages
- ✅ Contact form
- ✅ Product modals
- ✅ Responsive navigation

## Deploy to Production

See `DEPLOYMENT_GUIDE.md` for deploying to Render.

---

**Questions?** Check `README.md` for full documentation.
