# Publishing Guide - Premium Color Enhancer

This guide will walk you through publishing your npm package step by step.

## Prerequisites Checklist

Before publishing, make sure you have:

- [ ] Created an npm account at https://www.npmjs.com/
- [ ] Verified your email address
- [ ] Chosen a unique package name
- [ ] Updated package.json with your information
- [ ] All tests passing
- [ ] Build successful

## Step 1: Update Package Information

Edit `package.json` and update the following fields:

```json
{
  "name": "premium-color-enhancer",  // Change if name is taken
  "author": "Your Name <your.email@example.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/premium-color-enhancer.git"
  },
  "bugs": {
    "url": "https://github.com/yourusername/premium-color-enhancer/issues"
  },
  "homepage": "https://github.com/yourusername/premium-color-enhancer#readme"
}
```

## Step 2: Check Package Name Availability

```bash
# Search for your package name
npm search premium-color-enhancer

# If the name is taken, you have two options:
# 1. Choose a different name (e.g., "color-premium-enhancer")
# 2. Use a scoped package (e.g., "@yourusername/premium-color-enhancer")
```

### Using a Scoped Package

If you want to use a scoped package:

1. Update package.json:
```json
{
  "name": "@yourusername/premium-color-enhancer"
}
```

2. When publishing, use:
```bash
npm publish --access public
```

## Step 3: Login to npm

```bash
npm login
```

You'll be prompted for:
- Username
- Password
- Email (this must be a public email)

## Step 4: Verify Your Package

Before publishing, check what will be included:

```bash
# Dry run to see what files will be published
npm pack --dry-run

# This will show you all files that will be included
# Make sure no sensitive files are listed
```

## Step 5: Run Final Checks

```bash
# Make sure you're in the project directory
cd premium-color-enhancer

# Run tests
npm test

# Build the project
npm run build

# Check for any issues
npm run prepublishOnly
```

## Step 6: Publish Your Package

### First Time Publishing

```bash
# For regular packages
npm publish

# For scoped packages
npm publish --access public
```

### What Happens During Publishing

1. npm runs the `prepublishOnly` script (build + test)
2. Creates a tarball of your package
3. Uploads to npm registry
4. Package becomes available at https://www.npmjs.com/package/your-package-name

## Step 7: Verify Publication

```bash
# View your package info
npm view premium-color-enhancer

# Or visit the npm website
# https://www.npmjs.com/package/premium-color-enhancer
```

## Step 8: Test Installation

In a different directory, test installing your package:

```bash
mkdir test-install
cd test-install
npm init -y
npm install premium-color-enhancer

# Test it works
node -e "const pce = require('premium-color-enhancer'); console.log(pce.enhanceClarity('#3498db'))"
```

## Updating Your Package

When you need to publish updates:

### Version Bumping

```bash
# For bug fixes (1.0.0 -> 1.0.1)
npm version patch

# For new features (1.0.0 -> 1.1.0)
npm version minor

# For breaking changes (1.0.0 -> 2.0.0)
npm version major
```

This will:
1. Update version in package.json
2. Create a git commit
3. Create a git tag

### Publish the Update

```bash
# Push to git
git push && git push --tags

# Publish to npm
npm publish
```

## Common Issues and Solutions

### Issue: "You do not have permission to publish"

**Solution:** 
- Make sure you're logged in: `npm whoami`
- Check package name isn't taken
- For scoped packages, use `--access public`

### Issue: "Package name too similar to existing package"

**Solution:**
- Choose a different name
- Use a scoped package: `@username/package-name`

### Issue: "402 Payment Required"

**Solution:**
- This happens with private scoped packages
- Use `npm publish --access public` for free publishing

### Issue: "ENEEDAUTH"

**Solution:**
```bash
npm logout
npm login
```

## Post-Publishing Checklist

After successful publication:

- [ ] Visit your package page on npm
- [ ] Test installing in a fresh project
- [ ] Update README with installation instructions
- [ ] Add npm badge to README
- [ ] Share on social media / dev.to / Reddit
- [ ] Set up GitHub repository
- [ ] Add GitHub badges (version, downloads, license)
- [ ] Consider creating a demo website

## Adding Badges to README

Add these badges to your README.md:

```markdown
[![npm version](https://badge.fury.io/js/premium-color-enhancer.svg)](https://www.npmjs.com/package/premium-color-enhancer)
[![npm downloads](https://img.shields.io/npm/dm/premium-color-enhancer.svg)](https://www.npmjs.com/package/premium-color-enhancer)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```

## Unpublishing (Use with Caution)

If you need to unpublish within 72 hours:

```bash
# Unpublish a specific version
npm unpublish premium-color-enhancer@1.0.0

# Unpublish entire package (only within 72 hours)
npm unpublish premium-color-enhancer --force
```

**Warning:** Unpublishing is permanent and can break projects that depend on your package!

## Setting Up Automated Publishing with GitHub Actions

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
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## Getting Help

- npm documentation: https://docs.npmjs.com/
- npm support: https://www.npmjs.com/support
- npm community: https://npm.community/

## Next Steps

1. Set up GitHub repository
2. Add comprehensive documentation
3. Create examples and demos
4. Write blog post about your package
5. Share on social media
6. Respond to issues and PRs
7. Keep package updated

Good luck with your npm package! 🚀
