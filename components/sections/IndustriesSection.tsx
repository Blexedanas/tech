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
        <section className="section-padding relative overflow-hidden bg-navy" id="industries">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-mid text-primary text-sm font-bold mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Industries We Serve
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-6xl text-text-1 mb-6 tracking-tight uppercase italic">
                        Tailored Solutions For <span className="text-accent-blue italic">Every Industry</span>
                    </h2>
                    <p className="text-text-2 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
                        From startups to global enterprises, we bring deep domain expertise across multiple strategic sectors.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {industries.map((ind, i) => (
                        <div
                            key={ind.title}
                            className={`group relative card-blue-premium rounded-[var(--card-radius)] p-8 text-center shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:shadow-[0_15px_40px_rgba(59,130,246,0.4)] hover:-translate-y-[5px] transition-all duration-500 reveal-up delay-${(i % 4) * 100}`}
                        >
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-[var(--inner-radius)] bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500">
                                    {ind.icon}
                                </div>
                                <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-white transition-colors uppercase tracking-tight">{ind.title}</h3>
                                <p className="text-white/90 text-sm leading-relaxed font-medium">{ind.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

