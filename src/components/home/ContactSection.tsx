'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    NilaiBotanicalTexture,
    NilaiDivider,
    NilaiSectionHeader,
    HeritageCardFrame,
    HeritageSectionBorder,
    OrnateBorder
} from '@/components/ui/HeritageUI';

export default function ContactSection() {
    return (
        <section className="bg-bg pt-12 md:pt-20 pb-38 md:pb-55 lg:pb-[28rem] px-8 md:px-16 relative overflow-hidden">
            <div className="absolute bottom-[-5%] left-[-10%] w-[40rem] h-[40rem] lg:w-[50rem] lg:h-[50rem] z-10 opacity-100 pointer-events-none mix-blend-multiply">
                <img src="/missing_decor_right.png" alt="Vintage Inkwell and Books" className="w-full h-full object-contain object-bottom" />
            </div>

            <div className="max-w-7xl mx-auto flex flex-col relative z-20 pt-10">

                {/* TOP SECTION: Heritage Partnerships */}
                <div className="flex flex-col items-center text-center space-y-6 mb-16 w-full">
                    <div className="flex flex-col items-center space-y-3">
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-brand/60 block">Start a Conversation</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-canela font-bold text-brand uppercase tracking-wider">Heritage Partnerships</h2>
                    </div>
                    <p className="text-lg md:text-xl font-source-serif italic text-brand/80 leading-relaxed max-w-3xl mx-auto font-light text-center">
                        "We welcome visionaries, health professionals, and institutional partners who share our commitment to redefining the preventive future."
                    </p>

                    {/* Contact Info Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 w-full max-w-5xl mx-auto mt-10 pt-12 border-t border-brand/10">
                        {[
                            { icon: Mail, label: "Digital Correspondence", value: "hello@zencura.institute" },
                            { icon: Phone, label: "Institutional Direct", value: "+1 (555) 012-3456" },
                            { icon: MapPin, label: "Global HQ", value: "Heritage District, Coimbatore" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center text-brand border border-brand/20 bg-brand/5">
                                    <item.icon className="w-6 h-6" strokeWidth={1} />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-[9px] font-bold uppercase text-brand/60 font-manrope tracking-widest">{item.label}</span>
                                    <span className="text-lg font-canela font-bold text-brand">{item.value}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM SECTION: Direct Inquiry Title (Left) + Form (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch w-full border-t border-brand/10 pt-16">
                    <div className="flex flex-col pr-0 lg:pr-10 border-r-0 lg:border-r border-brand/10 w-full mb-10 lg:mb-0">
                        <div>
                            <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] text-accent block mb-3">Get in Touch</span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-canela font-bold text-brand uppercase tracking-wider leading-tight">
                                Direct Inquiry
                            </h3>
                            <p className="mt-4 text-brand/60 font-source-serif italic text-base max-w-sm mb-8">
                                Submit your details below and our institutional relations team will contact you shortly.
                            </p>
                        </div>

                        {/* Location Map */}
                        <div className="w-full relative overflow-hidden border border-brand/20 bg-brand/5 p-1 mt-2 z-20 h-72 lg:h-80 xl:h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.80803444005!2d76.9535384!3d11.0018115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.65) sepia(0.5) contrast(1.1) opacity(0.85)' }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <div className="relative w-full flex flex-col lg:pl-10">
                        <form className="flex flex-col gap-6 md:gap-10 w-full max-w-2xl ml-auto py-4">
                            <div className="flex flex-col">
                                <label className="text-[9px] md:text-[11px] font-bold uppercase text-brand/60 tracking-widest pl-2 mb-1">Full Name</label>
                                <input type="text" className="bg-transparent border-b border-brand/30 py-2 outline-none focus:border-brand transition-all font-source-serif italic text-lg md:text-xl text-brand font-light placeholder-brand/30 px-2 leading-relaxed" placeholder="Institutional contact" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                <div className="flex flex-col">
                                    <label className="text-[9px] md:text-[11px] font-bold uppercase text-brand/60 tracking-widest pl-2 mb-1">Email</label>
                                    <input type="email" className="bg-transparent border-b border-brand/30 py-2 outline-none focus:border-brand transition-all font-source-serif italic text-lg md:text-xl text-brand font-light placeholder-brand/30 px-2 leading-relaxed" placeholder="name@organization.com" />
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[9px] md:text-[11px] font-bold uppercase text-brand/60 tracking-widest pl-2 mb-1">Mobile Number</label>
                                    <input type="tel" className="bg-transparent border-b border-brand/30 py-2 outline-none focus:border-brand transition-all font-source-serif italic text-lg md:text-xl text-brand font-light placeholder-brand/30 px-2 leading-relaxed" placeholder="Enter your mobile number" />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[9px] md:text-[11px] font-bold uppercase text-brand/60 tracking-widest pl-2 mb-1">Correspondence</label>
                                <textarea className="bg-transparent border-b border-brand/30 py-2 outline-none focus:border-brand transition-all font-source-serif italic text-lg md:text-xl text-brand h-24 md:h-28 resize-none font-light placeholder-brand/30 px-2 leading-relaxed" placeholder="How can we collaborate?"></textarea>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="px-8 py-4 border border-accent/80 text-brand tracking-[0.2em] md:tracking-[0.25em] uppercase text-[11px] md:text-[12px] font-bold hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group rounded-full"
                                >
                                    SUBMIT INQUIRY <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
}
