'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HeritageIcons, NilaiBotanicalTexture } from '@/components/ui/HeritageUI';

const cardContent = [
    {
        title: "Integrated Medical Institutions",
        desc: "Bringing together modern medicine and classical holistic sciences within a unified clinical framework.",
        icon: <HeritageIcons.Lotus />
    },
    {
        title: "Preventive Health Networks",
        desc: "Embedding longevity, metabolic health, and resilience into everyday community life.",
        icon: <HeritageIcons.Chakra />
    },
    {
        title: "Holistic Science Integration",
        desc: "Institutionalizing Ayurveda, Yoga, Naturopathy, and Siddha within evidence-informed practice.",
        icon: <HeritageIcons.TempleMandala />
    },
    {
        title: "Sustainable Health Innovation",
        desc: "Developing wellness solutions that respect both biological systems and environmental balance.",
        icon: <HeritageIcons.KolamGeometry />
    }
];

export default function WhatWeAreBuilding() {
    return (
        <section className="relative py-32 px-10 overflow-hidden min-h-screen flex items-center justify-center bg-bg">

            {/* grain & vignette */}

            <div className="absolute inset-0 mix-blend-multiply pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 40%, rgba(70,50,30,0.25))' }}></div>

            {/* Botanical Decoration */}
            <NilaiBotanicalTexture className="absolute top-20 left-20 opacity-[0.04] pointer-events-none" />
            <NilaiBotanicalTexture className="absolute bottom-20 right-20 opacity-[0.04] pointer-events-none rotate-180" />

            <div className="relative z-10 w-full max-w-[1400px] flex flex-col items-center">
                {/* Vintage Title Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="relative text-center mb-24 flex flex-col items-center"
                >
                    <span className="text-[11px] tracking-[0.4em] uppercase text-brand/80 font-bold">
                        OUR MISSION ARCHITECTURE
                    </span>
                    <h2 className="font-canela text-[48px] md:text-[64px] lg:text-[72px] text-brand tracking-[0.08em] mt-6 mb-3">
                        WHAT WE ARE BUILDING
                    </h2>
                </motion.div>

                {/* Cards Layout */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-12 w-full max-w-[1500px] px-6"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    {cardContent.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: i * 0.15 }}
                            className="relative w-full aspect-[4/5] max-w-[340px] mx-auto group hover:-translate-y-4 transition-transform duration-700 ease-out cursor-pointer"
                        >
                            <Image
                                src="/paperbundle.png"
                                alt="paper card"
                                fill
                                className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_45px_60px_rgba(0,0,0,0.45)] transition-all duration-700 pointer-events-none"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8 xl:px-12 pt-4 pb-16">
                                {/* icon */}
                                <div className="mb-6 text-brand opacity-[0.85] scale-125 group-hover:scale-150 group-hover:opacity-100 group-hover:text-highlight transition-all duration-500">
                                    {card.icon}
                                </div>

                                <h3 className="font-canela text-[18px] md:text-[20px] text-brand group-hover:text-accent mb-4 leading-snug transition-colors duration-500">
                                    {card.title}
                                </h3>

                                <p className="font-source-serif text-[13px] md:text-[14px] text-main leading-[1.6] tracking-wide transition-colors duration-500">
                                    {card.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
