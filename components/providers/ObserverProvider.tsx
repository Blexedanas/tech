'use client'

import { useEffect } from 'react'

export default function ObserverProvider({ children }: { children: React.ReactNode }) {
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

        const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale')
        elements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return <>{children}</>
}
