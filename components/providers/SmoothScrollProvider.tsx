'use client'

import { ReactNode } from 'react'

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
    // Locomotive Scroll is removed because it conflicts with standard Framer Motion 
    // scroll hooks (useScroll, whileInView) and native IntersectionObserver.
    return <>{children}</>
}
