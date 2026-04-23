import { Star, Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Sarah Chen',
        role: 'CTO, FinFlow Inc.',
        text: 'Zerixa Tech delivered an exceptional banking dashboard beyond our expectations. The attention to detail, performance, and security was outstanding. Highly recommended.',
        rating: 5,
    },
    {
        name: 'Marcus Williams',
        role: 'Founder, MedSync',
        text: 'The team at Zerixa Tech truly understood our vision. They turned a complex healthcare requirement into an intuitive, beautiful app in record time.',
        rating: 5,
    },
    {
        name: 'Aisha Patel',
        role: 'Product Lead, ShopAI',
        text: 'Working with Zerixa Tech was seamless from day one. Their process is transparent, their code is clean, and the results speak for themselves.',
        rating: 5,
    },
]

export default function TestimonialsSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-white border-t border-black/5">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Client Success
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
                        What Our <span className="gradient-text">Partners Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="reveal-up" style={{ transitionDelay: `${i * 150}ms` }}>
                            <div className="bg-slate-50 border border-black/5 text-slate-900 rounded-[var(--card-radius)] p-8 md:p-10 hover:bg-white hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col group">
                                <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors" />

                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(t.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                        ))}
                                    </div>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-8 italic flex-1 font-medium">&quot;{t.text}&quot;</p>

                                    <div className="flex items-center gap-4 pt-6 border-t border-black/5 mt-auto">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-lg border border-black/5">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-bold text-lg leading-none mb-1.5">{t.name}</h4>
                                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
