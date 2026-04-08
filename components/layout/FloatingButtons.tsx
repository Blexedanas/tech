'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, ArrowUp } from 'lucide-react'

export default function FloatingButtons() {
    const [showTop, setShowTop] = useState(false)

    useEffect(() => {
        const onScroll = () => setShowTop(window.scrollY > 400)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <div className="fixed bottom-6 right-8 md:right-10 z-[60] flex flex-col gap-3 items-end">
            {/* Phone */}
            <a
                href="tel:+919924360745"
                aria-label="Call us"
                className="w-12 h-12 rounded-full bg-[#0070f3] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(0,112,243,0.4)' }}
            >
                <Phone className="w-5 h-5 text-white" />
            </a>

            {/* WhatsApp */}
            <a
                href="https://wa.me/919924360745"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}
            >
                <MessageCircle className="w-5 h-5 text-white" />
            </a>

            {/* Scroll to top — appears after 400px scroll */}
            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 ${showTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                style={{
                    background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                    boxShadow: '0 4px 20px rgba(115, 188, 243, 0.4)',
                }}
            >
                <ArrowUp className="w-5 h-5 text-white" />
            </button>
        </div>
    )
}
