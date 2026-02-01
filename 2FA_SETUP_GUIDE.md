# Two-Factor Authentication Setup Guide

## Why This Error?

npm requires 2FA (Two-Factor Authentication) for publishing packages to protect against unauthorized access.

---

## Quick Setup (5 minutes)

### Step 1: Install Authenticator App

Choose one:
- **Google Authenticator** (iOS/Android)
- **Authy** (iOS/Android/Desktop)
- **1Password** (if you use it)
- **Microsoft Authenticator** (iOS/Android)

### Step 2: Enable 2FA on npm

1. **Go to npm settings:**
   ```
   https://www.npmjs.com/settings/YOUR_USERNAME/twofa/enable
   ```

2. **Or navigate manually:**
   - Login to https://www.npmjs.com/
   - Click your profile picture (top right)
   - Click "Account"
   - Click "Two-Factor Authentication" in sidebar
   - Click "Enable 2FA"

3. **Choose 2FA mode:**
   - **Authorization and Publishing** (Recommended) - Required for login AND publishing
   - **Authorization Only** - Only required for login

4. **Scan QR code:**
   - Open your authenticator app
   - Scan the QR code shown on npm
   - Or manually enter the code

5. **Enter verification code:**
   - Enter the 6-digit code from your authenticator app
   - Click "Verify"

6. **Save recovery codes:**
   - npm will show you recovery codes
   - **SAVE THESE SOMEWHERE SAFE!**
   - You'll need them if you lose access to your authenticator

### Step 3: Publish with 2FA

Now when you publish, you'll need to provide an OTP (One-Time Password):

```bash
# Get the 6-digit code from your authenticator app
# Then run:
npm publish --otp=123456

# Replace 123456 with your actual code
```

---

## Example Publishing Flow

```bash
# 1. Navigate to project
cd /Users/bestway/Documents/npm/premium-color-enhancer

# 2. Open your authenticator app and get the 6-digit code

# 3. Publish with OTP
npm publish --otp=YOUR_CODE_HERE

# Example:
npm publish --otp=456789
```

---

## Alternative: Automation Token (No 2FA for Publishing)

If you don't want to enter OTP every time:

### Step 1: Create Automation Token

1. Go to: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
2. Click "Generate New Token"
3. Select "Automation" token type
4. Give it a name (e.g., "Publishing Token")
5. Click "Generate Token"
6. **COPY THE TOKEN** (you'll only see it once!)

### Step 2: Configure npm

```bash
# Set the token in npm config
npm config set //registry.npmjs.org/:_authToken YOUR_TOKEN_HERE

# Or create/edit ~/.npmrc file:
echo "//registry.npmjs.org/:_authToken=YOUR_TOKEN_HERE" >> ~/.npmrc
```

### Step 3: Publish

```bash
npm publish
# No OTP needed!
```

---

## Troubleshooting

### "Invalid OTP"

**Cause:** Code expired or incorrect

**Solution:**
- Make sure your device time is synced correctly
- Get a fresh code from your authenticator app
- Try again immediately (codes expire every 30 seconds)

### "2FA not enabled"

**Cause:** 2FA setup not completed

**Solution:**
- Complete the 2FA setup on npm website
- Make sure you clicked "Verify" after scanning QR code

### "Lost authenticator access"

**Cause:** Lost phone or deleted app

**Solution:**
- Use your recovery codes to login
- Go to npm settings and disable/re-enable 2FA
- Set up new authenticator

---

## Security Best Practices

1. **Use "Authorization and Publishing" mode**
   - More secure
   - Protects both login and publishing

2. **Save recovery codes**
   - Store them in a password manager
   - Or print and store securely
   - Don't lose them!

3. **Use automation tokens for CI/CD**
   - For automated publishing (GitHub Actions, etc.)
   - Keep tokens secret
   - Rotate them regularly

4. **Don't share OTP codes**
   - They're time-sensitive
   - Only valid for 30 seconds
   - Never share with anyone

---

## Quick Reference

### Publish with 2FA
```bash
npm publish --otp=123456
```

### Update version and publish
```bash
npm version patch
npm publish --otp=123456
git push && git push --tags
```

### Check if 2FA is enabled
```bash
npm profile get
# Look for "twoFactorAuth" field
```

### Disable 2FA (not recommended)
```bash
# Go to: https://www.npmjs.com/settings/YOUR_USERNAME/twofa/disable
```

---

## What to Do Now

1. ✅ Choose your method:
   - **Option A:** Enable 2FA (5 minutes, more secure)
   - **Option B:** Use automation token (2 minutes, less secure)

2. ✅ Follow the steps above

3. ✅ Try publishing again:
   ```bash
   npm publish --otp=YOUR_CODE
   ```

4. ✅ Success! Your package is live! 🎉

---

## Need Help?

- npm 2FA docs: https://docs.npmjs.com/configuring-two-factor-authentication
- npm tokens docs: https://docs.npmjs.com/creating-and-viewing-access-tokens
- npm support: https://www.npmjs.com/support

---

Good luck! 🚀
