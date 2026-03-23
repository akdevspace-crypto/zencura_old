'use client';

import React from 'react';
import { Package, Leaf, Droplets, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline } from '@/components/ui/HeritageUI';

const products = [
    {
        title: "Heritage Apothecary",
        category: "Biological Supplements",
        desc: "A collection of high-purity, bio-available compounds derived from classical holistic pharmaco-botany."
    },
    {
        title: "Zencura Bio-Sensing",
        category: "Wearable Metrics",
        desc: "Advanced non-invasive sensing technology designed to map metabolic and nervous system alignment in real-time."
    },
    {
        title: "Conscious Nutrients",
        category: "Integrated Nutrition",
        desc: "Sourcing and formulating functional foods that prioritize soil health, nutrient density, and circadian timing."
    }
];

export default function ProductsPage() {
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
                            Institutional Products
                        </span>
                        <h1 className="text-4xl md:text-6xl font-canela font-bold text-primary leading-tight uppercase tracking-widest whitespace-nowrap">
                            The Heritage Collection
                        </h1>
                        <HeritageTitleUnderline className="!justify-start !w-64 opacity-40" />
                        <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed font-light">
                            "Sovereign products designed to support your biological potential in a modern world."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp text="ZEN • CURA • PHARMACY • GLOBAL" className="scale-[2.5]" />
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
                        title="The Collection"
                        subtitle="Our Products"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                        {products.map((product, i) => (
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
                                                <Package className="w-5 h-5" strokeWidth={1} />
                                            </div>
                                            <div className="mt-2 bg-bg px-2 py-1 text-[6px] font-bold uppercase tracking-[0.2em] text-primary/30 border border-primary/5 rounded-full">
                                                Heritage Standard
                                            </div>
                                        </div>

                                        {/* Middle Section - Detail */}
                                        <div className="flex flex-col space-y-2 items-center text-center flex-grow">
                                            <h3 className="text-xl font-canela font-bold text-primary leading-tight">{product.title}</h3>
                                            <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-primary/40 font-manrope">{product.category}</span>
                                            <div className="w-8 h-px bg-primary/10" />
                                            <p className="text-[12px] font-manrope text-primary/60 leading-relaxed font-light">
                                                {product.desc}
                                            </p>
                                        </div>

                                        {/* Bottom Section - Action */}
                                        <div className="w-full pt-4 mt-6 border-t border-primary/5 flex items-center justify-center space-x-2 text-[8px] font-bold uppercase tracking-[0.3em] text-primary/40 group-hover:text-primary transition-all">
                                            <span>Explore</span>
                                            <Sparkles className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
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
                        title="Purity of Science"
                    />
                    <p className="text-2xl md:text-3xl font-source-serif italic text-primary/60 leading-relaxed font-light">
                        "Every Zencura product is an extension of our clinical mandate. We prioritize sovereign data, ecological sustainability, and biological precision above all."
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 sm:space-y-0 sm:space-x-24 pt-12">
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Leaf className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Zero Contamination</span>
                        </div>
                        <div className="flex flex-col items-center space-y-6 group">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700">
                                <Droplets className="w-8 h-8" strokeWidth={1} />
                            </div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary/40 group-hover:text-primary transition-colors">Bio-Available</span>
                        </div>
                    </div>
                    {/* HeritageSectionBorder removed */}
                </div>
            </section>
        </div>
    );
}
