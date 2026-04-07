import { ReactNode } from 'react'

const techLogos = [
    { name: 'React', emoji: '⚛️' },
    { name: 'Next.js', emoji: '▲' },
    { name: 'Node.js', emoji: '🟢' },
    { name: 'Python', emoji: '🐍' },
    { name: 'Flutter', emoji: '💙' },
    { name: 'React Native', emoji: '📱' },
    { name: 'AWS', emoji: '☁️' },
    { name: 'Firebase', emoji: '🔥' },
    { name: 'TensorFlow', emoji: '🧠' },
    { name: 'TypeScript', emoji: '🔷' },
    { name: 'MongoDB', emoji: '🍃' },
    { name: 'Docker', emoji: '🐳' },
    { name: 'Figma', emoji: '🎨' },
    { name: 'Photoshop', emoji: '🟦' },
    { name: 'Illustrator', emoji: '🟧' },
    { name: 'Google Ads', emoji: '📈' },
    { name: 'Meta Ads', emoji: '📘' },
    { name: 'Google Analytics', emoji: '📊' },
    { name: 'Ahrefs', emoji: '🔍' },
    { name: 'Semrush', emoji: '🚀' },
    { name: 'HubSpot', emoji: '🟠' },
]

export default function TechMarquee() {
    return (
        <div className="py-10 bg-white relative z-10 overflow-hidden">
            <div className="border-y border-black/5 bg-slate-50 relative py-8">
                {/* Edge Fades */}
                <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

                {/* Row 1: Leftward */}
                <div className="flex animate-marquee whitespace-nowrap mb-8 pb-4">
                    {[...techLogos, ...techLogos, ...techLogos].map((t, i) => (
                        <div key={`r1-${i}`} className="flex items-center gap-4 px-12 transition-all duration-500 group cursor-default shrink-0">
                            <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-3xl group-hover:scale-110 shadow-sm transition-all group-hover:shadow-primary/20 group-hover:-translate-y-2">
                                {t.emoji}
                            </div>
                            <span className="text-slate-900 font-display font-black text-xl tracking-tight group-hover:text-primary transition-colors">
                                {t.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Row 2: Rightward (Reverse) */}
                <div className="flex animate-marquee-reverse whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-500">
                    {[...techLogos, ...techLogos, ...techLogos].reverse().map((t, i) => (
                        <div key={`r2-${i}`} className="flex items-center gap-4 px-12 transition-all duration-500 group cursor-default shrink-0">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-black/5 flex items-center justify-center text-2xl group-hover:scale-110 shadow-sm transition-all group-hover:shadow-primary/20 group-hover:-translate-y-2">
                                {t.emoji}
                            </div>
                            <span className="text-slate-500 font-display font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
                                {t.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
