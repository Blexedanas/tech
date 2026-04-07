import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Custom Software Development | Zerixa Tech' }

export default function SoftwarePage() {
    return (
        <ServicePageTemplate
            badge="Custom Software"
            title="Software Built"
            subtitle="For Your Exact Needs"
            color="#a78bfa"
            iconName="code"
            description="Generic software holds your business back. We build bespoke systems — ERPs, CRMs, automation platforms — engineered precisely for your workflows and scale."
            features={[
                'ERP & CRM Systems', 'Workflow Automation', 'Legacy System Modernization',
                'SaaS Platform Development', 'API Development & Integration', 'Admin Portals & Dashboards',
                'Microservices Architecture', 'Cloud-Native & DevOps', 'Multi-tenant Architecture',
            ]}
            benefits={[
                { title: 'Zero Compromises', desc: 'Built for YOUR process — no bending your business to fit someone else\'s software.' },
                { title: 'Infinite Scalability', desc: 'Cloud-native architecture that scales from 10 to 10 million users without breaking.' },
                { title: 'Integrations', desc: 'We connect to any third-party system — Salesforce, SAP, QuickBooks, and beyond.' },
                { title: 'Security First', desc: 'SOC 2, GDPR, and HIPAA-compliant development practices from day one.' },
                { title: 'Documentation', desc: 'Complete technical documentation and knowledge transfer so your team is always in control.' },
                { title: 'Maintenance Plans', desc: 'Ongoing SLA-backed support and feature development after launch.' },
            ]}
            tech={['Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Terraform']}
            process={[
                { step: '01', title: 'Analysis', desc: 'Deep-dive into your existing workflows, pain points, and desired outcomes.' },
                { step: '02', title: 'Architecture', desc: 'We design a scalable, maintainable system architecture reviewed with your tech team.' },
                { step: '03', title: 'Development', desc: 'Agile sprints with continuous integration, test coverage, and regular demos.' },
                { step: '04', title: 'Go Live', desc: 'Phased rollout, user training, and hypercare support for the first month.' },
            ]}
        />
    )
}
