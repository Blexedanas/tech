'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Filter } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const projects = [
    { title: 'PulseRate App', category: 'Mobile', tags: ['React Native', 'HealthTech', 'Firebase'], color: '#f87171', desc: 'Advanced medical companion app for monitoring heart health.' },
    { title: 'Layered Love Web', category: 'Web', tags: ['Next.js', '3D Animation', 'E-commerce'], color: '#E8712C', desc: 'Premium cake shop experience featuring stunning 3D animations.', link: 'https://layerredlove.web.app/' },
    { title: 'Auto Resume Maker Web', category: 'Web', tags: ['React', 'AI', 'Tailwind'], color: '#fb923c', desc: 'Intelligent resume builder that automates professional resume creation.', link: 'https://resumemakerr13.web.app/' },
    { title: 'AttendanceIO', category: 'AI', tags: ['AI/ML', 'Python', 'Face Recognition'], color: '#34d399', desc: 'Smart attendance management system utilizing AI-powered face recognition.' },
    { title: 'Taskflow Web', category: 'Web', tags: ['Next.js', 'PostgreSQL', 'Prisma'], color: '#60a5fa', desc: 'Modern project management and task tracking platform.' },
    { title: 'Aiza AI', category: 'AI', tags: ['LLM', 'GPT-4', 'NLP'], color: '#a78bfa', desc: 'Advanced AI assistant tailored for specialized business workflows.' },
    { title: 'Stepper Shoes Web', category: 'Web', tags: ['Next.js', 'E-commerce', 'Tailwind'], color: '#f472b6', desc: 'A premium, sustainable footwear platform focused on modern aesthetics.' },
]

const filters = ['All', 'Web', 'Mobile', 'AI']

export default function PortfolioPage() {
    const [active, setActive] = useState('All')
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

    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active)

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <motion.div
                    className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
                    animate={{
                        x: (mousePos.x - winSize.w / 2) * 0.03,
                        y: (mousePos.y - winSize.h / 2) * 0.03,
                    }}
                />
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="badge-orange mb-5 animate-breathe inline-block">⟹ Our Portfolio</div>
                    <h1 className="font-display font-extrabold text-5xl md:text-7xl text-slate-900 leading-tight mb-6 font-black">
                        {"Work That Makes".split(" ").map((word, wordIdx, arr) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, i) => (
                                    <motion.span
                                        key={`${wordIdx}-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (wordIdx * 5 + i) * 0.03 }}
                                        className="char-reveal"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordIdx !== arr.length - 1 && "\u00A0"}
                            </span>
                        ))}
                        <br />
                        {"Us".split(" ").map((word, wordIdx, arr) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap mr-3">
                                {word.split("").map((char, i) => (
                                    <motion.span
                                        key={`${wordIdx}-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (wordIdx * 2 + i) * 0.03 }}
                                        className="char-reveal"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordIdx !== arr.length - 1 && "\u00A0"}
                            </span>
                        ))}
                        <span className="gradient-text">Proud</span>
                    </h1>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto reveal-up font-medium">
                        Over 150 successful deployments across diverse industries. Each project is a testament to our commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Filter tabs */}
            <section className="pb-12 relative z-20">
                <div className="container-custom">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {filters.map((f, idx) => (
                            <Magnetic key={f}>
                                <button
                                    onClick={() => setActive(f)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${active === f
                                        ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105'
                                        : 'bg-white text-slate-500 border border-black/5 hover:border-primary/40 hover:text-primary transition-all'
                                        }`}
                                >
                                    {f}
                                </button>
                            </Magnetic>
                        ))}
                    </div>
                </div>
            </section>
            <section className="pb-24">
                <div className="container-custom">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode='popLayout'>
                            {filtered.map((p, i) => (
                                <motion.div
                                    key={p.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group relative bg-slate-50 border border-black/5 rounded-[2rem] overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-500"
                                >
                                    {/* Project Preview with Gradient */}
                                    <div
                                        className="h-60 relative overflow-hidden flex items-center justify-center p-8 group-hover:h-52 transition-all duration-500"
                                        style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}05)` }}
                                    >
                                        <div
                                            className="w-32 h-32 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700 shadow-2xl"
                                            style={{ background: `${p.color}20`, border: `2px solid ${p.color}30` }}
                                        >
                                            <span className="text-5xl font-display font-black" style={{ color: p.color }}>
                                                {p.title[0]}
                                            </span>
                                        </div>

                                        {/* Floating Tag */}
                                        <div
                                            className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full z-10"
                                            style={{ background: `${p.color}20`, color: p.color, border: `1px solid ${p.color}30` }}
                                        >
                                            {p.category}
                                        </div>
                                    </div>

                                    <div className="p-8 relative z-10 bg-white/40 backdrop-blur-sm border-t border-black/5">
                                        <h3 className="font-display font-extrabold text-xl text-slate-900 mb-3 group-hover:text-primary transition-all duration-300 tracking-tight">{p.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 font-medium">{p.desc}</p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {p.tags.map(t => (
                                                <span key={t} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-lg bg-white border border-black/5 text-slate-400">{t}</span>
                                            ))}
                                        </div>

                                        <Link
                                            href={p.link || `/portfolio/${p.title.toLowerCase().replace(/ /g, '-')}`}
                                            target={p.link ? "_blank" : "_self"}
                                            className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-primary transition-colors"
                                        >
                                            View Project <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </Link>
                                    </div>

                                    {/* Background glow on hover */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                        style={{ background: `radial-gradient(circle at 50% 100%, ${p.color}10, transparent 70%)` }}
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white border-t border-black/5 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple/5 blur-[120px] rounded-full" />
                <div className="container-custom text-center relative z-10">
                    <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-6 font-black">
                        Ready To Be Our Next <br />
                        <span className="gradient-text">Success Story?</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        We don't just build products; we build partnerships. Let's discuss how we can help your business reach its full potential.
                    </p>
                    <Magnetic>
                        <Link href="/contact" className="btn-primary shadow-xl">
                            Inquire Now <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Magnetic>
                </div>
            </section>
        </div>
    )
}