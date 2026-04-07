'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ArrowLeft, Check, Code, Smartphone, Brain, Palette, Cpu, Globe, ShoppingCart, ShieldCheck, TrendingUp, Zap } from 'lucide-react'

// Define the steps and their options
const SERVICE_OPTIONS = [
    {
        id: 'web',
        label: 'Website Development',
        icon: Globe,
        tiers: { basic: 3500, advanced: 6000, enterprise: 12000 }
    },
    {
        id: 'ecommerce',
        label: 'E-Commerce Website',
        icon: ShoppingCart,
        tiers: { basic: 15000, advanced: 22000, enterprise: 30000 }
    },
    {
        id: 'mobile',
        label: 'Mobile App Development',
        icon: Smartphone,
        tiers: { basic: 25000, advanced: 35000, enterprise: 50000 }
    },
    {
        id: 'seo',
        label: 'SEO Services',
        icon: TrendingUp,
        tiers: { basic: 10000, advanced: 18000, enterprise: 30000 }
    },
    {
        id: 'ppc',
        label: 'Paid Advertising (PPC)',
        icon: Zap,
        tiers: { basic: 8000, advanced: 15000, enterprise: 25000 }
    },
    {
        id: 'branding',
        label: 'Brand Identity',
        icon: Palette,
        tiers: { basic: 5000, advanced: 10000, enterprise: 20000 }
    },
    {
        id: 'automation',
        label: 'Business Automation',
        icon: Cpu,
        tiers: { basic: 15000, advanced: 25000, enterprise: 45000 }
    },
    {
        id: 'amc',
        label: 'Annual Maintenance',
        icon: ShieldCheck,
        tiers: { basic: 5999, advanced: 11999, enterprise: 18999 }
    },
]

const COMPLEXITY_OPTIONS = [
    { id: 'basic', label: 'Basic Plan', description: 'Essential features for small scale projects.', multiplier: 1 },
    { id: 'advanced', label: 'Standard Plan', description: 'More pages, custom features & better support.', multiplier: 1 },
    { id: 'enterprise', label: 'Premium Plan', description: 'Full enterprise-grade logic and maximum support.', multiplier: 1 },
]

const TIMELINE_OPTIONS = [
    { id: 'relaxed', label: 'Relaxed (1 Month+)', discount: 0.9 },
    { id: 'standard', label: 'Standard (2-3 Weeks)', discount: 1 },
    { id: 'rush', label: 'Rush (< 1 Week)', discount: 1.3 },
]

export default function ProjectEstimator() {
    const [step, setStep] = useState(1)
    const [selections, setSelections] = useState<{
        services: string[];
        complexity: string;
        timeline: string;
    }>({
        services: [],
        complexity: 'basic',
        timeline: 'standard'
    })

    // Calculate dynamic estimate
    const calculateEstimate = () => {
        let total = selections.services.reduce((acc, sId) => {
            const service = SERVICE_OPTIONS.find(s => s.id === sId)
            if (!service) return acc
            // @ts-ignore
            return acc + (service.tiers[selections.complexity] || 0)
        }, 0)

        // If no service selected, show 0
        if (total === 0) return 0

        const timeMultiplier = TIMELINE_OPTIONS.find(t => t.id === selections.timeline)?.discount || 1

        return Math.round(total * timeMultiplier)
    }

    const estimatedPrice = calculateEstimate()

    const handleServiceToggle = (id: string) => {
        setSelections(prev => {
            const isSelected = prev.services.includes(id)
            if (isSelected) {
                return { ...prev, services: prev.services.filter(s => s !== id) }
            } else {
                return { ...prev, services: [...prev.services, id] }
            }
        })
    }

    const nextStep = () => { if (step < 4) setStep(step + 1) }
    const prevStep = () => { if (step > 1) setStep(step - 1) }

    return (
        <div className="bg-white border border-black/5 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden text-slate-900 w-full max-w-4xl mx-auto">
            {/* Background Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Header & Progress */}
            <div className="mb-10 relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="font-display font-bold text-3xl mb-2">Project Estimator</h3>
                        <p className="text-slate-500">Get an instant, customized cost estimation.</p>
                    </div>
                    {/* Live Counter (Only show if services selected) */}
                    {selections.services.length > 0 && (
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Est. Budget</p>
                            <p className="font-mono text-3xl font-bold">₹{estimatedPrice.toLocaleString()}</p>
                        </div>
                    )}
                </div>

                {/* Progress Bar */}
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-1.5 rounded-full flex-1 transition-all duration-500 ${step >= i ? 'bg-primary' : 'bg-slate-100'}`} />
                    ))}
                </div>
            </div>

            {/* Content Area - Animated Steps */}
            <div className="relative min-h-[400px] z-10">
                <AnimatePresence mode='wait'>
                    {/* STEP 1: SERVICES */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-xl font-bold mb-6">1. What services do you need? <span className="text-slate-400 font-normal text-sm ml-2">(Select all that apply)</span></h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {SERVICE_OPTIONS.map(service => {
                                    const isSelected = selections.services.includes(service.id)
                                    return (
                                        <button
                                            key={service.id}
                                            onClick={() => handleServiceToggle(service.id)}
                                            className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 ${isSelected
                                                ? 'bg-primary/20 border-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]'
                                                : 'bg-slate-50 border-black/5 hover:bg-slate-100 hover:border-black/20'
                                                }`}
                                        >
                                            <div className={`p-2 rounded-lg ${isSelected ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                <service.icon className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1 pt-1.5">
                                                <h5 className="font-bold text-sm leading-none">{service.label}</h5>
                                            </div>
                                            {isSelected && <Check className="w-5 h-5 text-primary shrink-0" />}
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: COMPLEXITY */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-xl font-bold mb-6">2. What is the complexity scale?</h4>
                            <div className="flex flex-col gap-4">
                                {COMPLEXITY_OPTIONS.map(comp => {
                                    const isSelected = selections.complexity === comp.id
                                    return (
                                        <button
                                            key={comp.id}
                                            onClick={() => setSelections(s => ({ ...s, complexity: comp.id }))}
                                            className={`p-6 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${isSelected
                                                ? 'bg-primary/20 border-primary'
                                                : 'bg-slate-50 border-black/5 hover:bg-slate-100'
                                                }`}
                                        >
                                            <div>
                                                <h5 className="font-bold text-lg mb-1">{comp.label}</h5>
                                                <p className="text-slate-500 text-sm">{comp.description}</p>
                                            </div>
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-primary' : 'border-black/20'}`}>
                                                {isSelected && <div className="w-3 h-3 rounded-full bg-primary" />}
                                            </div>
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: TIMELINE */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h4 className="text-xl font-bold mb-6">3. What is your expected timeline?</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {TIMELINE_OPTIONS.map(time => {
                                    const isSelected = selections.timeline === time.id
                                    return (
                                        <button
                                            key={time.id}
                                            onClick={() => setSelections(s => ({ ...s, timeline: time.id }))}
                                            className={`p-6 rounded-2xl border text-center transition-all duration-300 flex flex-col items-center gap-4 ${isSelected
                                                ? 'bg-primary/20 border-primary scale-105 shadow-xl'
                                                : 'bg-slate-50 border-black/5 hover:bg-slate-100'
                                                }`}
                                        >
                                            <div className={`w-12 h-12 rounded-full border flex items-center justify-center ${isSelected ? 'border-primary bg-primary text-white' : 'border-black/20 text-slate-400'}`}>
                                                <Check className={`w-5 h-5 ${isSelected ? 'opacity-100' : 'opacity-0'}`} />
                                            </div>
                                            <h5 className="font-bold">{time.label}</h5>
                                            {/* Hint at cost impact */}
                                            {time.discount < 1 && <span className="text-[10px] uppercase font-bold text-green px-2 py-1 bg-green/10 rounded flex items-center gap-1">Cost Saver</span>}
                                            {time.discount > 1 && <span className="text-[10px] uppercase font-bold text-orange-400 px-2 py-1 bg-orange-400/10 rounded">Premium</span>}
                                        </button>
                                    )
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: RESULT */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className="text-center py-10"
                        >
                            <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-green" />
                            </div>
                            <h4 className="text-2xl font-bold mb-2">Your Estimate is Ready</h4>
                            <p className="text-slate-500 mb-8 max-w-md mx-auto">This is a rough estimate based on your selections. Let&apos;s talk specifics to refine it.</p>

                            <div className="bg-slate-50 border border-black/10 rounded-3xl p-8 mb-8 inline-block min-w-[300px]">
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Estimated Budget Range</p>
                                <div className="font-mono text-5xl font-black text-slate-900">
                                    ₹{(estimatedPrice * 0.9).toLocaleString()}<span className="text-slate-400 font-sans font-normal text-3xl mx-2">-</span>₹{(estimatedPrice * 1.1).toLocaleString()}
                                </div>
                            </div>

                            <div className="flex justify-center flex-col sm:flex-row gap-4">
                                <button className="btn-primary py-4 px-8 text-lg">
                                    Discuss This Project
                                </button>
                                <button onClick={() => setStep(1)} className="btn-outline">
                                    Recalculate
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Footer */}
            {step < 4 && (
                <div className="mt-10 flex justify-between items-center border-t border-black/10 pt-6 relative z-10">
                    <button
                        onClick={prevStep}
                        disabled={step === 1}
                        className={`flex items-center gap-2 px-4 py-2 font-bold transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-500 hover:text-slate-900'}`}
                    >
                        <ArrowLeft className="w-4 h-4" /> Back
                    </button>

                    <button
                        onClick={nextStep}
                        disabled={step === 1 && selections.services.length === 0}
                        className={`flex items-center gap-2 px-8 py-3 rounded-xl font-bold transition-all ${step === 1 && selections.services.length === 0
                            ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                            : 'bg-primary text-white hover:bg-primary-dark hover:scale-105 shadow-xl'
                            }`}
                    >
                        {step === 3 ? 'Get Estimate' : 'Next Step'} <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </div>
    )
}
