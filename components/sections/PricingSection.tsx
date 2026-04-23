'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const pricingData = [
    {
        id: 'website',
        label: 'Website Development',
        tiers: [
            {
                name: 'Basic Website',
                price: '₹3,500',
                popular: false,
                idealFor: 'Local shops, small businesses',
                features: ['1–3 Pages', 'Mobile Responsive', 'Contact Form', 'Basic SEO Setup', '1 Month Support']
            },
            {
                name: 'Standard Website',
                price: '₹6,000',
                popular: true,
                idealFor: 'Growing businesses, service providers',
                features: ['5–7 Pages', 'Custom Design', 'Admin Panel', 'WhatsApp Integration', 'Speed Optimization', '2 Months Support']
            },
            {
                name: 'Premium Website',
                price: '₹12,000',
                popular: false,
                idealFor: 'Established brands',
                features: ['10+ Pages', 'Advanced UI/UX', 'Blog System', 'Booking/Inquiry System', 'Performance Optimization', '3 Months Support']
            }
        ]
    },
    {
        id: 'ecommerce',
        label: 'E-Commerce',
        tiers: [
            {
                name: 'Basic E-Comm',
                price: '₹15,000',
                popular: false,
                idealFor: 'Up to 20 Products',
                features: ['Up to 20 Products', 'Payment Gateway', 'Order Management', 'Admin Panel']
            },
            {
                name: 'Standard E-Comm',
                price: '₹22,000',
                popular: true,
                idealFor: 'Up to 100 Products',
                features: ['Up to 100 Products', 'Coupon System', 'Inventory Management', 'SEO Setup']
            },
            {
                name: 'Premium E-Comm',
                price: '₹30,000',
                popular: false,
                idealFor: 'Unlimited Products',
                features: ['Unlimited Products', 'Custom Features', 'Advanced Filters', 'Multi-payment Integration']
            }
        ]
    },
    {
        id: 'app',
        label: 'Mobile Apps',
        tiers: [
            {
                name: 'Basic App',
                price: '₹25,000',
                popular: false,
                idealFor: 'Android Only (MVP)',
                features: ['Android App', 'Basic Features', 'API Integration', '1 Month Support']
            },
            {
                name: 'Standard App',
                price: '₹35,000',
                popular: true,
                idealFor: 'Android + iOS (Standard)',
                features: ['Cross Platform (Android + iOS)', 'Admin Dashboard', 'Push Notifications', '2 Months Support']
            },
            {
                name: 'Premium App',
                price: '₹50,000',
                popular: false,
                idealFor: 'High-End Custom App',
                features: ['Custom UI/UX', 'Advanced Features', 'Payment Integration', '3 Months Support']
            }
        ]
    },
    {
        id: 'amc',
        label: 'AMC (Maintenance)',
        tiers: [
            {
                name: 'Basic AMC',
                price: '₹5,999/yr',
                popular: false,
                idealFor: 'Small Scale Projects',
                features: ['Security Updates', 'Minor Changes', 'Monthly Backup']
            },
            {
                name: 'Standard AMC',
                price: '₹11,999/yr',
                popular: true,
                idealFor: 'Growing Applications',
                features: ['Everything in Basic', 'Performance Monitoring', 'Priority Support']
            },
            {
                name: 'Premium AMC',
                price: '₹18,999/yr',
                popular: false,
                idealFor: 'High Availability Apps',
                features: ['Full Maintenance', 'Feature Improvements', 'Dedicated Support']
            }
        ]
    }
]

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState(pricingData[0].id)
    const activeData = pricingData.find((d) => d.id === activeTab)

    return (
        <section className="section-padding relative overflow-hidden bg-slate-50" id="pricing">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10 max-w-6xl mx-auto">
                <div className="text-center mb-16 reveal">
                    <div className="badge-orange mb-5">⟹ Transparent Pricing</div>
                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-5xl text-slate-900 mb-6 tracking-tight leading-tight">
                        VIBE TECH – <span className="gradient-text">PRICING</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
                        Choose the perfect plan for your business needs. No hidden fees, just value-driven digital solutions.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 reveal-up">
                    {pricingData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${activeTab === tab.id
                                ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20'
                                : 'bg-white border-black/5 text-slate-500 hover:text-primary hover:border-primary/20 hover:shadow-lg'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Pricing Cards */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {activeData?.tiers.map((tier, idx) => (
                            <div
                                key={idx}
                                className={`relative rounded-[var(--card-radius)] p-8 transition-all duration-500 hover:-translate-y-2 border shadow-sm hover:shadow-2xl ${tier.popular
                                    ? 'bg-white border-primary/20'
                                    : 'bg-white border-black/5'
                                    }`}
                            >
                                {tier.popular && (
                                    <div className="absolute top-0 right-8 -translate-y-1/2">
                                        <div className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-xl">
                                            <Sparkles className="w-3 h-3" /> Most Popular
                                        </div>
                                    </div>
                                )}
                                <h3 className="text-2xl font-display font-black text-slate-900 mb-2">{tier.name}</h3>
                                {tier.idealFor && (
                                    <p className="text-slate-400 text-xs font-bold mb-6 uppercase tracking-widest">{tier.idealFor}</p>
                                )}
                                <div className="text-4xl font-black text-slate-900 mb-8 tracking-tight">
                                    {tier.price}
                                    {tier.price.includes('/yr') ? '' : <span className="text-lg text-slate-400 font-bold ml-1">/onwards</span>}
                                </div>

                                <ul className="space-y-4 mb-10">
                                    {tier.features.map((feature, i) => (
                                        <li key={i} className="flex flex-start gap-3 text-slate-600 text-sm font-medium">
                                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href="/contact"
                                    className={`w-full py-4 rounded-[var(--inner-radius)] text-center text-sm font-bold transition-all flex items-center justify-center ${tier.popular
                                        ? 'bg-primary text-white hover:bg-primary-dark shadow-xl shadow-primary/20'
                                        : 'bg-slate-50 text-slate-900 hover:bg-slate-100 border border-black/5'
                                        }`}
                                >
                                    Get Started
                                </a>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
