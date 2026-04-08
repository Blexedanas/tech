'use client'

import Image from 'next/image'
import { Linkedin, Twitter, Github, Globe } from 'lucide-react'

type TeamMember = {
    name: string;
    role: string;
    desc: string;
    image: string;
    social: {
        github?: string;
        linkedin?: string;
        portfolio?: string;
        twitter?: string;
    };
    objectPosition?: string;
};

const team: TeamMember[] = [
    { name: 'Zarin R Shaikh', role: 'Founder & CEO', desc: 'Visionary leader of Zerixa Tech, driving innovation and business growth with a focus on delivering smart digital solutions and client success.', image: '/Zarin.jpeg', social: {} },
    { name: 'Azim Sayyed', role: 'Co-Founder', desc: 'Co-founder of Zerixa Tech, contributing to business development, strategic planning, and operational excellence.', image: '/Azim.jpeg', social: {} },
    { name: 'Anas Shaikh', role: 'Chief Technology Officer (CTO)', desc: 'Drives the technology vision of Zerixa Tech, building scalable digital solutions and leading innovation across all products.', image: '/Anas.jpeg', objectPosition: 'object-top', social: { github: 'https://github.com/Blexedanas', portfolio: 'https://anasportfoliio.web.app/', linkedin: 'https://www.linkedin.com/in/anas-shaikh-a0ba1a2b1/' } },
    { name: 'Dipen Vishwakarama', role: 'Full Stack Developer', desc: 'Responsible for end-to-end web development, creating responsive, efficient, and user-friendly digital platforms.', image: '/Dipen.jpeg', objectPosition: 'object-top', social: { github: 'https://github.com/vishwakarmadipen85', portfolio: 'https://dipenvishportfolio.netlify.app/', linkedin: 'https://www.linkedin.com/in/dipen-vishwakarma-976705303/' } },
    { name: 'Satyam Wada', role: 'Head of Social Media Marketing', desc: 'Leads social media strategies and campaigns to boost brand presence and engagement. Awarded "Miss Cultural India World".', image: 'https://i.pravatar.cc/300?u=Satyam', social: {} },
    { name: 'Suzzane', role: 'Head of Social Media Operations', desc: 'Manages platforms like Reels, Facebook, and content strategy to boost engagement and reach. Recognized as a Strong Contestant on Splitsvilla 2026.', image: 'https://i.pravatar.cc/300?u=Sujzzan', social: {} },
    { name: 'Sohail Shaikh', role: 'Head of SEO', desc: 'Expert in search engine optimization, driving organic growth and improving website rankings.', image: '/Sohail.png', objectPosition: 'object-top', social: {} },
    { name: 'Ibrahim Shaikh', role: 'Professional Photographer', desc: 'An experienced photographer who has worked on numerous films, advertisements, and web series, bringing high-quality visual storytelling to every project.', image: 'https://i.pravatar.cc/300?u=Ibrahim', social: {} },
    { name: 'Amman Shaikh', role: 'Head of UI/UX Design', desc: 'Designs intuitive and visually engaging user experiences, enhancing customer interaction and brand identity.', image: '/Amaan.png', objectPosition: 'object-top', social: {} },
    { name: 'CA Ravi Vishwakarma', role: 'Head of Accounts & Finance', desc: 'Manages financial planning, accounting, and ensures smooth financial operations.', image: 'https://i.pravatar.cc/300?u=Ravi', social: {} },
    { name: 'Adv. Vikram Kapoor', role: 'Head Legal Advisor', desc: 'Provides expert legal guidance, ensuring compliance, contracts, and business protection.', image: '/Vikramkapoor.jpeg', social: {} },
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
                                    className={`object-cover ${member.objectPosition || 'object-center'} absolute inset-0 z-10 filter group-hover:scale-105 transition-all duration-700`}
                                />
                                {/* Bottom Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Info */}
                            <div className="p-8 relative z-30 group-hover:-translate-y-2 transition-transform duration-500">
                                <h3 className="font-display font-black text-xl text-slate-900 mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-3">{member.role}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{member.desc}</p>

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
