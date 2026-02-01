# GitHub Setup Guide

Complete guide to publishing your npm package on GitHub.

---

## Why Publish to GitHub?

- ✅ **Visibility** - More people can discover your package
- ✅ **Contributions** - Others can contribute improvements
- ✅ **Issue Tracking** - Users can report bugs and request features
- ✅ **Documentation** - README displays nicely on GitHub
- ✅ **Trust** - Shows your code is open source
- ✅ **npm Integration** - npm links to your GitHub repo

---

## Quick Setup (10 minutes)

### Step 1: Create GitHub Repository

#### Option A: Via GitHub Website (Easiest)

1. **Go to GitHub:**
   ```
   https://github.com/new
   ```

2. **Fill in details:**
   - **Repository name:** `premium-color-enhancer`
   - **Description:** `Enhance colors to make them clearer, more premium, and accessible`
   - **Visibility:** Public (required for free npm packages)
   - **Initialize:** ❌ Do NOT check any boxes (no README, .gitignore, or license)
   - Click "Create repository"

3. **Copy the repository URL:**
   ```
   https://github.com/YOUR_USERNAME/premium-color-enhancer.git
   ```

#### Option B: Via GitHub CLI (If you have `gh` installed)

```bash
cd /Users/bestway/Documents/npm/premium-color-enhancer
gh repo create premium-color-enhancer --public --source=. --remote=origin
```

---

### Step 2: Initialize Git in Your Project

```bash
# Navigate to your project
cd /Users/bestway/Documents/npm/premium-color-enhancer

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Premium Color Enhancer v1.0.0"
```

---

### Step 3: Connect to GitHub

```bash
# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git

# Verify remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 4: Update package.json with GitHub URL

Open `package.json` and update these fields:

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

---

### Step 5: Commit and Push Changes

```bash
# Add the updated package.json
git add package.json

# Commit
git commit -m "Update repository URLs in package.json"

# Push to GitHub
git push
```

---

## Complete Command Sequence

Copy and paste these commands (replace `YOUR_USERNAME` with your GitHub username):

```bash
# Navigate to project
cd /Users/bestway/Documents/npm/premium-color-enhancer

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: Premium Color Enhancer v1.0.0"

# Add GitHub remote (REPLACE YOUR_USERNAME!)
git remote add origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## After Publishing to GitHub

### 1. Verify on GitHub

Visit your repository:
```
https://github.com/YOUR_USERNAME/premium-color-enhancer
```

You should see:
- ✅ All your files
- ✅ README.md displayed
- ✅ License badge
- ✅ File structure

### 2. Add GitHub Badges to README

Add these at the top of your `README.md`:

```markdown
# Premium Color Enhancer 🎨

[![npm version](https://badge.fury.io/js/premium-color-enhancer.svg)](https://www.npmjs.com/package/premium-color-enhancer)
[![GitHub](https://img.shields.io/github/license/YOUR_USERNAME/premium-color-enhancer)](https://github.com/YOUR_USERNAME/premium-color-enhancer/blob/main/LICENSE)
[![npm downloads](https://img.shields.io/npm/dm/premium-color-enhancer.svg)](https://www.npmjs.com/package/premium-color-enhancer)
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/premium-color-enhancer?style=social)](https://github.com/YOUR_USERNAME/premium-color-enhancer)

A lightweight npm package that enhances colors...
```

### 3. Update npm Package

After updating package.json with GitHub URLs:

```bash
# Update version
npm version patch

# Publish to npm (with 2FA)
npm publish --otp=YOUR_CODE

# Push to GitHub
git push && git push --tags
```

---

## GitHub Repository Settings (Optional but Recommended)

### Add Topics

1. Go to your repo on GitHub
2. Click the gear icon next to "About"
3. Add topics:
   - `color`
   - `npm-package`
   - `javascript`
   - `accessibility`
   - `wcag`
   - `design-system`
   - `color-palette`

### Add Description

In the same "About" section:
- **Description:** `Enhance colors to make them clearer, more premium, and accessible`
- **Website:** `https://www.npmjs.com/package/premium-color-enhancer`

### Enable Issues

1. Go to Settings → Features
2. Make sure "Issues" is checked

### Add Branch Protection (Optional)

1. Go to Settings → Branches
2. Add rule for `main` branch
3. Recommended settings:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass

---

## Working with Git After Setup

### Making Changes

```bash
# Make your code changes

# Check what changed
git status

# Add changes
git add .

# Commit with message
git commit -m "Add new feature: color temperature adjustment"

# Push to GitHub
git push
```

### Creating a New Version

```bash
# Update version in package.json
npm version patch  # 1.0.0 → 1.0.1
# or
npm version minor  # 1.0.0 → 1.1.0
# or
npm version major  # 1.0.0 → 2.0.0

# This automatically creates a git commit and tag

# Publish to npm
npm publish --otp=YOUR_CODE

# Push to GitHub (including tags)
git push && git push --tags
```

### Viewing Your Repository

```bash
# Open in browser
open https://github.com/YOUR_USERNAME/premium-color-enhancer

# Or if you have GitHub CLI
gh repo view --web
```

---

## GitHub + npm Integration

Once both are set up, your npm package page will show:

- 🔗 Link to GitHub repository
- ⭐ GitHub stars count
- 📊 Repository statistics
- 🐛 Issues link
- 📝 README from GitHub

---

## Troubleshooting

### "Remote origin already exists"

```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git
```

### "Permission denied (publickey)"

**Option 1: Use HTTPS instead of SSH**
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git
```

**Option 2: Set up SSH keys**
- Follow: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

### "Repository not found"

- Make sure you created the repository on GitHub
- Check the URL is correct
- Make sure you're logged into GitHub

### "Failed to push"

```bash
# Pull first, then push
git pull origin main --rebase
git push
```

---

## Advanced: GitHub Actions for Auto-Publishing

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - run: npm ci
      - run: npm test
      - run: npm run build
      
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

**Setup:**
1. Create npm automation token
2. Add to GitHub Secrets (Settings → Secrets → Actions)
3. Name it `NPM_TOKEN`
4. Now creating a GitHub Release will auto-publish to npm!

---

## Quick Reference

### Initial Setup
```bash
cd /Users/bestway/Documents/npm/premium-color-enhancer
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/premium-color-enhancer.git
git push -u origin main
```

### Regular Updates
```bash
# Make changes
git add .
git commit -m "Your commit message"
git push
```

### Version Updates
```bash
npm version patch
npm publish --otp=YOUR_CODE
git push && git push --tags
```

### View Repository
```bash
# Open in browser
open https://github.com/YOUR_USERNAME/premium-color-enhancer
```

---

## Checklist

- [ ] Create GitHub repository
- [ ] Initialize git in project
- [ ] Add remote origin
- [ ] Push to GitHub
- [ ] Update package.json with GitHub URLs
- [ ] Add badges to README
- [ ] Add topics to repository
- [ ] Enable issues
- [ ] Test cloning the repository
- [ ] Share repository link

---

## Next Steps

1. ✅ Set up GitHub repository
2. ✅ Push your code
3. ✅ Update package.json
4. ✅ Publish to npm (with updated URLs)
5. ✅ Add badges to README
6. ✅ Share on social media
7. ✅ Monitor for issues and stars

---

## Resources

- GitHub Docs: https://docs.github.com/
- Git Basics: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- GitHub Actions: https://docs.github.com/en/actions
- npm + GitHub: https://docs.npmjs.com/using-two-factor-authentication

---

Good luck! 🚀 Your package will look professional on both npm and GitHub!
