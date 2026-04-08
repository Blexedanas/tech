'use client'

import Link from 'next/link'
import { ArrowRight, Target, Heart, Lightbulb, Shield, Award, Users, TrendingUp, CheckCircle, Github, Globe, Linkedin } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'


const values = [
    { icon: Target, title: 'Mission-Driven', desc: 'Every line of code serves your business goals.' },
    { icon: Heart, title: 'Client-First', desc: 'Your success is the only metric that matters to us.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'We embrace emerging tech to keep you ahead.' },
    { icon: Shield, title: 'Quality', desc: 'We ship zero-compromise, production-ready code.' },
]

const team = [
    { name: 'Zarin R Shaikh', role: 'Founder & CEO', image: '/Zarina.png', color: 'hsl(20, 70%, 55%)', social: {} },
    { name: 'Anas Shaikh', role: 'CTO & Tech Head', image: '/Anas.jpeg', color: 'hsl(260, 70%, 65%)', social: { github: 'https://github.com/Blexedanas', portfolio: 'https://anasportfoliio.web.app/', linkedin: 'https://www.linkedin.com/in/anas-shaikh-a0ba1a2b1/' } },
    { name: 'Dipen Vishwakarma', role: 'Full Stack Developer', image: '/Dipen.png', color: 'hsl(180, 70%, 45%)', social: { github: 'https://github.com/vishwakarmadipen85', portfolio: 'https://dipenvishportfolio.netlify.app/', linkedin: 'https://www.linkedin.com/in/dipen-vishwakarma-976705303/' } },
    { name: 'Shaikh Amaan', role: 'UI/UX Head', image: '/Amaan.png', color: 'hsl(200, 70%, 55%)', social: {} },
    { name: 'Rishi', role: 'Senior App / Backend Dev', image: 'https://i.pravatar.cc/300?u=rishi', color: 'hsl(150, 60%, 50%)', social: {} },
    { name: 'Arjun Malhotra', role: 'Project Manager', image: 'https://i.pravatar.cc/300?u=arjun', color: 'hsl(45, 80%, 50%)', social: {} },
    { name: 'Sohail Shaikh', role: 'Digital Marketing Head', image: '/Sohail.png', color: 'hsl(280, 70%, 60%)', social: {} },
    { name: 'Priyanka Singh', role: 'Content Strategist', image: 'https://i.pravatar.cc/300?u=priyanka', color: 'hsl(330, 70%, 65%)', social: {} },
    { name: 'Rahul Verma', role: 'Senior SEO Specialist', image: 'https://i.pravatar.cc/300?u=rahul', color: 'hsl(180, 70%, 45%)', social: {} },
    { name: 'Sneha Kapoor', role: 'Creative Director', image: 'https://i.pravatar.cc/300?u=sneha', color: 'hsl(10, 70%, 60%)', social: {} },
    { name: 'Vikram Rathod', role: 'Full Stack Developer', image: 'https://i.pravatar.cc/300?u=vikram', color: 'hsl(210, 70%, 50%)', social: {} },
    { name: 'Arjun Mehra', role: 'QA Lead', image: 'https://i.pravatar.cc/300?u=amehra', color: 'hsl(120, 60%, 45%)', social: {} },
]



export default function AboutPage() {
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
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-slate-50">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
                    animate={{
                        x: (mousePos.x - winSize.w / 2) * 0.02,
                        y: (mousePos.y - winSize.h / 2) * 0.02,
                    }}
                />
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="badge-orange mb-5 animate-breathe inline-block">⟹ About Zerixa Tech</div>
                    <h1 className="font-display font-black text-5xl md:text-7xl text-slate-900 leading-[1.1] mb-6 tracking-tight">
                        {"We Build Digital".split(" ").map((word, wordIdx, arr) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, i) => (
                                    <motion.span
                                        key={`${wordIdx}-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: (wordIdx * 7 + i) * 0.03 }}
                                        className="char-reveal"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordIdx !== arr.length - 1 && "\u00A0"}
                            </span>
                        ))}
                        {" "}
                        <span className="gradient-text">Experiences</span>
                        <br />
                        {"That Matter".split(" ").map((word, wordIdx, arr) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, i) => (
                                    <motion.span
                                        key={`${wordIdx}-${i}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + (wordIdx * 6 + i) * 0.03 }}
                                        className="char-reveal"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                                {wordIdx !== arr.length - 1 && "\u00A0"}
                            </span>
                        ))}
                    </h1>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto mb-10 reveal-up font-medium">
                        Zerixa Tech is a premium digital agency founded on the belief that great technology should be accessible to every ambitious business. We combine design thinking with engineering excellence.
                    </p>
                    <Magnetic>
                        <Link href="/contact" className="btn-primary shadow-xl hover:shadow-primary/20">
                            Work With Us <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Magnetic>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-white border-y border-black/5 relative z-20">
                <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
                    {[
                        { n: '20+', l: 'Projects', i: CheckCircle },
                        { n: '20+', l: 'Clients', i: Users },
                        { n: '2+', l: 'Years', i: Award },
                        { n: '12+', l: 'Team', i: TrendingUp },
                    ].map(({ n, l, i: Icon }, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                                <Icon className="w-7 h-7 text-primary" />
                            </div>
                            <div className="font-display font-extrabold text-4xl gradient-text mb-1">{n}</div>
                            <p className="text-slate-500 text-sm font-bold tracking-wide uppercase">{l}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Founder Message */}
            <section className="section-padding bg-slate-50 relative border-y border-black/5">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full opacity-50" />
                        <Link
                            href="https://viibetechnexus.web.app/"
                            target="_blank"
                            className="bg-white border border-black/10 p-1.5 rounded-[2.2rem] relative z-10 transform-gpu transition-all duration-700 hover:rotate-y-3 hover:-rotate-x-3 block shadow-2xl"
                        >
                            <img src="/Vibetech.png" alt="Team" className="w-full h-[200px] sm:h-[300px] md:h-[540px] object-contain bg-white rounded-[1.8rem] transition-all duration-700" />
                            <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 bg-white/90 backdrop-blur-md border border-black/10 p-4 md:p-6 rounded-2xl shadow-xl text-center">
                                <h4 className="text-slate-900 font-bold text-lg md:text-xl">Zerixa Tech Team</h4>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <div className="badge-orange mb-4">⟹ A Message From Zerixa Tech Team</div>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
                            Building Tools For <span className="gradient-text">Tomorrow</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                            <p>
                                When We started Zerixa Tech in 2025, the digital landscape was already crowded. But We noticed a gap: bridging the gap between world-class, breathtaking design and robust, scalable engineering.
                            </p>
                            <p>
                                Too many agencies treat software as a mere utility. We believe software is an experience. It should evoke emotion, instill trust, and operate flawlessly at scale.
                            </p>
                            <p>
                                Every project we undertake is a partnership. We do not just build apps; we engineer the future of your business. Our mission is to ensure that your digital presence vibrates with energy, precision, and purpose.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-padding relative bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="badge-orange mb-4">⟹ Our Core Pillars</div>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900">
                            What We <span className="gradient-text">Stand For</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, idx) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white border border-black/5 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group text-center"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-all duration-300">
                                    <v.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="font-display font-bold text-xl text-slate-900 mb-3 tracking-tight font-black">{v.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Team */}
            <section className="section-padding relative bg-slate-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <div className="badge-orange mb-4">⟹ Brains Behind Zerixa Tech</div>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900">
                            The <span className="gradient-text">Experts</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-full"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative h-full flex flex-col bg-white border border-black/5 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 overflow-hidden">
                                    <div
                                        className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center text-white font-display font-black text-3xl border-4 border-white group-hover:scale-110 transition-transform duration-500 shadow-xl overflow-hidden"
                                        style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}
                                    >
                                        {/* @ts-ignore */}
                                        {member.image ? (
                                            /* @ts-ignore */
                                            <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
                                        ) : (
                                            member.name[0]
                                        )}
                                    </div>
                                    <h3 className="font-display font-black text-slate-900 text-xl mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4">{member.role}</p>

                                    {/* @ts-ignore */}
                                    {member.social && (
                                        <div className="flex justify-center gap-3 mt-auto pt-4">
                                            {/* @ts-ignore */}
                                            {member.social.github && (
                                                <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                                    <Github className="w-4 h-4" />
                                                </a>
                                            )}
                                            {/* @ts-ignore */}
                                            {member.social.portfolio && (
                                                <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                                    <Globe className="w-4 h-4" />
                                                </a>
                                            )}
                                            {/* @ts-ignore */}
                                            {member.social.linkedin && (
                                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                                    <Linkedin className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="section-padding relative bg-white">
                <div className="container-custom text-center">
                    <div className="badge-orange mb-4">⟹ Global Reach</div>
                    <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-16">
                        Operating <span className="gradient-text">Worldwide</span>
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { city: 'India', address: 'Global Remote Delivery', phone: '+91 80797 67676' },
                            { city: 'WhatsApp', address: 'Available 24/7 for Inquiry', phone: '+91 80797 67676' },
                            { city: 'Email', address: 'Official Correspondence', phone: 'hello@zerixatech.com' }
                        ].map((loc, i) => (
                            <motion.div
                                key={loc.city}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-slate-50 border border-black/5 rounded-3xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">📍</div>
                                <h3 className="font-display font-black text-2xl text-slate-900 mb-2">{loc.city}</h3>
                                <p className="text-slate-500 text-sm mb-4 font-medium">{loc.address}</p>
                                <a href={`tel:${loc.phone}`} className="text-primary font-black hover:underline">{loc.phone}</a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers CTA */}
            <section className="section-padding bg-slate-50 border-t border-black/5">
                <div className="container-custom text-center max-w-3xl mx-auto">
                    <h2 className="font-display font-black text-4xl md:text-5xl text-slate-900 mb-6 leading-tight">
                        Ready To <span className="gradient-text">Build The Future?</span>
                    </h2>
                    <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                        We're always looking for world-class talent to join our mission. Explore our open roles or just reach out.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Magnetic>
                            <Link href="/contact" className="btn-primary shadow-xl">
                                Join Our Team <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/services" className="btn-outline border-black/10 text-slate-900 hover:bg-slate-100">
                                View Our Services
                            </Link>
                        </Magnetic>
                    </div>
                </div>
            </section>
        </div>
    )
}
