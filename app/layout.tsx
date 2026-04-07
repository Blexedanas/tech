import type { Metadata } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import CustomCursor from '@/components/ui/CustomCursor'
import NoiseOverlay from '@/components/ui/NoiseOverlay'
import Preloader from '@/components/ui/Preloader'

export const metadata: Metadata = {
    title: {
        default: 'Zerixa Tech — Delivering A Smart Future',
        template: '%s | Zerixa Tech',
    },
    description: 'Zerixa Tech is a premium digital agency in India specializing in Web Development, Mobile Apps, UI/UX Design, AI & ML, and IoT solutions. Delivering A Smart Future for every ambitious business.',
    keywords: ['digital agency', 'web development', 'mobile apps', 'UI/UX design', 'AI solutions', 'machine learning', 'IoT', 'software development', 'India', 'Surat'],
    authors: [{ name: 'Zerixa Tech' }],
    creator: 'Zerixa Tech',
    metadataBase: new URL('https://zerixatech.com'),
    openGraph: {
        title: 'Zerixa Tech — Delivering A Smart Future',
        description: 'Drive innovation in your business with Zerixa Tech premium digital solutions — Web, Mobile, AI & IoT.',
        url: 'https://zerixatech.com',
        siteName: 'Zerixa Tech',
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zerixa Tech — Delivering A Smart Future',
        description: 'Drive innovation in your business with Zerixa Tech premium digital solutions.',
        creator: '@zerixatech',
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: {
        icon: '/favicon-v2.png',
    },
}

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'

import ScrollRevealTracker from '@/components/ui/ScrollRevealTracker'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </head>
            <body className="antialiased bg-navy selection:bg-primary/30 relative min-h-screen noise">
                <Preloader />
                <ScrollRevealTracker />
                <SmoothScrollProvider>  
                    <NoiseOverlay />
                    <CustomCursor />
                    <Navbar />
                    <FloatingButtons />
                    <main>{children}</main>
                    <Footer />
                </SmoothScrollProvider>
            </body>
        </html>
    )
}
