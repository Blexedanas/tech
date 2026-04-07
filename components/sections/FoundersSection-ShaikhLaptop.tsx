'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, ExternalLink, Shield, Code2, Cpu } from 'lucide-react'
import Image from 'next/image'

const founders = [
    {
        name: "Shaikh Anas",
        role: "Founder & CTO",
        image: "/Anas.jpeg", // Placeholder
        Bio: "As the Founder & CTO of Zerixa Tech, Shaikh Anas turns ideas into powerful digital systems. Specializing in full-stack architecture and AI integration, he creates fast, scalable, and future-ready solutions. Driven by curiosity and innovation, Anas is focused on building technology that not only works—but stands out.",
        linkedin: "https://www.linkedin.com/in/anas-shaikh-a0ba1a2b1/",
        github: "https://github.com/Blexedanas",
        portfolio: "https://anasportfoliio.web.app/",
        skills: ["Architecture", "AI/ML", "Next.js"],
        icon: Cpu
    },
    {
        name: "Dipen Vishwakarma",
        role: "Co-Founder & CEO",
        image: "/Dipen.png", // Placeholder
        bio: "Strategic visionary with a background in engineering and digital transformation. Dipen leads Zerixa Tech's mission to redefine how brands interact with 3D technology.",
        linkedin: "https://www.linkedin.com/in/dipen-vishwakarma-976705303/",
        github: "https://github.com/", // Add if available
        skills: ["Strategy", "Operations", "Product Design"],
        icon: Shield
    }
]

export default function FoundersSection() {
    return (
        <section className="py-24 relative bg-black overflow-hidden border-t border-white/5">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="max-w-3xl mb-20 reveal">
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl text-white leading-[1.1] mb-8 tracking-tighter uppercase italic">
                        The Minds behind <br />
                        <span className="text-primary italic">the Machine</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
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
                            <div className="relative aspect-[4/4.5] mb-10 overflow-hidden rounded-3xl border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700 max-w-[400px] mx-auto">
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                {/* Floating Role Badge */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h3 className="font-display font-black text-4xl text-white uppercase tracking-tighter mb-1">
                                        {founder.name}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        <div className="h-[1px] w-8 bg-primary" />
                                        <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">{founder.role}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-6">
                                <p className="text-white/70 text-lg leading-relaxed italic border-l-2 border-primary/30 pl-6">
                                    "{founder.bio}"
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {founder.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 uppercase tracking-widest">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-6 pt-4">
                                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                                        <Linkedin className="w-4 h-4" />
                                        LinkedIn
                                    </a>
                                    <a href={founder.portfolio} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                                        <ExternalLink className="w-4 h-4" />
                                        Portfolio
                                    </a>
                                    <a href={founder.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
