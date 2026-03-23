'use client';

import React from 'react';
import { Globe, Users, Heart, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

const impactMetrics = [
    {
        value: "100k+",
        label: "Resilience Events",
        desc: "Measured biological alignment markers across our global network."
    },
    {
        value: "45+",
        label: "Research Partners",
        desc: "Global universities and health institutes validating preventive protocols."
    },
    {
        value: "15+",
        label: "Rural Centers",
        desc: "Integrated health clinics delivering heritage medicine to indigenous areas."
    }
];

export default function ImpactPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-40 pb-32 px-8 md:px-16 relative overflow-hidden">
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
                        className="flex flex-col space-y-10 max-w-5xl"
                    >
                        <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-primary/40">
                            Institutional Impact
                        </span>
                        <h1 className="text-4xl md:text-6xl font-canela font-bold text-primary leading-tight uppercase tracking-widest whitespace-nowrap">
                            Measuring Vitality
                        </h1>
                        <HeritageTitleUnderline className="!justify-start !w-64 opacity-40" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed font-light">
                            "Measuring progress not in fiscal growth, but in civilization-level resilience and thriving."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • IMPACT • MEASURE" className="scale-[2.5]" />
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
                        title="Civilization Impact"
                        subtitle="Our Reach"
                    />

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {impactMetrics.map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group transition-all duration-700 relative overflow-hidden"
                            >
                                <HeritageCardFrame>
                                    <OrnateBorder className="bg-section/5 border-none flex flex-col p-0 hover:bg-section/10 transition-all duration-700 rounded-[32px] text-center">
                                        {/* Top Section - Visual / Value */}
                                        <div className="w-full aspect-video flex items-center justify-center relative bg-section/5 mb-6 pt-4 text-primary">
                                            <h3 className="text-6xl md:text-7xl font-canela font-bold group-hover:scale-110 transition-transform duration-1000">
                                                {metric.value}
                                            </h3>
                                            <NilaiBotanicalTexture className="absolute inset-0 opacity-[0.05] pointer-events-none" />
                                        </div>

                                        {/* Middle Section - Detail */}
                                        <div className="px-8 pb-10 flex flex-col space-y-4 items-center flex-grow">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">{metric.label}</span>
                                            <div className="w-10 h-px bg-primary/10" />
                                            <p className="text-[14px] font-manrope text-primary/60 leading-relaxed font-light">
                                                {metric.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Section - Action */}
                                        <div className="w-full py-6 mt-auto border-t border-primary/5 bg-section/5 group-hover:bg-primary group-hover:text-bg transition-all duration-700 flex items-center justify-center space-x-2 text-[8px] font-bold uppercase tracking-[0.5em]">
                                            <span>Institutional Resilience</span>
                                        </div>
                                    </OrnateBorder>
                                </HeritageCardFrame>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-40 px-8 md:px-16 bg-bg relative overflow-hidden text-center">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16 relative z-10">
                    <NilaiSectionHeader
                        title="Generation Change"
                    />
                    <p className="text-2xl md:text-3xl font-source-serif italic text-primary/60 leading-relaxed font-light">
                        "Zencura is dedicated to architecting a global shift where preventive living is not a luxury, but a human standard. Our impact is measured in the strength of communities and the resilience of the environments they inhabit."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-24 pt-12">
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Users className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Community Driven</span>
                        </div>
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Heart className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Harmonious Living</span>
                        </div>
                    </div>
                    {/* HeritageSectionBorder removed */}
                </div>
            </section>
        </div>
    );
}
