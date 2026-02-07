import { motion } from 'framer-motion';
import { ArrowRight, Zap, Rocket, BarChart3, Target, Cpu, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const differences = [
        {
            title: 'AI-powered marketing strategies designed for scale',
            icon: Rocket,
            color: 'var(--accent-cyan)'
        },
        {
            title: 'Custom automation tools to reduce manual work',
            icon: Cpu,
            color: 'var(--accent-pink)'
        },
        {
            title: 'Performance-driven campaigns backed by data',
            icon: BarChart3,
            color: 'var(--accent-yellow)'
        },
        {
            title: 'Integrated approach combining marketing and technology',
            icon: Zap,
            color: 'var(--accent-green)'
        },
        {
            title: 'Solutions tailored to your business goals',
            icon: Target,
            color: 'var(--accent-orange)'
        },
        {
            title: 'Intelligent growth systems that evolve with your business',
            icon: TrendingUp,
            color: 'var(--accent-purple)'
        },
    ];

    return (
        <div className="pt-40 pb-20">
            {/* Hero Section */}
            <section className="container mb-32">
                <div className="grid lg-grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <span className="section-label mb-6 block">GROW FASTER WITH AI</span>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
                            WE HELP BUSINESSES GROW FASTER WITH <span style={{ color: 'var(--accent-pink)' }}>AI-POWERED</span> DIGITAL MARKETING
                        </h1>
                        <h3 className="text-2xl font-bold mb-8 text-slate-800 leading-relaxed max-w-3xl">
                            We are a next-generation digital growth agency combining performance marketing, creative strategy, and artificial intelligence to build scalable systems for modern businesses.
                        </h3>

                        <div className="flex flex-wrap gap-6 mb-12">
                            <Link to="/contact" className="brutalist-btn bg-black text-white" style={{ backgroundColor: '#000', padding: '24px 40px', display: 'flex', alignItems: 'center' }}>
                                <span className="text-xl font-black uppercase tracking-widest">Book a Free Strategy Call</span>
                                <ArrowRight size={24} color="var(--accent-yellow)" />
                            </Link>
                            <Link to="/portfolio" className="brutalist-btn" style={{ padding: '24px 40px' }}>
                                <span className="text-xl font-black uppercase tracking-widest text-black">View Our Work</span>
                            </Link>
                        </div>

                        <p className="text-sm font-black uppercase tracking-widest text-slate-500">
                            ★ Trusted by brands and businesses looking to scale with digital and AI-driven solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About / Description Section */}
            <section className="container mb-32">
                <div className="grid lg-grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="brutalist-card bg-white"
                    >
                        <p className="text-xl font-bold leading-relaxed text-slate-700">
                            Our approach goes beyond traditional marketing by integrating automation, data intelligence, and custom-built AI tools into every stage of your growth journey. From increasing your brand visibility to building intelligent automation systems, we help businesses turn ideas into measurable results.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="brutalist-card"
                        style={{ backgroundColor: 'var(--accent-yellow)' }}
                    >
                        <p className="text-xl font-bold leading-relaxed text-black">
                            Our team of digital marketers, editors, designers, developers, and AI engineers works together to design marketing strategies and smart technologies that improve efficiency, generate leads, and drive long-term growth. Whether you are a startup or an established business, we provide end-to-end solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What Makes Us Different */}
            <section className="container mb-32 pt-24">
                <div className="mb-20">
                    <h2 className="text-6xl font-black uppercase tracking-tighter mb-6">What Makes Us Different</h2>
                    <div className="w-48 h-6 bg-black"></div>
                </div>

                <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-10">
                    {differences.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="brutalist-card flex flex-col gap-6"
                            style={{ borderTop: `12px solid ${item.color}` }}
                        >
                            <div className="w-16 h-16 border-black-3 flex items-center justify-center" style={{ backgroundColor: item.color }}>
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-2xl font-black uppercase leading-tight italic">
                                {item.title}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="container mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="border-black-4 p-12 md:p-24 bg-white shadow-brutalist-lg flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
                        Ready to grow your business with smarter strategies?
                    </h2>
                    <p className="text-xl md:text-2xl font-bold mb-12 text-slate-600 max-w-4xl">
                        Partner with a team that understands both marketing and technology, and let’s build systems that drive real results.
                    </p>
                    <Link to="/contact" className="brutalist-btn bg-black text-white" style={{ backgroundColor: '#000', padding: '24px 60px' }}>
                        <span className="text-2xl font-black uppercase tracking-widest">🚀 Book a Free Strategy Call</span>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
