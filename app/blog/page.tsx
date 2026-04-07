'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

const posts = [
    {
        slug: 'future-of-ai-in-web-development',
        title: 'The Future of AI in Web Development',
        excerpt: 'How large language models and AI-assisted coding are reshaping the way developers build modern web applications.',
        category: 'AI & Technology',
        date: 'Feb 20, 2026',
        readTime: '5 min read',
        author: 'Zerixa Tech Team',
        color: '#E8712C',
    },
    {
        slug: 'react-native-vs-flutter-2026',
        title: 'React Native vs Flutter in 2026: Which to Choose?',
        excerpt: 'A deep-dive comparison of the two dominant cross-platform mobile frameworks, with real-world benchmarks and use cases.',
        category: 'Mobile Development',
        date: 'Feb 14, 2026',
        readTime: '8 min read',
        author: 'Zerixa Tech Team',
        color: '#60a5fa',
    },
    {
        slug: 'nextjs-14-performance-tips',
        title: '10 Next.js 14 Performance Tips You Need in 2026',
        excerpt: 'Server components, partial prerendering, and streaming — how to squeeze maximum performance from the world\'s best React framework.',
        category: 'Web Development',
        date: 'Feb 10, 2026',
        readTime: '6 min read',
        author: 'Zerixa Tech Team',
        color: '#34d399',
    },
    {
        slug: 'ux-design-principles-2026',
        title: 'UX Design Principles Every Developer Should Know',
        excerpt: 'Great products are built by teams that understand both code and design. Here are the 8 UX principles our designers live by.',
        category: 'Design',
        date: 'Jan 28, 2026',
        readTime: '4 min read',
        author: 'Zerixa Tech Team',
        color: '#a78bfa',
    },
    {
        slug: 'iot-smart-home-architecture',
        title: 'Building Scalable IoT Architecture for Smart Homes',
        excerpt: 'From MQTT brokers to edge processing — a technical walkthrough of how we architect IoT systems that handle millions of events.',
        category: 'IoT',
        date: 'Jan 20, 2026',
        readTime: '10 min read',
        author: 'Zerixa Tech Team',
        color: '#fb923c',
    },
    {
        slug: 'startup-mvp-checklist',
        title: 'The Ultimate MVP Checklist for Startups in 2026',
        excerpt: 'Launching a product? Here\'s the exact checklist we use with our startup clients to go from idea to launch in 8 weeks or less.',
        category: 'Business',
        date: 'Jan 12, 2026',
        readTime: '7 min read',
        author: 'Zerixa Tech Team',
        color: '#f472b6',
    },
]

export default function BlogPage() {
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
        <div className="bg-navy min-h-screen">
            {/* Hero */}
            <section className="pt-32 pb-16 relative overflow-hidden">
                <motion.div
                    className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
                    animate={{
                        x: (mousePos.x - winSize.w / 2) * -0.02,
                        y: (mousePos.y - winSize.h / 2) * -0.02,
                    }}
                />
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="badge-orange mb-5 animate-breathe inline-block">⟹ Insights</div>
                    <h1 className="font-display font-extrabold text-5xl md:text-7xl text-white leading-tight mb-6 tracking-tight">
                        {"Thought ".split("").map((char, i) => (
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
                        <span className="gradient-text">Leadership</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-xl mx-auto reveal-up">
                        Deep dives into the technologies and design patterns that are shaping the future of digital products.
                    </p>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="pb-24">
                <div className="container-custom">
                    {/* Featured post */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden mb-12 card-hover"
                    >
                        <div className="grid lg:grid-cols-2">
                            <div className="h-64 lg:h-auto min-h-[350px] relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${posts[0].color}15, ${posts[0].color}05)` }}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                                    <div className="text-9xl">📖</div>
                                </div>
                                <div className="absolute top-8 left-8 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-10">
                                    FEATURED ARTICLE
                                </div>
                            </div>
                            <div className="p-10 md:p-14 flex flex-col justify-center">
                                <div className="flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest mb-6">
                                    <Tag className="w-4 h-4" /> {posts[0].category}
                                </div>
                                <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white mb-6 group-hover:gradient-text transition-all duration-300 leading-tight">
                                    {posts[0].title}
                                </h2>
                                <p className="text-white/50 text-lg leading-relaxed mb-8">{posts[0].excerpt}</p>
                                <div className="flex flex-wrap items-center gap-6 text-white/30 text-[10px] font-bold uppercase tracking-widest mb-10 border-b border-white/5 pb-8">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {posts[0].readTime}</span>
                                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> {posts[0].author}</span>
                                </div>
                                <Link href={`/blog/${posts[0].slug}`} className="group/link inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em] hover:text-primary transition-colors">
                                    Read Full Story <ArrowRight className="w-4 h-4 group-hover/link:translate-x-3 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Other posts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.slice(1).map((post, idx) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden card-hover flex flex-col"
                            >
                                <div className="h-48 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${post.color}10, ${post.color}05)` }}>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:scale-110 transition-transform duration-700">
                                        <div className="text-6xl">📄</div>
                                    </div>
                                    <div className="absolute top-5 left-5 text-[10px] font-bold px-3 py-1.5 rounded-lg backdrop-blur-md" style={{ background: `${post.color}20`, color: post.color, border: `1px solid ${post.color}30` }}>
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="font-display font-bold text-xl text-white mb-4 group-hover:gradient-text transition-all duration-300 leading-snug tracking-tight">{post.title}</h3>
                                    <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-white/20 text-[10px] font-black uppercase tracking-widest pt-6 border-t border-white/5">
                                        <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                        <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
