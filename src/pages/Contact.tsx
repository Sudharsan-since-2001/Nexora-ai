import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-24 bg-primary min-h-screen">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-left mb-20 relative">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-6xl font-black mb-6 tracking-tight">
                            Let's build<br />extraordinary.
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl font-bold">
                            Ready to automate your business and scale your marketing? Book a free strategy call.
                        </p>
                    </motion.div>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6 max-w-4xl">
                    <motion.a
                        href="mailto:hello@nexora.ai"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-6 bg-white border-black-4 p-6 shadow-brutalist cursor-pointer"
                        style={{ display: 'flex' }}
                    >
                        <div className="flex items-center justify-center bg-yellow border-black-4" style={{ width: '64px', height: '64px', backgroundColor: 'var(--accent-yellow)', display: 'flex' }}>
                            <Mail size={32} className="text-black" />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Email Us</p>
                            <p className="text-2xl font-black">hello@nexora.ai</p>
                        </div>
                    </motion.a>

                    <motion.a
                        href="#"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-6 bg-white border-black-4 p-6 shadow-brutalist cursor-pointer"
                        style={{ display: 'flex' }}
                    >
                        <div className="flex items-center justify-center bg-yellow border-black-4" style={{ width: '64px', height: '64px', backgroundColor: 'var(--accent-yellow)', display: 'flex' }}>
                            <MessageSquare size={32} className="text-black" />
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">Whatsapp</p>
                            <p className="text-2xl font-black">+1 (234) 567-890</p>
                        </div>
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
