'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden'

        // Total loading time: 2.2s
        const DURATION = 2200

        const closeTimer = setTimeout(() => {
            setIsLoading(false)
            document.body.style.overflow = ''
            window.scrollTo(0, 0)
        }, DURATION)

        return () => {
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
                    exit={{ opacity: 0, y: '100%' }} // Drop down like a terminal screen dismissing
                    transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center overflow-hidden font-mono"
                >
                    {/* Background Noise & Fine Grid */}
                    <div className="absolute inset-0 opacity-[0.10] pointer-events-none noisemix mix-blend-overlay" />
                    <div className="absolute inset-0 grid-pattern opacity-[0.03]" />

                    <div className="relative z-10 flex flex-col items-center w-full px-6">
                        
                        {/* Status Output Header (Hacker aesthetic) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0.5, 1] }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex items-center gap-2 text-primary text-[10px] md:text-xs font-bold tracking-widest mb-12"
                        >
                            <Zap className="w-4 h-4 fill-primary" />
                            <span>SYS_BOOT_SEQ: SECURE</span>
                        </motion.div>

                        {/* Logo */}
                        <motion.div
                            initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.95 }}
                            animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-slate-900 mb-12 flex items-center gap-1"
                        >
                            Zerixa<span className="text-primary"> Tech</span>
                        </motion.div>

                        {/* Cascading Data Blocks */}
                        <div className="flex gap-1.5 md:gap-2 mb-12 flex-wrap justify-center max-w-[80vw]">
                            {blocks.map((_, i) => (
                                <div key={i} className="w-5 h-8 md:w-6 md:h-10 border border-slate-300 bg-slate-100 relative overflow-hidden rounded-sm shadow-sm">
                                    <motion.div
                                        className="absolute inset-0 bg-slate-900 shadow-sm"
                                        initial={{ opacity: 0, scaleY: 0 }}
                                        animate={{ opacity: [0, 1, 1, 0], scaleY: [0, 1, 1, 1] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            times: [0, 0.1, 0.8, 1], 
                                            delay: i * 0.08, 
                                            ease: "linear"
                                        }}
                                        style={{ transformOrigin: "bottom" }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="text-slate-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase"
                        >
                            ARCHITECTING THE FUTURE <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
                        </motion.div>
                    </div>

                    {/* Hacker side metrics */}
                    <div className="absolute left-6 bottom-6 flex flex-col gap-1.5 text-[10px] text-slate-400 tracking-widest uppercase">
                        <p>CPU_LOAD: <span className="text-primary">42%</span></p>
                        <p>MEM_ALLOC: <span className="text-primary">OK</span></p>
                        <p>NET_LATENCY: <span className="text-primary">3ms</span></p>
                    </div>
                    
                    <div className="absolute right-6 top-6 text-right flex flex-col gap-1.5 text-[10px] text-slate-400 tracking-widest uppercase">
                        <p>SERVER: <span className="text-slate-600">US-EAST-1</span></p>
                        <p>NODE: <span className="text-slate-600">V8.4.1</span></p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
