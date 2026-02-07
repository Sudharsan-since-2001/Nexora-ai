import { motion } from 'framer-motion';
import { Cpu, MessageSquare, Zap, LayoutDashboard, Database, Repeat, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type ColorKey = 'cyan' | 'pink' | 'yellow' | 'green' | 'orange';

interface Solution {
    title: string;
    desc: string;
    icon: LucideIcon;
    color: ColorKey;
}

const AISolutions = () => {
    const solutions: Solution[] = [
        {
            title: 'AI Chatbots',
            desc: 'Intelligent assistants that handle customer queries, lead qualifying, and sales 24/7 on your website.',
            icon: MessageSquare,
            color: 'cyan'
        },
        {
            title: 'Workflow Automation',
            desc: 'Connect your favorite apps and automate repetitive tasks to save hundreds of hours every month.',
            icon: Repeat,
            color: 'pink'
        },
        {
            title: 'Lead Automation',
            desc: 'Automated outreach and lead scoring systems that fill your pipeline while you sleep.',
            icon: Zap,
            color: 'yellow'
        },
        {
            title: 'Custom AI Tools',
            desc: 'Bespoke AI applications built on top of GPT-4 or Claude designed for your specific business needs.',
            icon: Cpu,
            color: 'green'
        },
        {
            title: 'SaaS Development',
            desc: 'Turn your agency into a tech-first business with custom software and application development.',
            icon: Cpu,
            color: 'orange'
        },
        {
            title: 'CRM Automation',
            desc: 'Seamlessly integrate AI into your CRM to maintain perfect records and never miss a follow-up.',
            icon: Database,
            color: 'cyan'
        },
    ];

    const colorVars: Record<ColorKey, string> = {
        cyan: 'var(--accent-cyan)',
        pink: 'var(--accent-pink)',
        yellow: 'var(--accent-yellow)',
        green: 'var(--accent-green)',
        orange: 'var(--accent-orange)',
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
                        Automate & Scale
                    </span>
                    <h1 className="text-6xl font-black mb-8 tracking-tight">
                        AI Automation<br />Solutions
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-bold">
                        We don't just use AI; we build it into the DNA of your business processes. Scale your output without scaling your overhead.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-10">
                    {solutions.map((item, idx) => {
                        const accentColor = colorVars[item.color];
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="brutalist-card flex flex-col items-center text-center"
                                style={{ borderTop: `12px solid ${accentColor}` }}
                            >
                                <div className="p-10 flex-col items-center flex">
                                    <div className="flex items-center justify-center border-black-3 mb-8" style={{ width: '80px', height: '80px', backgroundColor: accentColor }}>
                                        <Icon size={40} className="text-black" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{item.title}</h3>
                                    <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Dashboard Preview Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-12 md:p-20 border-black-4 bg-white shadow-brutalist-lg"
                >
                    <div className="text-left">
                        <div className="flex items-center justify-center border-black-3 mb-10" style={{ width: '80px', height: '80px', backgroundColor: 'var(--accent-yellow)' }}>
                            <LayoutDashboard size={40} className="text-black" />
                        </div>
                        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase">
                            Real-time Data<br />Dashboards
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl font-bold leading-relaxed">
                            Visualize your performance. We build custom dashboards that pull data from your marketing and AI systems into one beautiful interface.
                        </p>
                        <button className="brutalist-btn bg-black text-white" style={{ backgroundColor: '#000', color: '#fff', border: 'none', padding: '24px 48px' }}>
                            <span className="text-xl font-black uppercase tracking-widest">See a Live Demo</span>
                            <ArrowRight size={24} color="var(--accent-yellow)" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AISolutions;
