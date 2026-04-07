'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Zap, Phone } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion, AnimatePresence } from 'framer-motion'

const serviceCategories = [
    {
        title: 'MARKETING',
        href: '/services',
        links: [
            { name: 'Best SEO Company', href: '/services/seo-services' },
            { name: 'SEO Services', href: '/services/seo-services' },
            { name: 'Local SEO', href: '/services/local-seo' },
            { name: 'Ecommerce SEO', href: '/services/ecommerce-seo' },
            { name: 'Amazon SEO', href: '/services/amazon-seo' },
            { name: 'Apps Marketing', href: '/services/apps-marketing' },
            { name: 'Organic Social', href: '/services/organic-social' },
        ]
    },
    {
        title: 'DEVELOPMENT',
        href: '/services',
        links: [
            { name: 'Web Development', href: '/services/web-development' },
            { name: 'App Development', href: '/services/app-development' },
            { name: 'Automation', href: '/services/automation' },
            { name: 'WordPress', href: '/services/wordpress' },
            { name: 'Shopify', href: '/services/shopify' },
            { name: 'Asp .Net', href: '/services/asp-net' },
        ]
    },
    {
        title: 'BRANDING',
        href: '/services',
        links: [
            { name: 'Brand Management', href: '/services/brand-management' },
            { name: 'Logo Design', href: '/services/logo-design' },
            { name: 'Packaging Design', href: '/services/packaging-design' },
            { name: 'Brand Identity', href: '/services/brand-identity' },
            { name: 'Graphic Design', href: '/services/graphic-design' },
            { name: 'Brand Guidelines', href: '/services/brand-guidelines' },
        ]
    },
    {
        title: 'PAID ADVERTISING',
        href: '/services',
        links: [
            { name: 'PPC Ads', href: '/services/ppc-ads' },
            { name: 'Meta Ads', href: '/services/meta-ads' },
            { name: 'Instagram Ads', href: '/services/instagram-ads' },
            { name: 'Ecommerce PPC', href: '/services/ecommerce-ppc' },
            { name: 'Bing Ads', href: '/services/bing-ads' },
            { name: 'Conversion Optimization', href: '/services/conversion-optimization' },
        ]
    }
]

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Estimate', href: '/estimate' },
    { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const [servicesOpen, setServicesOpen] = useState(false)
    const pathname = usePathname()

    const servicesRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // Click outside handler for dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setServicesOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => { setMobileOpen(false) }, [pathname])

    const isActive = (href: string) =>
        href === '/' ? pathname === '/' : pathname?.startsWith(href)

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-navy/80 backdrop-blur-xl border-b border-white/5 shadow-sm py-0'
                    : 'bg-transparent py-2'
                    }`}
            >
                <div className="container-custom">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                <Zap className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-display font-extrabold text-2xl tracking-tight text-slate-900">
                                Zerixa<span className="gradient-text shimmer-text"> Tech</span>
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group" ref={link.hasDropdown ? servicesRef : null}>
                                    {link.hasDropdown ? (
                                        <button
                                            onClick={() => setServicesOpen(!servicesOpen)}
                                            className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                                                ? 'text-primary'
                                                : 'text-slate-600 hover:text-primary'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                                            {isActive(link.href) && (
                                                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                                            )}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${isActive(link.href)
                                                ? 'text-primary'
                                                : 'text-slate-600 hover:text-primary'
                                                }`}
                                        >
                                            {link.name}
                                            {isActive(link.href) && (
                                                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                                            )}
                                        </Link>
                                    )}

                                    {link.hasDropdown && (
                                        <div
                                            className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white border border-black/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden transition-all duration-300 origin-top ${servicesOpen
                                                ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                                                : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                                                }`}
                                        >
                                            <div className="p-12 grid grid-cols-4 gap-0 bg-white relative z-50">
                                                {serviceCategories.map((category, idx) => (
                                                    <div 
                                                        key={category.title} 
                                                        className={`px-10 ${idx < serviceCategories.length - 1 ? 'border-r border-slate-100' : ''}`}
                                                    >
                                                        <Link 
                                                            href={category.href}
                                                            className="block font-display font-black text-[13px] text-[#0A66FF] tracking-widest uppercase mb-10 hover:opacity-70 transition-opacity"
                                                        >
                                                            {category.title}
                                                        </Link>
                                                        <ul className="space-y-5">
                                                            {category.links.map((s) => (
                                                                <li key={s.name}>
                                                                    <Link
                                                                        href={s.href}
                                                                        onClick={() => setServicesOpen(false)}
                                                                        className="block text-[14px] font-medium text-slate-500 hover:text-primary transition-colors duration-150"
                                                                    >
                                                                        {s.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <div className="bg-slate-50 p-6 border-t border-black/5 flex justify-center">
                                                <Link href="/services" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-colors">
                                                    View All Capabilities ⟹
                                                </Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <a
                                href="tel:+918079767676"
                                className="flex items-center gap-1.5 text-slate-500 hover:text-primary text-sm transition-colors"
                            >
                                <Phone className="w-3.5 h-3.5 text-primary" />
                                +91 80797 67676
                            </a>
                            <Magnetic>
                                <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
                                    Get Started
                                </Link>
                            </Magnetic>
                        </div>

                        <button
                            className="md:hidden p-2 rounded-xl bg-slate-100 text-slate-900"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] md:hidden bg-white/98 backdrop-blur-2xl flex flex-col justify-center p-8"
                    >
                        <button
                            className="absolute top-6 right-6 p-3 rounded-full bg-slate-100/50 border border-black/5 text-slate-900"
                            onClick={() => setMobileOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col gap-6 max-h-[60vh] overflow-y-auto pr-4">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.hasDropdown ? (
                                        <div className="space-y-4">
                                            <p className={`text-sm font-black uppercase tracking-widest text-slate-400 mb-2`}>
                                                <Link href={link.href} onClick={() => setMobileOpen(false)} className="hover:text-primary transition-colors">{link.name}</Link>
                                            </p>
                                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 pl-4">
                                                {serviceCategories.map(cat => (
                                                    <div key={cat.title} className="space-y-2">
                                                        <p className="text-[10px] font-black text-primary uppercase tracking-wider">{cat.title}</p>
                                                        {cat.links.slice(0, 3).map(s => (
                                                            <Link 
                                                                key={s.name} 
                                                                href={s.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block text-xs text-slate-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                                                            >
                                                                {s.name}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className={`text-4xl font-display font-extrabold transition-all ${isActive(link.href)
                                                ? 'gradient-text'
                                                : 'text-slate-400 hover:text-primary'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-16 pt-10 border-t border-black/5"
                        >
                            <p className="text-slate-400 text-xs uppercase tracking-widest mb-6">Connect With Us</p>
                            <div className="flex flex-col gap-4">
                                <a href="tel:+918079767676" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors text-lg">
                                    <Phone className="w-5 h-5 text-primary" /> +91 80797 67676
                                </a>
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="btn-primary justify-center py-4 text-center mt-4"
                                >
                                    Start Your Project
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
