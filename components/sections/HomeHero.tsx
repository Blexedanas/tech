'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Zap } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'
import Background3D from '@/components/ui/Background3D'

export default function HomeHero() {
    const { scrollY } = useScroll()

    return (
        <section className="relative flex items-center overflow-hidden pt-32 pb-20 bg-navy">
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(79,142,247,0.1),var(--navy))]" />
            <div className="absolute inset-0 grid-pattern opacity-[0.03]" />
            <Background3D />

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-24">

                {/* Left Side: Text Content */}
                <motion.div
                    className="order-2 lg:order-1 pt-12 lg:pt-0"
                    initial={{ opacity: 1, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y: useTransform(scrollY, [0, 1000], [0, 100]) }}
                >
                    <motion.div
                        initial={{ opacity: 1, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-mid text-primary text-sm font-bold mb-8 shadow-sm"
                    >
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        Premium Digital Agency
                    </motion.div>

                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-black text-text-1 leading-[0.9] tracking-tighter mb-8 max-w-4xl uppercase relative z-10 italic">
                        <motion.span
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="block"
                        >
                            We Build
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="block text-primary"
                        >
                            Vibes
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 1, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.7 }}
                            className="block text-text-1"
                        >
                            That Convert
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                        className="text-text-2 text-lg md:text-xl leading-relaxed max-w-md mb-10 font-medium border-l-4 border-primary pl-8"
                    >
                        The architects of digital strategy, crafting websites, apps, and intelligent AI solutions that captivate and drive real results.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 1, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className="flex flex-wrap gap-5"
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Magnetic>
                                <Link href="/contact" className="btn-primary group relative overflow-hidden px-12 py-5 text-lg skew-x-[-10deg] shadow-2xl shadow-primary/20">
                                    <span className="relative z-10 skew-x-[10deg] inline-block uppercase font-black tracking-widest">Get a Quote</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                                </Link>
                            </Magnetic>
                            <Magnetic>
                                <Link href="/services" className="px-12 py-5 rounded-full border-2 border-border hover:border-primary/20 transition-all duration-300 text-lg font-black uppercase tracking-widest bg-navy-mid text-text-1 shadow-sm hover:shadow-xl">
                                    Our Services
                                </Link>
                            </Magnetic>
                        </div>
                    </motion.div>

                    {/* Social proof strip */}
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.7 }}
                        className="mt-16 flex items-center gap-6"
                    >
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-400 overflow-hidden shadow-sm">
                                    <div className="w-full h-full bg-gradient-to-br from-slate-200 to-transparent" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex gap-0.5 mb-1.5">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                            </div>
                            <p className="text-text-4 text-sm font-bold uppercase tracking-widest">Trusted for <span className="text-text-1">20+ Premium Projects</span></p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Professional Visual Element */}
                <motion.div
                    className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative flex justify-center items-center"
                    initial={{ opacity: 1, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    style={{ y: useTransform(scrollY, [0, 1000], [0, -50]) }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[85%] h-[85%] rounded-[3rem] border border-border bg-navy-mid/80 backdrop-blur-3xl overflow-hidden relative shadow-2xl flex flex-col">
                            {/* Inner abstract geometric glow */}
                            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

                            {/* Mac OS Style Window Bar */}
                            <div className="h-12 w-full border-b border-border flex items-center px-6 gap-2 bg-navy">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                                <div className="ml-auto text-[10px] text-text-4 font-black uppercase tracking-widest">dashboard.vibe</div>
                            </div>

                            {/* Content grid */}
                            <div className="flex-1 p-8 grid grid-cols-2 gap-6 relative z-10">
                                {/* Top Left: Main Metric */}
                                <div className="col-span-2 bg-navy border border-border rounded-2xl p-6 flex items-center justify-between shadow-sm">
                                    <div>
                                        <p className="text-text-4 text-[10px] uppercase font-black tracking-[0.2em] mb-2">Project ROI</p>
                                        <div className="text-3xl font-black text-text-1 flex items-baseline gap-2 tracking-tighter">
                                            +240.5%
                                            <span className="text-primary text-[10px] font-black leading-none px-2 py-1 rounded-lg bg-primary/5 border border-primary/20">BOOST</span>
                                        </div>
                                    </div>
                                    <div className="h-12 w-24">
                                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                            <motion.path
                                                d="M0,40 L10,35 L20,38 L30,25 L40,28 L50,15 L60,20 L70,8 L80,12 L90,2 L100,5"
                                                fill="none"
                                                stroke="var(--primary)"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Bottom Left: Activity Bar */}
                                <div className="bg-navy border border-border rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                                    <p className="text-text-4 text-[10px] uppercase font-black tracking-[0.2em] mb-4">System Load</p>
                                    <div className="space-y-4">
                                        {[
                                            { label: "CPU", val: "42%", color: "#4f8ef7" },
                                            { label: "RAM", val: "78%", color: "#e8edf5" },
                                        ].map((stat, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between text-[10px] mb-2">
                                                    <span className="text-text-3 font-black">{stat.label}</span>
                                                    <span className="text-text-1 font-black">{stat.val}</span>
                                                </div>
                                                <div className="h-2 bg-navy-mid rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full rounded-full"
                                                        style={{ backgroundColor: stat.color }}
                                                        initial={{ width: 0 }}
                                                        animate={{ width: stat.val }}
                                                        transition={{ duration: 1.5, delay: 0.8 + (i * 0.2) }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Right: Code snippet */}
                                <div className="bg-slate-900 border border-black/5 rounded-2xl p-6 font-mono text-[10px] leading-relaxed text-slate-300 relative overflow-hidden group shadow-xl">
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 pointer-events-none" />
                                    <motion.div
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                    >
                                        <p><span className="text-blue-400">export function</span> <span className="text-emerald-400">vibe</span>() {'{'}</p>
                                        <p className="pl-4"><span className="text-blue-400">const</span> impact = <span className="text-amber-400">await</span> scale();</p>
                                        <p className="pl-4"><span className="text-blue-400">if</span> (impact.success) {'{'}</p>
                                        <p className="pl-8 text-emerald-400">grow(Business.GLOBAL);</p>
                                        <p className="pl-4">{'}'}</p>
                                        <p>{'}'}</p>
                                    </motion.div>
                                    <motion.div
                                        className="h-full w-0.5 bg-primary absolute top-0 left-2 shadow-[0_0_20px_var(--primary)]"
                                        animate={{ y: [-100, 200] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - minimal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-4 text-xs font-black uppercase tracking-widest"
            >
                <div className="w-6 h-10 border-2 border-border rounded-full relative">
                    <motion.div
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-primary rounded-full absolute top-2 left-1/2 -translate-x-1/2"
                    />
                </div>
            </motion.div>
        </section>
    )
}
