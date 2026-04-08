'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ExternalLink, Shield, Code2, Cpu, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

const founders = [
    {
        name: "Zarin R Shaikh",
        role: "Founder & CEO",
        image: "/Zarin.jpeg", 
        bio: "Strategic visionary leading ZERIXA TECH's mission. Zarin drives the core business strategy to redefine how brands interact with technology.",
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        portfolio: "",
        skills: ["Strategy", "Operations", "Leadership"],
        icon: Shield
    },
    {
        name: "Anas Shaikh",
        role: "CTO & Tech Head",
        image: "/Anas.jpeg",
        bio: "Full-stack architect specializing in high-performance web systems and AI integration. Anas ensures ZERIXA TECH remains at the bleeding edge of software engineering.",
        linkedin: "https://www.linkedin.com/in/anas-shaikh-a0ba1a2b1/",
        github: "https://github.com/Blexedanas",
        portfolio: "https://anasportfoliio.web.app/",
        skills: ["Architecture", "AI/ML", "Next.js"],
        icon: Cpu
    }
]

export default function FoundersSection() {
    return (
        <section className="py-24 relative bg-slate-50 overflow-hidden border-t border-black/5">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mb-20 reveal">
                <div className="badge-orange mb-5 animate-breathe inline-block">⟹ The Visionaries</div>
                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-7xl text-slate-900 leading-[1.1] mb-8 tracking-tighter uppercase italic">
                        The Minds behind <br />
                        <span className="gradient-text italic">the Machine</span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                        A union of strategic vision and engineering excellence. We don't just build websites; we architect digital dominance.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    {founders.map((founder, idx) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, x: idx === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="group relative"
                        >
                            {/* Magazine-style Card */}
                            <div className="relative aspect-[4/5] mb-10 overflow-hidden rounded-[2.5rem] border border-black/5 transition-all duration-700 max-w-[450px] mx-auto shadow-2xl bg-white">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-700" />

                                {/* Floating Role Badge */}
                                <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-display font-black text-4xl text-slate-900 uppercase tracking-tighter mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {founder.name}
                                    </h3>
                                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="h-[2px] w-10 bg-primary" />
                                        <span className="text-primary text-sm font-black tracking-[0.2em] uppercase">{founder.role}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-8 px-4 sm:px-10">
                                <p className="text-slate-600 text-lg md:text-xl leading-relaxed italic border-l-4 border-primary/20 pl-8 font-medium">
                                    "{founder.bio}"
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {founder.skills.map(skill => (
                                        <span key={skill} className="px-4 py-1.5 bg-white border border-black/5 rounded-full text-[10px] text-slate-500 font-black uppercase tracking-widest shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-8 pt-6 border-t border-black/5">
                                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                    {founder.name === "Zarin R Shaikh" ? (
                                        <>
                                            <a href="https://www.instagram.com/sayyed.zarin/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                                                <Instagram className="w-4 h-4" />
                                                Instagram
                                            </a>
                                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                                                <Twitter className="w-4 h-4" />
                                                X
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <a href={founder.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                                                <ExternalLink className="w-4 h-4" />
                                                Portfolio
                                            </a>
                                            <a href={founder.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-all flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
                                                <Github className="w-4 h-4" />
                                                GitHub
                                            </a>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
