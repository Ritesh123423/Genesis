# Contact Form Troubleshooting Guide

## Issue: "Validation failed" or "Failed to process your enquiry"

Based on your screenshots, the contact form is showing validation errors. Here's how to fix it:

---

## **Most Likely Cause: Database Not Connected**

The contact form requires a PostgreSQL database connection to save enquiries.

### ✅ **Solution: Check Database Connection in Render**

1. Go to your Render Dashboard
2. Click on your **PostgreSQL database** (should be `genesis-db`)
3. Check that it shows **"Available"** status (green)
4. Copy the **Internal Database URL**

5. Now go to your **Web Service** (`genesis-website`)
6. Click **"Environment"** tab
7. Find `DATABASE_URL` variable
8. Make sure it has the **Internal Database URL** from your database
9. It should look like:
   ```
   postgresql://genesis:XXXXX@dpg-xxxx.oregon-postgres.render.com/genesis_db
   ```

10. If missing or wrong, **update it** and click **"Save Changes"**
11. Render will automatically redeploy

---

## **Check #2: Database Schema Applied**

The database needs the table structure. This should happen automatically during build, but let's verify:

### Option A: Check Render Logs

1. Go to your web service in Render
2. Click **"Logs"** tab
3. Look for this line during build:
   ```
   ✔ Generated Prisma Client
   ```
4. If you see it, the schema is applied ✅

### Option B: Manually Run Migration

If the schema wasn't applied:

1. In Render, go to your **Web Service**
2. Click **"Shell"** tab (opens a terminal)
3. Run these commands:
   ```bash
   npx prisma db push
   npx prisma generate
   ```
4. Wait for completion
5. Type `exit` and press Enter

---

## **Check #3: Test the Database Connection**

Visit your health check endpoint:
```
https://genesis-xar5.onrender.com/api/health
```

You should see:
```json
{
  "status": "healthy",
  "timestamp": "...",
  "database": "connected"
}
```

If you see `"database": "disconnected"`, the database isn't connected properly.

---

## **Check #4: Form Field Requirements**

The form requires these fields:

| Field | Requirement |
|-------|-------------|
| Full Name | Minimum 2 characters |
| Email | Valid email format |
| Organisation | Optional |
| Enquiry Type | Must select from dropdown |
| Subject | Minimum 3 characters |
| Message | Minimum 10 characters |

Make sure you're filling all required fields properly.

---

## **Common Errors & Solutions**

### Error: "Validation failed"
**Cause:** Form fields don't meet requirements
**Solution:** 
- Full name: At least 2 characters
- Email: Valid format (name@domain.com)
- Subject: At least 3 characters
- Message: At least 10 characters

### Error: "Failed to process your enquiry"
**Cause:** Database connection issue
**Solution:** Check `DATABASE_URL` environment variable (see Check #1 above)

### Error: "Too many requests"
**Cause:** Rate limiting (more than 10 submissions in 15 minutes)
**Solution:** Wait 15 minutes or test from different IP/browser

### Error: "Failed to save enquiry. Please check database connection."
**Cause:** Database is not available or schema not applied
**Solution:** 
1. Check database status in Render
2. Run `npx prisma db push` in Shell
3. Restart web service

---

## **Quick Fix: Restart Everything**

If nothing else works:

1. **Restart Database:**
   - Go to database in Render
   - Click "..." menu
   - Select "Restart"
   - Wait 2 minutes

2. **Restart Web Service:**
   - Go to web service in Render
   - Click "Manual Deploy"
   - Select "Clear build cache & deploy"
   - Wait for deployment

3. **Test Again:**
   - Visit `/contact` page
   - Fill form completely
   - Submit

---

## **Test Database Manually**

You can test if database is working with the Shell:

1. Go to your **Web Service** in Render
2. Click **"Shell"** tab
3. Run:
   ```bash
   node -e "const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); prisma.contactEnquiry.count().then(c => console.log('Enquiries:', c)).catch(e => console.error('Error:', e.message))"
   ```
4. Should show: `Enquiries: 0` (or a number)
5. If error, database isn't connected

---

## **Verify Environment Variables**

Make sure these are set in Render → Environment:

```
DATABASE_URL = postgresql://... (Internal URL from database)
NODE_ENV = production
NEXT_PUBLIC_SITE_URL = https://your-site.onrender.com
CONTACT_EMAIL = contact@genesis.com
RATE_LIMIT_MAX_REQUESTS = 10
RATE_LIMIT_WINDOW_MS = 900000
NODE_OPTIONS = --max-old-space-size=2048
```

---

## **Still Not Working?**

If you've tried everything above:

1. **Check Render Logs:**
   - Go to web service
   - Click "Logs" tab
   - Look for errors after form submission
   - Share the error message

2. **Check Browser Console:**
   - Open form page
   - Press F12 (Developer Tools)
   - Go to "Console" tab
   - Submit form
   - Look for red errors
   - Share the error message

3. **Test Form Locally:**
   ```bash
   cd /Users/apple/Documents/Genesis-1
   
   # Set up database
   npx prisma db push
   
   # Start dev server
   npm run dev
   ```
   - Visit http://localhost:3000/contact
   - Test form
   - If works locally but not on Render = deployment issue
   - If doesn't work locally = code issue

---

## **Success Indicators**

When it's working, you should see:

1. ✅ Form submits without errors
2. ✅ Green success message appears:
   > "Thank you! Your message has been received. We'll get back to you soon."
3. ✅ Form fields clear automatically
4. ✅ `/api/health` shows `"database": "connected"`

---

## **Contact Form Features**

Once working, the form will:
- ✅ Save enquiries to PostgreSQL database
- ✅ Validate all fields server-side
- ✅ Rate limit to prevent spam (10 per 15 min)
- ✅ Log IP address and user agent
- ✅ Show proper error messages
- ✅ Clear form on success

---

**Follow the checks above in order and your form should work! Let me know which error message you're seeing.** 🔧
