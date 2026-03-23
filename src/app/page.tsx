'use client';

import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MissingFoundation from '@/components/home/MissingFoundation';
import WhatWeAreBuilding from '@/components/home/WhatWeAreBuilding';
import ResearchSection from '@/components/home/ResearchSection';
import Testimonials from '@/components/home/Testimonials';
import ContactSection from '@/components/home/ContactSection';
import ServicesSection from '@/components/home/ServicesSection';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Sparkles, Target, Shield } from 'lucide-react';
import {
    NilaiDivider,
    NilaiBotanicalTexture,
    HeritageSectionBorder,
    HeritageDesignAccent,
    MistyOverlay,
    NilaiSectionHeader
} from '@/components/ui/HeritageUI';

export default function HomePage() {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-bg min-h-screen linen-texture">
            {/* Main Sections */}
            <HeroSection />
            {/* HeritageSectionBorder removed */}
            <MissingFoundation />
            {/* HeritageSectionBorder removed */}

            {/* Institutional Vision */}
            <section className="py-20 px-8 text-center bg-bg relative overflow-hidden">
                <MistyOverlay className="opacity-20" />
                <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-canela font-bold text-brand italic leading-tight">INSTITUTIONAL VISION</h2>
                    <blockquote className="text-3xl md:text-5xl font-canela font-bold text-brand italic leading-tight">
                        “We are building healthcare institutions designed not only for today’s patients, but for tomorrow’s civilization.”
                    </blockquote>
                </div>
            </section>

            {/* HeritageSectionBorder removed */}
            <WhatWeAreBuilding />

            {/* Institutional Divisions */}
            <ServicesSection />


            {/* HeritageSectionBorder removed */}
            < Testimonials />

            <ResearchSection />

            {/* HeritageSectionBorder removed */}

            {/* CTA Join movement */}
            <section className="py-20 px-8 bg-bg text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto space-y-12 relative z-10">
                    <h2 className="text-4xl md:text-6xl font-canela font-bold uppercase tracking-widest text-brand">Join the Movement</h2>
                    <p className="text-xl md:text-2xl font-source-serif italic text-brand/80 max-w-2xl mx-auto">
                        "The future of health is conscious. Zencura is building toward it."
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-12 pt-8">
                        <Link href="/join" className="px-14 py-5 bg-brand text-bg rounded-full text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all shadow-lg hover:shadow-xl">
                            Join the Movement
                        </Link>
                        <Link href="/contact" className="px-14 py-5 bg-brand text-bg rounded-full text-[13px] font-bold uppercase tracking-[0.3em] hover:bg-accent transition-all shadow-lg hover:shadow-xl">
                            Collaborate With Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Philosophical Outro */}
            <section className="py-16 md:py-32 px-8 text-center bg-bg relative overflow-hidden">
                <HeritageDesignAccent className="absolute top-1/3 left-10 w-64 h-64 rotate-12 opacity-[0.03]" />
                <HeritageDesignAccent className="absolute bottom-1/4 right-0 w-80 h-80 -rotate-12 opacity-[0.03]" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="max-w-4xl mx-auto space-y-16 relative z-10"
                >
                    {/* HeritageSectionBorder removed */}
                    <p className="text-3xl md:text-5xl lg:text-6xl font-canela font-bold text-primary italic leading-[1.3] px-4">
                        "The future of medicine is not reactive, <br /> but a conscious choice of living."
                    </p>
                    {/* HeritageSectionBorder removed */}

                    <div className="pt-8">
                        <span className="text-[11px] font-bold uppercase tracking-[0.6em] text-primary/30">Mastered in Science • Sustained by Life</span>
                    </div>
                </motion.div>
            </section>

            {/* HeritageSectionBorder removed */}
            <ContactSection />

            {/* Global Linen Texture Style Injection */}
            <style jsx global>{`
              .linen-texture {
                position: relative;
              }
              .linen-texture::after {
                content: "";
                position: absolute;
                inset: 0;
                background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
                pointer-events: none;
                z-index: 50;
                opacity: 0.4;
              }
            `}</style>
        </div >
    );
}
