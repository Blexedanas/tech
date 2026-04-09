'use client'

import Link from 'next/link'
import { 
    Globe, Smartphone, Code, Palette, Layers, ArrowRight, 
    Search, Globe2, ShoppingCart, SmartphoneNfc, Share2, Users, Brain,
    Layout, Database, PenTool, Box, Fingerprint, Image as ImageIcon, FileText, Zap, Laptop,
    Rocket, Shield, CheckCircle, Award, MapPin, ShoppingBag, TrendingUp, Cpu,
    MousePointerClick, Facebook, Instagram
} from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion, AnimatePresence } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const serviceCategories = [
    {
        id: 'marketing',
        title: 'MARKETING',
        icon: TrendingUp,
        color: '#E8712C',
        gradient: 'from-orange-500/20 to-orange-500/5',
        tags: ['SEO', 'Google Ads', 'Organic Social'],
        description: 'Data-driven growth strategies (SEO, Ads, Social) to scale your brand presence and ROI.',
        services: [
            { name: 'Digital Marketing', icon: Globe },
            { name: 'Content Marketing', icon: FileText },
            { name: 'Influencer Marketing', icon: Users },
            { name: 'Performance Marketing', icon: TrendingUp },
            { name: 'SEO Services', icon: Search },
            { name: 'Apps Marketing', icon: SmartphoneNfc }
        ]
    },
    {
        id: 'development',
        title: 'DEVELOPMENT',
        icon: Code,
        color: '#0A66FF',
        gradient: 'from-blue-600/20 to-blue-600/5',
        tags: ['Web Dev', 'Mobile Apps', 'E-commerce'],
        description: 'Robust, scalable, and high-performance software built for the modern digital era.',
        services: [
            { name: 'Web Development', icon: Laptop },
            { name: 'App Development', icon: Smartphone },
            { name: 'Software Development', icon: Code },
            { name: 'App & Web Maintenance', icon: Shield },
            { name: 'AI/ML Solutions', icon: Brain },
            { name: 'Automation', icon: Zap }
        ]
    },
    {
        id: 'branding',
        title: 'BRANDING',
        icon: Palette,
        color: '#9b59b6',
        gradient: 'from-purple-600/20 to-purple-600/5',
        tags: ['Identity', 'Graphics', 'Strategy'],
        description: 'Compelling brand identities that resonate with your audience and define your vision.',
        services: [
            { name: 'Brand Management', icon: Rocket },
            { name: 'Brand Identity', icon: PenTool },
            { name: 'Brand Guidelines', icon: FileText },
            { name: 'Graphic Design', icon: ImageIcon },
            { name: 'Logo Design', icon: Fingerprint },
            { name: 'Packaging Design', icon: Box }
        ]
    },
    {
        id: 'advertising',
        title: 'PAID ADVERTISING',
        icon: Zap,
        color: '#0F172A',
        gradient: 'from-slate-900/20 to-slate-900/5',
        tags: ['PPC', 'Meta Ads', 'Bing Ads'],
        description: 'Maximize your ROI with precision-targeted ad campaigns across all major digital platforms.',
        services: [
            { name: 'Google Ads', icon: Zap },
            { name: 'Instagram Ads', icon: Instagram },
            { name: 'Facebook Ads', icon: Facebook },
            { name: 'Meta Ads', icon: Layout },
            { name: 'PPC Ads', icon: MousePointerClick },
            { name: 'Bing Ads', icon: Search }
        ]
    }
]

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState(0)
    const activeService = serviceCategories[activeTab]

    return (
        <div className="bg-navy min-h-screen selection:bg-primary/20">
            {/* Hero Section */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-navy">
                <div className="absolute inset-0 grid-pattern opacity-5" />
                <div className="container-custom relative z-10 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="badge-orange mb-6 animate-breathe inline-block"
                    >
                        ⟹ Premium Expertise
                    </motion.div>
                    <h1 className="font-display font-black text-5xl md:text-7xl text-text-1 leading-tight tracking-tighter mb-6 uppercase italic">
                        Limitless <br />
                        <span className="gradient-text italic">Capabilities</span>
                    </h1>
                    <p className="text-text-2 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                        We don't just offer services; we engineer digital dominance across every vertical of the modern digital landscape.
                    </p>
                </div>
            </section>

            {/* Showcase Section */}
            <section className="py-20 bg-navy relative z-20">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        
                        {/* Featured Card (Left) */}
                        <div className="w-full lg:w-[45%] lg:sticky lg:top-32 relative z-10 h-fit mb-12 lg:mb-0">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    transition={{ duration: 0.5, ease: "circOut" }}
                                    className={`relative rounded-[3.5rem] p-10 md:p-14 overflow-hidden shadow-2xl border border-border bg-gradient-to-br ${activeService.gradient} min-h-[600px] flex flex-col justify-between group`}
                                >
                                    {/* Dotted Orbital Path with Icon */}
                                    <div className="relative mb-12 flex justify-center">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-64 h-64 border-2 border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />
                                            <div className="absolute w-[80%] h-[80%] border border-dashed border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />
                                        </div>
                                        
                                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-navy flex items-center justify-center z-10 transition-transform duration-700 group-hover:scale-110">
                                            <activeService.icon className="w-16 h-16 md:w-20 md:h-20" style={{ color: activeService.color }} />
                                            {/* Pulse effect */}
                                            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping -z-10" />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                                            {activeService.tags.map(tag => (
                                                <span key={tag} className="px-4 py-1.5 rounded-full bg-navy/50 backdrop-blur-md border border-border text-[10px] font-black uppercase tracking-widest text-text-3 shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-text-1 mb-6 text-center tracking-tighter uppercase break-words leading-tight">
                                            {activeService.title}
                                        </h2>
                                        <p className="text-text-2 text-center font-medium leading-relaxed max-w-md mx-auto mb-10 opacity-80">
                                            {activeService.description}
                                        </p>

                                        <Magnetic>
                                            <Link 
                                                href={`/services/${activeService.services[0].name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} 
                                                className="w-full bg-primary text-white rounded-3xl py-5 flex items-center justify-center gap-3 font-black uppercase tracking-[0.2em] text-xs hover:bg-slate-900 transition-all duration-500 shadow-xl shadow-primary/20 group/btn"
                                            >
                                                View Details
                                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                                            </Link>
                                        </Magnetic>
                                    </div>

                                    {/* Decorative Blur */}
                                    <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: activeService.color }} />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Service List / Selector (Right) */}
                        <div className="w-full lg:w-[55%] space-y-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {serviceCategories.map((category, idx) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveTab(idx)}
                                        className={`group relative text-left p-8 rounded-[2.5rem] border transition-all duration-500 overflow-hidden ${activeTab === idx 
                                            ? 'bg-navy border-primary shadow-2xl scale-[1.02]' 
                                            : 'bg-navy-mid border-border hover:bg-navy hover:border-primary/20'
                                        }`}
                                    >
                                        <div className="flex items-center gap-5 relative z-10">
                                            <div className={`p-4 rounded-2xl transition-all duration-500 ${activeTab === idx ? 'bg-primary text-white' : 'bg-navy text-text-4 group-hover:scale-110 shadow-lg'}`}>
                                                <category.icon className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`font-display font-black text-lg transition-colors ${activeTab === idx ? 'text-text-1' : 'text-text-2'}`}>
                                                    {category.title}
                                                </h3>
                                                <p className="text-[10px] font-black uppercase tracking-widest opacity-40 mt-1">Category 0{idx + 1}</p>
                                            </div>
                                        </div>
                                        {activeTab === idx && (
                                            <motion.div 
                                                layoutId="activeGlow"
                                                className="absolute inset-0 bg-primary/5 -z-0 pointer-events-none"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Detailed Sub-services Grid */}
                            <motion.div 
                                key={activeTab + "-list"}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-slate-50/50 rounded-[3rem] p-10 border border-black/5"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <h4 className="font-display font-black text-2xl text-slate-900 tracking-tight uppercase">
                                        Included <span className="text-primary">Services</span>
                                    </h4>
                                    <div className="flex gap-2">
                                        <div className="w-2 h-2 rounded-full bg-primary/20" />
                                        <div className="w-2 h-2 rounded-full bg-primary/50" />
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activeService.services.map((service, sIdx) => {
                                        const slug = service.name.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')
                                        return (
                                            <Link
                                                key={service.name}
                                                href={`/services/${slug}`}
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: sIdx * 0.05 }}
                                                    className="flex items-center gap-4 p-4 rounded-2xl bg-navy border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group/item"
                                                >
                                                    <div className="w-10 h-10 rounded-xl bg-navy-mid flex items-center justify-center group-hover/item:bg-primary/10 transition-colors">
                                                        <service.icon className="w-5 h-5 text-text-4 group-hover/item:text-primary transition-colors" />
                                                    </div>
                                                    <span className="font-bold text-text-2 tracking-tight group-hover/item:text-primary transition-colors">
                                                        {service.name}
                                                    </span>
                                                </motion.div>
                                            </Link>

                                        )
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Trusted stats banner */}
            <section className="py-20 border-y border-border bg-navy-mid overflow-hidden relative selection:bg-primary/20">
                 <div className="container-custom">
                    <div className="grid md:grid-cols-4 gap-12 text-center">
                        {[
                            { label: 'Uptime Guarantee', val: '99.9%' },
                            { label: 'Client Retention', val: '95%' },
                            { label: 'Support SLA', val: '< 2h' },
                            { label: 'Security Grade', val: 'A+' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-4xl font-display font-black text-text-1 mb-2">{stat.val}</div>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-4">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                 </div>
            </section>

            {/* Bottom CTA */}
            <section className="section-padding bg-navy relative">
                <div className="container-custom max-w-5xl mx-auto">
                    <div className="relative rounded-[4rem] p-16 md:p-24 text-center overflow-hidden shadow-2xl bg-[#0F172A]">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple/20 opacity-30" />
                        <div className="absolute inset-0 grid-pattern opacity-10" />
                        
                        <div className="relative z-10">
                            <motion.h2 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="font-display font-black text-5xl md:text-7xl text-white mb-8 leading-[0.9] tracking-tighter uppercase italic"
                            >
                                Let&apos;s engineer <br />
                                <span className="gradient-text italic">your ascent</span>
                            </motion.h2>
                            <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium">
                                Ready to deploy world-class digital strategy? Our experts are standing by to architect your next breakthrough.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Magnetic>
                                    <Link href="/contact" className="btn-primary py-5 px-12 text-sm shadow-2xl group">
                                        Start a Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
