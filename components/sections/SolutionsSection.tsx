'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function SolutionsSection() {
    return (
        <section className="pt-4 pb-20 relative overflow-hidden flex justify-center bg-white">
            {/* Soft background glow */}
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom max-w-5xl mx-auto flex flex-col items-center relative z-10">

                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                        <span className="w-2 h-2 rounded-full bg-orange-400" />
                        Unmatched Quality
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
                        Performance You Can <span className="gradient-text">Measure</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        We build digital solutions optimized for speed, reliability, and scale. Watch your metrics improve from day one.
                    </p>
                </div>

                {/* Center: Visual (Clean Dashboard) */}
                <div className="w-full max-w-4xl relative">
                    <motion.div
                        className="bg-slate-50 border border-black/5 rounded-[var(--card-radius)] p-8 md:p-10 relative overflow-hidden shadow-2xl w-full"
                        initial={{ opacity: 1, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Subtle inner gradient */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl rounded-full opacity-50 pointer-events-none" />

                        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

                            {/* Left Side: Mock UI screens with dynamic data */}
                            <div className="space-y-6">
                                {[
                                    { label: 'System Performance', w: '98%', color: 'var(--primary)', val: '98%' },
                                    { label: 'User Engagement', w: '85%', color: '#000000', val: '+42%' },
                                    { label: 'Application Uptime', w: '99%', color: 'var(--primary)', val: '99.9%' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-[var(--inner-radius)] p-5 border border-black/5 shadow-sm transition-all hover:shadow-md">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                            <span className="text-sm font-bold text-slate-900">
                                                {item.val}
                                            </span>
                                        </div>
                                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: item.w }}
                                                transition={{ duration: 1.5, delay: i * 0.2, ease: "easeOut" }}
                                                style={{ backgroundColor: item.color }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Right Side: Code snippet with typing effect */}
                            <div className="bg-slate-900 rounded-[var(--inner-radius)] p-6 font-mono text-sm border border-white/5 shadow-xl relative overflow-hidden">
                                {/* Mac OS style window dots */}
                                <div className="flex gap-2 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>

                                <div className="space-y-3">
                                    <p className="flex flex-wrap gap-2 text-white/90">
                                        <span className="text-pink-400">import</span>
                                        <span>{'{'}</span>
                                        <span className="text-blue-400">OptimizationEngine</span>
                                        <span>{'}'}</span>
                                        <span className="text-pink-400">from</span>
                                        <span className="text-green-400">'@zerixatech/core'</span>
                                        <span>;</span>
                                    </p>
                                    <br />
                                    <p className="flex flex-wrap gap-2 text-white/90">
                                        <span className="text-pink-400">const</span>
                                        <span className="text-blue-300">agency</span>
                                        <span className="text-pink-400">=</span>
                                        <span className="text-pink-400">new</span>
                                        <span className="text-blue-400">OptimizationEngine</span>
                                        <span>();</span>
                                    </p>
                                    <p className="flex flex-wrap gap-2 text-white/90">
                                        <span className="text-pink-400">await</span>
                                        <span className="text-blue-300">agency</span>
                                        <span>.</span>
                                        <span className="text-yellow-200">scaleInfrastructure</span>
                                        <span>({'{'}</span>
                                    </p>
                                    <p className="pl-6 flex gap-2 text-white/90">
                                        <span className="text-purple-300">reliability</span><span>:</span>
                                        <span className="text-orange-300">"99.99%"</span><span>,</span>
                                    </p>
                                    <p className="pl-6 flex gap-2 text-white/90">
                                        <span className="text-purple-300">performance</span><span>:</span>
                                        <span className="text-orange-300">"maximum"</span>
                                    </p>
                                    <p className="flex gap-2 text-white/90">
                                        <span>{'}'});</span>
                                    </p>

                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 1.5 }}
                                        className="mt-6 pt-4 border-t border-white/10"
                                    >
                                        <p className="text-green-400/80 text-xs">✓ System successfully deployed to global edge network.</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* High-End Floating Badge */}
                    <motion.div
                        className="absolute -top-6 -right-4 md:-right-6 w-24 h-24 rounded-[var(--inner-radius)] bg-gradient-to-br from-primary to-primary-dark p-[1px] shadow-2xl z-20"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <div className="w-full h-full rounded-[var(--inner-radius)] bg-white flex flex-col items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10" />
                            <div className="relative z-10 text-center flex flex-col items-center justify-center">
                                <div className="text-primary font-black text-3xl leading-none">99%</div>
                                <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mt-1">ROI</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
