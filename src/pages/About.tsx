import { motion } from 'framer-motion';
import { Zap, Code, ArrowRight } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Clients Helped', value: '150+', color: 'var(--accent-cyan)' },
        { label: 'Processes Automated', value: '500+', color: 'var(--accent-pink)' },
        { label: 'Ad Spend Managed', value: '$2M+', color: 'var(--accent-yellow)' },
        { label: 'AI Models Deployed', value: '25+', color: 'var(--accent-green)' },
    ];

    return (
        <div className="pt-32 pb-20">
            {/* Hero Section */}
            <section className="container mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="section-label">Who We Are</span>
                        <h1 className="mb-10">
                            Where Human Creativity <br />
                            <span className="text-pink-500 underline decoration-[6px]">Meets AI.</span>
                        </h1>
                        <p className="text-lg font-medium text-slate-700 mb-8 leading-relaxed">
                            At Nexora AI, we believe the future of business isn't just about ads or just about code—it's about the synergy between the two. We started with a simple mission: to automate the boring so humans can focus on the bold.
                        </p>
                        <button className="brutalist-btn bg-cyan-400">JOIN OUR JOURNEY <ArrowRight /></button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -5 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        className="brutalist-card card-yellow h-full flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 bg-white border-[3px] border-black rounded-lg flex items-center justify-center">
                                <Zap className="text-black" />
                            </div>
                            <h2 className="text-3xl">Our Mission</h2>
                        </div>
                        <p className="text-lg font-bold">To help businesses automate and scale through the power of elite marketing and advanced AI solutions.</p>
                        <div className="mt-8 pt-8 border-t-[3px] border-black">
                            <Code size={48} className="text-black/20" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="border-y-[3px] border-black py-20 bg-white">
                <div className="container grid grid-cols-2 lg:grid-cols-4 gap-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                            <div className="text-5xl font-extrabold mb-2" style={{ color: stat.color }}>{stat.value}</div>
                            <p className="font-bold text-xs uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tech Stack */}
            <section className="container pt-32">
                <div className="text-center mb-16">
                    <h1 className="text-4xl mb-4">Tools & Tech We Master</h1>
                    <p className="font-bold text-slate-500">We use only the best to build the best.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {['OpenAI', 'Claude', 'Python', 'React', 'Google Ads', 'Meta', 'ActiveCampaign', 'Zapier', 'Make.com'].map((tech, i) => (
                        <span key={tech} className={`px-8 py-4 brutalist-card p-0 text-sm font-extrabold border-2 border-black rounded-full ${i % 2 === 0 ? 'bg-cyan-200' : 'bg-pink-200'}`}>
                            {tech}
                        </span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
