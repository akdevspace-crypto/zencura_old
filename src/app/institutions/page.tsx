'use client';

import React from 'react';
import { MapPin, Building2, Sprout, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

const locations = [
    { name: "Zencura Hospitals", city: "Coimbatore", type: "Integrated Medical Institution", status: "Operational" },
    { name: "Community Clinics", city: "Bangalore", type: "Preventive Health Network", status: "Operational" },
    { name: "Rural Health Centers", city: "Nilgiris", type: "Rural Health Center", status: "Pilot" },
    { name: "Upcoming Locations", city: "Global", type: "Expansion", status: "Upcoming" }
];

export default function InstitutionsPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-32 px-8 md:px-16 relative overflow-hidden text-center md:text-left">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center justify-center space-y-10 max-w-5xl mx-auto text-center"
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
                                    Global Infrastructure
                                </span>
                                <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                    Built for Longevity
                                </h1>
                            </div>
                        </div>
                        <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed font-light text-center">
                            "A distributed network of sanctuary and science, architecting the preventive future of our civilization."
                        </p>

                        <div className="flex flex-col items-center text-center space-y-12 relative z-10 w-full max-w-4xl mx-auto mb-16 md:mb-24 mt-16">
                            <p className="text-2xl md:text-3xl font-source-serif italic text-primary/80 leading-relaxed font-light">
                                "Our architectural and clinical frameworks are designed to sustain human vitality across generations."
                            </p>
                            <p className="text-lg md:text-xl font-manrope text-primary/60 leading-relaxed font-light">
                                Beyond the clinical model, Zencura hospitals are rooted in sustainable design, ensuring that healthcare environments support biological harmony. We believe that true healing spaces must breathe, exist in balance with their local ecosystems, and stand resilient in a changing world.
                            </p>
                        </div>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • NETWORK • GLOBAL" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Global Network Section */}
            <section id="locations" className="py-24 md:py-32 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="relative w-full max-w-[850px] mx-auto mb-16 flex justify-center text-center">
                        <Image
                            src="/letterflag.png"
                            alt="Ribbon Header"
                            width={850}
                            height={200}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                            <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                Our Institutions
                            </span>
                            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                Global Network
                            </h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {locations.map((loc, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group transition-all duration-700 relative overflow-hidden"
                            >
                                <div className="group relative flex flex-col items-center justify-center text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[450px] px-8 py-12 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer w-full">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand/80 mb-6 border border-brand/30 bg-transparent group-hover:bg-brand/5 transition-colors duration-500">
                                        <Building2 className="w-7 h-7" strokeWidth={1.25} />
                                    </div>

                                    <span className="text-[10px] font-bold uppercase text-brand tracking-[0.25em] mb-4 block">
                                        {loc.status}
                                    </span>

                                    <h3 className="text-xl md:text-2xl font-canela text-brand leading-tight mb-6">
                                        {loc.name}
                                    </h3>

                                    <div className="flex items-center space-x-2 text-brand/70 mb-4">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-[0.1em]">{loc.city}</span>
                                    </div>

                                    <p className="text-[13px] md:text-[14px] font-source-serif italic text-brand/80 leading-relaxed mt-4">
                                        {loc.type}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scaling Vision Section */}
            <section className="py-40 px-8 md:px-16 bg-bg relative overflow-hidden text-center">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
                    <div className="relative w-full max-w-[850px] mx-auto flex justify-center text-center">
                        <Image
                            src="/letterflag.png"
                            alt="Ribbon Header"
                            width={850}
                            height={200}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                            <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                Future Ambition
                            </span>
                            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                Scaling the Vision
                            </h2>
                        </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-source-serif italic text-primary/60 leading-relaxed font-light">
                        "We are aggressively identifying heritage hubs globally to deploy the Zencura standard. Our goal is 100+ institutions by 2030."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-24 pt-12">
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Shield className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Sovereign Security</span>
                        </div>
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Sparkles className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Civilization Health</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
