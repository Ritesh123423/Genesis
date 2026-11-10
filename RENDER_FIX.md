# Render Deployment - Build Error Fix ✅

## Issue
Build was failing with:
```
Cannot find module 'tailwindcss'
Module not found: Can't resolve '@/lib/constants'
```

## Root Cause
Render by default doesn't install `devDependencies` in production builds, but Next.js needs these packages to build:
- tailwindcss
- postcss
- autoprefixer
- typescript
- @types packages
- prisma

## Solution Applied ✅

### 1. Moved Build Dependencies to Production
Changed `package.json` to include all build-time dependencies in the main `dependencies` section instead of `devDependencies`.

### 2. Updated Build Command
Changed from `npm install` to `npm ci` for cleaner, faster installs.

---

## What To Do Now

The fix has been pushed to GitHub. Now in Render:

### Option A: Automatic Redeploy (Recommended)
If you have auto-deploy enabled:
1. Render will detect the new commit
2. It will automatically start a new build
3. Wait 3-5 minutes for the build to complete
4. ✅ Your site should now deploy successfully!

### Option B: Manual Redeploy
If auto-deploy is off:
1. Go to your Render dashboard
2. Find your `genesis-website` service
3. Click **"Manual Deploy"** button
4. Select **"Deploy latest commit"**
5. Click **"Deploy"**
6. Wait for the build to complete

---

## Verify Success

After deployment, you should see in the logs:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    ...      ...
├ ○ /about                               ...      ...
...
○  (Static)  prerendered as static content

==> Your service is live 🎉
```

---

## Updated Build Command

The new build command in `render.yaml`:
```bash
npm ci && npx prisma generate && npm run build
```

This ensures:
1. ✅ Clean install of all dependencies
2. ✅ Prisma client is generated
3. ✅ Next.js build with all required packages

---

## Still Getting Errors?

If you still see build errors:

### Check Environment Variables
Make sure these are set in Render:
- `DATABASE_URL` - Your PostgreSQL connection string
- `NODE_ENV` - Set to `production`
- `NEXT_PUBLIC_SITE_URL` - Your Render URL
- `CONTACT_EMAIL` - Your contact email
- `RATE_LIMIT_MAX_REQUESTS` - Set to `10`
- `RATE_LIMIT_WINDOW_MS` - Set to `900000`

### View Full Logs
1. Go to your service in Render
2. Click "Logs" tab
3. Look for specific error messages
4. Share the full error if you need help

### Common Issues & Solutions

**"Module not found" errors:**
- ✅ Fixed by moving packages to dependencies

**"Prisma Client not found":**
- Make sure `DATABASE_URL` is set
- Check that `npx prisma generate` runs in build command

**"Out of memory":**
- Upgrade to Starter plan (more RAM)
- Or add `NODE_OPTIONS=--max_old_space_size=4096` to env vars

**Build taking too long:**
- Free tier has limited resources
- Normal build time: 3-5 minutes
- If > 10 minutes, something is wrong

---

## Success! What's Next?

Once deployed successfully:

1. **Test Your Site**
   - Visit your Render URL
   - Test all pages
   - Submit a test contact form
   - Check mobile responsiveness

2. **Update Site URL**
   - Copy your actual Render URL
   - Update `NEXT_PUBLIC_SITE_URL` in environment variables
   - This ensures all links work correctly

3. **Monitor**
   - Check Render dashboard
   - View logs for any errors
   - Monitor database usage

4. **Custom Domain (Optional)**
   - Add your custom domain in Render
   - Update DNS records
   - Update `NEXT_PUBLIC_SITE_URL` to your domain

---

## Need Help?

If deployment still fails, provide:
1. Full build logs from Render
2. Screenshot of environment variables (hide sensitive values)
3. Specific error message

**Your GENESIS website should now deploy successfully! 🚀**
