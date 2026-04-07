'use client'

import Image from 'next/image'
import { Linkedin, Twitter, Github, Globe } from 'lucide-react'

const team = [
    { name: 'Shaikh Anas', role: 'Founder & CTO', image: '/Anas.jpeg', social: { github: 'https://github.com/Blexedanas', portfolio: 'https://anasportfoliio.web.app/', linkedin: 'https://www.linkedin.com/in/anas-shaikh-a0ba1a2b1/' } },
    { name: 'Dipen Vishwakarma', role: 'Co-Founder & CEO', image: '/Dipen.png', social: { github: 'https://github.com/vishwakarmadipen85', portfolio: 'https://dipenvishportfolio.netlify.app/', linkedin: 'https://www.linkedin.com/in/dipen-vishwakarma-976705303/' } },
    { name: 'Amaan Shaikh', role: 'UI/UX Head', image: '/Amaan.png', social: { linkedin: '#', twitter: '#' } },
    { name: 'Rishi', role: 'Senior App / Backend Dev', image: '', social: { linkedin: '#', github: '#' } },
    { name: 'Ankit Shah', role: 'Project Manager', image: '/Ankit.png', social: { linkedin: '#', twitter: '#' } },
    { name: 'Sohail Shaikh', role: 'Digital Marketing Head', image: '/Sohail.png', social: { linkedin: '#', twitter: '#' } },
    { name: 'Zarina R Shaikh', role: 'Team Member', image: '/Zarina.png', social: { linkedin: '#' } },
]

export default function TeamSection() {
    return (
        <section className="py-24 relative bg-white overflow-hidden border-t border-black/5" id="team">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,102,255,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="container-custom mx-auto relative z-10">
                <div className="text-center mb-16 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-bold mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Our Experts
                    </div>
                    <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight mb-6 leading-tight">
                        Meet The <span className="gradient-text">Team.</span>
                    </h2>
                    <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                        The visionary minds and technical powerhouses behind Zerixa Tech's most successful digital ecosystems.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-up delay-200">
                    {team.map((member, i) => (
                        <div key={i} className="group relative rounded-[2.5rem] overflow-hidden bg-slate-50 border border-black/5 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
                            {/* Image Container */}
                            <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-200">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top absolute inset-0 z-10 filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                {/* Bottom Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Info */}
                            <div className="p-8 relative z-30 group-hover:-translate-y-2 transition-transform duration-500">
                                <h3 className="font-display font-black text-xl text-slate-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-6">{member.role}</p>

                                {/* Socials */}
                                <div className="flex items-center gap-3">
                                    {member.social.linkedin && (
                                        <a href={member.social.linkedin} className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white shadow-sm hover:shadow-lg hover:shadow-primary/20">
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.social.twitter && (
                                        <a href={member.social.twitter} className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white shadow-sm hover:shadow-lg hover:shadow-primary/20">
                                            <Twitter className="w-4 h-4" />
                                        </a>
                                    )}
                                    {member.social.github && (
                                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white shadow-sm hover:shadow-lg hover:shadow-primary/20">
                                            <Github className="w-4 h-4" />
                                        </a>
                                    )}
                                    {/* @ts-ignore */}
                                    {member.social.portfolio && (
                                        /* @ts-ignore */
                                        <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-white border border-black/5 flex items-center justify-center hover:bg-primary transition-all text-slate-400 hover:text-white shadow-sm hover:shadow-lg hover:shadow-primary/20" title="Portfolio">
                                            <Globe className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
