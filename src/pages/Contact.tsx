import { motion } from 'framer-motion';
import { Mail, MessageSquare, Calendar, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-32 pb-20">
            <section className="container">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="mb-10 text-5xl lg:text-6xl">Let's build <br /><span className="bg-yellow-300 px-2 py-1 border-[3px] border-black">extraordinary.</span></h1>
                        <p className="text-xl font-medium text-slate-700 mb-12">
                            Ready to automate your business and scale your marketing? Book a free strategy call or send us a message.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:hello@nexora.ai" className="flex items-center gap-6 brutalist-card hover:bg-cyan-100 p-4">
                                <div className="w-14 h-14 bg-white border-[3px] border-black rounded-xl flex items-center justify-center">
                                    <Mail className="text-black" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Email Us</p>
                                    <p className="text-xl font-bold">hello@nexora.ai</p>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-6 brutalist-card hover:bg-pink-100 p-4">
                                <div className="w-14 h-14 bg-white border-[3px] border-black rounded-xl flex items-center justify-center">
                                    <MessageSquare className="text-black" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">WhatsApp</p>
                                    <p className="text-xl font-bold">+1 (234) 567-890</p>
                                </div>
                            </a>

                            <a href="#" className="flex items-center gap-6 brutalist-card hover:bg-green-100 p-4">
                                <div className="w-14 h-14 bg-white border-[3px] border-black rounded-xl flex items-center justify-center">
                                    <Calendar className="text-black" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">Book a Meeting</p>
                                    <p className="text-xl font-bold">Calendly.com/nexora</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="brutalist-card card-yellow p-12"
                    >
                        <h2 className="mb-10 text-3xl">Send a Message</h2>
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-bold uppercase mb-3">Name</label>
                                    <input type="text" className="w-full bg-white border-[3px] border-black rounded-xl px-6 py-4 font-bold focus:outline-none focus:ring-4 ring-cyan-400" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase mb-3">Email</label>
                                    <input type="email" className="w-full bg-white border-[3px] border-black rounded-xl px-6 py-4 font-bold focus:outline-none focus:ring-4 ring-cyan-400" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase mb-3">Service Interested In</label>
                                <select className="w-full bg-white border-[3px] border-black rounded-xl px-6 py-4 font-bold focus:outline-none appearance-none">
                                    <option>Digital Marketing</option>
                                    <option>AI Automation</option>
                                    <option>Both (Hyper-Growth)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase mb-3">Message</label>
                                <textarea rows={4} className="w-full bg-white border-[3px] border-black rounded-xl px-6 py-4 font-bold focus:outline-none ring-cyan-400" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" className="brutalist-btn bg-black text-white w-full py-5 justify-center">
                                SEND MESSAGE
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
