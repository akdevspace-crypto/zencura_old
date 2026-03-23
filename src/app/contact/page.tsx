'use client';

import React from 'react';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

export default function ContactPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-8 md:px-16 relative overflow-hidden">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners & Heritage Accents */}
                <HeritageDesignAccent className="absolute top-20 left-20 w-80 h-80 opacity-[0.03] -rotate-12" />
                <HeritageDesignAccent className="absolute bottom-20 right-20 w-80 h-80 opacity-[0.03] rotate-12" />

                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center space-y-10 max-w-5xl mx-auto"
                    >
                        {/* HEADER RIBBON */}
                        <div className="relative w-full max-w-[850px] mx-auto mb-[20px] flex justify-center text-center">
                            <Image
                                src="/letterflag.png"
                                alt="Ribbon Header"
                                width={850}
                                height={200}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                                <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                    Institutional Contact
                                </span>
                                <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                    Start a Conversation
                                </h1>
                            </div>
                        </div>
                        <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed font-light text-center">
                            "Connect with our team to explore collaboration, institutional partnerships, or membership."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • CORRESPONDENCE • HUB" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 md:py-28 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">

                    {/* Contact Details */}
                    <div className="flex flex-col space-y-20">
                        <div className="flex flex-col space-y-8">
                            <div className="relative w-full max-w-[600px] mb-8 flex justify-center text-center">
                                <Image
                                    src="/letterflag.png"
                                    alt="Ribbon Header"
                                    width={600}
                                    height={150}
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                                    <span className="text-[10px] md:text-[11px] font-canela tracking-[0.35em] uppercase text-brand">
                                        Collaborate With Zencura
                                    </span>
                                    <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                        Heritage Partnerships
                                    </h2>
                                </div>
                            </div>
                            <p className="text-xl md:text-2xl font-source-serif italic text-primary/60 leading-relaxed max-w-lg font-light">
                                "We welcome visionaries, health professionals, and institutional partners who share our commitment to redefining the future of global health."
                            </p>
                        </div>

                        <div className="flex flex-col space-y-12">
                            {[
                                { icon: Mail, label: "Digital Correspondence", value: "hello@zencura.institute" },
                                { icon: Phone, label: "Institutional Direct", value: "+1 (555) 012-3456" },
                                { icon: MapPin, label: "Global HQ", value: "Heritage District, Coimbatore, TN" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start space-x-8"
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-primary">
                                            <item.icon className="w-7 h-7" strokeWidth={1} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 font-manrope">{item.label}</span>
                                        <span className="text-2xl font-canela font-bold text-primary">{item.value}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-16">
                            <div className="flex items-center space-x-8">
                                {['Twitter', 'Instagram', 'LinkedIn', 'ResearchHub'].map((social) => (
                                    <span key={social} className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/30 hover:text-primary cursor-pointer transition-colors block">
                                        {social}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Aligned with ContactSection */}
                    <div className="relative w-full">
                        <div className="group relative flex flex-col text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[550px] p-10 md:p-16 lg:p-20 transition-all duration-500 w-full">
                            <div className="text-center mb-16">
                                <h3 className="text-2xl font-canela font-bold text-brand uppercase tracking-widest">
                                    Direct Inquiry
                                </h3>
                                <div className="w-24 h-px bg-brand/30 mx-auto mt-6" />
                            </div>

                            <form className="flex flex-col space-y-12 flex-grow text-left text-brand">
                                <div className="flex flex-col space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/60">Full Name</label>
                                    <input type="text" className="bg-transparent border-b border-brand/20 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl w-full text-brand font-light placeholder:text-brand/30" placeholder="Institutional contact" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/60">Electronic Address</label>
                                    <input type="email" className="bg-transparent border-b border-brand/20 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl w-full text-brand font-light placeholder:text-brand/30" placeholder="name@organization.com" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/60">Correspondence</label>
                                    <textarea className="bg-transparent border-b border-brand/20 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl w-full text-brand h-24 resize-none font-light placeholder:text-brand/30" placeholder="How can we collaborate?"></textarea>
                                </div>

                                <button className="w-full py-6 mt-8 bg-brand text-bg rounded-full border border-brand/20 text-[12px] font-bold uppercase tracking-[0.4em] shadow-lg hover:bg-brand/90 transition-all group flex items-center justify-center space-x-4">
                                    <span>Direct Correspondence</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* Contact Discrepancy Section */}
            <section id="form" className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden text-center">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-2xl mx-auto flex flex-col items-center">
                    <p className="text-xl font-source-serif italic text-primary/30 leading-relaxed font-light mb-12">
                        "The Zencura Institute does not acknowledge unsolicited clinical proposals. All institutional collaborations are subject to civilization-health validation."
                    </p>
                    <HeritageSectionBorder className="opacity-20" />
                </div>
            </section>
        </div>
    );
}
