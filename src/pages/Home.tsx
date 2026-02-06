import { motion } from 'framer-motion';
import { ArrowRight, Bot, Megaphone, Zap, Globe, Palette, BarChart } from 'lucide-react';

const Home = () => {
    return (
        <div className="pt-32">
            {/* Hero Section */}
            <section className="container mb-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="mb-8">
                            Your Days Are <br />
                            Numbered
                        </h1>
                        <h3 className="mb-4 text-slate-800">Unlock the potential of your business.</h3>
                        <p className="text-slate-600 mb-10 max-w-md">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <a href="/contact" className="brutalist-btn">
                            GET STARTED <ArrowRight size={18} />
                        </a>
                    </motion.div>

                    {/* Card Illustration */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 5, scale: 0.9 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        className="relative flex justify-center"
                    >
                        {/* Stacked Cards Simulation */}
                        <div className="relative w-[300px] h-[400px]">
                            <div className="absolute top-4 left-8 w-full h-full bg-pink-400 border-[3px] border-black rounded-xl rotate-6"></div>
                            <div className="absolute top-2 left-4 w-full h-full bg-purple-400 border-[3px] border-black rounded-xl rotate-3"></div>
                            <div className="relative w-full h-full bg-yellow-400 border-[3px] border-black rounded-xl flex flex-col items-center justify-center p-8 text-center">
                                <Zap size={48} className="mb-6" />
                                <h2 className="text-2xl mb-4">Enhance <br />Revenue Growth</h2>
                                <div className="w-full h-32 bg-white border-[3px] border-black rounded-lg mt-4 flex items-center justify-center">
                                    <Bot size={48} className="text-cyan-600" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Logo Strip */}
            <section className="container mb-32">
                <p className="text-center text-xs font-bold uppercase text-slate-400 mb-8">You'll be in great company with other developers we've trained</p>
                <div className="logo-strip flex-wrap gap-12">
                    <span>OpenAI</span>
                    <span>Pallet</span>
                    <span>CAUSAL</span>
                    <span>Plain.</span>
                    <span>passionfroot</span>
                    <span>BRAVADO</span>
                </div>
            </section>

            {/* Services Section */}
            <section className="container pb-32">
                <div className="text-center mb-16">
                    <Bot size={48} className="mx-auto mb-4" />
                    <h1 className="text-4xl lg:text-5xl">Explore Our<br />Innovation Solutions</h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Influencer Marketing', label: 'Leverage of Influence', color: 'card-yellow', icon: <Megaphone /> },
                        { title: 'Content Marketing', label: 'Value-Driven Content', color: 'card-pink', icon: <Palette /> },
                        { title: 'Social Management', label: 'Content Creation', color: 'card-cyan', icon: <Globe /> },
                        { title: 'SEO Optimization', label: 'Meta Tags Optimization', color: 'card-green', icon: <BarChart /> },
                    ].map((service, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10 }}
                            className={`brutalist-card ${service.color} p-0 overflow-hidden`}
                        >
                            <div className="service-card-header bg-black text-white py-2 px-4 text-sm font-bold">
                                {service.title}
                            </div>
                            <div className="p-6">
                                <p className="text-xs font-bold uppercase mb-4">{service.label}</p>
                                <div className="w-full aspect-square bg-white border-[3px] border-black rounded-xl flex items-center justify-center mb-4">
                                    <div className="scale-150">{service.icon}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="bg-cyan-50 border-y-[3px] border-black py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h1 className="mb-6">Connect With<br />Our Team</h1>
                            <p className="text-lg mb-8">We specialize in digital marketing, combining technical excellence with strategic creativity.</p>
                            <button className="brutalist-btn bg-pink-400">BOOK A CALL</button>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-6 w-full">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="brutalist-card p-4">
                                    <div className="team-img-wrapper">
                                        {/* Using a placeholder for team photo */}
                                        <div className="w-full h-full bg-yellow-200 flex items-center justify-center">
                                            <Bot size={64} />
                                        </div>
                                    </div>
                                    <h4 className="font-bold">Team Member {i}</h4>
                                    <p className="text-xs font-bold text-slate-500 uppercase">Director</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Stats Strip */}
            <section className="container py-20 flex flex-wrap justify-between gap-12">
                <div className="text-center">
                    <div className="stat-number">780+</div>
                    <p className="font-bold text-sm uppercase">Projects Completed</p>
                </div>
                <div className="text-center">
                    <div className="stat-number">40K+</div>
                    <p className="font-bold text-sm uppercase">Happy Clients</p>
                </div>
                <div className="text-center">
                    <div className="stat-number">10K</div>
                    <p className="font-bold text-sm uppercase">Worldwide Customers</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
