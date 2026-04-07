'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

const portfolio = [
    {
        title: 'PulseRate App',
        category: 'Mobile',
        tags: ['React Native', 'HealthTech', 'Firebase'],
        color: '#A30927',
        desc: 'Advanced medical companion app for monitoring heart health, tracking progress, and connecting with healthcare providers.',
    },
    {
        title: 'Layered Love Web',
        category: 'Web',
        tags: ['Next.js', '3D Animation', 'E-commerce'],
        color: '#FFFFFF',
        desc: 'Premium cake shop experience featuring stunning 3D animations and a seamless ordering system.',
        link: 'https://layerredlove.web.app/'
    },
    {
        title: 'AttendanceIO',
        category: 'AI',
        tags: ['AI/ML', 'Python', 'Face Recognition'],
        color: '#FFFFFF',
        desc: 'Smart attendance management system utilizing AI-powered face recognition for secure and automated tracking.',
    },
    {
        title: 'Taskflow Web',
        category: 'Web',
        tags: ['Next.js', 'PostgreSQL', 'Prisma'],
        color: '#A30927',
        desc: 'Modern project management and task tracking platform designed for high-performance teams.',
    },
    {
        title: 'Aiza AI',
        category: 'AI',
        tags: ['LLM', 'GPT-4', 'NLP'],
        color: '#FFFFFF',
        desc: 'Advanced AI assistant tailored for specialized business workflows and intelligent data analysis.',
    },
    {
        title: 'Stepper Shoes Web',
        category: 'Web',
        tags: ['Next.js', 'E-commerce', 'Tailwind'],
        color: '#A30927',
        desc: 'A premium, sustainable footwear platform focused on conscious comfort and modern minimalist aesthetics.',
        link: 'https://jocular-centaur-ef899b.netlify.app/'
    },
]

export default function PortfolioSection() {
    const [activePortfolioTab, setActivePortfolioTab] = useState('All')

    return (
        <section className="py-24 bg-navy relative border-t border-white/5">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Our Selected Work
                        </div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-5xl text-white leading-tight tracking-tight">
                            Projects That <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Define Excellence</span>
                        </h2>
                    </div>
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/80 hover:text-white mt-8 md:mt-0 group pb-1 border-b border-white/20 hover:border-white transition-colors">
                        <span className="font-semibold">View All Case Studies</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-3 mb-12 reveal">
                    {['All', 'Web', 'Mobile', 'AI'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActivePortfolioTab(tab)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activePortfolioTab === tab
                                ? 'bg-primary text-white shadow-md scale-105'
                                : 'bg-white/5 text-white/80 border border-white/5 hover:border-white/20 hover:text-white shadow-sm'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Standard Portfolio Grid */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {portfolio.filter(p => activePortfolioTab === 'All' || p.category === activePortfolioTab).map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 1, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative bg-navy-mid rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Subtle Hover Glow behind card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* 3D Thumbnail Container */}
                            <div className="h-48 rounded-2xl mb-8 relative flex items-center justify-center transition-all duration-700 [perspective:1000px] group-hover:z-10">
                                <div
                                    className="w-full h-full rounded-2xl relative overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(20px)] shadow-lg group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5"
                                    style={{ backgroundColor: `${item.color}15` }}
                                >
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4),transparent)]" />
                                    <h3 className="text-2xl font-display font-bold mix-blend-screen opacity-50" style={{ color: item.color }}>{item.category}</h3>
                                    {/* 3D lighting reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/5 text-white/80 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-white/70 text-base leading-relaxed mb-8 flex-1 font-light">
                                {item.desc}
                            </p>

                            <div className="mt-auto">
                                <a href={item.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                                    View Project <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
