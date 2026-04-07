import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'UI/UX Design | Zerixa Tech' }

export default function UiUxPage() {
    return (
        <ServicePageTemplate
            badge="UI/UX Design"
            title="Interfaces That"
            subtitle="Convert & Captivate"
            color="#34d399"
            iconName="palette"
            description="We design digital experiences grounded in psychology, user research, and aesthetic excellence. Beautiful on the surface, intuitive at the core."
            features={[
                'User Research & Personas', 'Information Architecture', 'Wireframing & Prototyping',
                'Visual Design & Branding', 'Design Systems & Style Guides', 'Usability Testing',
                'Figma & Adobe XD', 'Micro-interactions & Animation', 'Responsive & Accessible Design',
            ]}
            benefits={[
                { title: 'Research-Driven', desc: 'Decisions backed by user interviews, competitor analysis, and data — not guesses.' },
                { title: 'Conversion Focused', desc: 'We design for business outcomes: signups, purchases, and retention.' },
                { title: 'Dev-Ready Specs', desc: 'Every Figma file includes specs, tokens, and documentation for developers.' },
                { title: 'Accessibility', desc: 'WCAG 2.1 AA compliant designs that work for everyone.' },
                { title: 'Design Systems', desc: 'Scalable component libraries that keep your product consistent across every screen.' },
                { title: 'Rapid Iteration', desc: 'Initial concepts within 5 days. We iterate fast based on your feedback.' },
            ]}
            tech={['Figma', 'Adobe XD', 'Framer', 'Principle', 'Maze', 'Hotjar', 'Lottie', 'InVision', 'Zeplin', 'Notion']}
            process={[
                { step: '01', title: 'Research', desc: 'User interviews, heuristic evaluation, and competitive landscape analysis.' },
                { step: '02', title: 'Structure', desc: 'Information architecture, user flows, and low-fidelity wireframes.' },
                { step: '03', title: 'Design', desc: 'High-fidelity visuals with full interactive prototypes for stakeholder review.' },
                { step: '04', title: 'Handoff', desc: 'Developer-ready Figma files, design tokens, and a complete style guide.' },
            ]}
        />
    )
}
