import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'Mobile App Development | Zerixa Tech' }

export default function AppPage() {
    return (
        <ServicePageTemplate
            badge="Mobile App Development"
            title="Apps Users"
            subtitle="Actually Love"
            color="#60a5fa"
            iconName="smartphone"
            description="We build iOS, Android, and cross-platform apps with React Native that feel native, perform flawlessly, and keep users coming back."
            features={[
                'iOS & Android Development', 'React Native Cross-Platform', 'Native Swift & Kotlin',
                'App Store & Play Store Publishing', 'Push Notifications', 'Offline Support',
                'In-App Purchases', 'Social Login & Auth', 'Analytics & Crash Reporting',
            ]}
            benefits={[
                { title: 'Native Performance', desc: "We use React Native's native modules for features that demand hardware-level performance." },
                { title: 'One Codebase', desc: 'Cross-platform means 60% faster delivery and lower maintenance cost.' },
                { title: 'App Store Ready', desc: 'We handle submission, screenshots, ASO, and review response.' },
                { title: 'Push & Notify', desc: 'Intelligent push notification strategy to maximize retention and engagement.' },
                { title: 'Secure by Default', desc: 'Biometric auth, encrypted storage, and OWASP mobile top-10 compliance.' },
                { title: 'Analytics Built-In', desc: 'Track every user interaction to continuously improve the experience.' },
            ]}
            tech={['React Native', 'Expo', 'Swift', 'Kotlin', 'Firebase', 'Redux', 'Jest', 'Fastlane', 'Sentry', 'RevenueCat']}
            process={[
                { step: '01', title: 'Scoping', desc: 'We define features, platform targets, and MVP scope together.' },
                { step: '02', title: 'Prototype', desc: 'Interactive prototype you can tap through on a real device.' },
                { step: '03', title: 'Build', desc: 'Sprint-based development with weekly builds delivered to TestFlight / Play Console.' },
                { step: '04', title: 'Publish', desc: 'We handle the full App Store & Play Store submission process.' },
            ]}
        />
    )
}
