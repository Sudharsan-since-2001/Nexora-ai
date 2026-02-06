import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [activeCat, setActiveCat] = useState<'all' | 'Marketing' | 'AI'>('all');

    const posts = [
        {
            title: 'How AI Automation is Changing Marketing in 2026',
            excerpt: 'Discover why manual marketing is becoming obsolete and how AI is taking over predictable tasks.',
            date: 'Feb 12, 2026',
            author: 'John CEO',
            category: 'AI',
            color: 'card-cyan',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60',
        },
        {
            title: 'The Ultimate Guide to Omnichannel SEO Mastery',
            excerpt: 'Learn why ranking on Google is just the beginning. We show you how to dominate every search surface.',
            date: 'Feb 10, 2026',
            author: 'Jane CMO',
            category: 'Marketing',
            color: 'card-pink',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=60',
        },
        {
            title: 'Workflow Automation: Saving 10+ Hours Every Week',
            excerpt: 'A deep dive into Zapier and Make.com workflows that we use for our high-ticket clients.',
            date: 'Feb 05, 2026',
            author: 'Alex CTO',
            category: 'AI',
            color: 'card-yellow',
            image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60',
        },
        {
            title: 'Scaling Meta Ads for 8-Figure E-com Brands',
            excerpt: 'The exact creative and budgeting strategy we use to blow past $1M in monthly revenue.',
            date: 'Jan 28, 2026',
            author: 'Sarah Ads',
            category: 'Marketing',
            color: 'card-green',
            image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&auto=format&fit=crop&q=60',
        }
    ];

    const filteredPosts = activeCat === 'all' ? posts : posts.filter(p => p.category === activeCat);

    return (
        <div className="pt-32 pb-20">
            <section className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div>
                        <span className="section-label">Insights</span>
                        <h1 className="mb-4">Nexora News</h1>
                        <p className="font-bold text-slate-500">Deep dives into Digital Marketing and AI Automation.</p>
                    </div>
                    <div className="flex gap-4">
                        {['all', 'Marketing', 'AI'].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCat(cat as any)}
                                className={`brutalist-btn ${activeCat === cat ? 'bg-black text-white' : 'bg-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-1 gap-12">
                    {filteredPosts.map((post, idx) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`brutalist-card ${post.color} p-0 flex flex-col md:flex-row items-stretch group cursor-pointer overflow-hidden`}
                        >
                            <div className="md:w-72 h-72 border-r-[3px] border-black shrink-0 overflow-hidden">
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <div className="p-10 flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-widest mb-6">
                                        <span className="bg-white border-2 border-black px-2 py-0.5 rounded">{post.category}</span>
                                        <span className="text-black/40">{post.date}</span>
                                    </div>
                                    <h2 className="text-3xl mb-6 group-hover:underline decoration-4">
                                        {post.title}
                                    </h2>
                                    <p className="text-lg font-medium leading-relaxed mb-8 max-w-2xl">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between border-t-[3px] border-black pt-8 mt-auto">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center">
                                            <User size={18} />
                                        </div>
                                        <span className="font-bold text-sm uppercase">{post.author}</span>
                                    </div>
                                    <div className="brutalist-btn-black text-xs py-2 px-6 flex items-center gap-2">
                                        READ STORY <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;
