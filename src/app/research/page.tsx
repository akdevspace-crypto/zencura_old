'use client';

import React from 'react';
import { BookOpen, Beaker, Globe, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

const researchAreas = [
    {
        title: "Epigenetic Heritage",
        category: "Biological Science",
        desc: "Investigating the intersection of classical Ayurvedic protocols and modern gene expression markers for longevity."
    },
    {
        title: "Human Bio-Resilience",
        category: "Functional Medicine",
        desc: "Analyzing the impact of ancestral lifestyle rhythms on modern metabolic and autonomic stress responses."
    },
    {
        title: "Conscious Infrastructure",
        category: "Civilization Health",
        desc: "Designing built environments that promote natural healing and biological synchronization."
    }
];

export default function ResearchPage() {
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
                        className="flex flex-col space-y-10 max-w-5xl"
                    >
                        <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-primary/40">
                            Institutional Research
                        </span>
                        <h1 className="text-4xl md:text-6xl font-canela font-bold text-primary leading-tight uppercase tracking-widest">
                            Evidence of Harmony
                        </h1>
                        <HeritageTitleUnderline className="!justify-start !w-64 opacity-40" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed font-light">
                            "Validating timeless medical wisdom through the lens of modern empirical science."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • ARCHIVE • RESEARCH" className="scale-[2.5]" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* HeritageSectionBorder removed */}

            <section className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <NilaiSectionHeader
                        title="Research Pillars"
                        subtitle="Scientific Inquiry"
                    />

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {researchAreas.map((area, i) => (
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
                                        <div className="flex justify-between items-start w-full mb-6">
                                            <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                                <Beaker className="w-5 h-5" strokeWidth={1} />
                                            </div>
                                            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-primary/30 pt-2">Active Study</span>
                                        </div>

                                        {/* Middle Section - Detail */}
                                        <div className="flex flex-col space-y-3 items-center text-center flex-grow">
                                            <h3 className="text-xl font-canela font-bold text-primary leading-tight">{area.title}</h3>
                                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary/40 font-manrope">{area.category}</span>
                                            <div className="w-8 h-px bg-primary/10" />
                                            <p className="text-[12px] font-manrope text-primary/60 leading-relaxed font-light">
                                                {area.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Section - Action */}
                                        <div className="w-full pt-4 mt-6 border-t border-primary/5 flex items-center justify-center space-x-2 text-[8px] font-bold uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-all">
                                            <BookOpen className="w-3 h-3" />
                                            <span>Publications</span>
                                        </div>
                                    </OrnateBorder>
                                </HeritageCardFrame>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HeritageSectionBorder removed */}

            {/* Global Collaboration Section */}
            <section className="py-28 px-8 md:px-16 bg-bg relative overflow-hidden text-center">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16 relative z-10">
                    <NilaiSectionHeader
                        title="A Global Mandate"
                    />
                    <p className="text-2xl md:text-3xl font-source-serif italic text-primary/60 leading-relaxed font-light">
                        "We collaborate with leading universities and institutes globally to establish new benchmarks for preventive healthcare and civilization-scale wellbeing."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-24 pt-12">
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Globe className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">World Collaboration</span>
                        </div>
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Sparkles className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Modern Empiricals</span>
                        </div>
                    </div>
                    {/* HeritageSectionBorder removed */}
                </div>
            </section>
        </div>
    );
}
