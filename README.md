# Sodium's Hangout - Customizable Website

A modern, tabbed website template perfect for content creators, streamers, and communities. Easily customizable through a simple config file.

## 🎨 Features

- **Tabbed Interface** - Clean navigation with Home, Links, About, and More tabs
- **Easy Customization** - Edit everything through `config.js`
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Chill Aesthetic** - Modern blue/black theme with smooth animations
- **Dynamic Content** - Links and content generated from config file

## 🚀 Quick Start

1. **Open `config.js`** - This is where you customize everything
2. **Edit your links** - Add/remove social media links
3. **Customize content** - Update text, descriptions, and features
4. **Open `index.html`** - View your website locally

## 📝 Customization Guide

### Editing Links

In `config.js`, find the `links` object:

```javascript
links: {
    twitch: {
        name: "Twitch",
        url: "https://www.twitch.tv/reduceyoursodium",
        icon: "🎮",
        enabled: true  // Set to false to hide
    },
    // Add more links...
}
```

**To add a new link:**
1. Copy an existing link object
2. Change the name, URL, and icon
3. Set `enabled: true`

**To disable a link:**
- Set `enabled: false`

### Adding Custom Links

In the `customLinks` array, add your own links:

```javascript
customLinks: [
    {
        name: "My Portfolio",
        url: "https://example.com",
        icon: "🌟",
        description: "Check out my work"
    }
]
```

### Changing Brand Name

```javascript
brandName: "Your Brand Name",
tagline: "Your Tagline",
description: "Your description here"
```

### Updating About Section

Edit the `about.features` array to change the feature cards:

```javascript
features: [
    {
        icon: "🎮",
        title: "Your Title",
        description: "Your description"
    }
]
```

## 🌐 Free Hosting Options

Here are the best free hosting options for your website:

### 1. **GitHub Pages** (Recommended)
- **Free**: Yes, completely free
- **Setup**: Very easy
- **Custom Domain**: Yes (free)
- **HTTPS**: Yes
- **How to deploy**:
  1. Create a GitHub account
  2. Create a new repository
  3. Upload your website files
  4. Go to Settings → Pages
  5. Select main branch and save
  6. Your site will be live at `username.github.io/repository-name`

**Pros**: Free, reliable, custom domain support, HTTPS
**Cons**: Requires Git knowledge (but tutorials are easy to find)

### 2. **Netlify**
- **Free**: Yes
- **Setup**: Drag and drop or Git
- **Custom Domain**: Yes
- **HTTPS**: Yes
- **How to deploy**:
  1. Go to [netlify.com](https://netlify.com)
  2. Sign up for free
  3. Drag and drop your website folder
  4. Done! Your site is live instantly

**Pros**: Easiest setup, instant deployment, great performance
**Cons**: Free tier has some limits (but plenty for personal sites)

### 3. **Vercel**
- **Free**: Yes
- **Setup**: Very easy
- **Custom Domain**: Yes
- **HTTPS**: Yes
- **How to deploy**:
  1. Go to [vercel.com](https://vercel.com)
  2. Sign up with GitHub
  3. Import your repository
  4. Deploy automatically

**Pros**: Fast, great for static sites, automatic deployments
**Cons**: Requires Git repository

### 4. **Cloudflare Pages**
- **Free**: Yes
- **Setup**: Easy
- **Custom Domain**: Yes
- **HTTPS**: Yes
- **How to deploy**:
  1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
  2. Connect your Git repository
  3. Deploy automatically

**Pros**: Fast CDN, unlimited bandwidth, great performance
**Cons**: Requires Git repository

### 5. **Firebase Hosting**
- **Free**: Yes (with limits)
- **Setup**: Moderate
- **Custom Domain**: Yes
- **HTTPS**: Yes
- **How to deploy**:
  1. Install Firebase CLI
  2. Run `firebase init`
  3. Run `firebase deploy`

**Pros**: Google infrastructure, reliable
**Cons**: Requires command line knowledge

## 🎯 Recommended: GitHub Pages + Netlify

**For beginners**: Use **Netlify** - just drag and drop your folder!

**For more control**: Use **GitHub Pages** - free hosting with version control.

## 📁 File Structure

```
website/
├── index.html      # Main HTML file
├── styles.css      # All styles
├── script.js       # JavaScript functionality
├── config.js       # ⭐ EDIT THIS FILE TO CUSTOMIZE
├── hero-image.png  # Your hero image
└── README.md       # This file
```

## 🎨 Customization Tips

1. **Icons**: Use emojis for icons (🎮 📺 💬) or replace with Font Awesome icons
2. **Colors**: Edit CSS variables in `styles.css` if you want different colors
3. **Images**: Replace `hero-image.png` with your own image
4. **Content**: All text content is in `config.js` for easy editing

## 🔧 Advanced Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #60a5fa;  /* Main blue */
    --primary-dark: #3b82f6;   /* Darker blue */
    --bg-white: #0a0e1a;       /* Background */
    --bg-card: #1e293b;        /* Card background */
}
```

### Adding More Tabs

1. Add a new section in `index.html`
2. Add a nav link
3. Update the tab switching logic in `script.js`

## 📱 Mobile Responsive

The website is fully responsive and works great on:
- Desktop computers
- Tablets
- Mobile phones

## 🆘 Troubleshooting

**Links not showing?**
- Check `config.js` - make sure `enabled: true` and URL is correct

**Images not loading?**
- Make sure `hero-image.png` is in the same folder as `index.html`

**Tabs not working?**
- Check browser console for errors
- Make sure `config.js` and `script.js` are loaded

## 📄 License

Feel free to use this template for your own projects!

## 🙏 Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Design: Modern, chill aesthetic

---

**Need help?** Check the hosting provider's documentation or search for tutorials online. Most hosting is free and takes just a few minutes to set up!
