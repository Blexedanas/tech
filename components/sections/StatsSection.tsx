'use client'

import { useState, useRef, useEffect } from 'react'
import { CheckCircle, Globe, Clock, Zap } from 'lucide-react'

const stats = [
    { value: 20, suffix: '+', label: 'Successful Projects', icon: CheckCircle },
    { value: 2, suffix: '+', label: 'Years Experience', icon: Globe },
    { value: 24, suffix: '/7', label: 'Dedicated Support', icon: Clock },
    { value: 100, suffix: '%', label: 'Fast Delivery', icon: Zap },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0)
    const ref = useRef<HTMLDivElement>(null)
    const started = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !started.current) {
                started.current = true
                let start = 0
                const duration = 1800
                const step = Math.ceil(value / (duration / 16))
                const timer = setInterval(() => {
                    start += step
                    if (start >= value) { setCount(value); clearInterval(timer) }
                    else setCount(start)
                }, 16)
            }
        }, { threshold: 0.5 })
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [value])

    return <div ref={ref}>{count}{suffix}</div>
}

export default function StatsSection() {
    return (
        <section className="relative overflow-hidden py-24 bg-white">
            <div className="absolute inset-0 opacity-[0.03] grid-pattern" />

            <div className="container-custom relative">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center reveal-scale">
                            <div className="stat-number text-5xl md:text-7xl text-slate-900 mb-3 flex justify-center font-black tracking-tighter">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-slate-500 text-xs md:text-sm font-black uppercase tracking-[0.2em]">{stat.label}</p>
                            <div className="w-12 h-1.5 bg-primary mx-auto mt-6 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
