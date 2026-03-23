'use client';

import React from 'react';
import { BookOpen, Beaker, Globe, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import {
    NilaiBotanicalTexture,
    MistyOverlay
} from '@/components/ui/HeritageUI';

const researchAreas = [
    {
        title: "Epigenetic Heritage",
        category: "Biological Science",
        desc: "Investigating the intersection of classical Ayurvedic protocols and modern gene expression markers.",
        icon: <BookOpen className="w-6 h-6" />
    },
    {
        title: "Human Bio-Resilience",
        category: "Functional Medicine",
        desc: "Analyzing the impact of ancestral lifestyle rhythms on modern metabolic stress responses.",
        icon: <Beaker className="w-6 h-6" />
    },
    {
        title: "Conscious Infrastructure",
        category: "Civilization Health",
        desc: "Designing built environments that promote natural healing and biological synchronization.",
        icon: <Globe className="w-6 h-6" />
    }
];

export default function ResearchSection() {
    return (
        <section id="research" className="py-24 md:py-32 px-8 md:px-16 relative overflow-hidden flex flex-col items-center bg-bg">
            {/* Background image removed */}

            <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center mt-12">
                {/* Title Section (Matching screenshot style) */}
                <div className="flex flex-col items-center mb-16 text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-canela text-brand tracking-wide relative inline-block">
                        Research Pillars
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-8 opacity-40">
                        <div className="w-16 h-[1px] bg-brand" />
                        <div className="w-1 h-1 rounded-full bg-brand" />
                        <div className="w-16 h-[1px] bg-brand" />
                    </div>
                </div>

                {/* Cards Section */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full max-w-[1400px]">
                    {researchAreas.map((area, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group relative flex flex-col items-center justify-center text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[550px] px-12 py-16 md:px-16 md:py-20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand/80 mb-8 border border-brand/30 bg-transparent group-hover:bg-brand/5 transition-colors duration-500">
                                {React.cloneElement(area.icon as React.ReactElement<any>, { strokeWidth: 1.25, className: "w-7 h-7" })}
                            </div>

                            <span className="text-[11px] font-bold uppercase text-brand tracking-[0.25em] mb-5 block">
                                {area.category}
                            </span>

                            <h3 className="text-2xl md:text-[32px] font-canela text-brand leading-tight mb-8">
                                {area.title}
                            </h3>

                            <p className="text-[15px] md:text-base font-source-serif italic text-brand/80 leading-relaxed max-w-[90%] mx-auto">
                                {area.desc}
                            </p>

                            <div className="mt-10 flex items-center justify-center space-x-3 text-[10px] font-bold uppercase text-brand/70 group-hover:text-brand transition-colors duration-500">
                                <BookOpen className="w-4 h-4 opacity-80" />
                                <span className="tracking-[0.15em]">Active Study</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <p className="text-lg md:text-xl font-source-serif italic text-brand text-center max-w-2xl leading-relaxed mb-6 relative z-10">
                        "Validating timeless medical wisdom through the lens of modern empirical science."
                    </p>

                </div>
            </div>
        </section >
    );
}
