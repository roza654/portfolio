# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Submission from SRJ Portfolio

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Your Code
Replace these placeholders in your files:

### In `index.html` (line 385):
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
```

### In `assets/js/templatemo-custom.js` (line 153):
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

## Step 6: Test
1. Open your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email for the message

## Free Tier Limits
- 200 emails per month
- Perfect for personal portfolios
- No credit card required

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify email service is properly connected
- Test with a simple message first
