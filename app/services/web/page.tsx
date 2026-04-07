import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Web Development | Zerixa Tech' }

export default function WebPage() {
    return (
        <ServicePageTemplate
            badge="Web Development"
            title="Websites That"
            subtitle="Work & Wow"
            color="#E8712C"
            iconName="globe"
            description="From lightning-fast marketing sites to complex web platforms, we build with React, Next.js, and modern frameworks that rank on Google and delight users."
            features={[
                'Custom React & Next.js Apps', 'SEO & Core Web Vitals', 'CMS Integration (Sanity, Contentful)',
                'E-commerce (Shopify, WooCommerce)', 'REST & GraphQL APIs', 'Real-time Features',
                'Progressive Web Apps (PWA)', 'Multilingual / Internationalization', 'Performance Optimization',
            ]}
            benefits={[
                { title: 'Speed First', desc: 'Every site scores 95+ on Lighthouse. Fast sites rank higher and convert more.' },
                { title: 'Design + Dev', desc: 'We handle both design and development, ensuring pixel-perfect consistency.' },
                { title: 'SEO Built-In', desc: 'Technical SEO is baked into every build, not bolted on after.' },
                { title: 'Scalable Architecture', desc: 'Your site grows with you. No rewrites needed as traffic increases.' },
                { title: 'Ongoing Support', desc: '3 months of free maintenance and support included with every project.' },
                { title: 'CMS Ready', desc: 'Your team can update content easily — no developer required.' },
            ]}
            tech={['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Sanity CMS', 'Vercel', 'AWS', 'Stripe']}
            process={[
                { step: '01', title: 'Discovery', desc: 'We analyse your goals, competitors, and users to define the right architecture.' },
                { step: '02', title: 'Design', desc: 'High-fidelity Figma mockups reviewed and approved by you before coding begins.' },
                { step: '03', title: 'Build', desc: 'We build iteratively with weekly demos, ensuring quality and alignment throughout.' },
                { step: '04', title: 'Launch', desc: 'CI/CD pipeline, staging environment, and UAT testing before going live.' },
            ]}
        />
    )
}
