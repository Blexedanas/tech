'use client'

import { motion } from 'framer-motion'

const steps = [
    { num: '01', title: 'Discover', desc: 'We dive deep into your goals, users, and market to uncover strategic opportunities.' },
    { num: '02', title: 'Design', desc: 'We craft wireframes and high-fidelity prototypes that delight before a line of code is written.' },
    { num: '03', title: 'Develop', desc: 'Our engineers build robust, scalable solutions using best-in-class technologies.' },
    { num: '04', title: 'Deliver', desc: 'We deploy, test, and support — ensuring a flawless launch and continuous improvement.' },
]

export default function ProcessSection() {
    return (
        <>
            {/* ═══════════════════ HOW WE WORK ═══════════════════ */}
            <section className="pt-4 pb-20 bg-navy relative overflow-hidden" id="process">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container-custom relative">
                    <div className="text-center mb-20 reveal">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-mid text-primary text-sm font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Our Process
                        </div>
                        <h2 className="font-display font-black text-4xl md:text-6xl text-text-1 mb-6 tracking-tight uppercase italic">
                            How Do We <span className="gradient-text italic">Work?</span>
                        </h2>
                        <p className="text-text-2 max-w-2xl mx-auto text-lg font-medium leading-relaxed">A proven data-driven process honed over years to deliver exceptional outcomes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] z-0 overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                            <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                        </div>

                        {steps.map((step, i) => (
                            <div key={step.num} className={`relative group z-10 reveal-up delay-${i * 100}`}>
                                <div className="card-blue-premium rounded-[2.5rem] p-8 relative overflow-hidden shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:-translate-y-[5px] transition-all duration-500 h-full">
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
                                            <span className="text-white font-display font-extrabold text-xl">{step.num}</span>
                                        </div>
                                        <h3 className="font-display font-bold text-2xl text-white mb-4 group-hover:text-white transition-colors uppercase tracking-tight italic">{step.title}</h3>
                                        <p className="text-white/90 text-base leading-relaxed font-medium">{step.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

