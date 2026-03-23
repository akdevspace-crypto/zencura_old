'use client';

import React from 'react';
import { Activity, Clock, Heart, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

const programs = [
    {
        title: "The Preventive Blueprint",
        duration: "12 Moon Cycles",
        focus: "Biological Alignment",
        desc: "A year-long immersion into personalized preventive protocols, integrating heritage wisdom with real-time bio-monitoring."
    },
    {
        title: "Resilience Intensive",
        duration: "21 Days",
        focus: "Nervous System Reset",
        desc: "A high-impact protocol designed to restore metabolic flexibility and autonomic balance in our modern high-stress environments."
    },
    {
        title: "Heritage Vitality",
        duration: "90 Days",
        focus: "Integrated Longevity",
        desc: "A deep exploration of classical holistic sciences applied to modern longevity metrics and functional aging."
    }
];

export default function ProgramsPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-32 px-8 md:px-16 relative overflow-hidden">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-10 max-w-5xl"
                    >
                        <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-primary/40">
                            Institutional Programs
                        </span>
                        <h1 className="text-4xl md:text-6xl font-canela font-bold text-primary leading-tight uppercase tracking-widest whitespace-nowrap">
                            Pathways to Thriving
                        </h1>
                        <HeritageTitleUnderline className="!justify-start !w-64 opacity-40" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed font-light">
                            "Structured journeys toward biological mastery and conscious living."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • CURRICULUM • MASTER" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 md:py-32 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <NilaiSectionHeader
                        title="Structured Journeys"
                        subtitle="Our Programs"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {programs.map((program, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group transition-all duration-700 relative overflow-hidden"
                            >
                                <HeritageCardFrame className="h-full" motifInset="-inset-16">
                                    <OrnateBorder className="h-full bg-section/5 border-none flex flex-col p-6 md:p-8 lg:p-10 hover:bg-section/10 transition-all duration-700 rounded-[20px]">
                                        {/* Top Section - Visual / Icon */}
                                        <div className="flex justify-between items-start w-full mb-6 relative text-primary">
                                            <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                                <Activity className="w-5 h-5" strokeWidth={1} />
                                            </div>
                                            <div className="flex items-center mt-2 space-x-1.5 text-[7px] font-bold uppercase tracking-[0.2em] text-primary/30">
                                                <Clock className="w-3 h-3" />
                                                <span>{program.duration}</span>
                                            </div>
                                        </div>

                                        {/* Middle Section - Detail */}
                                        <div className="flex flex-col space-y-2 items-center text-center flex-grow">
                                            <h3 className="text-xl font-canela font-bold text-primary leading-tight">{program.title}</h3>
                                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary/40 font-manrope">{program.focus}</span>
                                            <div className="w-8 h-px bg-primary/10" />
                                            <p className="text-[12px] font-manrope text-primary/60 leading-relaxed font-light">
                                                {program.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Section - Action */}
                                        <Link
                                            href="/contact"
                                            className="w-full pt-4 mt-6 border-t border-primary/5 flex items-center justify-center space-x-2 text-[8px] font-bold uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-all"
                                        >
                                            <span>Curriculum</span>
                                            <Sparkles className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </OrnateBorder>
                                </HeritageCardFrame>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-40 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-16 relative z-10">
                    <NilaiSectionHeader
                        title="Beyond Services"
                    />
                    <p className="text-2xl md:text-3xl font-source-serif italic text-primary/60 leading-relaxed font-light">
                        "Our programs are not transactions. They are transformations. We provide the infrastructure, the data, and the wisdom—you provide the intention."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-24 pt-12">
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Shield className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Clinical Rigor</span>
                        </div>
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Sparkles className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Heritage Wisdom</span>
                        </div>
                    </div>
                    {/* HeritageSectionBorder removed */}
                </div>
            </section>
        </div>
    );
}
