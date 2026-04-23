'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden'

        // Total loading time: 2.2s
        const DURATION = 2200
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 100
                return prev + 1
            })
        }, DURATION / 100)

        const closeTimer = setTimeout(() => {
            setIsLoading(false)
            document.body.style.overflow = ''
            window.scrollTo(0, 0)
        }, DURATION + 500)

        return () => {
            clearInterval(interval)
            clearTimeout(closeTimer)
            document.body.style.overflow = ''
        }
    }, [])

    // We will render 14 data blocks
    const blocks = Array.from({ length: 14 })

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: '-100%' }} // Sweep up
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden font-mono"
                >
                    {/* Background Noise & Fine Grid */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none noisemix mix-blend-screen" />
                    <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

                    <div className="relative z-10 flex flex-col items-center w-full max-w-xl px-6">
                        
                        {/* Percentage */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mb-8 flex flex-col items-center"
                        >
                            <span className="text-primary font-display font-black text-6xl md:text-8xl tabular-nums leading-none">
                                {progress}<span className="text-2xl md:text-3xl ml-1 opacity-50">%</span>
                            </span>
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.95 }}
                            animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="font-display font-black text-3xl md:text-4xl tracking-tighter text-white mb-10 flex items-center gap-1 uppercase italic"
                        >
                            Zerixa<span className="text-primary"> Tech</span>
                        </motion.div>

                        {/* Cascading Data Blocks */}
                        <div className="flex gap-1 md:gap-1.5 mb-10 flex-nowrap justify-center w-full">
                            {blocks.map((_, i) => (
                                <div key={i} className={`w-3 h-5 md:w-5 md:h-8 border border-white/10 bg-white/5 backdrop-blur-sm relative overflow-hidden shrink-0 ${i >= 10 ? 'hidden md:block' : ''} rounded-sm`}>
                                    <motion.div
                                        className="absolute inset-0 bg-primary shadow-[0_0_20px_rgba(79,142,247,0.6)]"
                                        initial={{ opacity: 0, scaleY: 0 }}
                                        animate={{ 
                                            opacity: progress > (i * 7) ? 1 : 0, 
                                            scaleY: progress > (i * 7) ? 1 : 0 
                                        }}
                                        transition={{ 
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }}
                                        style={{ transformOrigin: "bottom" }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Loading Text */}
                        <div className="flex flex-col items-center gap-3">
                            <motion.div
                                initial={{ opacity: 0 }}
                                 animate={{ opacity: 1 }}
                                 transition={{ delay: 0.3 }}
                                 className="text-slate-400 text-[10px] md:text-xs font-black tracking-[0.5em] uppercase flex items-center gap-3"
                             >
                                 <div className="h-[1px] w-6 bg-white/20" />
                                 <span>Architecting the Future</span>
                                 <div className="h-[1px] w-6 bg-white/20" />
                             </motion.div>
                            
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 1 }}
                                className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_var(--primary)]"
                            />
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-10 left-10 text-[10px] text-slate-500 uppercase tracking-widest font-black hidden md:block">
                        India / Surat / ©2026
                    </div>
                    <div className="absolute bottom-10 right-10 text-[10px] text-slate-500 uppercase tracking-widest font-black hidden md:block">
                        Digital Dominance
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}
