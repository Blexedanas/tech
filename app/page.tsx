'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FloatingButtons from '@/components/layout/FloatingButtons'
import {
    ArrowRight, Globe, Smartphone, Code, Palette, Brain, Cpu,
    ChevronRight, Star, Quote, CheckCircle, TrendingUp, Users, Award, Zap,
    ChevronLeft, Play, MousePointer, Shield, PhoneCall, Target, Lightbulb
} from 'lucide-react'

import Magnetic from '@/components/ui/Magnetic'
import { motion, AnimatePresence } from 'framer-motion'
import FoundersSection from '@/components/sections/FoundersSection'

// --- DATA ---
const techLogos = [
    { name: 'React', emoji: '⚛️' },
    { name: 'Next.js', emoji: '▲' },
    { name: 'Node.js', emoji: '🟢' },
    { name: 'Python', emoji: '🐍' },
    { name: 'Flutter', emoji: '💙' },
    { name: 'React Native', emoji: '📱' },
    { name: 'AWS', emoji: '☁️' },
    { name: 'Firebase', emoji: '🔥' },
    { name: 'TensorFlow', emoji: '🧠' },
    { name: 'TypeScript', emoji: '🔷' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'PostgreSQL', emoji: '🐘' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'Figma', emoji: '🎨' },
]

const industries = [
    { icon: '🏦', title: 'FinTech', desc: 'Banking apps, dashboards & payment systems' },
    { icon: '🏥', title: 'Healthcare', desc: 'Patient portals, telemedicine & healthtech' },
    { icon: '🛍️', title: 'eCommerce', desc: 'AI-powered stores & marketplaces' },
    { icon: '🎓', title: 'EdTech', desc: 'LMS, e-learning platforms & ed apps' },
    { icon: '🏘️', title: 'Real Estate', desc: 'Property listing & management systems' },
    { icon: '🚚', title: 'Logistics', desc: 'Fleet tracking & supply chain solutions' },
    { icon: '🎮', title: 'Gaming', desc: 'Game apps, portals & leaderboards' },
    { icon: '🔋', title: 'Energy & IoT', desc: 'Smart devices & energy dashboards' },
]

const services = [
    { icon: TrendingUp, title: 'Marketing', desc: 'Data-driven growth strategies (SEO, Ads, Social) to scale your brand presence and ROI.', color: '#E8712C', gradient: 'from-orange-400/10 to-transparent', tags: ['SEO', 'Google Ads', 'Organic Social'], href: '/services', image: '/services/marketing.png' },
    { icon: Globe, title: 'Development', desc: 'High-performance web and software solutions built with modern frameworks and pixel-perfect UI.', color: '#0A66FF', gradient: 'from-primary/10 to-transparent', tags: ['Next.js', 'React', 'Shopify', 'PHP'], href: '/services', image: '/services/development.png' },
    { icon: Palette, title: 'Branding', desc: 'End-to-end brand identity and graphic design that communicates your vision effectively.', color: '#9b59b6', gradient: 'from-purple-400/10 to-transparent', tags: ['Logo Design', 'UI/UX', 'Brand Identity'], href: '/services', image: '/services/branding.png' },
    { icon: Zap, title: 'Paid Advertising', desc: 'Maximize your ROI with precision-targeted ad campaigns across all major digital platforms.', color: '#0F172A', gradient: 'from-slate-400/10 to-transparent', tags: ['PPC', 'Meta Ads', 'Bing Ads'], href: '/services', image: '/services/marketing.png' }, // Placeholder reused as 4th image
]

const steps = [
    { num: '01', title: 'Discover', desc: 'We dive deep into your goals, users, and market to uncover strategic opportunities.' },
    { num: '02', title: 'Design', desc: 'We craft wireframes and high-fidelity prototypes that delight before a line of code is written.' },
    { num: '03', title: 'Develop', desc: 'Our engineers build robust, scalable solutions using best-in-class technologies.' },
    { num: '04', title: 'Deliver', desc: 'We deploy, test, and support — ensuring a flawless launch and continuous improvement.' },
]

const portfolio = [
    {
        title: 'FinFlow — Banking Dashboard',
        category: 'Web',
        tags: ['React', 'Node.js', 'PostgreSQL'],
        color: '#E8712C',
        desc: 'A comprehensive fintech dashboard with real-time transaction tracking, analytics, and AI-powered insights.',
    },
    {
        title: 'MedSync — Healthcare App',
        category: 'Mobile',
        tags: ['React Native', 'Firebase', 'AI'],
        color: '#60a5fa',
        desc: 'Patient management platform connecting doctors and patients with smart appointment scheduling and telemedicine.',
    },
    {
        title: 'ShopAI — E-commerce Platform',
        category: 'AI',
        tags: ['Next.js', 'Python', 'TensorFlow'],
        color: '#a78bfa',
        desc: 'AI-powered eCommerce with personalized recommendations, dynamic pricing, and 3D product visualization.',
    },
    {
        title: 'TaskFlow — Project Manager',
        category: 'Web',
        tags: ['Next.js', 'MongoDB', 'TypeScript'],
        color: '#34d399',
        desc: 'Enterprise-grade project management tool with Kanban boards, analytics, and real-time collaboration.',
    },
    {
        title: 'RideX — Driver App',
        category: 'Mobile',
        tags: ['Flutter', 'Firebase', 'Google Maps'],
        color: '#f472b6',
        desc: 'Full-featured ride-hailing mobile app with live tracking, in-app payments, and offline support.',
    },
    {
        title: 'NeuralChat — AI Assistant',
        category: 'AI',
        tags: ['Python', 'LangChain', 'FastAPI'],
        color: '#fb923c',
        desc: 'Custom LLM-powered chatbot for enterprise customer support, trained on company knowledge bases.',
    },
]

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CTO, FinFlow Inc.',
        text: 'Zerixa Tech delivered an exceptional banking dashboard beyond our expectations. The attention to detail, performance, and security was outstanding. Highly recommended.',
        rating: 5,
    },
    {
        name: 'Marcus Williams',
        role: 'Founder, MedSync',
        text: 'The team at Zerixa Tech truly understood our vision. They turned a complex healthcare requirement into an intuitive, beautiful app in record time.',
        rating: 5,
    },
    {
        name: 'Aisha Patel',
        role: 'Product Lead, ShopAI',
        text: 'Working with Zerixa Tech was seamless from day one. Their process is transparent, their code is clean, and the results speak for themselves.',
        rating: 5,
    },
]

const stats = [
    { value: 50, suffix: '+', label: 'Projects Delivered', icon: CheckCircle },
    { value: 80, suffix: '+', label: 'Happy Clients', icon: Users },
    { value: 1, suffix: '+', label: 'Years of Excellence', icon: Award },
    { value: 99, suffix: '%', label: 'Client Satisfaction', icon: TrendingUp },
]

const faqs = [
    { q: 'What digital marketing services do you offer?', a: 'We offer comprehensive strategies including SEO, social media management, targeted ad campaigns, and deep data analytics to maximize your reach and conversion rates.' },
    { q: 'Do you build mobile apps for both iOS and Android?', a: 'Yes, we develop high-performance, cross-platform native applications using modern frameworks, ensuring a flawless user experience across all devices.' },
    { q: 'How can business automation help my company?', a: 'Automation streamlines repetitive tasks, integrates your internal software tools (like CRM and billing), and reduces human error, saving you hundreds of operational hours every month.' },
    { q: 'How long does a typical project take?', a: 'Standard website projects usually take 4-6 weeks, while complex AI solutions or custom app development can range from 8-12 weeks depending on scope.' },
    { q: 'Do you offer post-launch support?', a: 'Absolutely. We provide comprehensive maintenance packages including security updates, performance monitoring, and targeted growth updates.' },
    { q: 'Can you integrate AI into my existing infrastructure?', a: 'Yes. We specialize in building AI layers (chatbots, recommendation engines, smart automations) that sit perfectly atop your current digital ecosystem.' },
    { q: 'How do you handle project data security?', a: 'We follow enterprise-grade security protocols, including encrypted data storage, secure API authentications, and regular vulnerability audits.' },
]

const expandedTestimonials = [
    { name: 'Sarah Chen', role: 'CTO, FinFlow Inc.', text: 'Zerixa Tech delivered an exceptional banking dashboard beyond our expectations. The attention to detail and security was outstanding.', rating: 5 },
    { name: 'Marcus Williams', role: 'Founder, MedSync', text: 'The team truly understood our vision. They turned a complex requirement into an intuitive, beautiful app in record time.', rating: 5 },
    { name: 'Aisha Patel', role: 'Product Lead, ShopAI', text: 'Seamless from day one. Their process is transparent, their code is clean, and the results speak for themselves.', rating: 5 },
    { name: 'David Miller', role: 'CEO, Nexus Logix', text: 'Highly impressed with their technical depth. The ROI on our new AI-driven platform has been incredible.', rating: 5 },
    { name: 'Elena Rossi', role: 'Marketing Director, Voda', text: 'Our brand identity was completely transformed. We now have a cohesive, premium look that resonates globally.', rating: 5 },
    { name: 'James Wilson', role: 'Founder, GreenTech', text: 'The most professional agency we have ever worked with. They treat your business as their own.', rating: 5 },
    { name: 'Priya Sharma', role: 'Operations Head, EduPulse', text: 'Exceptional developers. Our LMS is now handling 50k+ users with zero downtime thanks to their architecture.', rating: 5 },
    { name: 'Thomas Wright', role: 'Director, SkyView', text: 'Their 3D design capabilities are unmatched. They didn’t just build a site, they built an experience.', rating: 5 },
    { name: 'Karim Abdullah', role: 'CTO, Oasis Digital', text: 'Reliable, fast, and creative. Zerixa Tech is our go-to partner for all critical software development.', rating: 5 },
    { name: 'Sophie Laurent', role: 'Founder, LuxeStyle', text: 'A level of craftsmanship rarely seen in digital agencies. Absolute perfectionists.', rating: 5 },
]

// --- COMPONENTS ---
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                let start = 0
                const duration = 1800
                const step = Math.ceil(value / (duration / 16))
                const timer = setInterval(() => {
                    start += step
                    if (start >= value) { setCount(value); clearInterval(timer) }
                    else setCount(start)
                }, 16)
            }
        }, { threshold: 0.5 })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [value])

    return <div ref={ref}>{count}{suffix}</div>
}

// Features for solutions section
const features = [
    { title: 'Quick Setup', desc: 'From concept to deployment in weeks, not months.' },
    { title: 'Premium UX', desc: 'Interfaces users actually love and return to.' },
    { title: 'Clean Code', desc: 'Maintainable, documented, and scalable architecture.' },
    { title: '100% Custom', desc: 'No templates. Built specifically for your brand.' },
]

// Floating tech badge positions on the featured card
const floatPositions = [
    { top: '12%', left: '10%' },
    { top: '10%', right: '12%' },
    { top: '45%', left: '4%' },
    { top: '45%', right: '4%' },
    { bottom: '15%', left: '10%' },
    { bottom: '12%', right: '10%' },
]

// ServicesCarousel Spotlight Showcase - Redesigned with Auto-Scroll and Premium Images
function ServicesCarousel({ services }: { services: any[] }) {
    const [active, setActive] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const featured = services[active]

    useEffect(() => {
        if (isPaused) return
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % services.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [isPaused, services.length])

    return (
        <div className="py-10" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                {/* Featured Spotlight Card */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl w-full lg:w-[500px] min-h-[600px] group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ x: '20%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: '-20%', opacity: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 p-12 flex flex-col justify-end"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src={featured.image} 
                                    alt={featured.title} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
                            </div>

                            {/* Floating Decorative Tags */}
                            <div className="absolute top-10 left-10 flex flex-wrap gap-2 z-20">
                                {featured.tags.map((tag: string) => (
                                    <span key={tag} className="px-4 py-1.5 rounded-full text-[10px] font-black bg-navy/10 text-white border border-white/20 backdrop-blur-md uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Text Content */}
                            <div className="relative z-20">
                                <h3 className="font-display font-black text-3xl md:text-5xl text-white mb-4 leading-tight break-words">{featured.title}</h3>
                                <p className="text-white/70 text-sm md:text-lg mb-6 md:mb-8 max-w-sm font-medium leading-relaxed">{featured.desc}</p>
                                <Link href={featured.href} className="btn-primary bg-navy text-primary hover:bg-navy hover:scale-105 border-none shadow-xl py-4 px-10 text-sm font-black uppercase tracking-widest inline-flex">
                                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Auto-scroll progress bar (Fixed at bottom of container) */}
                    <div className="absolute bottom-0 left-0 h-1.5 bg-navy/10 w-full z-30">
                        <motion.div 
                            key={active}
                            initial={{ width: '0%' }}
                            animate={{ width: isPaused ? '0%' : '100%' }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="h-full bg-primary shadow-[0_0_15px_rgba(10,102,255,0.8)]"
                        />
                    </div>
                </div>

                {/* Grid of Other Categories */}
                <div className="flex-1 grid grid-cols-2 gap-6">
                    {services.map((s, i) => (
                        <button
                            key={s.title}
                            onClick={() => {
                                setActive(i)
                                setIsPaused(true)
                            }}
                            className={`relative rounded-[2.5rem] p-10 flex flex-col items-center justify-center gap-6 transition-all duration-500 group overflow-hidden border ${
                                active === i 
                                ? 'bg-primary border-primary shadow-2xl scale-105' 
                                : 'card-blue-premium border-white/5 opacity-80 hover:opacity-100 hover:shadow-xl'
                            }`}
                        >
                            <div className={`w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 overflow-hidden relative ${
                                active === i ? 'bg-navy shadow-xl' : 'bg-navy border border-border'
                            }`}>
                                {active === i ? (
                                    <s.icon className="w-10 h-10 text-primary relative z-10" />
                                ) : (
                                    <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                                )}
                            </div>
                            <span className={`font-display font-black text-xs uppercase tracking-widest transition-colors ${
                                active === i ? 'text-white' : 'text-text-4 group-hover:text-text-1'
                            }`}>
                                {s.title}
                            </span>

                            {active === i && (
                                <motion.div 
                                    layoutId="active-indicator"
                                    className="absolute inset-0 border-2 border-white/20 rounded-[2.5rem] pointer-events-none"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    const [activeTestimonial, setActiveTestimonial] = useState(0)
    const [activePortfolioTab, setActivePortfolioTab] = useState('All')


    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [winSize, setWinSize] = useState({ w: 1200, h: 800 })

    useEffect(() => {
        setWinSize({ w: window.innerWidth, h: window.innerHeight })
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
        }
        const handleResize = () => setWinSize({ w: window.innerWidth, h: window.innerHeight })
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <main>
            {/* HERO */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                {/* Background effects */}
                <div className="absolute inset-0 z-0">
                    <motion.div
                        className="hero-blob top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30"
                        animate={{
                            x: (mousePos.x - winSize.w / 2) * 0.02,
                            y: (mousePos.y - winSize.h / 2) * 0.02,
                        }}
                    />
                    <motion.div
                        className="hero-blob bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple/20"
                        style={{ animationDelay: '2s' }}
                        animate={{
                            x: (mousePos.x - winSize.w / 2) * -0.03,
                            y: (mousePos.y - winSize.h / 2) * -0.03,
                        }}
                    />
                    <div className="absolute inset-0 grid-pattern opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/90 to-navy" />
                </div>

                <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12">
                    {/* Text content */}
                    <div className="order-2 lg:order-1 reveal-left">
                        <div className="badge-orange mb-6 animate-breathe">
                            <Zap className="w-3.5 h-3.5 fill-primary" />
                            Premium Digital Agency
                        </div>
                        <h1 className="font-display font-extrabold text-5xl md:text-7xl text-slate-900 leading-[1.1] tracking-tight mb-6" style={{ color: 'var(--text-1)' }}>
                            {"Scale Your".split(" ").map((word, wordIdx, arr) => (
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
                            {" "}
                            <span className="text-accent-blue italic tracking-tight">Vision</span>
                            <br />
                            {"With Precision".split(" ").map((word, wordIdx, arr) => (
                                <span key={wordIdx} className="inline-block whitespace-nowrap">
                                    {word.split("").map((char, i) => (
                                        <motion.span
                                            key={`${wordIdx}-${i}`}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + (wordIdx * 5 + i) * 0.03 }}
                                            className="char-reveal"
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                    {wordIdx !== arr.length - 1 && "\u00A0"}
                                </span>
                            ))}
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-lg mb-10" style={{ color: 'var(--text-2)' }}>
                            We craft exceptional digital products — high-end websites, mobile apps, and AI solutions that captivate audiences and accelerate growth.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5 w-full max-w-xl">
                            <Magnetic>
                                <Link href="/contact" className="btn-primary group w-full sm:w-auto justify-center">
                                    <span>Start Your Transformation</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/portfolio" className="btn-outline group w-full sm:w-auto justify-center">
                                    <Play className="w-4 h-4 fill-slate-900 group-hover:fill-primary transition-colors" />
                                    <span>View Our Work</span>
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/services" className="btn-outline group w-full sm:w-auto justify-center">
                                    <Globe className="w-4 h-4 text-slate-900 group-hover:text-primary transition-colors" />
                                    <span>Our Services</span>
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/contact" className="btn-outline group w-full sm:w-auto justify-center">
                                    <PhoneCall className="w-4 h-4 text-slate-900 group-hover:text-primary transition-colors" />
                                    <span>Book a Call</span>
                                </Link>
                            </Magnetic>
                        </div>

                        {/* Social proof strip */}
                        <div className="mt-16 flex items-center gap-6 animate-fade-in delay-500">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden shadow-sm relative group">
                                        <img 
                                            src={`https://i.pravatar.cc/100?u=client${i}`} 
                                            alt="Client" 
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                                        />
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="flex gap-0.5 mb-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                                </div>
                                <p className="text-slate-500 text-sm font-medium" style={{ color: 'var(--text-3)' }}>
                                    Trusted by <span className="text-slate-900 font-bold" style={{ color: 'var(--text-1)' }}>50+ Global Clients</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3D Scene / Visual - Restored & Enhanced */}
                    <div className="order-1 lg:order-2 h-[450px] lg:h-[650px] w-full relative reveal-scale delay-200 flex items-center justify-center">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] animate-breathe" />
                        
                        {/* Visual Placeholder for 3D Scene - Image 2 Inspired */}
                        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
                            <motion.div 
                                className="relative w-80 h-80 md:w-96 md:h-96"
                                initial={{ rotate: -5 }}
                                animate={{ rotate: 0 }}
                            >
                                {/* Orbital paths */}
                                <motion.div 
                                    className="absolute inset-[-20%] border border-primary/20 rounded-full border-dashed"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                />
                                <motion.div 
                                    className="absolute inset-[-10%] border border-primary/10 rounded-full border-dashed"
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                />

                                <div className="absolute inset-0 bg-primary-dark/10 rounded-[3.5rem] rotate-12 opacity-10 animate-float" />
                                <div className="absolute inset-0 bg-navy/40 backdrop-blur-3xl rounded-[3rem] border border-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
                                    <div className="relative z-10 flex items-center justify-center w-full h-full scale-90 md:scale-100">
                                        {/* Central Core */}
                                        <motion.div 
                                            className="relative w-32 h-32 bg-gradient-to-br from-navy to-navy-mid rounded-[2rem] shadow-2xl border border-border flex items-center justify-center z-20"
                                            animate={{ y: [-5, 5, -5] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-[2rem] animate-pulse" />
                                            <Brain className="w-16 h-16 text-primary drop-shadow-lg" />
                                        </motion.div>
                                        
                                        {/* Orbiting Elements */}
                                        <motion.div 
                                            className="absolute w-56 h-56 border-2 border-dashed border-slate-300/50 rounded-full"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-navy rounded-xl shadow-lg flex items-center justify-center border border-border pointer-events-none">
                                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                                                    <Code className="w-5 h-5 text-blue-500" />
                                                </motion.div>
                                            </div>
                                            {/* Mobile */}
                                            <div className="absolute bottom-6 -right-2 w-12 h-12 bg-navy rounded-xl shadow-lg flex items-center justify-center border border-border pointer-events-none">
                                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                                                    <Smartphone className="w-5 h-5 text-orange-500" />
                                                </motion.div>
                                            </div>
                                            {/* Growth */}
                                            <div className="absolute bottom-6 -left-2 w-12 h-12 bg-navy rounded-xl shadow-lg flex items-center justify-center border border-border pointer-events-none">
                                                <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
                                                    <TrendingUp className="w-5 h-5 text-emerald-500" />
                                                </motion.div>
                                            </div>
                                        </motion.div>

                                        {/* Expanding pulse */}
                                        <motion.div 
                                            className="absolute inset-0 border-2 border-primary/20 rounded-full z-0"
                                            style={{ margin: 'auto', width: '128px', height: '128px' }}
                                            animate={{ scale: [1, 2.5], opacity: [0.8, 0] }}
                                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                                        />
                                    </div>
                                    <div className="absolute inset-0 dot-pattern opacity-10" />
                                </div>

                                {/* Floating Action Items */}
                                <div className="absolute -top-4 -right-4 px-4 py-2 bg-white shadow-xl rounded-full border border-black/5 flex items-center gap-2 animate-float">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Live Success</span>
                                </div>
                                
                                <div className="absolute top-10 right-0 bg-navy/90 backdrop-blur-xl border border-border shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-float z-20">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-text-1 font-bold text-sm leading-none">Top Rated</p>
                                        <p className="text-text-4 text-[10px] mt-1 font-medium italic">Clutch 5.0</p>
                                    </div>
                                </div>

                                <div className="absolute bottom-20 -left-4 bg-navy/90 backdrop-blur-xl border border-border shadow-xl rounded-2xl p-4 flex items-center gap-3 animate-float-slow delay-300 z-20">
                                    <div className="w-10 h-10 rounded-xl bg-purple/20 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-purple" />
                                    </div>
                                    <div>
                                        <p className="text-text-1 font-bold text-sm leading-none">Hyper Fast</p>
                                        <p className="text-text-4 text-[10px] mt-1 font-medium italic">Next.js 14</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>


                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-xs animate-bounce font-medium uppercase tracking-widest opacity-60">
                    <div className="w-5 h-8 border-2 border-black/10 rounded-full relative">
                        <div className="w-1 h-1 bg-primary rounded-full absolute top-1 left-1/2 -translate-x-1/2 animate-bounce" />
                    </div>
                </div>
            </section>

            <div className="py-20 bg-navy relative z-10 perspective-2000">
                <div className="tilt-3d py-10 border-y border-border bg-navy-mid relative">
                    {/* Edge Fades */}
                    <div className="absolute inset-y-0 left-0 w-8 md:w-64 bg-gradient-to-r from-navy-mid via-navy-mid/80 to-transparent z-20 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-8 md:w-64 bg-gradient-to-l from-navy-mid via-navy-mid/80 to-transparent z-20 pointer-events-none" />

                    {/* Row 1: Leftward */}
                    <div className="flex animate-marquee whitespace-nowrap mb-8 pb-4">
                        {[...techLogos, ...techLogos, ...techLogos].map((t, i) => (
                            <div key={`r1-${i}`} className="flex items-center gap-4 px-12 transition-all duration-500 group cursor-default shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-navy border border-border flex items-center justify-center text-3xl group-hover:scale-110 shadow-lg shadow-black/5 transition-all group-hover:shadow-primary/20 group-hover:-translate-y-2">
                                    {t.emoji}
                                </div>
                                <span className="text-text-1 font-display font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
                                    {t.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Row 2: Rightward (Reverse) */}
                    <div className="flex animate-marquee-reverse whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-500">
                        {[...techLogos, ...techLogos, ...techLogos].reverse().map((t, i) => (
                            <div key={`r2-${i}`} className="flex items-center gap-4 px-12 transition-all duration-500 group cursor-default shrink-0">
                                <div className="w-14 h-14 rounded-2xl bg-navy/80 border border-border flex items-center justify-center text-2xl group-hover:scale-110 shadow-md transition-all group-hover:shadow-purple/20 group-hover:-translate-y-2">
                                    {t.emoji}
                                </div>
                                <span className="text-text-2 font-display font-semibold text-lg tracking-tight group-hover:text-purple transition-colors">
                                    {t.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ═══════════════════ SERVICES ═══════════════════ */}
            <section className="section-padding relative">
                <div className="absolute inset-0 dot-pattern opacity-10" />

                <div className="container-custom relative">
                    <div className="mb-16 reveal">
                        <div className="badge-orange mb-5">⟹ What We Do</div>
                        <div className="grid lg:grid-cols-2 gap-10 items-end">
                            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-tight" style={{ color: 'var(--text-1)' }}>
                                One Stop Solution For <br />
                                <span className="text-accent-blue italic tracking-tight uppercase">All Your Need</span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed max-w-xl" style={{ color: 'var(--text-2)' }}>
                                Looking for a complete tech partner? Zerixa Tech is an all-in-one IT provider — covering high-end web & app development, UI/UX, AI solutions, and IoT systems.
                            </p>
                        </div>
                    </div>

                    <div className="reveal-up delay-200">
                        <ServicesCarousel services={services} />
                    </div>
                </div>
            </section>

            {/* ═══════════════════ SOLUTIONS / FEATURES ═══════════════════ */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#E8712C]/5 to-transparent pointer-events-none" />
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Visual (Living Dashboard) */}
                    <div className="relative group/dashboard perspective-2000 w-full overflow-hidden md:overflow-visible">
                        <motion.div
                            className="bg-navy-mid border border-border rounded-[2rem] md:rounded-[3rem] p-5 md:p-10 relative overflow-hidden shadow-2xl transition-all duration-700"
                            whileHover={{
                                rotateX: -5,
                                rotateY: 5,
                                scale: 1.02,
                                translateZ: 20
                            }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-navy-mid to-purple/10" />
                            <div className="absolute inset-0 border-animation" />

                            <div className="relative z-10 space-y-6">
                                {/* Mock UI screens with dynamic data */}
                                {[
                                    { label: 'Dashboard Analytics', w: '100%', color: 'var(--primary)', val: '98%' },
                                    { label: 'User Interface', w: '85%', color: '#60a5fa', val: '4.9★' },
                                    { label: 'API Performance', w: '92%', color: '#a78bfa', val: '99.9%' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-navy/60 backdrop-blur-md rounded-2xl p-5 border border-border shadow-sm group/bar transition-all hover:bg-navy/80" style={{ transform: 'translateZ(30px)' }}>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-text-4 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                            <span className="text-xs font-black" style={{ color: item.color }}>
                                                {item.val}
                                            </span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: item.w }}
                                                animate={{
                                                    width: [item.w, (parseInt(item.w) - 5) + '%', item.w],
                                                    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                                                }}
                                                style={{ background: `linear-gradient(90deg, ${item.color}, var(--primary))` }}
                                            />
                                        </div>
                                    </div>
                                ))}

                                {/* Code snippet with typing effect */}
                                <div className="bg-[#0F172A] rounded-2xl p-4 md:p-6 font-mono text-[10px] md:text-sm border border-white/5 shadow-2xl relative overflow-hidden" style={{ transform: 'translateZ(50px)' }}>
                                    <div className="absolute top-0 right-0 p-3 opacity-20">
                                        <div className="w-2 h-2 rounded-full bg-red-400 mb-1" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400 mb-1" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                        <div className="w-3 h-3 rounded-full bg-primary/20" />
                                        <span className="text-white/40 text-[10px]">build.ts</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="flex gap-2">
                                            <span className="text-[#60a5fa]">const</span>
                                            <span className="text-white">zerixatech</span>
                                            <span className="text-white/40">=</span>
                                            <span className="text-[#34d399]">new</span>
                                            <span className="text-[#a78bfa]">Agency</span>
                                            <span className="text-white/60">()</span>
                                        </p>
                                        <p className="flex gap-2">
                                            <span className="text-primary">await</span>
                                            <span className="text-white">zerixatech</span>
                                            <span className="text-white/40">.</span>
                                            <span className="text-[#60a5fa]">optimize</span>
                                            <span className="text-white/60">(</span>
                                            <span className="text-[#E8712C]">"premium"</span>
                                            <span className="text-white/60">)</span>
                                        </p>
                                        <p className="text-primary/60 mt-4 text-[11px] italic">// Success: 150+ engines running</p>
                                    </div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-[2px] bg-primary/50"
                                        animate={{ width: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* High-End Floating Badge */}
                        <motion.div
                            className="absolute -top-6 -right-6 w-24 h-24 rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark p-[1px] shadow-[0_20px_50px_rgba(115,188,243,0.3)] z-20 group-hover:scale-110 transition-transform duration-500"
                            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="w-full h-full rounded-[2rem] bg-[#0F172A] flex flex-col items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                                <div className="relative z-10 text-center">
                                    <div className="text-primary font-black text-2xl leading-none">99%</div>
                                    <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest mt-1">Growth</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Interactive Feature Cards */}
                    <div>
                        <div className="badge-orange mb-5">⟹ Why Us</div>
                        <h2 className="font-display font-black text-4xl md:text-5xl text-text-1 mb-8 uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            Software That <br />
                            <span className="text-[#1e3a8a] italic">Actually Moves You</span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="card-blue-premium p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] group overflow-hidden"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500">
                                        <CheckCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <h4 className="text-white font-display font-black uppercase tracking-tight italic mb-2 group-hover:text-white transition-colors">{f.title}</h4>
                                    <p className="text-white/90 text-sm leading-relaxed">{f.desc}</p>

                                    <div className="mt-4 flex opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-transparent" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ OUR PHILOSOPHY ═══════════════════ */}
            <section className="section-padding relative overflow-hidden" style={{ backgroundColor: 'var(--navy-mid)' }}>
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16 reveal">
                        <div className="badge-orange mb-5 animate-breathe inline-block">⟹ Our Philosophy</div>
                        <h2 className="font-display font-black text-4xl md:text-6xl text-text-1 mb-6 uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            The Foundations of <span className="text-[#1e3a8a] italic">Zerixa Tech</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: 'Visions', desc: 'To redefine the digital landscape by creating experiences that are not just highly functional, but profoundly impactful and scalable.', icon: Target },
                            { title: 'Mission', desc: 'To empower businesses globally through cutting-edge technology, striking design, and strategic automation tailored for massive growth.', icon: Zap },
                            { title: 'Value', desc: 'Transparency, relentless innovation, extreme ownership, and an absolute commitment to long-term client success.', icon: Shield },
                            { title: 'Purpose Opinion', desc: 'We firmly believe ordinary is the enemy. Every line of code and pixel we craft is driven by an obsession with absolute excellence.', icon: Lightbulb },
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="card-blue-premium p-8 relative overflow-hidden group shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
                                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md shadow-sm flex items-center justify-center mb-6 relative z-10 border border-white/20 group-hover:bg-white/20 transition-colors">
                                    <item.icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="font-display font-black text-2xl text-white mb-4 relative z-10 uppercase tracking-tight italic">{item.title}</h3>
                                <p className="text-white/90 leading-relaxed relative z-10 font-medium">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ FEATURES THAT DRIVE SUCCESS ═══════════════════ */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="text-center mb-16 reveal">
                        <div className="badge-orange mb-5">⟹ Performance First</div>
                        <h2 className="font-display font-black text-4xl md:text-6xl text-text-1 mb-6 uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            Features That <span className="text-accent-blue italic">Drive Success</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Lightning Speed', desc: 'Optimized for <1s load times. We use Next.js edge caching to ensure your users never wait.', icon: Zap },
                            { title: 'Enterprise Security', desc: 'Bank-grade encryption and secure authentication systems integrated from day one.', icon: Shield },
                            { title: 'AI Automation', desc: 'Intelligent workflows that save you hundreds of hours in manual operations.', icon: Brain },
                            { title: 'Global Scalability', desc: 'Built on cloud-native architecture that grows as your traffic increases.', icon: Globe },
                            { title: 'Pixel Perfect', desc: 'Immaculate design execution across all devices and screen resolutions.', icon: Palette },
                            { title: 'SEO Dominance', desc: 'Structured for visibility. We build search-engine-first architectures.', icon: TrendingUp },
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative card-blue-premium p-8 rounded-[2.5rem] shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] transition-all duration-500 group overflow-hidden"
                            >
                                {/* Hover Gradient Enhancement Layer */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="relative z-10 font-display font-black text-xl text-white mb-3 uppercase tracking-tight italic group-hover:text-white transition-colors">{item.title}</h3>
                                <p className="relative z-10 text-white/90 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ HOW WE WORK ═══════════════════ */}
            <section className="section-padding bg-black/[0.01] relative overflow-hidden" style={{ backgroundColor: 'var(--navy-mid)' }}>
                <div className="hero-blob top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-primary/10" />
                <div className="hero-blob bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple/10" />

                <div className="container-custom relative">
                    <div className="text-center mb-20 reveal">
                        <div className="badge-orange mb-5">⟹ Our Process</div>
                        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-1 mb-6 uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            How Do We <span className="text-[#1e3a8a] italic">Work?</span>
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-2)' }}>A proven data-driven process honed over years to deliver exceptional outcomes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] z-0 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                            <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        </div>

                        {steps.map((step, i) => (
                            <div key={step.num} className={`relative group z-10 reveal-up delay-${i * 100}`}>
                                <div className="card-blue-premium p-8 relative overflow-hidden shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] transition-all duration-500 h-full group-hover:-translate-y-2">
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                                            <span className="text-white font-display font-extrabold text-xl">{step.num}</span>
                                        </div>
                                        <h3 className="font-display font-black text-2xl text-white mb-4 group-hover:text-white transition-colors uppercase tracking-tight italic">{step.title}</h3>
                                        <p className="text-white/90 text-base leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ FOUNDERS ═══════════════════ */}
            <div className="py-12 bg-navy">
                <FoundersSection />
            </div>

            {/* ═══════════════════ INDUSTRIES ═══════════════════ */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute inset-0 bg-black/[0.01]" style={{ backgroundColor: 'var(--navy-mid)' }} />
                <div className="hero-blob top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 opacity-40" />

                <div className="container-custom relative">
                    <div className="text-center mb-16 reveal">
                        <div className="badge-orange mb-5">Industries We Serve</div>
                        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-1 mb-6 uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            Tailored Solutions For <span className="text-[#1e3a8a] italic">Every Industry</span>
                        </h2>
                        <p className="text-text-2 max-w-2xl mx-auto text-lg" style={{ color: 'var(--text-2)' }}>
                            From startups to global enterprises, we bring deep domain expertise across multiple strategic sectors.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {industries.map((ind, i) => (
                            <div
                                key={ind.title}
                                className={`group card-blue-premium p-8 text-center shadow-[0_10px_30px_rgba(59,130,246,0.2)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-500 reveal-up delay-${(i % 4) * 100}`}
                            >
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                                        {ind.icon}
                                    </div>
                                    <h3 className="font-display font-black text-white text-xl mb-3 uppercase tracking-tight italic">{ind.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed font-medium">{ind.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ STATS ═══════════════════ */}
            <section className="relative overflow-hidden py-16 bg-navy">
                <div className="absolute inset-0 opacity-10 grid-pattern" />
                <div className="absolute inset-0 bg-shimmer opacity-5 blur-xl" style={{ animation: 'shimmer 10s linear infinite' }} />

                <div className="container-custom relative">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {stats.map((stat, i) => (
                            <div key={i} className="text-center reveal-scale">
                                <div className="stat-number text-5xl md:text-7xl text-text-1 mb-3 flex justify-center font-black tracking-tighter">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-text-3 text-xs md:text-sm font-black uppercase tracking-[0.2em]">{stat.label}</p>
                                <div className="w-12 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ FAQ SECTION ═══════════════════ */}
            <section className="section-padding bg-navy relative overflow-hidden">
                <div className="container-custom max-w-4xl relative z-10">
                    <div className="text-center mb-16 reveal">
                        <div className="badge-orange mb-5">⟹ FAQ</div>
                        <h2 className="font-display font-black text-4xl md:text-6xl text-text-1 mb-6 font-black uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            Common <span className="text-[#1e3a8a] italic">Questions</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group card-blue-premium p-8 shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-300">
                                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-black text-xl text-white uppercase tracking-tight italic">
                                    {faq.q}
                                    <ChevronRight className="w-6 h-6 text-white group-open:rotate-90 transition-transform" />
                                </summary>
                                <div className="mt-6 text-white/80 leading-relaxed font-medium pt-6 border-t border-white/20 animate-fade-in">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
            <section className="section-padding relative overflow-hidden bg-black/[0.01]" style={{ backgroundColor: 'var(--navy-mid)' }}>
                <div className="hero-blob bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple/10" />
                <div className="container-custom relative">
                    <div className="text-center mb-16 reveal">
                        <div className="badge-orange mb-5">⟹ Testimonials</div>
                        <h2 className="font-display font-extrabold text-4xl md:text-6xl text-text-1 mb-6 uppercase italic tracking-tight" style={{ color: 'var(--text-1)' }}>
                            What Our <span className="text-[#1e3a8a] italic">Clients Say</span>
                        </h2>
                    </div>

                    <div className="relative overflow-hidden py-10">
                        {/* Infinite Scroll Testimonials Marquee */}
                        <div className="flex animate-marquee space-x-8">
                            {[...expandedTestimonials, ...expandedTestimonials].map((t, i) => (
                                <div key={i} className="w-[400px] shrink-0">
                                    <div className="card-blue-premium p-8 shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500 relative h-full group overflow-hidden">
                                        <div className="absolute top-8 right-8 text-6xl text-white/10 font-serif leading-none">&quot;</div>
                                        <div className="relative z-10">
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(t.rating)].map((_, j) => (
                                                    <Star key={j} className="w-4 h-4 fill-white text-white" />
                                                ))}
                                            </div>
                                            <p className="text-white/90 text-lg leading-relaxed mb-8 italic font-medium">
                                                &quot;{t.text}&quot;
                                            </p>
                                            <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                                    {t.name[0]}
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-display font-black text-lg leading-none mb-1 uppercase italic tracking-tight">{t.name}</h4>
                                                    <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════ CTA BANNER ═══════════════════ */}
            <section className="py-24 relative overflow-hidden mx-4 md:mx-8 mb-12 rounded-[3.5rem] shadow-2xl reveal-up card-blue-premium border-white/10">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full border border-white/5 animate-spin-slow" />
                    <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full border border-white/5 animate-spin-reverse" />
                    <div className="absolute inset-0 grid-pattern opacity-10" />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <div className="badge-orange mb-8 inline-flex animate-breathe">
                        <span className="w-2.5 h-2.5 rounded-full bg-white ripple-dot relative mr-2" />
                        Available for New Projects
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight uppercase italic tracking-tighter">
                        Ready to Build Something <br /> 
                        <span className="text-accent-blue italic">Extraordinary?</span>
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        Let&apos;s turn your vision into a reality. No commitment, just a conversation about what&apos;s possible.
                    </p>
                    <Magnetic>
                        <Link href="/contact" className="btn-primary py-5 px-12 text-lg shadow-2xl bg-white text-primary hover:bg-white/90">
                            Start Your Transformation <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Magnetic>
                </div>
            </section>

        </main>
    )
}
