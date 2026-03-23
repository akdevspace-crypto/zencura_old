'use client';

import React from 'react';
import { Shield, Target, Sprout, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageSectionBorder, HeritageDesignAccent, HeritageTitleUnderline, FlowerDecoration } from '@/components/ui/HeritageUI';



export default function AboutPage() {
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
                <FlowerDecoration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.015] grayscale" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-10 max-w-5xl"
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
                                    Institutional Identity
                                </span>
                                <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                    About Zencura
                                </h1>
                            </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-source-serif italic text-primary/70 leading-relaxed font-light text-center">
                            "A global health institution architecting the future of human biological potential."
                        </p>

                        <div className="absolute top-1/2 right-1/2 translate-x-3/4 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                            <InstitutionalStamp className="scale-[2.5]" />
                        </div>
                        {/* HeritageSectionBorder removed */}
                    </motion.div>
                </div>
            </section>

            {/* Core Ideology Section */}
            {/* HeritageSectionBorder removed */}
            <section id="ideology" className="py-16 md:py-28 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-20 right-[15%] w-72 h-72 opacity-[0.02] -rotate-12" />
                <FlowerDecoration className="absolute bottom-20 left-[15%] w-72 h-72 opacity-[0.02] rotate-12" />

                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
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
                                The Foundation of Potential
                            </span>
                            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                Core Ideology
                            </h2>
                        </div>
                    </div>

                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center space-y-12 border border-brand/15 bg-brand/[0.02] shadow-sm rounded-[4px] p-12 md:p-20">
                        <p className="text-2xl md:text-3xl font-source-serif italic text-primary/70 leading-relaxed font-light">
                            "Zencura is a global health institution founded on the conviction that human biology, consciousness, and the natural world are inseparably connected."
                        </p>
                        <p className="text-lg md:text-xl font-manrope text-primary/50 leading-relaxed font-light">
                            Through the development of integrated hospitals, preventive health ecosystems, and evidence-informed wellness frameworks, we are building a healthcare model that is scientifically rigorous, deeply humane, and sustainable for generations to come.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            {/* HeritageSectionBorder removed */}
            <section className="py-16 md:py-24 px-8 md:px-16 bg-bg">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col items-center justify-center text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[550px] px-12 py-16 md:px-16 md:py-20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand/80 mb-8 border border-brand/30 bg-transparent group-hover:bg-brand/5 transition-colors duration-500">
                            <Target className="w-7 h-7" strokeWidth={1.25} />
                        </div>

                        <span className="text-[11px] font-bold uppercase text-brand tracking-[0.25em] mb-5 block">
                            Civilization Health
                        </span>

                        <h3 className="text-2xl md:text-[32px] font-canela text-brand leading-tight mb-8">
                            Institutional Vision
                        </h3>

                        <p className="text-[15px] md:text-base font-source-serif italic text-brand/80 leading-relaxed max-w-[90%] mx-auto">
                            To establish a global health civilization where prevention becomes culture, scientific excellence and timeless wisdom work in harmony, and humanity lives longer, stronger, and consciously aligned with nature.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative flex flex-col items-center justify-center text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[550px] px-12 py-16 md:px-16 md:py-20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                    >
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand/80 mb-8 border border-brand/30 bg-transparent group-hover:bg-brand/5 transition-colors duration-500">
                            <Shield className="w-7 h-7" strokeWidth={1.25} />
                        </div>

                        <span className="text-[11px] font-bold uppercase text-brand tracking-[0.25em] mb-5 block">
                            Clinical Excellence
                        </span>

                        <h3 className="text-2xl md:text-[32px] font-canela text-brand leading-tight mb-8">
                            Global Mission
                        </h3>

                        <p className="text-[15px] md:text-base font-source-serif italic text-brand/80 leading-relaxed max-w-[90%] mx-auto">
                            To build accessible, integrated healthcare institutions grounded in time-tested holistic medical sciences and strengthened by modern evidence-based practice, advancing prevention, longevity, and sustainable wellbeing.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* HeritageSectionBorder removed */}
            {/* Call to Action Section */}
            <section className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-16 bg-primary text-center flex flex-col items-center space-y-12 relative overflow-hidden rounded-[16px]"
                    >
                        <NilaiBotanicalTexture className="absolute top-0 right-0 opacity-[0.1] text-bg" />
                        <FlowerDecoration className="absolute -bottom-20 -left-20 w-80 h-80 opacity-[0.08] invert brightness-0 -rotate-45" />

                        <div className="relative w-full max-w-[850px] mx-auto flex justify-center text-center mb-6">
                            <Image
                                src="/letterflag.png"
                                alt="Ribbon Header"
                                width={850}
                                height={200}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                                <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                    Our Invitation
                                </span>
                                <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                    Shape the Future<br />of Healthcare
                                </h2>
                            </div>
                        </div>

                        <p className="text-xl font-manrope text-bg/60 max-w-2xl relative z-10 font-light mt-0">
                            Join us in building a civilization where health is the natural standard.
                        </p>
                        <div className="flex flex-col items-center space-y-12 relative z-10">
                            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
                                <Link
                                    href="/join"
                                    className="w-full md:w-auto py-6 px-10 bg-brand text-bg rounded-full border border-brand/20 text-[12px] font-bold uppercase tracking-[0.4em] shadow-lg hover:bg-brand/90 transition-all group flex items-center justify-center space-x-4"
                                >
                                    <span>Join the Movement</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </Link>
                                <Link
                                    href="/contact"
                                    className="w-full md:w-auto py-6 px-10 bg-brand text-bg rounded-full border border-brand/20 text-[12px] font-bold uppercase tracking-[0.4em] shadow-lg hover:bg-brand/90 transition-all group flex items-center justify-center space-x-4"
                                >
                                    <span>Collaborate With Us</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                            {/* NilaiDivider removed */}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
