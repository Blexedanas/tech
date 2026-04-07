export interface ServiceData {
    slug: string
    badge: string
    title: string
    subtitle: string
    color: string
    iconName: 'brain' | 'code' | 'globe' | 'smartphone' | 'palette' | 'cpu' | 'zap' | 'layers'
    description: string
    features: string[]
    benefits: { title: string; desc: string }[]
    tech: string[]
    process: { step: string; title: string; desc: string }[]
}

const commonProcess = [
    { step: '01', title: 'Consultation', desc: 'Deep dive into your business goals and market challenges.' },
    { step: '02', title: 'Strategy', desc: 'Data-driven roadmap designed for maximum ROI and performance.' },
    { step: '03', title: 'Execution', desc: 'Precision implementation using the latest tech and creative standards.' },
    { step: '04', title: 'Optimization', desc: 'Continuous testing and monitoring to scale your results.' },
]

export const servicesData: Record<string, ServiceData> = {
    // MARKETING
    'seo-services': {
        slug: 'seo-services',
        badge: 'Marketing',
        title: 'Rank #1 With',
        subtitle: 'Elite SEO',
        color: '#0A66FF',
        iconName: 'globe',
        description: 'Dominate search results and drive organic traffic that converts. Our SEO experts use data-driven strategies to boost your visibility and build lasting authority.',
        features: ['Global & Local SEO', 'Technical Audits', 'Keyword Strategy', 'Backlink Building', 'On-Page Optimization', 'Performance Tracking'],
        benefits: [
            { title: 'More Traffic', desc: 'Rank higher for the keywords that actually bring in customers, not just clicks.' },
            { title: 'Better ROI', desc: 'Organic traffic is the most cost-effective long-term growth channel for any business.' },
            { title: 'Brand Authority', desc: 'Consistent top rankings build trust and credibility in your industry.' },
        ],
        tech: ['Ahrefs', 'Semrush', 'Google Search Console', 'Screaming Frog', 'GA4'],
        process: commonProcess
    },
    'local-seo': {
        slug: 'local-seo',
        badge: 'Marketing',
        title: 'Win Your',
        subtitle: 'Local Market',
        color: '#0A66FF',
        iconName: 'globe',
        description: 'Be the first choice for customers in your area. We optimize your local presence to drive foot traffic and phone calls directly to your business.',
        features: ['GMB Optimization', 'Local Citations', 'Review Management', 'Geo-Targeted Keywords', 'Map Pack Strategy', 'Local Competitor Analysis'],
        benefits: [
            { title: 'Top of Maps', desc: 'Appear in the Google Map Pack where 44% of local clicks happen.' },
            { title: 'Drive Visits', desc: 'Turn online searches into physical store visits and local inquiries.' },
            { title: 'Local Trust', desc: 'Build a reputation as the go-to provider in your specific neighborhood.' },
        ],
        tech: ['Google Maps', 'BrightLocal', 'Yelp', 'Apple Maps', 'Bing Places'],
        process: commonProcess
    },
    // PAID ADVERTISING
    'ppc-ads': {
        slug: 'ppc-ads',
        badge: 'Paid Advertising',
        title: 'Instant Growth With',
        subtitle: 'Expert PPC',
        color: '#E8712C',
        iconName: 'zap',
        description: 'Stop wasting budget on clicks that don\'t convert. Our PPC campaigns are built for high ROI, targeting ready-to-buy users with precision.',
        features: ['Search Ads', 'Display Retargeting', 'Shopping Ads', 'Landing Page Optimization', 'Negative Keyword Management', 'A/B Ad Testing'],
        benefits: [
            { title: 'Fast Results', desc: 'Unlike SEO, PPC starts driving qualified leads the moment the campaign goes live.' },
            { title: 'Total Control', desc: 'Precise control over who sees your ads, when they see them, and how much you spend.' },
            { title: 'Data Driven', desc: 'Every penny is tracked. We optimize continuously based on real-time conversion data.' },
        ],
        tech: ['Google Ads', 'Meta Business Suite', 'LinkedIn Ads', 'Microsoft Advertising'],
        process: commonProcess
    },
    'meta-ads': {
        slug: 'meta-ads',
        badge: 'Paid Advertising',
        title: 'Target Better With',
        subtitle: 'Meta Ads',
        color: '#E8712C',
        iconName: 'smartphone',
        description: 'Reach your target audience where they spend their time. From Facebook Feed to Instagram Reels, we create high-converting social campaigns.',
        features: ['Lookalike Audiences', 'Retargeting Funnels', 'Creative Strategy', 'Reels & Stories Ads', 'Pixel Integration', 'CAPI Setup'],
        benefits: [
            { title: 'Social Proof', desc: 'Build brand awareness and social credibility while driving sales simultaneously.' },
            { title: 'Deep Targeting', desc: 'Niche down to specific interests, behaviors, and life events of your ideal customer.' },
            { title: 'Visual Impact', desc: 'Use high-impact video and image creative to stop the scroll and capture attention.' },
        ],
        tech: ['FB Pixel', 'CAPI', 'Meta Creative Center', 'Canva Pro', 'CapCut'],
        process: commonProcess
    },
    // DEVELOPMENT
    'web-development': {
        slug: 'web-development',
        badge: 'Development',
        title: 'Future-Proof Your',
        subtitle: 'Digital Empire',
        color: '#00D1FF',
        iconName: 'code',
        description: 'High-performance websites built for the modern web. We use React and Next.js to deliver lightning-fast experiences that rank and convert.',
        features: ['Full-Stack Development', 'React / Next.js', 'Custom API Integration', 'UI/UX Implementation', 'Performance Tuning', 'Cloud Deployment'],
        benefits: [
            { title: 'Speed is King', desc: 'Websites that load in under 2 seconds for better SEO and user retention.' },
            { title: 'Secure & Stable', desc: 'Built with industry-standard security and scalable cloud architecture.' },
            { title: 'Easy Management', desc: 'Intuitive CMS solutions so you can manage your content without coding.' },
        ],
        tech: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Tailwind', 'MongoDB'],
        process: commonProcess
    },
    'shopify': {
        slug: 'shopify',
        badge: 'Development',
        title: 'Scale Fast With',
        subtitle: 'Shopify Expert',
        color: '#00D1FF',
        iconName: 'cpu',
        description: 'Launch your dream store with a professional Shopify setup. We handle everything from custom themes to complex app integrations.',
        features: ['Custom Theme Design', 'Liquid Code Tweaks', 'App Integration', 'Speed Optimization', 'Migration Services', 'Inventory Sync'],
        benefits: [
            { title: 'Commerce Ready', desc: 'Proven checkout flows designed to maximize your average order value.' },
            { title: 'Scalable Growth', desc: 'Handle thousands of orders without worrying about server crashes.' },
            { title: 'Mobile First', desc: 'Perfect shopping experience on every device, from mobile to desktop.' },
        ],
        tech: ['Shopify', 'Liquid', 'Klaviyo', 'Recharge', 'Printful'],
        process: commonProcess
    },
    // BRANDING
    'logo-design': {
        slug: 'logo-design',
        badge: 'Branding',
        title: 'Iconic Identity',
        subtitle: 'Brilliant Logo',
        color: '#A020F0',
        iconName: 'palette',
        description: 'Your logo is the face of your business. We design unique, memorable symbols that represent your values and captivate your audience.',
        features: ['Custom Concepts', 'Color Psychology', 'Typography Design', 'Vector Deliverables', 'Style Variations', 'Brand Resonance'],
        benefits: [
            { title: 'First Impression', desc: 'A professional logo tells customers you are a serious and trust-worthy brand.' },
            { title: 'Uniquely Yours', desc: 'Stand out from competitors with a symbol that is entirely original.' },
            { title: 'Versatility', desc: 'Scalable designs that look great on everything from business cards to billboards.' },
        ],
        tech: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Sketch'],
        process: commonProcess
    },
    'brand-identity': {
        slug: 'brand-identity',
        badge: 'Branding',
        title: 'Holistic Impact',
        subtitle: 'Total Brand',
        color: '#A020F0',
        iconName: 'palette',
        description: 'Beyond a logo. We build a complete visual and verbal identity system that ensures your brand is consistent across every single touchpoint.',
        features: ['Brand Guidelines', 'Brand Voice', 'Asset Libraries', 'Social Templates', 'Stationery Design', 'Packaging Concepts'],
        benefits: [
            { title: 'Consistency', desc: 'Ensure your brand looks and feels the same whether on a website or a package.' },
            { title: 'Emotional Hook', desc: 'Build an emotional connection with your audience through cohesive storytelling.' },
            { title: 'Market Value', desc: 'Well-branded businesses commands higher prices and more customer loyalty.' },
        ],
        tech: ['Brand Book', 'Canva Brand Kit', 'Adobe Creative Cloud', 'Figma'],
        process: commonProcess
    },
    // MORE SLUGS ADDED FOR STATIC EXPORT COVERAGE
    'ecommerce-seo': { slug: 'ecommerce-seo', badge: 'Marketing', title: 'Sell More With', subtitle: 'Ecommerce SEO', color: '#0A66FF', iconName: 'globe', description: 'Drive ready-to-buy traffic to your store with targeted eCommerce SEO strategies.', features: ['Category Optimization', 'Product Schema Markup', 'Technical SEO Audits', 'Site Speed Tuning', 'Content Strategy', 'Link Building'], benefits: [{ title: 'More Sales', desc: 'Rank for high-intent keywords that bring buyers directly to your product pages.' }, { title: 'Lower CAC', desc: 'Reduce reliance on paid ads by building a sustainable organic traffic pipeline.' }, { title: 'Brand Trust', desc: 'Top organic rankings instantly position your store as an industry authority.' }], tech: ['Shopify SEO', 'WooCommerce', 'Ahrefs', 'Screaming Frog'], process: commonProcess },
    'amazon-seo': { slug: 'amazon-seo', badge: 'Marketing', title: 'Dominate The', subtitle: 'Amazon Market', color: '#0A66FF', iconName: 'globe', description: 'Optimize your listings for the world\'s largest marketplace and outrank competitors.', features: ['Keyword Research', 'Listing Optimization', 'A+ Content Design', 'Competitor Analysis', 'Review Management', 'PPC Synergy'], benefits: [{ title: 'Higher Velocity', desc: 'Get more sales per click with highly optimized, conversion-ready listings.' }, { title: 'Win the Buy Box', desc: 'Strategic pricing and SEO tactics to help you secure the top spot.' }, { title: 'Global Reach', desc: 'Tap into Amazon\'s massive built-in audience without wasting ad spend.' }], tech: ['Helium 10', 'Jungle Scout', 'Keepa'], process: commonProcess },
    'apps-marketing': { slug: 'apps-marketing', badge: 'Marketing', title: 'Top Ranked', subtitle: 'App Marketing', color: '#0A66FF', iconName: 'smartphone', description: 'Boost your app store rankings, drive installs, and retain users with data-backed marketing.', features: ['ASO (App Store Optimization)', 'Paid User Acquisition', 'Influencer Outreach', 'Retention Strategies', 'In-App Analytics', 'A/B Testing Assets'], benefits: [{ title: 'More Installs', desc: 'Reach more users organically through top-tier App Store and Google Play rankings.' }, { title: 'Higher Retention', desc: 'Attract high-LTV users who stick around, engage, and make in-app purchases.' }, { title: 'Lower CPI', desc: 'Optimize your funnel to minimize the Cost Per Install across all networks.' }], tech: ['App Radar', 'Sensor Tower', 'Adjust', 'AppsFlyer'], process: commonProcess },
    'organic-social': { slug: 'organic-social', badge: 'Marketing', title: 'Engage More', subtitle: 'Organic Social', color: '#0A66FF', iconName: 'smartphone', description: 'Build a community around your brand with authentic, high-quality organic social media content.', features: ['Content Strategy', 'Community Management', 'Video Production', 'Trend Hopping', 'Influencer Collabs', 'Analytics & Reporting'], benefits: [{ title: 'Loyal Fans', desc: 'Build a base of true fans who advocate for your brand and buy repeatedly.' }, { title: 'Authentic Voice', desc: 'Humanize your company and connect with your audience on a personal level.' }, { title: 'Viral Potential', desc: 'Leverage algorithms like TikTok and Reels to reach millions for free.' }], tech: ['Buffer', 'Hootsuite', 'Sprout Social', 'CapCut'], process: commonProcess },
    'instagram-ads': { slug: 'instagram-ads', badge: 'Paid Advertising', title: 'Visual Impact', subtitle: 'Instagram Ads', color: '#E8712C', iconName: 'smartphone', description: 'High-converting visual ads for Instagram designed to capture attention and drive sales.', features: ['Reels Commercials', 'Story Ads', 'Carousel Ads', 'Influencer Whitelisting', 'Dynamic Product Ads', 'Retargeting Setup'], benefits: [{ title: 'High Engagement', desc: 'Visual storytelling at its best, capturing users where they are most attentive.' }, { title: 'Instant Sales', desc: 'Direct seamless shopping experiences from feed to checkout.' }, { title: 'Precise Targeting', desc: 'Leverage Meta\'s powerful AI to find users exactly like your best customers.' }], tech: ['Instagram Creator', 'Meta Ads', 'CAPI'], process: commonProcess },
    'ecommerce-ppc': { slug: 'ecommerce-ppc', badge: 'Paid Advertising', title: 'Direct Sales', subtitle: 'Ecommerce PPC', color: '#E8712C', iconName: 'zap', description: 'Profit-focused PPC for your online store, maximizing your Return on Ad Spend (ROAS).', features: ['Google Shopping', 'Performance Max', 'Dynamic Retargeting', 'Feed Optimization', 'ROAS Bidding', 'Competitor Conquesting'], benefits: [{ title: 'Fast ROI', desc: 'Drive sales immediately by appearing right when a user searches for your product.' }, { title: 'Scalable Growth', desc: 'Once we find a profitable CPA, we scale the budget seamlessly to multiply revenue.' }, { title: 'Data Insight', desc: 'Learn exactly which products and demographics yield the highest lifetime value.' }], tech: ['Google Ads', 'Merchant Center', 'Channable'], process: commonProcess },
    'bing-ads': { slug: 'bing-ads', badge: 'Paid Advertising', title: 'Alternate Outreach', subtitle: 'Bing Ads', color: '#E8712C', iconName: 'zap', description: 'Reach a high-value audience on the Microsoft Search Network with lower competition.', features: ['Search Campaigns', 'Microsoft Shopping', 'Audience Network', 'Import from Google', 'Automated Bidding', 'Local Targeting'], benefits: [{ title: 'Lower CPC', desc: 'Take advantage of less competition for significantly cheaper clicks than Google.' }, { title: 'Older Demographic', desc: 'Reach a generally more mature audience with higher average household income.' }, { title: 'Easy Integration', desc: 'We seamlessly mirror your winning Google Ads campaigns directly into Bing.' }], tech: ['Microsoft Advertising', 'Bing Webmaster'], process: commonProcess },
    'conversion-optimization': { slug: 'conversion-optimization', badge: 'Paid Advertising', title: 'Sell Smarter', subtitle: 'Conversion CRO', color: '#E8712C', iconName: 'zap', description: 'Optimize your sales funnel to turn more of your current traffic into paying customers.', features: ['A/B Testing', 'Heatmap Analysis', 'User Session Recording', 'Checkout Optimization', 'Form Simplification', 'Copy Tweaks'], benefits: [{ title: 'Better Results', desc: 'Get more out of the traffic you already have without spending a dime more on ads.' }, { title: 'Frictionless UX', desc: 'Remove user frustrations so customers can buy easily and efficiently.' }, { title: 'Data-Backed UX', desc: 'Stop guessing. Every design change is backed by real human behavior data.' }], tech: ['Hotjar', 'Google Optimize', 'VWO', 'CrazyEgg'], process: commonProcess },
    'wordpress': { slug: 'wordpress', badge: 'Development', title: 'Power Your Site', subtitle: 'WordPress Dev', color: '#00D1FF', iconName: 'code', description: 'Custom, blazing-fast WordPress sites that are easy to manage and built to rank.', features: ['Custom Theme Dev', 'Advanced Custom Fields', 'Plugin Development', 'Speed Optimization', 'Security Hardening', 'WooCommerce Integration'], benefits: [{ title: 'Scalable', desc: 'Grows with your business from a simple blog to an enterprise portal.' }, { title: 'Full Ownership', desc: 'You own exactly the codebase and data structure with no platform lock-in.' }, { title: 'Easy Updates', desc: 'We build an intuitive backend so you can update content without breaking the site.' }], tech: ['PHP', 'MySQL', 'WordPress', 'Gutenberg'], process: commonProcess },
    'app-development': {
        slug: 'app-development',
        badge: 'Development',
        title: 'Build Your Next',
        subtitle: 'Mobile Experience',
        color: '#00D1FF',
        iconName: 'smartphone',
        description: 'Native and cross-platform mobile applications tailored for iOS and Android ecosystems. We build high-performance apps with deep integration and fluid UX.',
        features: ['iOS & Android Apps', 'React Native / Flutter', 'Push Notifications', 'API Integration', 'App Store Optimization', 'Security Hardening'],
        benefits: [
            { title: 'Market Reach', desc: 'Reach your customers exactly where they are—on their mobile devices with a native feel.' },
            { title: 'Offline Ready', desc: 'Powerful apps that work seamlessly even with limited or no internet connectivity.' },
            { title: 'Deep Integration', desc: 'Leverage device hardware like GPS, Camera, and Biometrics for a superior experience.' },
        ],
        tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
        process: commonProcess
    },
    'automation': {
        slug: 'automation',
        badge: 'Development',
        title: 'Scale High With',
        subtitle: 'Smart Automation',
        color: '#0066FF',
        iconName: 'zap',
        description: 'Eliminate repetitive tasks and streamline your operations with custom-built automation workflows and AI-driven logic.',
        features: ['Custom AI Agents', 'Workflow Automation', 'Zapier / Make Syncing', 'ERP/CRM Integration', 'Data Scraping', 'Auto-Reporting'],
        benefits: [
            { title: 'Save Time', desc: 'Automate hours of manual data entry and repetitive tasks into seconds of background logic.' },
            { title: 'Error-Free', desc: 'Human errors are eliminated with precise, rule-based digital workflows.' },
            { title: 'Cost Reduction', desc: 'Lower your operational overhead by letting code handle the mundane heavy lifting.' },
        ],
        tech: ['Python', 'OpenAI', 'Zapier', 'Make.com', 'Node.js'],
        process: commonProcess
    },
    'asp-net': { slug: 'asp-net', badge: 'Development', title: 'Secure Enterprise', subtitle: 'Asp .Net Dev', color: '#00D1FF', iconName: 'brain', description: 'Secure, Microsoft-backed dynamic web applications and services for massive scale.', features: ['Microservices Architecture', 'Azure Cloud Integration', 'Enterprise APIs', 'Active Directory Auth', 'Legacy Migration', 'DevOps CI/CD'], benefits: [{ title: 'Bank-Grade Security', desc: 'Built-in security protocols favored by governments and large corporations.' }, { title: 'Cross-Platform', desc: 'Deploy anywhere—Windows, Linux, or macOS—with the power of .NET Core.' }, { title: 'High Availability', desc: 'Designed for enterprise environments requiring 99.99% uptime.' }], tech: ['.Net Core', 'C#', 'SQL Server', 'Azure'], process: commonProcess },
    'brand-management': { slug: 'brand-management', badge: 'Branding', title: 'Elevate Your', subtitle: 'Brand Strategy', color: '#A020F0', iconName: 'palette', description: 'Professional management of your brand reputation, market positioning, and ongoing growth.', features: ['Reputation Management', 'Market Positioning', 'Brand Audits', 'PR Strategy', 'Competitor Tracking', 'Growth Planning'], benefits: [{ title: 'Better Perception', desc: 'Control how the world sees you and build a premium market sentiment.' }, { title: 'Crisis Aversion', desc: 'Proactively manage reviews and PR to maintain an impeccable image.' }, { title: 'Cohesion', desc: 'Ensure every department and ad campaign stays true to your core message.' }], tech: ['Brand Book', 'Analytics', 'Meltwater'], process: commonProcess },
    'packaging-design': { slug: 'packaging-design', badge: 'Branding', title: 'Unbox Quality', subtitle: 'Packaging Design', color: '#A020F0', iconName: 'palette', description: 'Custom structural and graphic packaging design that jumps off the physical and digital shelf.', features: ['Structural Design', 'Label Graphics', 'Eco-friendly Solutions', '3D Prototypes', 'Print-Ready Files', 'Supplier Sourcing Consult'], benefits: [{ title: 'The Wow Factor', desc: 'Create an unboxing experience that customers immediately want to share on social media.' }, { title: 'Shelf Presence', desc: 'Stand out from competitors in retail environments with striking silhouettes and colors.' }, { title: 'Brand Tactility', desc: 'Translate your digital brand values into physical materials and textures.' }], tech: ['Illustrator', 'Dimension', 'Blender', 'Pantone'], process: commonProcess },
    'graphic-design': { slug: 'graphic-design', badge: 'Branding', title: 'Visual Impact', subtitle: 'Graphic Design', color: '#A020F0', iconName: 'palette', description: 'Premium graphics, illustrations, and layouts for all your digital and physical marketing needs.', features: ['Social Media Kits', 'Ad Creative', 'Brochures & Print', 'Infographics', 'Custom Illustrations', 'Presentation Decks'], benefits: [{ title: 'Engaging Content', desc: 'Capture attention instantly in crowded feeds with stunning visuals.' }, { title: 'Professionalism', desc: 'High-quality graphics elevate the perceived value of your products immediately.' }, { title: 'Fast Turnaround', desc: 'We deliver pixel-perfect assets quickly so your marketing never slows down.' }], tech: ['Photoshop', 'Illustrator', 'InDesign', 'Figma'], process: commonProcess },
    'brand-guidelines': { slug: 'brand-guidelines', badge: 'Branding', title: 'Stay Consistent', subtitle: 'Brand Guidelines', color: '#A020F0', iconName: 'palette', description: 'Comprehensive rulebooks for your brand’s visual identity and verbal tone of voice.', features: ['Logo Usage Rules', 'Typography systems', 'Color Palettes', 'Tone of Voice Guide', 'Photography Moodboards', 'UI Asset Library'], benefits: [{ title: 'Total Consistency', desc: 'Ensure your brand looks cohesive whether produced by an agency or a new intern.' }, { title: 'Faster Onboarding', desc: 'Speed up new marketing hires and external partners with a clear source of truth.' }, { title: 'Brand Value', desc: 'Consistency over time builds deep brand equity and recognition.' }], tech: ['Figma', 'InDesign', 'Frontify'], process: commonProcess },
}

// Fallback for all other sub-services until individual data is added
export const getServiceBySlug = (slug: string): ServiceData | null => {
    if (servicesData[slug]) return servicesData[slug]
    
    // Attempt to generate a decent generic view for missing slugs
    const titleParts = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    const title = titleParts.join(' ')
    
    return {
        slug,
        badge: 'Zerixa Specialization',
        title: 'Elite Excellence In',
        subtitle: title,
        color: '#0A66FF',
        iconName: 'zap',
        description: `We provide comprehensive, high-quality solutions for ${title}, ensuring your business stays ahead of the competition with modern technology and expert strategies.`,
        features: [`Premium ${title} Strategy`, 'Performance Monitoring', 'Custom Implementation', 'Expert Consulting'],
        benefits: [
            { title: 'Result Focused', desc: 'Everything we do is geared towards your bottom line and commercial success.' },
            { title: 'Expert Team', desc: 'Your project is handled by specialists with years of industry experience.' },
        ],
        tech: ['Modern Stack', 'Industry Tools'],
        process: commonProcess
    }
}
