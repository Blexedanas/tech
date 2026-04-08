'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRevealTracker() {
    const pathname = usePathname()

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed')
                }
            })
        }, observerOptions)

        // Add a small delay to ensure DOM is fully painted after navigation
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale')
            elements.forEach(el => observer.observe(el))
        }, 100)

        return () => {
            clearTimeout(timeoutId)
            observer.disconnect()
        }
    }, [pathname])

    return null
}
