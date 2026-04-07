import { getServiceBySlug, servicesData } from '@/lib/services'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const service = getServiceBySlug(params.slug)
    if (!service) return { title: 'Service Not Found' }
    
    return {
        title: `${service.subtitle} | Zerixa Tech`,
        description: service.description
    }
}

export default function DynamicServicePage({ params }: Props) {
    const service = getServiceBySlug(params.slug)
    
    if (!service) {
        notFound()
    }

    return (
        <ServicePageTemplate
            badge={service.badge}
            title={service.title}
            subtitle={service.subtitle}
            color={service.color}
            iconName={service.iconName}
            description={service.description}
            features={service.features}
            benefits={service.benefits}
            tech={service.tech}
            process={service.process}
        />
    )
}
