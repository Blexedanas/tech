'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle, Brain, Code, Globe, Smartphone, Palette, Cpu, Zap, Layers } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'

const ICON_MAP = {
    brain: Brain,
    code: Code,
    globe: Globe,
    smartphone: Smartphone,
    palette: Palette,
    cpu: Cpu,
    zap: Zap,
    layers: Layers
}

interface ServicePageProps {
    badge: string
    title: string
    subtitle: string
    color: string
    iconName: keyof typeof ICON_MAP
    description: string
    features: string[]
    benefits: { title: string; desc: string }[]
    tech: string[]
    process: { step: string; title: string; desc: string }[]
}

export default function ServicePageTemplate({
    badge, title, subtitle, color, iconName, description,
    features, benefits, tech, process
}: ServicePageProps) {
    const Icon = ICON_MAP[iconName] || Code
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [winSize, setWinSize] = useState({ w: 1200, h: 800 })

    useEffect(() => {
        setWinSize({ w: window.innerWidth, h: window.innerHeight })
        const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
        const handleResize = () => setWinSize({ w: window.innerWidth, h: window.innerHeight })
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div className="bg-navy min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <motion.div
                    className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
                    style={{ background: `${color}15` }}
                    animate={{
                        x: (mousePos.x - winSize.w / 2) * -0.02,
                        y: (mousePos.y - winSize.h / 2) * -0.02,
                    }}
                />
                <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="badge-orange mb-5 animate-breathe inline-block">⟹ {badge}</div>
                        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-slate-900 leading-[1.1] mb-6 tracking-tight" style={{ color: 'var(--text-1)' }}>
                            {title.split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.03 }}
                                    className="char-reveal"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                            <br />
                            <span className="gradient-text">{subtitle}</span>
                        </h1>
                        <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-lg" style={{ color: 'var(--text-2)' }}>{description}</p>
                        <div className="flex gap-6 flex-wrap">
                            <Magnetic>
                                <Link href="/contact" className="btn-primary">
                                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/portfolio" className="btn-outline">View Our Work</Link>
                            </Magnetic>
                        </div>
                    </div>
                    {/* Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[400px] group"
                    >
                        <div
                            className="absolute inset-0 rounded-[3rem] flex items-center justify-center backdrop-blur-sm"
                            style={{
                                background: `linear-gradient(135deg, ${color}10, ${color}05)`,
                                border: `1px solid ${color}20`
                            }}
                        >
                            <div
                                className="w-40 h-40 rounded-[2.5rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl"
                                style={{ background: `${color}20`, border: `2px solid ${color}30` }}
                            >
                                <Icon className="w-20 h-20" style={{ color }} />
                            </div>
                        </div>
                        {/* Orbiting element */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -right-10 w-24 h-24 rounded-2xl bg-white/5 border border-white/10 p-4 backdrop-blur-md flex items-center justify-center"
                        >
                            <div className="w-full h-full rounded-lg" style={{ background: color, opacity: 0.2 }} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-black/[0.02] border-y border-black/5" style={{ backgroundColor: 'var(--navy-mid)' }}>
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4" style={{ color: 'var(--text-1)' }}>
                            What's <span className="gradient-text">Included</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto" style={{ color: 'var(--text-3)' }}>A comprehensive toolset engineered for your commercial success.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                        {features.map((f, i) => (
                            <motion.div
                                key={f}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl group hover:border-white/20 hover:bg-white/10 transition-all shadow-sm"
                            >
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                                    <CheckCircle className="w-5 h-5" style={{ color }} />
                                </div>
                                <span className="text-slate-700 font-medium" style={{ color: 'var(--text-2)' }}>{f}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="section-padding relative">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-4" style={{ color: 'var(--text-1)' }}>
                            Elite <span className="gradient-text">Advantages</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((b, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 card-hover group shadow-sm"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                                    style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                                >
                                    <span className="font-display font-black text-lg" style={{ color }}>{i + 1}</span>
                                </div>
                                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 tracking-tight" style={{ color: 'var(--text-1)' }}>{b.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-padding bg-black/[0.01] relative" style={{ backgroundColor: 'var(--navy-light)' }}>
                <div className="container-custom text-center">
                    <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-10" style={{ color: 'var(--text-1)' }}>
                        Modern <span className="gradient-text">Stack</span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                        {tech.map((t, i) => (
                            <motion.span
                                key={t}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold text-white/50 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all cursor-default shadow-sm"
                                style={{ color: 'var(--text-2)' }}
                            >
                                {t}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="relative bg-white/5 border border-white/10 rounded-[3rem] p-16 text-center overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                        <div className="relative z-10">
                            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight" style={{ color: 'var(--text-1)' }}>
                                Ready to Redefine Your <br />
                                <span className="gradient-text">Digital Presence?</span>
                            </h2>
                            <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-2)' }}>Let's discuss how we can leverage our tech stack and process to deliver exceptional results for your business.</p>
                            <Magnetic>
                                <Link href="/contact" className="btn-primary py-5 px-12 text-lg shadow-[0_20px_40px_rgba(232,113,44,0.15)]">
                                    Start Your Transformation <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                            </Magnetic>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
