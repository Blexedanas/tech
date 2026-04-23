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
        <section className="py-24 bg-navy relative border-t border-white/[0.05]" id="portfolio">
            <div className="container-custom relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-mid text-primary text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Our Selected Work
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl text-text-1 leading-tight tracking-tight uppercase italic">
                            Projects That <br />
                            <span className="gradient-text italic">Define Excellence</span>
                        </h2>
                    </div>
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-text-2 hover:text-primary mt-8 md:mt-0 group pb-1 border-b border-border hover:border-primary transition-all font-bold">
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
                            className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${activePortfolioTab === tab
                                ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-105'
                                : 'bg-navy-mid text-text-2 border-white/[0.05] hover:border-primary/20 hover:text-primary'
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
                            key={item.title}
                            initial={{ opacity: 1, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="group relative card-blue-premium rounded-[var(--card-radius)] p-5 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:-translate-y-[5px] transition-all duration-500 overflow-hidden flex flex-col"
                        >
                            {/* Subtle Hover Glow behind card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* 3D Thumbnail Container - Shrunk for efficiency */}
                            <div className="h-36 rounded-[var(--inner-radius)] mb-6 relative flex items-center justify-center transition-all duration-700 [perspective:1000px] group-hover:z-10 shadow-sm border border-white/20 bg-white/10 backdrop-blur-md overflow-hidden">
                                <div
                                    className="w-full h-full rounded-[var(--inner-radius)] relative overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:[transform:rotateX(10deg)_rotateY(-10deg)_translateZ(20px)]"
                                    style={{ backgroundColor: `${item.color}05` }}
                                >
                                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent)]" />
                                    <h3 className="text-2xl font-display font-black opacity-30 uppercase tracking-widest italic text-white">{item.category}</h3>
                                    {/* 3D lighting reflection */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {item.tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-black text-white mb-3 group-hover:text-white transition-colors tracking-tight uppercase italic">
                                {item.title}
                            </h3>

                            <p className="text-white/90 text-xs leading-relaxed mb-6 flex-1 font-medium line-clamp-3">
                                {item.desc}
                            </p>

                            <div className="mt-auto pt-6 border-t border-white/10">
                                <a href={item.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-white/70 group-hover:text-white transition-all">
                                    <span>View Project</span>
                                    <ArrowUpRight className="w-4 h-4 ml-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

