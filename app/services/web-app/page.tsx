import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Web App Development | Zerixa Tech' }

export default function WebAppPage() {
    return (
        <ServicePageTemplate
            badge="Web Apps & SaaS"
            title="Complex Interfaces Built"
            subtitle="For Scale and Speed"
            color="#f59e0b"
            iconName="zap"
            description="We build interactive, highly-scalable web applications and SaaS platforms that function like desktop software but live in the browser."
            features={[
                'Progressive Web Apps (PWAs)', 'SaaS Platform Architecture', 'Real-Time Dashboards',
                'Custom Admin Panels', 'API Development & GraphQL', 'Micro-Frontend Architecture',
                'State Management', 'WebSockets', 'Serverless Infrastructure',
            ]}
            benefits={[
                { title: 'Lightning Fast', desc: 'Optimized rendering and caching strategies ensure your users never wait.' },
                { title: 'Offline Capabilities', desc: 'PWAs that continue functioning even when the user drops their internet connection.' },
                { title: 'Cross-Platform', desc: 'Code once, deploy everywhere. Your web app will work flawlessly on desktop, tablet, and mobile.' },
                { title: 'Data Security', desc: 'Enterprise-grade security protocols, JWT authentication, and secure data storage.' },
                { title: 'Seamless UI/UX', desc: 'Fluid animations and intuitive interactions that rival native applications.' },
                { title: 'Scalable Backends', desc: 'Microservices architectures designed to handle massive concurrent user spikes.' },
            ]}
            tech={['React', 'Next.js', 'Vue / Nuxt', 'TypeScript', 'Node.js', 'GraphQL', 'WebSockets', 'AWS Serverless', 'Tailwind CSS']}
            process={[
                { step: '01', title: 'Strategy', desc: 'Defining the core user journeys, data structures, and technical stack.' },
                { step: '02', title: 'Prototyping', desc: 'Creating interactive wireframes to validate logic before writing code.' },
                { step: '03', title: 'Engineering', desc: 'Frontend UI development synchronized with robust backend API creation.' },
                { step: '04', title: 'Deployment', desc: 'Automated CI/CD pipelines, load testing, and seamless production rollout.' },
            ]}
        />
    )
}
