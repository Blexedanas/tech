'use client'

import { motion } from 'framer-motion'

export default function TextMarquee() {
    return (
        <section className="py-24 bg-navy overflow-hidden relative border-y border-white/5 flex flex-col gap-6">
            {/* Outline text marquee going left */}
            <div className="flex whitespace-nowrap opacity-10">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex text-[5rem] md:text-[8rem] font-display font-black leading-none uppercase"
                >
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Digital Excellence</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-white">Innovation</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Creative Vision</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-primary" style={{ WebkitTextStroke: '2px var(--primary)' }}>Engineering</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                </motion.div>
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear",
                    }}
                    className="flex text-[5rem] md:text-[8rem] font-display font-black leading-none uppercase"
                >
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Digital Excellence</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-white">Innovation</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Creative Vision</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-primary" style={{ WebkitTextStroke: '2px var(--primary)' }}>Engineering</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                </motion.div>
            </div>

            {/* Outline text marquee going right */}
            <div className="flex whitespace-nowrap opacity-10">
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                    className="flex text-[4rem] md:text-[6rem] font-display font-black leading-none uppercase"
                >
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Web Development</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-purple-400">Mobile Apps</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>AI Solutions</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-white">UI/UX Design</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                </motion.div>
                <motion.div
                    animate={{ x: [-1000, 0] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear",
                    }}
                    className="flex text-[4rem] md:text-[6rem] font-display font-black leading-none uppercase"
                >
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>Web Development</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-purple-400">Mobile Apps</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>AI Solutions</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                    <span className="mx-8 text-white">UI/UX Design</span>
                    <span className="mx-8 text-transparent" style={{ WebkitTextStroke: '2px white' }}>•</span>
                </motion.div>
            </div>
        </section>
    )
}
