'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonialsData = [
    {
        name: "Dr. Meera Iyer",
        location: "Coimbatore",
        role: "Consultant Physician & Preventive Care Advocate",
        image: "https://i.pravatar.cc/400?img=32",
        rating: 5,
        content: `Zencura represents what modern healthcare has long been missing — structured prevention. Their integration of clinical diagnostics with classical Ayurvedic principles offers patients a complete, systems-based understanding of their health.\n\nThe consultation process is deeply analytical yet human. Discussions go beyond lab reports into lifestyle rhythms, emotional health, and environmental factors. This is not alternative medicine — it is integrative institutional medicine executed with rigor.`,
        quote: "Zencura institutionalizes prevention — not as theory, but as structured clinical practice.",
        hasDecoration: false
    },
    {
        name: "Arjun Narayanan",
        location: "Bangalore",
        role: "Entrepreneur & Metabolic Health Program Member",
        image: "https://i.pravatar.cc/400?img=12",
        rating: 5,
        content: `After years of managing stress and metabolic imbalance through fragmented consultations, Zencura offered a cohesive framework. My treatment plan combined modern diagnostic evaluation with Ayurvedic dietary correction and circadian alignment protocols.\n\nWithin months, measurable improvements were evident — not just in lab markers but in sustained energy and mental clarity. The approach feels architectural, not symptomatic.`,
        quote: "For the first time, my health felt managed as a system — not a collection of symptoms.",
        hasDecoration: false
    },
    {
        name: "Lakshmi Raman",
        location: "Chennai",
        role: "Community Health Volunteer",
        image: "https://i.pravatar.cc/400?img=47",
        rating: 5,
        content: `Through Zencura’s rural preventive outreach, our community now understands health as a daily practice rather than emergency intervention. Their practitioners conduct structured lifestyle workshops rooted in Ayurveda and local ecology.\n\nThis model respects both traditional knowledge and modern validation. It restores dignity to healthcare delivery in underserved regions.`,
        quote: "Zencura brings institutional healthcare into the heart of the community.",
        hasDecoration: true
    },
    {
        name: "Dr. Ravi Subramanian",
        location: "Hyderabad",
        role: "Cardiologist & Integrative Medicine Researcher",
        image: "https://i.pravatar.cc/400?img=68",
        rating: 5,
        content: `As a cardiologist, I appreciate Zencura’s evidence-informed integration of classical systems. Their metabolic and longevity programs are not vague wellness plans — they are structured preventive frameworks built upon measurable indicators.\n\nThe dialogue between allopathy and Ayurveda here is disciplined and research-oriented.`,
        quote: "This is civilizational healthcare — prevention elevated to institutional science.",
        hasDecoration: false
    },
    {
        name: "Nandita Krishnan",
        location: "Mumbai",
        role: "Architect & Environmental Design Consultant",
        image: "https://i.pravatar.cc/400?img=5",
        rating: 5,
        content: `Zencura’s environmental health philosophy aligns architecture, ecology, and biology. Their spaces are designed to reduce stress load and enhance natural recovery rhythms.\n\nThe experience feels grounded — not clinical, not commercial — but intentionally institutional and future-oriented.`,
        quote: "Zencura designs health not only for the body, but for the environment that sustains it.",
        hasDecoration: false
    }
];

export default function TestimonialsPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen relative overflow-hidden font-manrope">

            {/* Vintage Soft Grain Layer */}
            <div className="absolute inset-0 pointer-events-none bg-[url('/testimonial/grain.png')] opacity-[0.02] mix-blend-multiply z-0" />

            {/* Vintage Paper Fade Overlay (Moving horizontally/vertically) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('/testimonial/paper-texture.png')] bg-repeat mix-blend-multiply animate-[paperShift_40s_linear_infinite] z-0" />

            <section className="pt-32 pb-20 px-8 md:px-16 lg:px-24 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* HEADER RIBBON */}
                    <div className="relative w-full max-w-[850px] mx-auto mb-[60px] flex justify-center text-center">
                        <Image
                            src="/letterflag.png"
                            alt="Ribbon Header"
                            width={850}
                            height={200}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                            <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                Voices of Health
                            </span>
                            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                Reviews & Testimonials
                            </h1>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-28 md:space-y-40">
                        {testimonialsData.map((t, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-stretch relative"
                            >

                                {/* Left Side: Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                    className="flex flex-col"
                                >
                                    <div className="space-y-1 mb-6">
                                        <h2 className="text-2xl md:text-[28px] font-canela text-[#b99468] tracking-wider leading-none">
                                            {t.name}
                                        </h2>
                                        {t.location && (
                                            <p className="text-[#b99468]/80 text-[15px] font-medium tracking-wide mt-2">
                                                {t.location}
                                            </p>
                                        )}

                                        {/* Elegant Divider Reveal */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: 60 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                            className="h-[1px] bg-[#b99468]/40 mt-4"
                                        />
                                    </div>

                                    <div className="space-y-5 text-[15px] leading-[1.8] text-primary/75 tracking-[0.015em] font-medium">
                                        {t.content.split('\n\n').map((paragraph, pi) => (
                                            <p key={pi}>{paragraph}</p>
                                        ))}
                                    </div>

                                    {t.role && (
                                        <div className="mt-8 text-[#b99468] text-[15px] font-medium tracking-wide leading-relaxed whitespace-pre-line">
                                            {t.role}
                                        </div>
                                    )}

                                    {/* Optional Leaf graphic on the left */}
                                    {t.hasDecoration && (
                                        <div className="absolute -left-20 sm:-left-40 top-1/2 -translate-y-1/2 opacity-30 object-contain pointer-events-none w-[300px] h-[300px]" />
                                    )}
                                </motion.div>

                                {/* Right Side: Image */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                                    className="relative w-full flex justify-center mt-4 md:mt-0"
                                >
                                    <div className="relative w-full max-w-[400px] h-auto lg:scale-[1.1]">
                                        {/* inner image layer ON TOP */}
                                        <div className="absolute top-[18%] left-[12%] w-[76%] h-[62%] overflow-hidden z-[30]">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                fill
                                                className="object-cover sepia-[0.25] contrast-[1.08] brightness-[1.05] saturate-[0.9]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#3a2a18]/50 via-transparent to-[#ffffff]/10 mix-blend-multiply z-[25] pointer-events-none" />
                                            <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none z-[25]" />
                                            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] z-[25] pointer-events-none" />
                                        </div>
                                        {/* FRAME AS BASE BACKGROUND */}
                                        <Image
                                            src="/photo.png"
                                            alt="frame border"
                                            width={1368}
                                            height={1031}
                                            className="relative z-[20] w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] block pointer-events-none"
                                        />
                                    </div>

                                    {/* Optional Branch graphic on the right */}
                                    {t.hasDecoration && (
                                        <div className="hidden lg:block absolute -right-32 xl:-right-56 top-10 pointer-events-none w-[200px] xl:w-[300px] aspect-square opacity-60">
                                            <div className="w-full h-full bg-[#b99468]/10 rounded-full blur-3xl" />
                                        </div>
                                    )}
                                </motion.div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Keyframes for Paper Shift */}
            <style jsx global>{`
                @keyframes paperShift {
                    0% { background-position: 0 0; }
                    100% { background-position: 800px 600px; }
                }
            `}</style>
        </div>
    );
}
