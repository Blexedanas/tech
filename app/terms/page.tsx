import type { Metadata } from 'next'

import { FileText, Scale, AlertCircle, Ban, Mail } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Zerixa Tech terms of service — the rules and guidelines for using our website and services.',
}

const sections = [
    {
        icon: FileText,
        title: '1. Acceptance of Terms',
        content: `By accessing or using Zerixa Tech\'s website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue use of our website and services immediately.

These terms apply to all visitors, clients, and others who access or use our services.`,
    },
    {
        icon: Scale,
        title: '2. Services & Intellectual Property',
        content: `Zerixa Tech provides digital product design and development services including web development, mobile app development, UI/UX design, AI solutions, and IoT development.

All work product delivered to clients transfers full intellectual property rights upon complete payment. Our pre-existing tools, frameworks, and libraries remain our property. Source code and design files are delivered to clients as agreed in project contracts.`,
    },
    {
        icon: AlertCircle,
        title: '3. Client Responsibilities',
        content: `Clients agree to:
• Provide accurate and complete project information
• Supply required assets, access credentials, and content in a timely manner
• Participate in scheduled reviews and provide feedback within agreed timelines
• Ensure they have rights to all third-party content they provide
• Make payments according to the agreed schedule

Delays caused by late client feedback or asset provision may impact project timelines and are not the responsibility of Zerixa Tech.`,
    },
    {
        icon: Ban,
        title: '4. Limitation of Liability',
        content: `Zerixa Tech shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services or delivered products.

Our liability for any claim arising from a project is limited to the total amount paid by the client for that specific project. We are not responsible for third-party services, APIs, or infrastructure failures outside our control.`,
    },
    {
        icon: Scale,
        title: '5. Confidentiality',
        content: `We treat all client information as confidential. We will not disclose project details, business information, or technical specifications to third parties without client consent, except as required by law.

Clients may request a mutual Non-Disclosure Agreement (NDA) before sharing sensitive information. We encourage this practice for all major projects.`,
    },
    {
        icon: FileText,
        title: '6. Governing Law',
        content: `These Terms of Service are governed by the laws of India, specifically the Information Technology Act, 2000, and its amendments. Any disputes shall be resolved in the courts of Surat, Gujarat, India.

If any provision of these terms is found unenforceable, the remaining provisions shall continue in full force and effect.`,
    },
]

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#0F172A]">
            {/* Header */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#9D4EDD]/6 rounded-full blur-[100px]" />
                </div>
                <div className="container-custom relative z-10 max-w-4xl">
                    <div className="badge-orange mb-4">⟹ Legal</div>
                    <h1 className="font-display font-extrabold text-5xl md:text-6xl text-white mb-4">
                        Terms of <span className="gradient-text">Service</span>
                    </h1>
                    <p className="text-white/50 text-base">
                        Last updated: <span className="text-white/70">February 25, 2026</span>
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="pb-20">
                <div className="container-custom max-w-4xl">
                    <div className="bg-[#1E293B]/50 border border-white/5 rounded-3xl p-8 mb-8">
                        <p className="text-white/60 leading-relaxed text-base">
                            These Terms of Service govern your use of <span className="text-white font-semibold">Zerixa Tech</span>&apos;s website and digital services. By engaging our services, you agree to these terms. Please read them carefully before proceeding.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {sections.map((section, i) => (
                            <div key={i} className="bg-[#1E293B] border border-white/5 rounded-2xl p-7">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-[#F47C35]/10 border border-[#F47C35]/20 flex items-center justify-center">
                                        <section.icon className="w-5 h-5 text-[#F47C35]" />
                                    </div>
                                    <h2 className="font-display font-bold text-xl text-white">{section.title}</h2>
                                </div>
                                <p className="text-white/50 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                            </div>
                        ))}
                    </div>

                    {/* Contact */}
                    <div className="mt-8 bg-gradient-to-br from-[#F47C35]/10 to-transparent border border-[#F47C35]/20 rounded-2xl p-7">
                        <h2 className="font-display font-bold text-xl text-white mb-3">Questions About These Terms?</h2>
                        <p className="text-white/50 text-sm mb-4">If you have any questions or concerns about these Terms of Service, please contact us before engaging our services.</p>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                            <Mail className="w-4 h-4 text-[#F47C35]" />
                            <a href="mailto:hello@zerixatech.com" className="hover:text-white transition-colors">hello@zerixatech.com</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
