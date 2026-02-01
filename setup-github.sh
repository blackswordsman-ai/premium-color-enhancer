#!/bin/bash

# GitHub Setup Script for Premium Color Enhancer
# This script helps you quickly set up GitHub for your npm package

echo "🎨 Premium Color Enhancer - GitHub Setup"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

# Get GitHub username
echo "📝 Please enter your GitHub username:"
read -r GITHUB_USERNAME

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ GitHub username cannot be empty"
    exit 1
fi

echo ""
echo "Great! Your GitHub username is: $GITHUB_USERNAME"
echo ""

# Confirm repository name
REPO_NAME="premium-color-enhancer"
echo "📦 Repository name will be: $REPO_NAME"
echo ""

# Ask if they've created the GitHub repository
echo "⚠️  IMPORTANT: Have you created the repository on GitHub?"
echo "   If not, go to: https://github.com/new"
echo "   - Repository name: $REPO_NAME"
echo "   - Visibility: Public"
echo "   - Do NOT initialize with README, .gitignore, or license"
echo ""
echo "Have you created the repository? (y/n)"
read -r CREATED_REPO

if [ "$CREATED_REPO" != "y" ] && [ "$CREATED_REPO" != "Y" ]; then
    echo ""
    echo "⏸️  Please create the repository first, then run this script again."
    echo "   Go to: https://github.com/new"
    exit 0
fi

echo ""
echo "🚀 Starting setup..."
echo ""

# Initialize git if not already done
if [ ! -d .git ]; then
    echo "📁 Initializing git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    echo ""
    echo "📝 Adding files to git..."
    git add .
    
    echo "💾 Creating initial commit..."
    git commit -m "Initial commit: Premium Color Enhancer v1.0.0"
    echo "✅ Initial commit created"
else
    echo "✅ No uncommitted changes"
fi

# Add remote
REPO_URL="https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
echo ""
echo "🔗 Adding GitHub remote..."

if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote 'origin' already exists. Updating..."
    git remote set-url origin "$REPO_URL"
else
    git remote add origin "$REPO_URL"
fi

echo "✅ Remote added: $REPO_URL"

# Set main branch
echo ""
echo "🌿 Setting main branch..."
git branch -M main
echo "✅ Main branch set"

# Push to GitHub
echo ""
echo "⬆️  Pushing to GitHub..."
if git push -u origin main; then
    echo "✅ Successfully pushed to GitHub!"
else
    echo "❌ Failed to push to GitHub"
    echo "   This might be because:"
    echo "   1. You haven't created the repository on GitHub yet"
    echo "   2. You need to authenticate with GitHub"
    echo "   3. The repository name is incorrect"
    echo ""
    echo "   Please check and try again manually:"
    echo "   git push -u origin main"
    exit 1
fi

# Update package.json
echo ""
echo "📝 Updating package.json with GitHub URLs..."

# Create a temporary file with updated URLs
if command -v jq &> /dev/null; then
    # Use jq if available
    jq --arg url "git+https://github.com/$GITHUB_USERNAME/$REPO_NAME.git" \
       --arg bugs "https://github.com/$GITHUB_USERNAME/$REPO_NAME/issues" \
       --arg homepage "https://github.com/$GITHUB_USERNAME/$REPO_NAME#readme" \
       '.repository.url = $url | .bugs.url = $bugs | .homepage = $homepage' \
       package.json > package.json.tmp && mv package.json.tmp package.json
    echo "✅ package.json updated with jq"
else
    # Manual update if jq not available
    echo "⚠️  jq not found. Please manually update package.json:"
    echo ""
    echo "  \"repository\": {"
    echo "    \"type\": \"git\","
    echo "    \"url\": \"git+https://github.com/$GITHUB_USERNAME/$REPO_NAME.git\""
    echo "  },"
    echo "  \"bugs\": {"
    echo "    \"url\": \"https://github.com/$GITHUB_USERNAME/$REPO_NAME/issues\""
    echo "  },"
    echo "  \"homepage\": \"https://github.com/$GITHUB_USERNAME/$REPO_NAME#readme\""
fi

# Commit package.json changes
if [ -n "$(git status --porcelain package.json)" ]; then
    echo ""
    echo "💾 Committing package.json changes..."
    git add package.json
    git commit -m "Update repository URLs in package.json"
    git push
    echo "✅ Changes pushed to GitHub"
fi

# Success message
echo ""
echo "========================================"
echo "🎉 GitHub setup complete!"
echo "========================================"
echo ""
echo "📍 Your repository is now live at:"
echo "   https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""
echo "📋 Next steps:"
echo "   1. Visit your repository and add topics"
echo "   2. Update your npm package:"
echo "      npm version patch"
echo "      npm publish --otp=YOUR_CODE"
echo "   3. Add badges to your README"
echo "   4. Share your repository!"
echo ""
echo "📚 For more details, see GITHUB_SETUP_GUIDE.md"
echo ""
