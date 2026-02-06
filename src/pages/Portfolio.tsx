import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Tag } from 'lucide-react';

const Portfolio = () => {
    const [filter, setFilter] = useState<'all' | 'marketing' | 'ai'>('all');

    const projects = [
        {
            title: 'E-commerce Growth',
            category: 'marketing',
            problem: 'Stagnant sales despite high ad spend.',
            solution: 'Omnichannel SEO + Targeted Meta Ads.',
            result: '3.5x ROAS in 90 days.',
            color: 'card-yellow',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
        },
        {
            title: 'Auto-Lead Bot v2.0',
            category: 'ai',
            problem: '24h lag in responding to custom leads.',
            solution: 'AI Chatbot integrated with CRM.',
            result: 'Instant response & 40% more booked calls.',
            color: 'card-pink',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
        },
        {
            title: 'Property Data Hub',
            category: 'ai',
            problem: 'Manual data entry for 1000+ listings.',
            solution: 'Custom Scraper & Automation Workflow.',
            result: 'Saved 40 man-hours per week.',
            color: 'card-cyan',
            image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?w=800&auto=format&fit=crop&q=60',
        },
        {
            title: 'SaaS Launch Plan',
            category: 'marketing',
            problem: 'Low user retention post-launch.',
            solution: 'Content strategy & Email automation.',
            result: '25% increase in MoM growth.',
            color: 'card-green',
            image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=60',
        }
    ];

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-20">
            <section className="container">
                <div className="text-center mb-16">
                    <h1 className="mb-10">Our Case Studies</h1>
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={() => setFilter('all')}
                            className={`brutalist-btn ${filter === 'all' ? 'bg-black text-white' : 'bg-white'}`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setFilter('marketing')}
                            className={`brutalist-btn ${filter === 'marketing' ? 'bg-pink-400' : 'bg-white'}`}
                        >
                            Marketing
                        </button>
                        <button
                            onClick={() => setFilter('ai')}
                            className={`brutalist-btn ${filter === 'ai' ? 'bg-cyan-400' : 'bg-white'}`}
                        >
                            AI Solutions
                        </button>
                    </div>
                </div>

                <motion.div layout className="grid md:grid-cols-2 gap-12">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className={`brutalist-card ${project.color} p-0 overflow-hidden group`}
                            >
                                <div className="aspect-video relative overflow-hidden border-b-[3px] border-black">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                                    <div className="absolute top-4 left-4 bg-white border-2 border-black px-3 py-1 rounded font-bold text-xs uppercase flex items-center gap-2">
                                        <Tag size={12} />
                                        {project.category}
                                    </div>
                                </div>
                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <h2 className="text-3xl">{project.title}</h2>
                                        <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white cursor-pointer transition-colors">
                                            <ExternalLink size={18} />
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div>
                                            <p className="text-[10px] font-bold text-black uppercase opacity-60 mb-2">Problem</p>
                                            <p className="font-bold">{project.problem}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-black uppercase opacity-60 mb-2">Solution</p>
                                            <p className="font-bold">{project.solution}</p>
                                        </div>
                                        <div className="bg-white border-2 border-black p-4 rounded-xl">
                                            <p className="text-[10px] font-bold text-green-600 uppercase mb-1">Result</p>
                                            <p className="text-xl font-extrabold">{project.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default Portfolio;
