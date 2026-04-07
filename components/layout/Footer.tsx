'use client'

import Link from 'next/link'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react'

const footerLinks = {
    Services: [
        { name: 'Marketing', href: '/services/seo-services' },
        { name: 'Development', href: '/services/web-development' },
        { name: 'Branding', href: '/services/brand-identity' },
        { name: 'Paid Advertising', href: '/services/ppc-ads' },
    ],
    Company: [
        { name: 'About Us', href: '/about' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Careers', href: '/about#careers' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ],
}

const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/zerixa.tech/', label: 'Instagram' },
]

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-black/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple/3 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom pt-16 pb-28 md:py-16">
                {/* Top row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand — spans 2 cols */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                                Zerixa<span className="gradient-text shimmer-text"> Tech</span>
                            </span>
                        </Link>
                        <p className="text-slate-600 text-sm leading-relaxed mb-5 max-w-xs">
                            Delivering A Smart Future — websites, apps, and AI solutions that drive real growth.
                        </p>
                        <div className="flex gap-3 mb-6">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg bg-white border border-black/5 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-all duration-200 shadow-sm"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        {/* Mini contact */}
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-slate-600 text-sm">
                                <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                                <a href="mailto:hello@zerixatech.com" className="hover:text-primary transition-colors">hello@zerixatech.com</a>
                            </li>
                            <li className="flex items-center gap-2 text-slate-600 text-sm">
                                <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                                <a href="tel:+918079767676" className="hover:text-primary transition-colors">+91 80797 67676</a>
                            </li>
                            <li className="flex items-start gap-2 text-slate-600 text-sm">
                                <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                                <span>India (Global Remote Delivery)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Links columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-slate-900 font-bold text-xs mb-5 uppercase tracking-widest">{title}</h4>
                            <ul className="space-y-3">
                                {links.map((l) => (
                                    <li key={l.name}>
                                        <Link
                                            href={l.href}
                                            className="text-slate-500 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-1 group"
                                        >
                                            <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-primary" />
                                            {l.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Subscribe Form column */}
                    <div>
                        <h4 className="text-slate-900 font-bold text-xs mb-5 uppercase tracking-widest">Subscribe</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            Get the latest insights on digital growth and technology trends.
                        </p>
                        <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-white border border-black/10 rounded-lg px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                                Subscribe <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="h-px bg-slate-200 my-10" />
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-sm text-slate-500">
                    <span>© 2026 Zerixa Tech. All rights reserved. <br className="block sm:hidden" />Made with ❤️ by <a href="https://anasportfoliio.web.app" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-800 hover:text-primary transition-colors underline decoration-primary/30 underline-offset-2 whitespace-nowrap">Shaikh Anas</a></span>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
