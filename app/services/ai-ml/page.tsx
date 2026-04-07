import ServicePageTemplate from '@/components/ServicePageTemplate'

export const metadata = { title: 'AI & ML Solutions | Zerixa Tech' }

export default function AiMlPage() {
    return (
        <ServicePageTemplate
            badge="AI & Machine Learning"
            title="Intelligence That"
            subtitle="Drives Growth"
            color="#f472b6"
            iconName="brain"
            description="We build AI systems that don't just automate — they predict, personalize, and optimize. From ML pipelines to production LLM integrations."
            features={[
                'Predictive Analytics & Forecasting', 'Natural Language Processing (NLP)', 'Computer Vision Systems',
                'Recommendation Engines', 'LLM Integration (GPT, Gemini, Claude)', 'Chatbots & Virtual Assistants',
                'Anomaly Detection', 'AutoML & Model Training', 'MLOps & Model Monitoring',
            ]}
            benefits={[
                { title: 'Production-Grade', desc: 'We build ML systems that survive real production traffic, not just Jupyter notebooks.' },
                { title: 'Explainable AI', desc: 'Every model comes with interpretability reports your stakeholders can understand.' },
                { title: 'Fast Time-to-Value', desc: 'Pre-built ML components and proven patterns cut development time by 40%.' },
                { title: 'Data Privacy', desc: 'Privacy-preserving ML, on-premise options, and full GDPR compliance.' },
                { title: 'Continuous Learning', desc: 'Models that retrain on new data automatically to stay accurate over time.' },
                { title: 'Cloud Agnostic', desc: 'Deploy on AWS SageMaker, GCP Vertex AI, Azure ML, or your own infrastructure.' },
            ]}
            tech={['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'OpenAI API', 'FastAPI', 'Spark', 'Airflow', 'MLflow']}
            process={[
                { step: '01', title: 'Data Audit', desc: 'We assess your data quality, volume, and readiness for ML.' },
                { step: '02', title: 'Experiment', desc: 'Rapid prototyping of model architectures with baseline benchmarks.' },
                { step: '03', title: 'Train & Tune', desc: 'Full training pipeline with hyperparameter optimization and validation.' },
                { step: '04', title: 'Deploy & Monitor', desc: 'Production deployment with drift detection and automated retraining.' },
            ]}
        />
    )
}
