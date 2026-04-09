'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import React from 'react'

import { blogPosts as posts } from '@/lib/blogData'

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
                    className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
                    animate={{
                        x: (mousePos.x - winSize.w / 2) * -0.02,
                        y: (mousePos.y - winSize.h / 2) * -0.02,
                    }}
                />
                <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                    <div className="badge-primary mb-5 animate-breathe inline-block">Insights</div>
                    <h1 className="font-display font-extrabold text-5xl md:text-7xl text-text-1 leading-tight mb-6 tracking-tight">
                        Thought <span className="text-accent-blue italic tracking-tight">Leadership</span>
                    </h1>
                    <p className="text-text-2 text-xl max-w-xl mx-auto reveal-up">
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
                        className="group relative card-blue-premium overflow-hidden mb-12 shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className="grid lg:grid-cols-2">
                            <div className="h-64 lg:h-auto min-h-[450px] relative overflow-hidden bg-slate-800">
                                <img 
                                    src={posts[0].image} 
                                    alt={posts[0].title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent lg:block hidden" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent lg:hidden block" />
                                <div className="absolute top-8 left-8 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg z-10">
                                    FEATURED ARTICLE
                                </div>
                            </div>
                            <div className="p-10 md:p-14 flex flex-col justify-center relative z-10 bg-white/5 backdrop-blur-md">
                                <div className="flex items-center gap-3 text-primary text-xs font-black uppercase tracking-widest mb-6">
                                    <Tag className="w-4 h-4" /> {posts[0].category}
                                </div>
                                <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-6 group-hover:text-white transition-all duration-300 leading-tight uppercase italic tracking-tight">
                                    {posts[0].title}
                                </h2>
                                <p className="text-white/90 text-lg leading-relaxed mb-8">{posts[0].excerpt}</p>
                                <div className="flex flex-wrap items-center gap-6 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-10 border-b border-white/10 pb-8">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {posts[0].readTime}</span>
                                    <span className="flex items-center gap-2"><User className="w-4 h-4" /> {posts[0].author}</span>
                                </div>
                                <Link href={`/blog/${posts[0].slug}`} className="group/link inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em] hover:text-white/80 transition-colors">
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
                                className="group card-blue-premium overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
                            >
                                <div className="h-56 relative overflow-hidden bg-slate-800">
                                    <img 
                                        src={post.image} 
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500" />
                                    <div className="absolute top-5 left-5 text-[10px] font-bold px-3 py-1.5 rounded-lg backdrop-blur-md bg-navy/80 border border-slate-700 text-text-1 shadow-xl">
                                        {post.category}
                                    </div>
                                </div>
                                 <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-display font-black text-xl text-white mb-4 group-hover:text-white transition-all duration-300 leading-snug tracking-tight uppercase italic">{post.title}</h3>
                                        <p className="text-white/80 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">{post.excerpt}</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center justify-between text-white/40 text-[10px] font-black uppercase tracking-widest pt-6 border-t border-white/10 mb-6">
                                            <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                            <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                                        </div>
                                        <Link href={`/blog/${post.slug}`} className="group/link inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em] hover:text-white/80 transition-colors">
                                            Read Full Story <ArrowRight className="w-4 h-4 group-hover/link:translate-x-3 transition-transform" />
                                        </Link>
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
