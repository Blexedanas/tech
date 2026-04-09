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
                    className="fixed inset-0 z-[99999] bg-navy flex flex-col items-center justify-center overflow-hidden font-mono"
                >
                    {/* Background Noise & Fine Grid */}
                    <div className="absolute inset-0 opacity-[0.15] pointer-events-none noisemix mix-blend-overlay" />
                    <div className="absolute inset-0 grid-pattern opacity-[0.05]" />

                    <div className="relative z-10 flex flex-col items-center w-full px-6">
                        


                        {/* Logo */}
                        <motion.div
                            initial={{ filter: 'blur(10px)', opacity: 0, scale: 0.95 }}
                            animate={{ filter: 'blur(0px)', opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                            className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-text-1 mb-12 flex items-center gap-1"
                        >
                            Zerixa<span className="text-primary"> Tech</span>
                        </motion.div>

                        {/* Cascading Data Blocks */}
                        <div className="flex gap-1 md:gap-2 mb-12 flex-nowrap justify-center w-full px-4">
                            {blocks.map((_, i) => (
                                <div key={i} className={`w-4 h-6 md:w-6 md:h-10 border border-white/10 bg-white/5 relative overflow-hidden shrink-0 ${i >= 10 ? 'hidden md:block' : ''}`}>
                                    <motion.div
                                        className="absolute inset-0 bg-primary/80 shadow-[0_0_20px_var(--primary)]"
                                        initial={{ opacity: 0, scaleY: 0 }}
                                        animate={{ opacity: [0, 1, 1, 0.2], scaleY: [0, 1, 1, 1] }}
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
                            className="text-text-4 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase"
                        >
                            ARCHITECTING THE FUTURE <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>_</motion.span>
                        </motion.div>
                    </div>


                </motion.div>
            )}
        </AnimatePresence>
    )
}
