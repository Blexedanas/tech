'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
                type: 'spring',
                stiffness: 260,
                damping: 30,
                duration: 0.6
            }}
        >
            {children}
        </motion.div>
    )
}
