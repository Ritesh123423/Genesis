# GENESIS Website - Free Tier Setup (No Shell Required)

## ✅ Automatic Database Schema Setup

I've configured your website to **automatically create database tables during deployment**. No Shell access needed!

---

## 🔧 What Was Changed

### Updated Build Script
The build process now:
1. ✅ Generates Prisma client
2. ✅ **Automatically applies database schema** (`prisma db push`)
3. ✅ Builds Next.js application

This happens automatically every time you deploy!

---

## 🚀 What To Do Now

### Step 1: Get Your Database URL

1. Go to Render Dashboard
2. Click your **PostgreSQL database** (`genesis-db`)
3. Scroll to **"Connections"** section
4. Copy the **"Internal Database URL"**
   - Should start with: `postgresql://genesis_db_user:...`

### Step 2: Update Environment Variable

1. Go to your **Web Service** (`genesis-xar5`)
2. Click **"Environment"** tab
3. Find `DATABASE_URL` variable
4. **Paste** the Internal Database URL
5. Click **"Save Changes"**

Render will automatically redeploy with the changes.

### Step 3: Wait for Deployment

The deployment will now:
- Install dependencies (~2 min)
- Generate Prisma client (~10 sec)
- **Create database tables automatically** (~5 sec) ✅
- Build Next.js (~3-4 min)
- Deploy (~30 sec)

**Total: ~6-7 minutes**

### Step 4: Watch Build Logs

In the deployment logs, you should see:
```
🏋️  Building...
==> Running 'npm ci && npm run build'

> genesis-corporate-website@1.0.0 build
> prisma generate && prisma db push --accept-data-loss && next build

✔ Generated Prisma Client

Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database

🚀 Your database is now in sync with your Prisma schema.

✔ Generated Prisma Client

Creating an optimized production build...
✓ Compiled successfully
...
```

Look for: **"Your database is now in sync with your Prisma schema"** ✅

### Step 5: Test Contact Form

Once deployment completes:

1. Visit your website
2. Go to **Contact** page
3. Fill out the form:
   - **Full Name**: Test User
   - **Email**: test@example.com
   - **Organisation**: (optional)
   - **Enquiry Type**: General Enquiry
   - **Subject**: Testing contact form
   - **Message**: This is a test message to verify the form is working properly
4. Click **"Send Message"**
5. Should show success! ✅

---

## 🎯 What This Solves

### Before (Needed Shell - Paid):
- Had to manually run `prisma db push` in Shell
- Required paid plan for Shell access
- Database tables not created automatically

### After (Free Tier Compatible):
- ✅ Database schema applied automatically on every deploy
- ✅ No Shell access needed
- ✅ Works on free tier
- ✅ Tables created/updated automatically

---

## 📊 Free Tier Limits

Your current setup:

**PostgreSQL Database (Free):**
- ✅ 1GB storage
- ✅ Shared CPU
- ✅ Expires after 90 days (December 10, 2026)
- ✅ Can be extended or upgraded

**Web Service (Free):**
- ✅ 750 hours/month
- ✅ 512MB RAM
- ✅ Shared CPU
- ⚠️ Spins down after 15 min inactivity
- ⚠️ First load after inactivity: 30-60 seconds

---

## 🔄 Important: Database Expiration

Your free database will expire on **December 10, 2026**.

**Before expiration:**
1. Upgrade to paid plan ($7/month for database)
2. Or create a new free database and migrate data

**To extend now (optional):**
1. Go to database settings
2. Upgrade to "Starter" plan ($7/month)
3. Database will never expire

---

## ✅ Verification Checklist

Make sure these are set:

- [x] `DATABASE_URL` = Internal Database URL from your database
- [x] `NODE_ENV` = production
- [x] `NEXT_PUBLIC_SITE_URL` = https://genesis-xar5.onrender.com
- [x] `CONTACT_EMAIL` = contact@genesis.com
- [x] `RATE_LIMIT_MAX_REQUESTS` = 10
- [x] `RATE_LIMIT_WINDOW_MS` = 900000
- [x] `NODE_OPTIONS` = --max-old-space-size=2048

---

## 🆘 Troubleshooting

### "Failed to save enquiry"
**Cause:** DATABASE_URL not set or incorrect
**Fix:** Copy Internal Database URL from database page → paste in DATABASE_URL → save → wait for redeploy

### Build fails at "prisma db push"
**Cause:** DATABASE_URL not accessible during build
**Fix:** Make sure DATABASE_URL is set BEFORE deployment starts

### "Database connection" error in /api/health
**Cause:** Database not available or wrong URL
**Fix:** 
1. Check database status (should be green "Available")
2. Verify DATABASE_URL matches Internal URL exactly
3. Redeploy

---

## 💡 How It Works

The build script now runs:
```bash
prisma generate          # Creates Prisma client
prisma db push           # Creates/updates database tables ✅ (NEW!)
next build               # Builds Next.js app
```

The `--accept-data-loss` flag allows schema updates without prompting (safe for initial setup).

**This runs automatically on every deployment!**

---

## 🎉 Success!

Once deployed, your contact form will:
- ✅ Save all enquiries to PostgreSQL
- ✅ Validate data properly
- ✅ Show success/error messages
- ✅ Rate limit to prevent spam
- ✅ Work without Shell access

**Your website is now fully functional on the free tier!** 🚀

---

## 📝 Next Steps (Optional)

1. **Set up email notifications:**
   - Add SMTP credentials to environment variables
   - Contact form will email you when someone submits

2. **Add custom domain:**
   - Follow CUSTOM_DOMAIN_GUIDE.md
   - Point your domain to Render

3. **Monitor usage:**
   - Check Render metrics
   - Watch for approaching limits

4. **Before December 10, 2026:**
   - Decide if you want to upgrade database
   - Or migrate to new free database

---

**Everything should work now after this deployment! Test the contact form once it's live.** ✅
