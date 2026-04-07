'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Zap, ArrowRight } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import ParticleBackground from '@/components/ui/ParticleBackground'


const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'hello@zerixatech.com', href: 'mailto:hello@zerixatech.com', color: '#A30927' },
    { icon: Phone, label: 'Call / WhatsApp', value: '+91 80797 67676', href: 'https://wa.me/918079767676', color: '#FFFFFF' },
    { icon: MapPin, label: 'Location', value: 'India (Global Remote Delivery)', href: '#', color: '#A30927' },
]

const whyUs = [
    { icon: CheckCircle, text: '48-hour response guarantee' },
    { icon: Users, text: 'Dedicated project manager' },
    { icon: Zap, text: 'Free strategy consultation' },
]

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden bg-slate-50">
                <ParticleBackground />
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
                    animate={{
                        x: (mousePos.x - winSize.w / 2) * 0.02,
                        y: (mousePos.y - winSize.h / 2) * 0.02,
                    }}
                />
                <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                    <div className="badge-orange mb-5 animate-breathe inline-block">⟹ Get In Touch</div>
                    <h1 className="font-display font-black text-5xl md:text-7xl text-slate-900 leading-tight mb-6 tracking-tight">
                        {"Let's Build ".split("").map((char, i) => (
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
                        {"Something ".split("").map((char, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.03 }}
                                className="char-reveal"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <span className="gradient-text">Great</span>
                    </h1>
                    <p className="text-slate-600 text-xl leading-relaxed max-w-2xl mx-auto reveal-up font-medium">
                        Tell us about your project. We'll get back to you within 48 hours with a tailored strategy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-white">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Form Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700" />
                        <div className="relative bg-white border border-black/5 rounded-[2.5rem] p-10 md:p-12 overflow-hidden shadow-2xl">
                            <AnimatePresence mode='wait'>
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="w-12 h-12 text-primary" />
                                        </div>
                                        <h3 className="font-display font-black text-3xl text-slate-900 mb-4 tracking-tight">Message Sent!</h3>
                                        <p className="text-slate-500 text-lg font-medium">We'll get back to you within 48 hours. <br />Check your inbox for confirmation.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    placeholder="e.g. John Doe"
                                                    className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 text-slate-900 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium placeholder:text-slate-300"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1">Work Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={form.email}
                                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                                    placeholder="e.g. john@company.com"
                                                    className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 text-slate-900 focus:bg-white focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium placeholder:text-slate-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1">Service Interested In</label>
                                            <div className="relative">
                                                <select
                                                    value={form.service}
                                                    onChange={e => setForm({ ...form, service: e.target.value })}
                                                    className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 text-slate-900 focus:bg-white focus:border-primary/50 transition-all outline-none appearance-none font-medium"
                                                >
                                                    <option value="" className="bg-white">Select a service...</option>
                                                    <option className="bg-white">Website Development</option>
                                                    <option className="bg-white">E-Commerce Website</option>
                                                    <option className="bg-white">Mobile App Development</option>
                                                    <option className="bg-white">Maintenance (AMC)</option>
                                                    <option className="bg-white">Digital Marketing</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                    <ArrowRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-slate-400 text-[10px] font-black uppercase tracking-widest pl-1">Your Vision</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={e => setForm({ ...form, message: e.target.value })}
                                                placeholder="Tell us about your project, goals, and timeline..."
                                                className="w-full bg-slate-50 border border-black/5 rounded-2xl px-6 py-4 text-slate-900 focus:bg-white focus:border-primary/50 transition-all outline-none resize-none font-medium placeholder:text-slate-300"
                                            />
                                        </div>
                                        <Magnetic>
                                            <button type="submit" className="btn-primary w-full py-5 text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                                                Start Your Project <Send className="w-5 h-5 ml-2" />
                                            </button>
                                        </Magnetic>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Info Side */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="font-display font-black text-3xl text-slate-900 tracking-tight">Direct Connect</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {contactInfo.map((item, idx) => (
                                    <Magnetic key={idx}>
                                        <a
                                            href={item.href}
                                            className="group flex items-start gap-6 p-8 bg-slate-50 border border-black/5 rounded-[2rem] hover:bg-white hover:shadow-2xl transition-all duration-300"
                                        >
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform bg-white"
                                                style={{ border: `1px solid ${item.color === '#FFFFFF' ? '#e2e8f0' : item.color + '30'}` }}
                                            >
                                                <item.icon className="w-6 h-6" style={{ color: item.color === '#FFFFFF' ? '#000000' : item.color }} />
                                            </div>
                                            <div>
                                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1.5">{item.label}</p>
                                                <p className="text-slate-900 text-xl font-bold group-hover:text-primary transition-colors">{item.value}</p>
                                            </div>
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-50 border border-black/5 rounded-[2.5rem] p-10 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                            <h3 className="font-display font-black text-xl text-slate-900 mb-8 relative z-10 tracking-tight">Uncompromising Partnership</h3>
                            <div className="space-y-5 relative z-10">
                                {whyUs.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-5 group/item">
                                        <div className="w-12 h-12 rounded-xl bg-white border border-black/5 flex items-center justify-center group-hover/item:border-primary/30 group-hover/item:bg-primary/5 transition-all shadow-sm">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-slate-600 font-bold">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
