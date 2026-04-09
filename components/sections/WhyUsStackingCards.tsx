'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Layers, DollarSign } from 'lucide-react'

const cards = [
    {
        id: 1,
        title: 'Deliver On Time',
        desc: 'We respect your deadlines. Our agile methodology ensures your products reach the market fast, without compromising on quality or functionality.',
        icon: Clock,
        color: '#4f8ef7'
    },
    {
        id: 2,
        title: 'Security',
        desc: 'Uncompromising data protection. We build robust architectures that keep your digital assets and user information safe from day one.',
        icon: Shield,
        color: '#e8edf5'
    },
    {
        id: 3,
        title: 'Flexible Solutions',
        desc: 'Scalable and adaptable technology that grows with your business needs. We design ecosystems that can pivot when you do.',
        icon: Layers,
        color: '#4f8ef7'
    },
    {
        id: 4,
        title: 'Affordable Pricing',
        desc: 'Premium quality doesn\'t always mean premium pricing. Get highly competitive rates that deliver exceptional ROI for your business.',
        icon: DollarSign,
        color: '#e8edf5'
    }
]

export default function WhyUsSection() {
    return (
        <section className="py-24 relative bg-navy overflow-hidden border-t border-white/[0.05]" id="why-us">
            {/* Background ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 reveal">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-mid text-primary text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            IT Solutions
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-text-1 tracking-tight leading-tight uppercase italic">
                            Features That <br />
                            <span className="text-[#1e3a8a] italic">Drive Success.</span>
                        </h2>
                    </div>
                    <p className="text-text-2 text-lg md:text-xl font-medium leading-relaxed max-w-md pb-2">
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
                            className="group relative card-blue-premium p-8 md:p-12 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:-translate-y-[5px] transition-all duration-500"
                        >
                            <div className="flex justify-between items-start mb-12 relative z-10">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] bg-white/10 backdrop-blur-md"
                                    style={{ borderColor: `rgba(255,255,255,0.2)` }}
                                >
                                    <card.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                                </div>
                                <span className="text-white/[0.1] font-display font-black text-6xl leading-none group-hover:text-white/20 transition-colors italic">
                                    0{card.id}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="font-display font-black text-2xl text-white mb-4 group-hover:text-white transition-all uppercase tracking-tight italic">
                                    {card.title}
                                </h3>
                                <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium">
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

