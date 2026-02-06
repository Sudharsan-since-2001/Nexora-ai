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
            color: 'purple',
            description: 'Optimizing the user journey to maximize every visitor.',
            features: ['CRO Optimization', 'Landing Pages', 'User Experience'],
        },
    ];

    const colorClasses: Record<ColorKey, { border: string; bg: string; text: string }> = {
        pink: { border: 'border-[#F0ABFC]', bg: 'bg-[#F0ABFC]', text: 'text-pink-600' },
        yellow: { border: 'border-[#FDE047]', bg: 'bg-[#FDE047]', text: 'text-yellow-600' },
        cyan: { border: 'border-[#22D3EE]', bg: 'bg-[#22D3EE]', text: 'text-cyan-600' },
        green: { border: 'border-[#4ADE80]', bg: 'bg-[#4ADE80]', text: 'text-green-600' },
        orange: { border: 'border-[#FB923C]', bg: 'bg-[#FB923C]', text: 'text-orange-600' },
        purple: { border: 'border-[#C084FC]', bg: 'bg-[#C084FC]', text: 'text-purple-600' },
    };

    return (
        <div className="min-h-screen bg-slate-50 py-32 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 text-cyan-700 font-bold text-sm mb-6 tracking-wide uppercase">
                        Drive Traffic & Revenue
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                        Marketing Services
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        Traditional marketing powered by data. We use battle-tested strategies to grow your digital footprint and scale your revenue.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {marketingServices.map((service, idx) => {
                        const colors = colorClasses[service.color];
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group"
                            >
                                <div className={`
                  h-full relative rounded-[2.5rem] overflow-hidden
                  border-8 ${colors.border}
                  bg-white shadow-xl hover:shadow-2xl 
                  transition-all duration-300 flex flex-col
                `}>
                                    {/* Icon & Title */}
                                    <div className="p-10 pb-6 flex-1">
                                        <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-8 shadow-inner ring-4 ring-white`}>
                                            <Icon className="w-8 h-8 text-slate-900" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 font-medium leading-relaxed mb-8">
                                            {service.description}
                                        </p>

                                        <ul className="space-y-4">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-3">
                                                    <div className={`w-6 h-6 rounded-full ${colors.bg} flex items-center justify-center shrink-0`}>
                                                        <CheckCircle2 className="w-4 h-4 text-slate-900" />
                                                    </div>
                                                    <span className="text-slate-700 font-bold text-sm">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer Decoration */}
                                    <div className={`${colors.bg} h-3 mt-auto`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 text-center"
                >
                    <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to scale your business?</h2>
                            <button className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-cyan-400 transition-colors shadow-lg">
                                GET A FREE AUDIT
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
