import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Magnetic from '@/components/ui/Magnetic'

export default function CtaBannerSection() {
    return (
        <section className="py-24 relative overflow-hidden mx-4 md:mx-8 mb-12 rounded-[2.5rem] card-blue-premium reveal-up shadow-[0_30px_60px_-15px_rgba(59,130,246,0.5)]">
            {/* Subtle mesh/noise background */}
            <div className="absolute inset-0 bg-noise opacity-[0.05]" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            <div className="container-custom relative z-10 text-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-white text-sm font-bold mb-8 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white relative animate-pulse" />
                    Available for New Projects
                </div>

                <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight tracking-tight">
                    Ready to Build Something <br className="hidden md:block" />
                    <span className="text-white brightness-125">Extraordinary?</span>
                </h2>

                <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                    Let&apos;s turn your vision into reality. We partner with ambitious brands to create digital experiences that perform.
                </p>

                <Magnetic>
                    <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-primary-dark transition-all rounded-full py-5 px-12 text-base font-bold shadow-2xl shadow-primary/20 group hover:scale-105 active:scale-95">
                        Start Your Project
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </Magnetic>
            </div>
        </section>
    )
}
