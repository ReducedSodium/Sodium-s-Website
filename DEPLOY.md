# Deploy to GitHub - Quick Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `sodiums-hangout` (or any name you like)
4. Description: "Sodium's Hangout - Personal website"
5. Choose **Public** (or Private if you prefer)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

## Step 2: Connect and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
cd c:\Users\alfre\website
git remote add origin https://github.com/YOUR_USERNAME/sodiums-hangout.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username!

## Step 3: Enable GitHub Pages (Optional)

To host your website for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **"main"** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/sodiums-hangout`

## Need Help?

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys

Let me know if you need help with any step!
