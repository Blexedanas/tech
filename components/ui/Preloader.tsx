'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden'

        // Ensure minimum display time for the premium effect
        const timer = setTimeout(() => {
            setIsLoading(false)
            document.body.style.overflow = ''
            window.scrollTo(0, 0)
        }, 2200)

        return () => {
            clearTimeout(timer)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[99999] bg-navy flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Noise */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none noisemix mix-blend-overlay" />

                    {/* Glowing Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

                    {/* Logo/Text Container */}
                    <div className="relative z-10 flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
                            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-display font-extrabold text-5xl md:text-7xl tracking-tighter text-slate-900 mb-8 flex items-center gap-1"
                        >
                            Zerixa<span className="text-primary"> Tech</span>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-48 md:w-64 h-[2px] bg-slate-200 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-slate-400 text-xs font-mono font-medium tracking-[0.2em] mt-6"
                        >
                            INITIALIZING DIGITAL EXPERIENCE
                        </motion.div>
                    </div>

                    {/* Corner accents for tech feel */}
                    <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-200" />
                    <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-slate-200" />
                    <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-slate-200" />
                    <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-200" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
