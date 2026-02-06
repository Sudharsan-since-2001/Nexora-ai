import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Zap, Search, FileText, Palette, Cpu, X, Quote } from 'lucide-react';

const Team = () => {
    const [selectedMember, setSelectedMember] = useState<null | number>(null);

    const teamMembers = [
        {
            name: 'Sudharsan',
            role: 'Digital Marketer & Gen AI engineer',
            color: '#FFDE69', // neo-yellow
            icon: Cpu,
            bio: "Heya!! I’m Sudharsan, a Digital Marketer and Gen AI Engineer working at the intersection of AI and growth marketing. I use data, automation, and generative AI to build smarter marketing strategies that actually make sense.\n\nMy work focuses on solving real marketing problems, like not wanting to wait until lakhs are spent on ads just to understand what works. Instead, I built an AI-powered tool that helps identify the right audience to target upfront, reducing guesswork and saving both time and budget. With a strong foundation in digital marketing and generative AI, I combine creativity, analytics, and technical thinking to build practical, scalable solutions.\n\nWhen I’m not experimenting with new tools or training models, I’m probably out there flirting with girls.",
            image: '',
        },
        {
            name: 'Ajay Krishna',
            role: 'Content Strategist & SEO expert',
            color: '#3EE3F0', // primary cyan
            icon: Search,
            bio: "Content is only King if it's found. I specialize in deep-funnel SEO strategies that capture high-intent traffic and turn cold visitors into loyal fans of your brand.",
            image: '',
        },
        {
            name: 'Vishwanathan',
            role: 'Content writer & SEO expert',
            color: '#3EE3F0',
            icon: FileText,
            bio: "Algorithms change, but human psychology doesn't. I write content that hits the emotional triggers of your audience while checking every box the search engines demand.",
            image: '',
        },
        {
            name: 'Sabari',
            role: 'Video Editor & Graphic Designer',
            color: '#FF8EFB', // neo-pink
            icon: Palette,
            bio: "In a world of short attention spans, visuals are everything. I create the high-retention video content and sharp graphics that make people stop scrolling and trust your brand.",
            image: '',
        },
    ];

    const brutalShadow = '6px 6px 0px 0px rgba(0,0,0,1)';
    const bigShadow = '10px 10px 0px 0px rgba(0,0,0,1)';

    return (
        <div style={{ backgroundColor: '#F9F8F3', minHeight: '100vh', padding: '120px 20px 80px', position: 'relative' }}>
            <main style={{ maxWidth: '1280px', margin: '0 auto' }}>

                {/* Header Section */}
                <header style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                        <div style={{
                            width: '64px', height: '64px', backgroundColor: '#ffffff',
                            border: '3px solid #000', borderRadius: '9999px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)'
                        }}>
                            <Users size={32} strokeWidth={2.5} />
                        </div>
                    </div>
                    <h1 style={{
                        fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(3rem, 8vw, 4.5rem)',
                        fontWeight: '800', lineHeight: '1', color: '#000', marginBottom: '16px', textTransform: 'uppercase'
                    }}>
                        Meet the Team<br />
                        <span style={{ color: '#3EE3F0' }}>Behind Your Growth</span>
                    </h1>
                    <p style={{ fontSize: '20px', color: '#4b5563', maxWidth: '672px', margin: '0 auto', fontWeight: '500' }}>
                        A team of digital marketers, AI builders, editors, and problem-solvers helping businesses scale smarter.
                    </p>
                </header>

                {/* Who We Are Card */}
                <section style={{ marginBottom: '96px' }}>
                    <div style={{
                        backgroundColor: '#3EE3F0', border: '3px solid #000', padding: '48px',
                        position: 'relative', overflow: 'hidden', boxShadow: bigShadow
                    }}>
                        <div style={{ position: 'absolute', top: '24px', right: '32px', opacity: 0.15 }}>
                            <Zap size={140} strokeWidth={2.5} />
                        </div>
                        <div style={{ position: 'relative', zIndex: 10 }}>
                            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '36px', fontWeight: '700', marginBottom: '24px', textTransform: 'uppercase' }}>Who We Are</h2>
                            <div style={{ maxWidth: '896px' }}>
                                <p style={{ fontSize: '20px', lineHeight: '1.6', color: 'rgba(0,0,0,0.8)', marginBottom: '32px' }}>
                                    We are a team of <strong style={{ color: '#000', fontWeight: '800' }}>digital marketing strategists, AI engineers, editors,</strong> and <strong style={{ color: '#000', fontWeight: '800' }}>creative professionals</strong> passionate about building growth-driven solutions. From creating high-performing marketing campaigns to developing AI-powered tools and automation systems, our team blends creativity with technology to help businesses work faster, smarter, and more efficiently.
                                </p>
                                <div style={{ fontSize: '20px', fontWeight: '700', color: '#000', borderLeft: '4px solid #000', paddingLeft: '24px' }}>
                                    <p>We don’t just run ads or build software.</p>
                                    <p>We build systems that grow your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Connect Title */}
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '30px', fontWeight: '700' }}>CONNECT WITH OUR TEAM</h2>
                    <p style={{ fontSize: '14px', fontWeight: '700', color: '#4b5563', marginTop: '8px' }}>Click on a member to hear from them.</p>
                </div>

                {/* Team Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '24px',
                    justifyContent: 'center'
                }}>
                    {teamMembers.map((member, idx) => {
                        const Icon = member.icon;
                        return (
                            <motion.div
                                key={idx}
                                whileHover={{ transform: 'translate(4px, 4px)', boxShadow: '2px 2px 0px 0px rgba(0,0,0,1)' }}
                                onClick={() => setSelectedMember(idx)}
                                style={{
                                    backgroundColor: member.color, border: '3px solid #000', padding: '0',
                                    textAlign: 'center', display: 'flex', flexDirection: 'column',
                                    boxShadow: brutalShadow, cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    overflow: 'hidden',
                                    width: '100%',
                                    maxWidth: '300px',
                                    margin: '0 auto'
                                }}
                            >
                                {/* Photo Frame Container */}
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '1/1',
                                    backgroundColor: '#ffffff',
                                    borderBottom: '3px solid #000',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div style={{ opacity: 0.15 }}>
                                            <Icon size={80} strokeWidth={2} />
                                        </div>
                                    )}
                                </div>

                                {/* Info Section */}
                                <div style={{ padding: '32px' }}>
                                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: '800', marginBottom: '8px', textTransform: 'uppercase' }}>{member.name}</h3>
                                    <p style={{ fontSize: '14px', fontWeight: '700', opacity: 0.9, lineHeight: '1.4' }}>{member.role}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </main>

            {/* Bio Modal Overlay */}
            <AnimatePresence>
                {selectedMember !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 100,
                            padding: '20px',
                            backdropFilter: 'blur(4px)'
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: teamMembers[selectedMember].color,
                                border: '4px solid #000',
                                padding: '48px',
                                maxWidth: '600px',
                                width: '100%',
                                boxShadow: '16px 16px 0px 0px rgba(0,0,0,1)',
                                position: 'relative'
                            }}
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: '#000',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '0',
                                    padding: '8px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <X size={20} />
                            </button>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                                <div style={{
                                    width: '64px', height: '64px', backgroundColor: '#fff',
                                    border: '3px solid #000', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    {(() => {
                                        const Icon = teamMembers[selectedMember].icon;
                                        return <Icon size={32} strokeWidth={2.5} />;
                                    })()}
                                </div>
                                <div>
                                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '32px', fontWeight: '800', lineHeight: 1, textTransform: 'uppercase' }}>
                                        {teamMembers[selectedMember].name}
                                    </h3>
                                    <p style={{ fontSize: '14px', fontWeight: '700', opacity: 0.8 }}>{teamMembers[selectedMember].role}</p>
                                </div>
                            </div>

                            <div style={{ position: 'relative' }}>
                                <Quote size={48} fill="currentColor" style={{ opacity: 0.1, position: 'absolute', top: '-10px', left: '-10px' }} />
                                <p style={{
                                    fontSize: '20px',
                                    fontStyle: 'italic',
                                    fontWeight: '700',
                                    lineHeight: '1.6',
                                    color: '#000',
                                    position: 'relative',
                                    zIndex: 1,
                                    whiteSpace: 'pre-line'
                                }}>
                                    {teamMembers[selectedMember].bio}
                                </p>
                            </div>

                            <div style={{ marginTop: '32px', borderTop: '2px solid rgba(0,0,0,0.1)', paddingTop: '20px' }}>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    style={{
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '12px 24px',
                                        fontWeight: '800',
                                        textTransform: 'uppercase',
                                        fontSize: '12px',
                                        letterSpacing: '0.1em',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Close Message
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Team;