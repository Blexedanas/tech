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
        title: 'Auto Resume Maker Web',
        category: 'Web',
        tags: ['React', 'AI', 'Tailwind'],
        color: '#A30927',
        desc: 'Intelligent resume builder that automates the creation of professional, ATS-optimized resumes in minutes.',
        link: 'https://resumemakerr13.web.app/'
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
        <section className="py-24 bg-white relative border-t border-black/5">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Our Selected Work
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl text-slate-900 leading-tight tracking-tight">
                            Projects That <br />
                            <span className="gradient-text">Define Excellence</span>
                        </h2>
                    </div>
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary mt-8 md:mt-0 group pb-1 border-b border-black/10 hover:border-primary transition-all font-bold">
                        <span>View All Case Studies</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                {/* Filter tabs */}
                <div className="flex flex-wrap gap-3 mb-12 reveal">
                    {['All', 'Web', 'Mobile', 'AI'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActivePortfolioTab(tab)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${activePortfolioTab === tab
                                ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 scale-105'
                                : 'bg-white text-slate-500 border-black/5 hover:border-primary/20 hover:text-primary hover:shadow-lg'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Standard Portfolio Grid - Optimized for Efficiency */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {portfolio.filter(p => activePortfolioTab === 'All' || p.category === activePortfolioTab).map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 1, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative bg-slate-50 rounded-[2rem] p-5 border border-black/5 hover:border-primary/10 hover:bg-white hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Subtle Hover Glow behind card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* 3D Thumbnail Container - Shrunk for efficiency */}
                            <div className="h-36 rounded-[1.5rem] mb-6 relative flex items-center justify-center transition-all duration-700 [perspective:1000px] group-hover:z-10 shadow-sm border border-black/5 bg-white">
                                <div
                                    className="w-full h-full rounded-[1.5rem] relative overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(20px)]"
                                    style={{ backgroundColor: `${item.color}10` }}
                                >
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1),transparent)]" />
                                    <h3 className="text-2xl font-display font-black opacity-40 uppercase tracking-widest" style={{ color: item.color === '#FFFFFF' ? '#000000' : item.color }}>{item.category}</h3>
                                    {/* 3D lighting reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white border border-black/5 text-slate-500 rounded-full shadow-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors tracking-tight">
                                {item.title}
                            </h3>

                            <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1 font-medium line-clamp-3">
                                {item.desc}
                            </p>

                            <div className="mt-auto pt-6 border-t border-black/5">
                                <a href={item.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-primary transition-all">
                                    <span>View Project</span>
                                    <ArrowUpRight className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
