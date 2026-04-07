'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Layers, DollarSign } from 'lucide-react'

const cards = [
    {
        id: 1,
        title: 'Deliver On Time',
        desc: 'We respect your deadlines. Our agile methodology ensures your products reach the market fast, without compromising on quality or functionality.',
        icon: Clock,
        color: '#0A66FF'
    },
    {
        id: 2,
        title: 'Security',
        desc: 'Uncompromising data protection. We build robust architectures that keep your digital assets and user information safe from day one.',
        icon: Shield,
        color: '#000000'
    },
    {
        id: 3,
        title: 'Flexible Solutions',
        desc: 'Scalable and adaptable technology that grows with your business needs. We design ecosystems that can pivot when you do.',
        icon: Layers,
        color: '#0A66FF'
    },
    {
        id: 4,
        title: 'Affordable Pricing',
        desc: 'Premium quality doesn\'t always mean premium pricing. Get highly competitive rates that deliver exceptional ROI for your business.',
        icon: DollarSign,
        color: '#000000'
    }
]

export default function WhyUsSection() {
    return (
        <section className="py-24 relative bg-white border-t border-black/5" id="why-us">
            {/* Background ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,102,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom mx-auto relative z-10">

                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 reveal">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            IT Solutions
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
                            Features That <br />
                            <span className="gradient-text">Drive Success.</span>
                        </h2>
                    </div>
                    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-md pb-2">
                        We engineer digital ecosystems that define industry standards and provide measurable value to your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 reveal-up delay-200">
                    {cards.map((card, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                            key={card.id}
                            className="group bg-slate-50 border border-black/5 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden relative"
                        >
                            {/* Subtle hover gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `radial-gradient(circle at 100% 100%, ${card.color}, transparent 60%)` }}
                            />

                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm bg-white"
                                    style={{ borderColor: `${card.color}20` }}
                                >
                                    <card.icon className="w-8 h-8" style={{ color: card.color }} />
                                </div>
                                <span className="text-slate-200 font-display font-black text-6xl leading-none group-hover:text-primary/10 transition-colors">
                                    0{card.id}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-display font-black text-2xl text-slate-900 mb-4 group-hover:text-primary transition-all">
                                    {card.title}
                                </h3>
                                <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
