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

    const colorClasses: Record<ColorKey, { border: string; bg: string }> = {
        cyan: { border: 'border-[#22D3EE]', bg: 'bg-[#22D3EE]' },
        pink: { border: 'border-[#F0ABFC]', bg: 'bg-[#F0ABFC]' },
        yellow: { border: 'border-[#FDE047]', bg: 'bg-[#FDE047]' },
        green: { border: 'border-[#4ADE80]', bg: 'bg-[#4ADE80]' },
        orange: { border: 'border-[#FB923C]', bg: 'bg-[#FB923C]' },
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
                    <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-700 font-bold text-sm mb-6 tracking-wide uppercase">
                        Automate & Scale
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
                        AI Automation <br /> Solutions
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
                        We don't just use AI; we build it into the DNA of your business processes. Scale your output without scaling your overhead.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {solutions.map((item, idx) => {
                        const colors = colorClasses[item.color];
                        const Icon = item.icon;

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
                    transition-all duration-300 flex flex-col items-center text-center
                  `}>
                                    <div className="p-10">
                                        <div className={`w-24 h-24 ${colors.bg} rounded-[2rem] flex items-center justify-center mb-8 mx-auto ring-4 ring-white shadow-inner`}>
                                            <Icon className="w-10 h-10 text-slate-900" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                        <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className={`${colors.bg} h-3 mt-auto w-full`} />
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
                    className="mt-32 p-12 md:p-20 relative rounded-[3rem] overflow-hidden border-8 border-[#FDE047] bg-white group hover:shadow-2xl transition-all duration-500"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full -mr-48 -mt-48 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10 text-center">
                        <div className="w-16 h-16 bg-[#FDE047] rounded-2xl flex items-center justify-center mb-10 mx-auto shadow-inner">
                            <LayoutDashboard className="w-8 h-8 text-slate-900" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                            Real-time Data Dashboards
                        </h2>
                        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                            Visualize your performance. We build custom dashboards that pull data from your marketing and AI systems into one beautiful interface.
                        </p>
                        <button className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg">
                            See a Live Demo <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AISolutions;
