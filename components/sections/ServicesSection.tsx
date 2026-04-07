'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Code2, Smartphone, Globe, Layers, PenTool, Bot, ArrowRight, CheckCircle2, Zap, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import ServiceOrb from '@/components/ui/ServiceOrb'

const services = [
    {
        id: 'web',
        title: 'Website Development',
        desc: 'High-converting, responsive websites engineered with modern frameworks and SEO best practices.',
        icon: Globe,
        orbType: 'web' as const,
        features: ['1–3 Pages (Basic)', 'Next.js / React', 'WhatsApp Integration', 'Speed Optimization'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        iconImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 'app',
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications tailored for iOS and Android ecosystems.',
        icon: Smartphone,
        orbType: 'marketing' as const,
        features: ['Android & iOS Apps', 'Push Notifications', 'API Integration', 'Custom UI/UX'],
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop',
        iconImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 'marketing',
        title: 'Digital Marketing',
        desc: 'Boost your brand awareness and sales with data-driven social media and search campaigns.',
        icon: Bot,
        orbType: 'ai' as const,
        features: ['Social Media Growth', 'SEO Strategy', 'Content Marketing', 'Ad Campaigns'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
        iconImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 'amc',
        title: 'Maintenance (AMC)',
        desc: 'Reliable security updates, performance monitoring, and priority support for your peace of mind.',
        icon: Layers,
        orbType: 'cloud' as const,
        features: ['Security Updates', 'Monthly Backups', 'Performance Monitoring', 'Priority Support'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2670&auto=format&fit=crop',
        iconImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop'
    },
]

function ServicesShowcase() {
    const [active, setActive] = useState(0)
    const [progress, setProgress] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const INTERVAL_MS = 6000
    const UPDATE_MS = 10

    useEffect(() => {
        if (isPaused) return

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    setActive(curr => (curr + 1) % services.length)
                    return 0
                }
                return prev + (UPDATE_MS / INTERVAL_MS) * 100
            })
        }, UPDATE_MS)

        return () => clearInterval(timer)
    }, [isPaused, active])

    const handleManualSelect = (index: number) => {
        setActive(index)
        setProgress(0)
    }

    const featured = services[active]

    return (
        <div 
            className="flex flex-col lg:flex-row gap-8 py-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Featured Spotlight Card */}
            <div className="w-full lg:w-5/12 bg-slate-50 border border-black/5 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />

                <div className="relative z-10 flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="h-full flex flex-col justify-center"
                        >
                            {/* Agency Interactive Image Embed */}
                            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 border border-black/5 group">
                                <Image
                                    src={featured.image}
                                    alt={featured.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>

                            <div className="w-20 h-20 rounded-2xl bg-white border border-black/5 flex items-center justify-center mb-8 overflow-hidden shadow-sm relative group/icon">
                                <Image
                                    src={featured.iconImage}
                                    alt={featured.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                            </div>

                            <h3 className="font-display font-bold text-3xl md:text-4xl text-slate-900 mb-4">
                                {featured.title}
                            </h3>
                            <p className="text-slate-600 text-base md:text-lg mb-10 leading-relaxed max-w-md font-medium">
                                {featured.desc}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {featured.features.map((feature: string) => (
                                    <li key={feature} className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto pt-6 border-t border-black/5">
                                <div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden mb-6">
                                    <motion.div 
                                        className="h-full bg-primary"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ ease: "linear", duration: 0.1 }}
                                    />
                                </div>
                                <Link href={`/services/${featured.id}`} className="inline-flex items-center gap-2 text-slate-900 font-bold group/link">
                                    <span className="border-b-2 border-primary pb-0.5 group-hover/link:text-primary transition-colors">Explore Service</span>
                                    <ArrowRight className="w-4 h-4 text-primary group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Grid of Other Services */}
            <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {services.map((s, i) => (
                    <button
                        key={s.title}
                         onClick={() => handleManualSelect(i)}
                        className={`relative text-left rounded-2xl p-6 transition-all duration-300 border overflow-hidden group ${active === i
                            ? 'bg-white border-primary/20 shadow-xl'
                            : 'bg-white border-black/5 hover:border-primary/20 hover:shadow-lg'
                            }`}
                    >
                        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                            <Image
                                src={s.image}
                                alt={s.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="relative z-10 flex items-start gap-4">
                            <div className={`mt-1 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors overflow-hidden relative ${active === i ? 'bg-primary/10' : 'bg-slate-50'}`}>
                                <Image
                                    src={s.iconImage}
                                    alt={s.title}
                                    fill
                                    className="object-cover"
                                />
                                {active === i && (
                                    <div className="absolute bottom-0 left-0 h-1 bg-primary w-full" />
                                )}
                            </div>
                            <div>
                                <h4 className={`font-display font-bold text-lg mb-2 transition-colors ${active === i ? 'text-slate-900' : 'text-slate-600'}`}>
                                    {s.title}
                                </h4>
                                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                    {s.desc}
                                </p>
                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default function ServicesSection() {
    return (
        <section className="py-24 relative bg-white overflow-hidden" id="services">
            <div className="absolute inset-0 dot-pattern opacity-[0.03]" />
            <div className="container-custom relative z-10">
                <div className="max-w-3xl mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        Our Expertise
                    </div>

                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        Comprehensive Digital <br />
                        <span className="gradient-text">Capabilities</span>
                    </h2>

                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                        From enterprise platforms to intelligent AI integrations, we deliver end-to-end technology solutions designed for scale and market dominance.
                    </p>
                </div>

                <div className="reveal-up delay-200">
                    <ServicesShowcase />
                </div>
            </div>
        </section>
    )
}
