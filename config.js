// Configuration file for easy customization
// Edit these values to customize your website

const CONFIG = {
    // Brand Information
    brandName: "Sodium's Hangout",
    tagline: "Come hang out with us!",
    description: "Join the community on Twitch, YouTube, and Discord for gaming, content, and fun!",
    
    // Social Links - Add or modify your links here
    links: {
        twitch: {
            name: "Twitch",
            url: "https://www.twitch.tv/reduceyoursodium",
            icon: "🎮",
            enabled: true
        },
        youtube: {
            name: "YouTube",
            url: "https://www.youtube.com/@ReduceYourSodium",
            icon: "📺",
            enabled: true
        },
        discord: {
            name: "Discord",
            url: "https://discord.gg/HRx59qfHWk",
            icon: "💬",
            enabled: true
        },
        twitter: {
            name: "Twitter",
            url: "#",
            icon: "🐦",
            enabled: false  // Set to true to enable
        },
        instagram: {
            name: "Instagram",
            url: "#",
            icon: "📷",
            enabled: false  // Set to true to enable
        },
        tiktok: {
            name: "TikTok",
            url: "https://www.tiktok.com/@reduceyoursodium",
            icon: "🎵",
            enabled: true  // Set to true to enable
        }
    },
    
    // About Section Content
    about: {
        title: "About Me",
        description: "Hey there! I'm just a chill person who loves gaming and connecting with awesome people. Come hang out!",
        features: [
            {
                icon: "😎",
                title: "Super Chill",
                description: "I'm all about good vibes and having a relaxed time. No pressure, just fun conversations and great gaming sessions."
            },
            {
                icon: "👥",
                title: "Love Meeting People",
                description: "One of my favorite things is chatting with viewers and making new friends. Don't be shy - come say hi!"
            },
            {
                icon: "🎮",
                title: "Gaming Together",
                description: "Whether it's streaming on Twitch or posting videos on YouTube, I love sharing my gaming adventures with everyone."
            },
            {
                icon: "💬",
                title: "Always Open to Chat",
                description: "Hit me up on Discord anytime! I'm always down to talk about games, life, or just hang out and vibe together."
            }
        ]
    },
    
    // Custom Links Tab - Add your own custom links here
    customLinks: [
        {
            name: "Steam",
            url: "https://steamcommunity.com/profiles/76561198770013402/",
            icon: "🎮",
            description: "Check out my Steam profile"
        },
        {
            name: "My Portfolio",
            url: "#",
            icon: "🌟",
            description: "Check out my work"
        },
        {
            name: "Merch Store",
            url: "#",
            icon: "👕",
            description: "Get some swag"
        }
        // Add more custom links as needed
    ],
    
    // Contact Information
    contact: {
        title: "Get In Touch",
        description: "Have questions, suggestions, or just want to say hi? Join our Discord community!",
        primaryAction: {
            text: "Join Discord Server",
            url: "https://discord.gg/HRx59qfHWk"
        }
    },
    
    // Theme Colors (optional - advanced)
    theme: {
        primaryColor: "#60a5fa",
        primaryDark: "#3b82f6",
        backgroundColor: "#0a0e1a",
        cardColor: "#1e293b"
    }
};
