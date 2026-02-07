import { motion } from 'framer-motion';
import { Briefcase, BarChart, Rocket, Globe, Palette, Megaphone, CheckCircle2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ColorKey = 'pink' | 'yellow' | 'cyan' | 'green' | 'orange' | 'purple';

interface Service {
    title: string;
    icon: LucideIcon;
    color: ColorKey;
    features: string[];
    description: string;
}

const Services = () => {
    const marketingServices: Service[] = [
        {
            title: 'Social Media',
            icon: Megaphone,
            color: 'pink',
            description: 'Organic growth and community building across all major platforms.',
            features: ['Viral Strategy', 'Platform Management', 'Influencer Collabs'],
        },
        {
            title: 'Paid Advertising',
            icon: BarChart,
            color: 'yellow',
            description: 'Precision-targeted ad campaigns that convert clicks into customers.',
            features: ['Google Ads', 'Meta Advertising', 'Retargeting Funnels'],
        },
        {
            title: 'SEO Mastery',
            icon: Globe,
            color: 'cyan',
            description: 'Dominating search results through technical and content excellence.',
            features: ['Organic Growth', 'Technical SEO', 'Local Dominance'],
        },
        {
            title: 'Content Strategy',
            icon: Briefcase,
            color: 'green',
            description: 'High-value content production that builds authority and trust.',
            features: ['High-Value Blogs', 'Video Scripts', 'Email Sequences'],
        },
        {
            title: 'Brand Identity',
            icon: Palette,
            color: 'orange',
            description: 'Designing visual systems that make your brand unmistakable.',
            features: ['Visual Identity', 'Brand Guidelines', 'Logo Design'],
        },
        {
            title: 'Conversion Rate',
            icon: Rocket,
            color: 'yellow',
            description: 'Optimizing the user journey to maximize every visitor.',
            features: ['CRO Optimization', 'Landing Pages', 'User Experience'],
        },
    ];

    const colorVars: Record<ColorKey, string> = {
        pink: 'var(--accent-pink)',
        yellow: 'var(--accent-yellow)',
        cyan: 'var(--accent-cyan)',
        green: 'var(--accent-green)',
        orange: 'var(--accent-orange)',
        purple: 'var(--accent-pink)',
    };

    return (
        <div className="min-h-screen bg-primary py-32">
            <div className="container mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-left mb-24"
                >
                    <span className="section-label">
                        Drive Traffic & Revenue
                    </span>
                    <h1 className="text-6xl font-black mb-8 tracking-tight">
                        Marketing Services
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-bold">
                        Traditional marketing powered by data. We use battle-tested strategies to grow your digital footprint and scale your revenue.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-10">
                    {marketingServices.map((service, idx) => {
                        const accentColor = colorVars[service.color];
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="brutalist-card flex flex-col"
                                style={{ borderLeft: `12px solid ${accentColor}` }}
                            >
                                <div className="flex-1">
                                    <div className="flex items-center justify-center border-black-3 mb-8" style={{ width: '64px', height: '64px', backgroundColor: accentColor }}>
                                        <Icon size={32} className="text-black" />
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 tracking-tight uppercase">
                                        {service.title}
                                    </h3>

                                    <p className="text-slate-600 font-bold leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {service.features.map((feature, fIdx) => (
                                            <li key={fIdx} className="flex items-center gap-3">
                                                <CheckCircle2 size={18} style={{ color: accentColor }} strokeWidth={3} />
                                                <span className="font-black text-sm uppercase tracking-widest text-slate-800">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32"
                >
                    <div className="border-black-4 p-12 md:p-20 bg-black text-white shadow-brutalist-lg">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter">Ready to scale your business?</h2>
                            <button className="brutalist-btn bg-yellow text-black border-none" style={{ backgroundColor: 'var(--accent-yellow)', padding: '24px 48px' }}>
                                <span className="text-xl font-black uppercase tracking-widest">GET A FREE AUDIT</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
