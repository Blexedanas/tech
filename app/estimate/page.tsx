import { Metadata } from 'next'

import ProjectEstimator from '@/components/ui/ProjectEstimator'
import { ArrowRight, Calculator } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Project Estimator | Zerixa Tech',
    description: 'Get an instant, customized cost estimation for your next high-end web, mobile, AI, or IoT project.',
}

export default function EstimatePage() {
    return (
        <main className="bg-navy min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple/10 rounded-full blur-[150px]" />

            <div className="container-custom relative z-10 text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white border border-black/10 shadow-sm rounded-full px-5 py-2 text-slate-800 text-sm font-bold mb-6">
                    <Calculator className="w-4 h-4 text-primary" /> Instant Pricing Engine
                </div>
                <h1 className="font-display font-extrabold text-5xl md:text-7xl text-slate-900 mb-6 tracking-tight">
                    Build Your <span className="gradient-text">Estimate</span>
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Select the services you need, define the complexity, and set your timeline to get an instant approximation of your project&apos;s investment.
                </p>
            </div>

            <div className="container-custom px-4 relative z-10">
                <ProjectEstimator />

                {/* FAQ / Info Below Estimator */}
                <div className="mt-24 max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Is this a final quote?</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            No, these estimates are strictly for scoping purposes. Every custom software project has unique nuances. We provide a binding quote after our Discovery Phase.
                        </p>
                    </div>
                    <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Not sure what you need?</h3>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            That&apos;s exactly what we&apos;re here for. We offer free consultation calls to help define your architecture and requirements.
                        </p>
                        <Link href="/contact" className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                            Book a Strategy Call <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
