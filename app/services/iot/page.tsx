import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'IoT Development | Zerixa Tech' }

export default function IotPage() {
    return (
        <ServicePageTemplate
            badge="IoT Development"
            title="Connected Devices,"
            subtitle="Seamless Systems"
            color="#fb923c"
            iconName="cpu"
            description="We engineer end-to-end IoT ecosystems — from firmware and embedded systems to cloud backends and real-time dashboards."
            features={[
                'Embedded Firmware Development', 'MQTT & AMQP Protocols', 'Real-time Data Pipelines',
                'IoT Cloud Platforms (AWS IoT, Azure IoT)', 'Edge Computing & AI at Edge', 'OTA Firmware Updates',
                'Device Management & Provisioning', 'Industrial IoT (IIoT)', 'Energy & Smart Building Systems',
            ]}
            benefits={[
                { title: 'Full Stack IoT', desc: 'Hardware protocols to cloud dashboards — one team that understands the entire stack.' },
                { title: 'Low Latency', desc: 'Edge computing architectures that act in milliseconds without cloud round-trips.' },
                { title: 'Secure by Design', desc: 'TLS, certificate-based auth, and encrypted OTA updates from day one.' },
                { title: 'Scalable to Millions', desc: 'MQTT brokers and time-series databases that handle millions of device messages/sec.' },
                { title: 'Protocol Agnostic', desc: 'MQTT, CoAP, Zigbee, BLE, LoRaWAN, Modbus — we speak every IoT language.' },
                { title: 'Monitoring & Alerts', desc: 'Real-time dashboards with intelligent alerting for device health and anomalies.' },
            ]}
            tech={['Embedded C/C++', 'Raspberry Pi', 'ESP32', 'MQTT', 'InfluxDB', 'Grafana', 'AWS IoT', 'Node-RED', 'Python', 'Docker']}
            process={[
                { step: '01', title: 'Assess', desc: 'Understand your use case, environment, connectivity, and latency requirements.' },
                { step: '02', title: 'Prototype', desc: 'Working hardware + firmware POC delivered within 4 weeks.' },
                { step: '03', title: 'Scale', desc: 'Cloud backend, device management platform, and dashboard built for production.' },
                { step: '04', title: 'Maintain', desc: 'OTA update infrastructure, monitoring, and ongoing firmware support.' },
            ]}
        />
    )
}
