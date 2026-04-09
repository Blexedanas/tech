import type { Metadata } from 'next'

import { Shield, Lock, Eye, Database, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Zerixa Tech privacy policy — how we collect, use, and protect your personal information.',
}

const sections = [
    {
        icon: Database,
        title: 'Information We Collect',
        content: `We collect information you voluntarily provide when contacting us, submitting project inquiries, or subscribing to our newsletter. This includes your name, email address, phone number, company name, and any project details you share.

We also automatically collect non-personal information including browser type, IP address, pages visited, and time spent on our website through standard web analytics tools (Google Analytics).`,
    },
    {
        icon: Eye,
        title: 'How We Use Your Information',
        content: `We use collected information to:
• Respond to your inquiries and project requests
• Provide quotes and service proposals
• Send project updates and status reports
• Improve our website and services
• Send occasional newsletters (only if you opt in)

We do not sell, trade, or rent your personal information to third parties.`,
    },
    {
        icon: Lock,
        title: 'Data Security',
        content: `We implement industry-standard security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data transmission is encrypted using SSL/TLS technology.

Our servers are hosted on reputable cloud providers (AWS/Google Cloud) with strict access controls. Only authorized team members have access to client data, exclusively for service delivery purposes.`,
    },
    {
        icon: Shield,
        title: 'Cookies',
        content: `Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.

We use:
• Essential cookies: required for site functionality
• Analytics cookies: help us understand how visitors use our site
• Preference cookies: remember your settings

You may disable cookies in your browser settings, though some site features may not function properly.`,
    },
]

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#0F172A]">
            {/* Header */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#F47C35]/6 rounded-full blur-[100px]" />
                </div>
                <div className="container-custom relative z-10 max-w-4xl">
                    <div className="badge-orange mb-4">⟹ Legal</div>
                    <h1 className="font-display font-extrabold text-5xl md:text-6xl text-white mb-4">
                        Privacy <span className="gradient-text">Policy</span>
                    </h1>
                    <p className="text-white/50 text-base">
                        Last updated: <span className="text-white/70">February 25, 2026</span>
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-20">
                <div className="container-custom max-w-4xl">
                    <div className="bg-[#1E293B]/50 border border-white/5 rounded-3xl p-8 mb-8">
                        <p className="text-white/60 leading-relaxed text-base">
                            At <span className="text-white font-semibold">Zerixa Tech</span>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {sections.map((section, i) => (
                            <div key={i} className="bg-[#1E293B] border border-white/5 rounded-2xl p-7">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#F47C35]/10 border border-[#F47C35]/20 flex items-center justify-center">
                                        <section.icon className="w-5 h-5 text-[#F47C35]" />
                                    </div>
                                    <h2 className="font-display font-bold text-xl text-white">{section.title}</h2>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="mt-8 bg-gradient-to-br from-[#F47C35]/10 to-transparent border border-[#F47C35]/20 rounded-2xl p-7">
                        <h2 className="font-display font-bold text-xl text-white mb-3">Contact Us About Privacy</h2>
                        <p className="text-white/50 text-sm mb-4">If you have questions about this Privacy Policy or how we handle your data, please contact us:</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                                <Mail className="w-4 h-4 text-[#F47C35]" />
                                <a href="mailto:prime@zerixatech.com" className="hover:text-white transition-colors">prime@zerixatech.com</a>
                            </div>
                            <div className="flex items-center gap-2 text-white/60 text-sm">
                                <MapPin className="w-4 h-4 text-[#F47C35]" />
                                <span>Surat, Gujarat, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
