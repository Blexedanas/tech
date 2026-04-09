'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Zap, ArrowRight } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import ParticleBackground from '@/components/ui/ParticleBackground'


const contactInfo = [
    { icon: Mail, label: 'Email Us', value: 'prime@zerixatech.com', href: 'mailto:prime@zerixatech.com', color: '#A30927' },
    { icon: Phone, label: 'Call / WhatsApp', value: '+91 80797 67676', href: 'https://wa.me/918079767676', color: '#FFFFFF' },
    { icon: MapPin, label: 'Location', value: 'India (Global Remote Delivery)', href: '#', color: '#A30927' },
]

const whyUs = [
    { icon: CheckCircle, text: '48-hour response guarantee' },
    { icon: Users, text: 'Dedicated project manager' },
    { icon: Zap, text: 'Free strategy consultation' },
]

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('submitting')

        try {
            const response = await fetch('https://formspree.io/f/mdapvbbg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                setStatus('success')
                setForm({ name: '', email: '', company: '', service: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        }
    }

    return (
        <div className="bg-navy min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
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
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <br />
                        <span className="gradient-text italic">Something Great</span>
                    </h1>
                    <p className="text-text-2 text-xl leading-relaxed max-w-2xl mx-auto reveal-up font-medium">
                        Tell us about your project. We'll get back to you within 48 hours with a tailored strategy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 bg-navy relative z-10">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Form Side */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700" />
                        <div className="relative bg-navy-mid border border-border rounded-[2.5rem] p-10 md:p-12 overflow-hidden shadow-2xl">
                            <AnimatePresence mode='wait'>
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle className="w-12 h-12 text-primary" />
                                        </div>
                                        <h3 className="font-display font-black text-3xl text-text-1 mb-4 tracking-tight">Message Sent!</h3>
                                        <p className="text-text-2 text-lg font-medium">We'll get back to you within 48 hours. <br />Check your inbox for confirmation.</p>
                                        <button 
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 text-primary font-bold hover:underline"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        {status === 'error' && (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium mb-6">
                                                Oops! Something went wrong. Please try again or contact us directly.
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-text-4 text-[10px] font-black uppercase tracking-widest pl-1">Full Name</label>
                                                <input
                                                    required
                                                    name="name"
                                                    type="text"
                                                    value={form.name}
                                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                                    placeholder="e.g. John Doe"
                                                    className="w-full bg-navy border border-border rounded-2xl px-6 py-4 text-text-1 focus:bg-navy-mid focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium placeholder:text-text-4/30"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-text-4 text-[10px] font-black uppercase tracking-widest pl-1">Work Email</label>
                                                <input
                                                    required
                                                    name="email"
                                                    type="email"
                                                    value={form.email}
                                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                                    placeholder="e.g. john@company.com"
                                                    className="w-full bg-navy border border-border rounded-2xl px-6 py-4 text-text-1 focus:bg-navy-mid focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium placeholder:text-text-4/30"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-text-4 text-[10px] font-black uppercase tracking-widest pl-1">Service Interested In</label>
                                            <div className="relative">
                                                <select
                                                    name="service"
                                                    value={form.service}
                                                    onChange={e => setForm({ ...form, service: e.target.value })}
                                                    className="w-full bg-navy border border-border rounded-2xl px-6 py-4 text-text-1 focus:bg-navy-mid focus:border-primary/50 transition-all outline-none appearance-none font-medium"
                                                >
                                                    <option value="" className="bg-navy-mid">Select a service...</option>
                                                    
                                                    <optgroup label="Development" className="bg-navy-mid text-primary font-bold">
                                                        <option className="bg-navy-mid text-text-1">Web Development</option>
                                                        <option className="bg-navy-mid text-text-1">App Development</option>
                                                        <option className="bg-navy-mid text-text-1">Software Development</option>
                                                        <option className="bg-navy-mid text-text-1">App & Web Maintenance</option>
                                                        <option className="bg-navy-mid text-text-1">AI/ML Solutions</option>
                                                        <option className="bg-navy-mid text-text-1">Automation</option>
                                                    </optgroup>

                                                    <optgroup label="Marketing" className="bg-navy-mid text-primary font-bold">
                                                        <option className="bg-navy-mid text-text-1">Digital Marketing</option>
                                                        <option className="bg-navy-mid text-text-1">Content Marketing</option>
                                                        <option className="bg-navy-mid text-text-1">Influencer Marketing</option>
                                                        <option className="bg-navy-mid text-text-1">Performance Marketing</option>
                                                        <option className="bg-navy-mid text-text-1">SEO Services</option>
                                                        <option className="bg-navy-mid text-text-1">Apps Marketing</option>
                                                    </optgroup>

                                                    <optgroup label="Branding" className="bg-navy-mid text-primary font-bold">
                                                        <option className="bg-navy-mid text-text-1">Brand Management</option>
                                                        <option className="bg-navy-mid text-text-1">Brand Identity</option>
                                                        <option className="bg-navy-mid text-text-1">Brand Guidelines</option>
                                                        <option className="bg-navy-mid text-text-1">Graphic Design</option>
                                                        <option className="bg-navy-mid text-text-1">Logo Design</option>
                                                        <option className="bg-navy-mid text-text-1">Packaging Design</option>
                                                    </optgroup>

                                                    <optgroup label="Paid Advertising" className="bg-navy-mid text-primary font-bold">
                                                        <option className="bg-navy-mid text-text-1">Google Ads</option>
                                                        <option className="bg-navy-mid text-text-1">Instagram Ads</option>
                                                        <option className="bg-navy-mid text-text-1">Facebook Ads</option>
                                                        <option className="bg-navy-mid text-text-1">Meta Ads</option>
                                                        <option className="bg-navy-mid text-text-1">PPC Ads</option>
                                                        <option className="bg-navy-mid text-text-1">Bing Ads</option>
                                                    </optgroup>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-4">
                                                    <ArrowRight className="w-4 h-4 rotate-90" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-text-4 text-[10px] font-black uppercase tracking-widest pl-1">Your Vision</label>
                                            <textarea
                                                required
                                                name="message"
                                                rows={5}
                                                value={form.message}
                                                onChange={e => setForm({ ...form, message: e.target.value })}
                                                placeholder="Tell us about your project, goals, and timeline..."
                                                className="w-full bg-navy border border-border rounded-2xl px-6 py-4 text-text-1 focus:bg-navy-mid focus:border-primary/50 transition-all outline-none resize-none font-medium placeholder:text-text-4/30"
                                            />
                                        </div>
                                        <Magnetic>
                                            <button 
                                                type="submit" 
                                                disabled={status === 'submitting'}
                                                className={`btn-primary w-full py-5 text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {status === 'submitting' ? (
                                                    <>Processing... <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                                                ) : (
                                                    <>Start Your Project <Send className="w-5 h-5 ml-2" /></>
                                                )}
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
                            <h2 className="font-display font-black text-3xl text-text-1 tracking-tight italic uppercase">Direct Connect</h2>
                            <div className="grid grid-cols-1 gap-4">
                                {contactInfo.map((item, idx) => (
                                    <Magnetic key={idx}>
                                        <a
                                            href={item.href}
                                            className="group flex items-start gap-6 p-8 bg-navy-mid border border-border rounded-[2rem] hover:bg-navy hover:shadow-2xl transition-all duration-300"
                                        >
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform bg-navy border border-border"
                                            >
                                                <item.icon className="w-6 h-6" style={{ color: item.color === '#FFFFFF' ? '#A30927' : item.color }} />
                                            </div>
                                            <div>
                                                <p className="text-text-4 text-[10px] font-black uppercase tracking-widest mb-1.5">{item.label}</p>
                                                <p className="text-text-1 text-xl font-bold group-hover:text-primary transition-colors">{item.value}</p>
                                            </div>
                                        </a>
                                    </Magnetic>
                                ))}
                            </div>
                        </div>

                        <div className="bg-navy-mid border border-border rounded-[2.5rem] p-10 overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full" />
                            <h3 className="font-display font-black text-xl text-text-1 mb-8 relative z-10 tracking-tight uppercase italic">Uncompromising Partnership</h3>
                            <div className="space-y-5 relative z-10">
                                {whyUs.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-5 group/item">
                                        <div className="w-12 h-12 rounded-xl bg-navy border border-border flex items-center justify-center group-hover/item:border-primary/30 group-hover/item:bg-primary/5 transition-all shadow-sm">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="text-text-2 font-bold">{item.text}</span>
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

