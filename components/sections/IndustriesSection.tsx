import { ReactNode } from 'react'

const industries = [
    { icon: '🏦', title: 'FinTech', desc: 'Banking apps, dashboards & payment systems' },
    { icon: '🏥', title: 'Healthcare', desc: 'Patient portals, telemedicine & healthtech' },
    { icon: '🛍️', title: 'eCommerce', desc: 'AI-powered stores & marketplaces' },
    { icon: '🎓', title: 'EdTech', desc: 'LMS, e-learning platforms & ed apps' },
    { icon: '🏘️', title: 'Real Estate', desc: 'Property listing & management systems' },
    { icon: '🚚', title: 'Logistics', desc: 'Fleet tracking & supply chain solutions' },
    { icon: '🎮', title: 'Gaming', desc: 'Game apps, portals & leaderboards' },
    { icon: '🔋', title: 'Energy & IoT', desc: 'Smart devices & energy dashboards' },
]

export default function IndustriesSection() {
    return (
        <section className="section-padding relative overflow-hidden">
            <div className="absolute inset-0 bg-slate-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 opacity-40 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-custom relative">
                <div className="text-center mb-16 reveal">
                    <div className="badge-orange mb-5">⟹ Industries We Serve</div>
                    <h2 className="font-display font-extrabold text-4xl md:text-6xl text-slate-900 mb-6 font-black">
                        Tailored Solutions For <span className="gradient-text">Every Industry</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg font-medium">
                        From startups to global enterprises, we bring deep domain expertise across multiple strategic sectors.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {industries.map((ind, i) => (
                        <div
                            key={ind.title}
                            className={`group bg-white border border-black/5 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 reveal-up delay-${(i % 4) * 100}`}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                                    {ind.icon}
                                </div>
                                <h3 className="font-display font-bold text-slate-900 text-xl mb-3 group-hover:text-primary transition-colors">{ind.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{ind.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
