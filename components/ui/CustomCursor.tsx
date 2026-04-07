'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
    const [isHovering, setIsHovering] = useState(false)
    const [isHidden, setIsHidden] = useState(true) // Hidden initially until mouse moves
    const [isMounted, setIsMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsMounted(true)
        // Only run on desktop
        if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
            setIsMobile(true)
            return
        }

        const updateMousePos = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY })
            if (isHidden) setIsHidden(false)
        }

        const handleMouseEnter = () => setIsHidden(false)
        const handleMouseLeave = () => setIsHidden(true)

        // Add event listeners for native hovering
        const addHoverListeners = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, select, .cursor-hover')
            interactables.forEach((el) => {
                el.addEventListener('mouseenter', () => setIsHovering(true))
                el.addEventListener('mouseleave', () => setIsHovering(false))
            })
        }

        // Run initially
        addHoverListeners()

        window.addEventListener('mousemove', updateMousePos)
        document.addEventListener('mouseenter', handleMouseEnter)
        document.addEventListener('mouseleave', handleMouseLeave)

        // MutationObserver to catch dynamically added interactable elements (like links from transitions)
        const observer = new MutationObserver((mutations) => {
            let shouldRebind = false
            mutations.forEach(mutation => {
                if (mutation.addedNodes.length) shouldRebind = true
            })
            if (shouldRebind) {
                addHoverListeners() // Clean up old listeners to prevent memory leaks in a real app, simplified here
            }
        })
        observer.observe(document.body, { childList: true, subtree: true })

        return () => {
            window.removeEventListener('mousemove', updateMousePos)
            document.removeEventListener('mouseenter', handleMouseEnter)
            document.removeEventListener('mouseleave', handleMouseLeave)
            observer.disconnect()
        }
    }, [pathname, isHidden]) // Re-run when route changes to catch new DOM elements

    // Prevent hydration mismatch by returning null until mounted
    if (!isMounted) return null

    // Skip rendering on mobile devices entirely
    if (isMobile) return null

    return (
        <div className="hidden lg:block z-[9999] pointer-events-none fixed inset-0">
            {/* The Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full mix-blend-difference z-[9999]"
                animate={{
                    x: mousePos.x - 6,
                    y: mousePos.y - 6,
                    opacity: isHidden ? 0 : 1,
                    scale: isHovering ? 0 : 1 // Hide the inner dot when hovering
                }}
                transition={{
                    type: 'spring',
                    stiffness: 1000,
                    damping: 40,
                    mass: 0.1
                }}
            />

            {/* The Ring */}
            <motion.div
                className="fixed top-0 left-0 rounded-full border border-primary z-[9998] flex items-center justify-center font-bold text-[10px] text-primary"
                animate={{
                    x: mousePos.x - (isHovering ? 32 : 20),
                    y: mousePos.y - (isHovering ? 32 : 20),
                    width: isHovering ? 64 : 40,
                    height: isHovering ? 64 : 40,
                    opacity: isHidden ? 0 : isHovering ? 1 : 0.5,
                    backgroundColor: isHovering ? 'rgba(244,124,53,0.1)' : 'transparent',
                    backdropFilter: isHovering ? 'blur(4px)' : 'none',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 25,
                    mass: 0.5
                }}
            >
                {/* Arrow indicator when hovering */}
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
                    transition={{ delay: 0.1 }}
                >
                    CLICK
                </motion.span>
            </motion.div>
        </div>
    )
}
