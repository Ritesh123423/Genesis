# 📧 Resend Email Setup Guide

## Get Your Free Resend API Key

Follow these steps to get email notifications working:

---

## Step 1: Create Resend Account (Free)

1. Go to https://resend.com
2. Click **"Sign Up"** or **"Get Started"**
3. Sign up with:
   - **GitHub** (recommended - instant)
   - OR **Email** (requires verification)

**Free Tier Includes:**
- ✅ 100 emails per day
- ✅ 3,000 emails per month
- ✅ All features included
- ✅ No credit card required

---

## Step 2: Get Your API Key

After signing up:

1. You'll be on the **Dashboard**
2. Click **"API Keys"** in left sidebar
3. You should see a default API key already created
4. Click **"Create API Key"** if you want a new one
5. Name it: `genesis-contact-form`
6. Permission: **"Sending access"**
7. Click **"Create"**
8. **COPY THE KEY** - it starts with `re_`
   ```
   re_123abc456def789ghi012jkl345mno
   ```
9. ⚠️ **Save it somewhere safe** - you won't see it again!

---

## Step 3: Add Domain (Optional but Recommended)

For better email deliverability:

1. In Resend Dashboard, click **"Domains"**
2. Click **"Add Domain"**
3. Enter your domain: `genesis.com` (or whatever you own)
4. Follow DNS setup instructions
5. Add the provided DNS records to your domain
6. Wait for verification (usually 5-30 minutes)

**Benefits of verified domain:**
- ✅ Emails from `contact@yourdomain.com` instead of `onboarding@resend.dev`
- ✅ Better deliverability
- ✅ Professional appearance

**Without domain (still works!):**
- Emails will come from `onboarding@resend.dev`
- Still reliable and free
- Good enough to start

---

## Step 4: Add API Key to Render

Now add the API key to your Render environment:

1. Go to **Render Dashboard**: https://dashboard.render.com
2. Click your **Web Service** (`genesis-xar5`)
3. Click **"Environment"** tab (left sidebar)
4. Click **"Add Environment Variable"**
5. Add these two:

**Variable 1:**
- **Key**: `RESEND_API_KEY`
- **Value**: `re_your_api_key_here` (paste the key you copied)

**Variable 2 (if not already set):**
- **Key**: `CONTACT_EMAIL`
- **Value**: `your-email@gmail.com` (your actual email where you want to receive enquiries)

6. Click **"Save Changes"**
7. Render will automatically redeploy (wait 5-6 minutes)

---

## Step 5: Test Email Notifications

Once deployment completes:

1. Go to your website: https://genesis-xar5.onrender.com/contact
2. Fill out the contact form:
   - **Full Name**: Test User
   - **Email**: test@example.com
   - **Subject**: Testing email notifications
   - **Message**: This is a test to verify emails are working
3. Click **"Send Message"**
4. Check your email inbox (the one you set in CONTACT_EMAIL)
5. You should receive an email! 📧

**Email should have:**
- ✅ From: `GENESIS Contact Form <onboarding@resend.dev>`
- ✅ Reply-To: The submitter's email (so you can reply directly)
- ✅ Subject: `New Contact Form Enquiry: [subject]`
- ✅ Beautiful HTML formatted email with all details
- ✅ Click "Reply" to respond to the enquirer

---

## 🎨 Email Template Features

Your contact form emails will include:

- **Professional Design** - Branded GENESIS colors
- **All Form Details** - Name, email, organisation, message
- **Enquiry Type Badge** - Visual indicator
- **Reply-To Set** - Click reply to respond directly
- **Mobile Responsive** - Looks great on all devices
- **Easy to Read** - Clean, organized layout

---

## 📊 Monitor Email Usage

Check your email usage in Resend:

1. Go to Resend Dashboard
2. Click **"Emails"** in sidebar
3. See all sent emails and their status
4. Check delivery success/failure
5. View email content

**Free Tier Limits:**
- 100 emails/day
- 3,000 emails/month
- That's ~3 enquiries per day
- More than enough for most websites!

---

## 🔧 Troubleshooting

### "No email received"

**Check #1: API Key Set?**
- In Render → Environment → Look for `RESEND_API_KEY`
- Should start with `re_`
- No spaces before/after

**Check #2: CONTACT_EMAIL Set?**
- In Render → Environment → Look for `CONTACT_EMAIL`
- Should be YOUR email address
- Check for typos

**Check #3: Spam Folder**
- Check your spam/junk folder
- Add `onboarding@resend.dev` to contacts

**Check #4: Resend Dashboard**
- Log into Resend
- Click "Emails"
- Check if email shows as sent
- Check status (Delivered/Bounced/Failed)

### "Email shows in Resend but not received"

**Possible causes:**
- Email in spam folder
- Incorrect CONTACT_EMAIL
- Email provider blocking

**Solutions:**
1. Check spam folder
2. Add sender to safe senders
3. Try different email address
4. Check Resend logs for errors

### "API Key Invalid"

**Causes:**
- Wrong API key copied
- Spaces in the key
- Key was deleted in Resend

**Solution:**
1. Go to Resend Dashboard
2. Create new API key
3. Copy entire key (starts with `re_`)
4. Update in Render Environment
5. Redeploy

---

## 💡 Advanced: Use Your Domain

Once you verify a domain in Resend:

1. Update `lib/email.ts`
2. Change `from:` line:

```typescript
from: 'GENESIS <contact@yourdomain.com>',
```

3. Commit and push:
```bash
git add lib/email.ts
git commit -m "Use custom domain for emails"
git push
```

4. Emails will now come from YOUR domain! ✅

---

## 📈 Upgrade Options (Optional)

If you need more emails:

**Pro Plan** - $20/month
- 50,000 emails/month
- Custom domains unlimited
- Analytics & webhooks

**Business Plan** - $100/month
- 100,000 emails/month
- Priority support
- SLA guarantee

*Most small businesses never need to upgrade from free tier!*

---

## ✅ Setup Complete Checklist

- [ ] Created Resend account
- [ ] Got API key (starts with `re_`)
- [ ] Added `RESEND_API_KEY` to Render Environment
- [ ] Added `CONTACT_EMAIL` to Render Environment
- [ ] Saved changes and waited for redeploy
- [ ] Tested contact form
- [ ] Received test email
- [ ] Checked email looks good
- [ ] Replied to test email (should go to submitter)

---

## 🎉 Success!

Once set up, every contact form submission will:

1. ✅ Save to your database
2. ✅ Send you an instant email notification
3. ✅ Include all form details
4. ✅ Allow one-click reply to the enquirer
5. ✅ Track in Resend dashboard

**Your GENESIS website now has professional contact form with email notifications!** 📧

---

## 🆘 Need Help?

If you're stuck:
1. Check Render logs for errors
2. Check Resend dashboard for email status
3. Verify both environment variables are set
4. Try different email address (not your domain if not verified)
5. Check spam folder

**The setup is simple and should work within 10 minutes!** ✨
