'use client'

import { Activity } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LiveRadar() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden md:flex absolute top-[25%] right-[5%] lg:right-[15%] bg-navy-card backdrop-blur-2xl border border-white/10 p-5 rounded-3xl items-center gap-5 shadow-[0_0_40px_rgba(244,124,53,0.1)] z-20 hover:-translate-y-2 transition-transform duration-500 group"
        >
            {/* Radar Animation Area */}
            <div className="relative flex items-center justify-center w-14 h-14">
                {/* Sonar Rings */}
                <div className="absolute inset-[-50%] border border-primary/30 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute inset-[-25%] border border-primary/50 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.7s' }} />

                {/* Core */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-purple/20 flex items-center justify-center relative z-10 border border-primary/30 group-hover:scale-110 transition-transform">
                    <Activity className="w-6 h-6 text-primary" />
                </div>
            </div>

            {/* Status Info */}
            <div>
                <p className="text-white font-display font-bold tracking-widest text-sm mb-1">LIVE NETWORK</p>
                <div className="flex items-center gap-2">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
                    </div>
                    <span className="text-white/60 text-xs font-medium uppercase tracking-wider">All Systems Operational</span>
                </div>
            </div>

            {/* Decorative Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
    )
}
