# GitHub Quick Start (5 Minutes)

The fastest way to get your package on GitHub.

---

## 🚀 Two Methods

### Method 1: Automated Script (Easiest)

```bash
cd /Users/bestway/Documents/npm/premium-color-enhancer
./setup-github.sh
```

The script will:
- ✅ Initialize git
- ✅ Create initial commit
- ✅ Add GitHub remote
- ✅ Push to GitHub
- ✅ Update package.json

**Just follow the prompts!**

---

### Method 2: Manual Setup (5 minutes)

#### Step 1: Create Repository on GitHub (2 min)

1. Go to: **https://github.com/new**

2. Fill in:
   ```
   Repository name: premium-color-enhancer
   Description: Enhance colors to make them clearer, more premium, and accessible
   Visibility: ● Public
   
   ❌ Do NOT check:
   - Add a README file
   - Add .gitignore
   - Choose a license
   ```

3. Click **"Create repository"**

4. **Copy the URL** shown (you'll need it):
   ```
   https://github.com/YOUR_USERNAME/premium-color-enhancer.git
   ```

#### Step 2: Push Your Code (3 min)

Open your terminal and run these commands:

```bash
# Navigate to project
cd /Users/bestway/Documents/npm/premium-color-enhancer

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Premium Color Enhancer v1.0.0"

# Add GitHub remote (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Done!** Your code is now on GitHub! 🎉

---

## ✅ Verify It Worked

Visit your repository:
```
https://github.com/YOUR_USERNAME/premium-color-enhancer
```

You should see:
- ✅ All your files
- ✅ README displayed
- ✅ 7 commits (or more)
- ✅ MIT License badge

---

## 📝 Update package.json

Edit `package.json` and replace `YOUR_USERNAME`:

```json
{
  "repository": {
    "type": "git",
    "url": "git+https://github.com/YOUR_USERNAME/premium-color-enhancer.git"
  },
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/premium-color-enhancer/issues"
  },
  "homepage": "https://github.com/YOUR_USERNAME/premium-color-enhancer#readme"
}
```

Then commit and push:

```bash
git add package.json
git commit -m "Update repository URLs"
git push
```

---

## 🎨 Add Badges to README (Optional)

Add these at the top of `README.md`:

```markdown
[![npm version](https://badge.fury.io/js/premium-color-enhancer.svg)](https://www.npmjs.com/package/premium-color-enhancer)
[![GitHub](https://img.shields.io/github/license/YOUR_USERNAME/premium-color-enhancer)](https://github.com/YOUR_USERNAME/premium-color-enhancer/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/premium-color-enhancer.svg)](https://www.npmjs.com/package/premium-color-enhancer)
```

---

## 🔄 Update npm Package

After updating package.json:

```bash
# Update version
npm version patch

# Publish to npm
npm publish --otp=YOUR_CODE

# Push to GitHub
git push && git push --tags
```

---

## 📊 Common Commands

```bash
# Check git status
git status

# View remote URL
git remote -v

# View commit history
git log --oneline

# Push changes
git add .
git commit -m "Your message"
git push

# View on GitHub
open https://github.com/YOUR_USERNAME/premium-color-enhancer
```

---

## 🐛 Troubleshooting

### "Remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git
```

### "Repository not found"
- Make sure you created the repo on GitHub
- Check your username is correct in the URL

### "Permission denied"
- Use HTTPS URL (not SSH)
- Make sure you're logged into GitHub

---

## 🎉 Success!

Your package is now on:
- ✅ npm: `https://www.npmjs.com/package/premium-color-enhancer`
- ✅ GitHub: `https://github.com/YOUR_USERNAME/premium-color-enhancer`

**Share it with the world!** 🌍

---

## 📚 More Details

- **Full Guide:** See `GITHUB_SETUP_GUIDE.md`
- **Automated Script:** Run `./setup-github.sh`
- **Git Basics:** https://git-scm.com/book/en/v2

---

**Need help?** Check `GITHUB_SETUP_GUIDE.md` for detailed instructions!
