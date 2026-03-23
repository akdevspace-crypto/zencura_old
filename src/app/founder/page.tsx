'use client';

import React from 'react';
import { PenTool, ShieldCheck, Heart, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { NilaiBotanicalTexture, NilaiDivider, OrnateBorder, MistyOverlay, InstitutionalStamp, NilaiSectionHeader, HeritageCardFrame, HeritageDesignAccent, HeritageSectionBorder, HeritageTitleUnderline, FlowerDecoration } from '@/components/ui/HeritageUI';

export default function FounderPage() {
    return (
        <div className="flex flex-col w-full bg-bg min-h-screen">
            {/* Hero Section */}
            <section className="pt-24 pb-20 px-8 md:px-16 relative overflow-hidden">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-10 max-w-5xl text-center md:text-left md:mx-0 mx-auto"
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
                                    Founder's Perspective
                                </span>
                                <h1 className="text-[20px] md:text-[28px] lg:text-[36px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                    A Commitment to Redefining Healthcare
                                </h1>
                            </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-source-serif italic text-primary/70 leading-relaxed font-light text-center">
                            "A Founder’s Perspective on Prevention, Integration, and Civilization Health"
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder's Message Section */}
            <section id="message" className="py-16 md:py-24 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 left-20 -translate-y-1/2 w-80 h-80 opacity-[0.02] rotate-45" />
                <FlowerDecoration className="absolute top-1/2 right-20 -translate-y-1/2 w-80 h-80 opacity-[0.02] -rotate-12" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <HeritageCardFrame
                        className="h-full w-full"
                        motifInset="-inset-y-12 md:-inset-y-16 lg:-inset-y-24"
                        motifOpacity="opacity-[0.1]"
                        overlay={true}
                    >
                        <div className="px-8 py-16 md:p-16 lg:p-24 relative z-10 flex flex-col h-full shadow-[0_12px_35px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden text-brand/90">
                            <div className="absolute inset-[-25%] md:inset-[-20%] bg-[url('/photo(2).png')] bg-[length:100%_100%] bg-center z-0" />
                            <div className="absolute inset-0 bg-[#fbf9f4]/60 mix-blend-multiply pointer-events-none z-0" />
                            <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-30 mix-blend-multiply pointer-events-none z-0" />
                            <div className="relative z-10 w-full h-full flex flex-col">
                                <div className="text-center mb-12">
                                    <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-brand/60 mb-3">Institutional Vision</h2>
                                    <h3 className="text-3xl md:text-5xl font-canela text-brand">Founder's Message</h3>
                                    <div className="w-16 h-px bg-brand/30 mx-auto mt-6" />
                                </div>
                                {/* Image top right - Simple Classic Polaroid Style */}
                                <div className="hidden lg:block absolute top-[-60px] right-[-5%] lg:right-[-4%] xl:right-[-2%] w-[180px] h-[220px] z-20 pointer-events-none">
                                    <motion.div
                                        animate={{ y: [0, -4, 0], rotate: [4, 6, 4] }}
                                        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                                        className="relative w-full"
                                    >
                                        <div className="bg-[#fbf9f4] p-[12px] pb-[36px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] rounded-sm border border-[#e8dfce]">
                                            <div className="relative w-full aspect-[4/5] overflow-hidden shadow-[inset_0_2px_15px_rgba(0,0,0,0.25)]">
                                                <Image
                                                    src="/founder_portrait.png"
                                                    alt="Founder Portrait"
                                                    fill
                                                    sizes="180px"
                                                    className="object-cover sepia-[0.35] contrast-[1.1] brightness-[0.9] saturate-[0.8]"
                                                />
                                                {/* Inner realistic shadows/overlays */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-[#3a2a18]/50 via-transparent to-[#ffffff]/10 mix-blend-multiply z-[25] pointer-events-none" />
                                                <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none z-[25]" />
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Message Content */}
                                <div className="editorial-container space-y-10 text-xl md:text-2xl font-source-serif text-brand/90 leading-relaxed font-light text-center max-w-3xl mx-auto mt-8 pr-0 lg:pl-16 xl:pl-24">
                                    <p>
                                        Healthcare today largely intervenes after illness appears. Yet true health begins long before disease.
                                    </p>
                                    <p>
                                        At Zencura, we are guided by a simple but profound conviction that the human body, mind, and environment are not isolated systems, but deeply interconnected forces shaping human vitality.
                                    </p>
                                    <p>
                                        When this balance is disrupted, disease emerges. When harmony is restored, resilience and vitality return.
                                    </p>
                                    <p>
                                        Our vision is not merely to treat patients, but to reimagine the very architecture of healthcare. We are building integrated institutions, preventive ecosystems, and evidence-informed wellness frameworks that unite scientific rigor, compassionate care, and long-term sustainability.
                                    </p>
                                    <p>
                                        Zencura is not simply a healthcare provider. It is a commitment to advancing a healthier civilization—one where prevention becomes culture, integration becomes standard, and wellbeing becomes a lifelong pursuit. This is the future we are working toward.
                                    </p>
                                </div>

                                {/* Founder Info at Bottom */}
                                <div className="pt-20 flex flex-col items-center space-y-6 text-center">
                                    <div className="text-brand/80">
                                        <PenTool className="w-6 h-6" strokeWidth={1} />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-3xl font-source-serif italic text-brand">Dr. Shivnesh S</span>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand/80 mt-2">Founder, Zencura</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </HeritageCardFrame>
                </div>
            </section>

            {/* Long-Term Commitment Section */}
            {/* HeritageSectionBorder removed */}
            <section className="py-16 md:py-24 px-8 md:px-16 bg-[url('/testimonial/paper-texture.png')] bg-bg text-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-bg/80 mix-blend-screen pointer-events-none" />
                <FlowerDecoration className="absolute -top-20 right-0 w-[500px] h-[500px] opacity-[0.03] invert brightness-0 rotate-12" />
                <FlowerDecoration className="absolute -bottom-20 left-0 w-[500px] h-[500px] opacity-[0.03] invert brightness-0 -rotate-12" />
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 relative z-10">
                    <div className="flex flex-col space-y-8 max-w-3xl text-center items-center">
                        <div className="relative w-full max-w-[850px] mx-auto mb-4 flex justify-center text-center">
                            <Image
                                src="/letterflag.png"
                                alt="Ribbon Header"
                                width={850}
                                height={200}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                                <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                    A Multi-Decade Vision
                                </span>
                                <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                    The Long-Term Commitment
                                </h2>
                            </div>
                        </div>
                        <p className="text-2xl md:text-3xl font-source-serif italic text-brand leading-relaxed font-light">
                            "Zencura is not built for quarterly performance. It is built for generational impact."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full mx-auto">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Institutional Legacy",
                                desc: "Our commitment extends beyond services. It is toward shaping institutions that endure, adapt, and elevate public health standards globally."
                            },
                            {
                                icon: Heart,
                                title: "Civilization Health",
                                desc: "The future of health will not be reactive. It will be conscious. We are architecting a civilization where human biology, consciousness, and nature work in harmony."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="flex flex-col group w-full"
                            >
                                <div className="group relative flex flex-col items-center justify-center text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[550px] px-12 py-16 md:px-16 md:py-20 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-pointer w-full">
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-brand/80 mb-8 border border-brand/30 bg-transparent group-hover:bg-brand/5 transition-colors duration-500">
                                        <item.icon className="w-7 h-7" strokeWidth={1.25} />
                                    </div>

                                    <span className="text-[11px] font-bold uppercase text-brand tracking-[0.25em] mb-5 block">
                                        Institutional Mandate
                                    </span>

                                    <h3 className="text-2xl md:text-[32px] font-canela text-brand leading-tight mb-8">
                                        {item.title}
                                    </h3>

                                    <p className="text-[15px] md:text-base font-source-serif italic text-brand/80 leading-relaxed max-w-[90%] mx-auto">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HeritageSectionBorder removed */}
            {/* Action CTA */}
            <section className="py-24 md:py-32 px-8 md:px-16 bg-bg text-center relative overflow-hidden">
                <MistyOverlay className="opacity-30 pointer-events-none" />
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />

                <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12 relative z-10">
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
                                Join the Movement
                            </span>
                            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">
                                Collaborate on the Future
                            </h2>
                        </div>
                    </div>
                    <p className="text-2xl md:text-3xl font-source-serif italic text-brand/60 max-w-2xl font-light">
                        "Join Dr. Shivnesh S and the Zencura team in redefining what it means to live a healthy, conscious life."
                    </p>
                    <Link
                        href="/contact"
                        className="px-12 py-6 bg-brand text-bg rounded-full border border-brand/20 text-[14px] font-bold uppercase tracking-[0.4em] hover:bg-brand/90 transition-all shadow-xl group flex items-center justify-center space-x-4"
                    >
                        <span>Start a Conversation</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    {/* NilaiDivider removed */}
                </div>
            </section>
        </div>
    );
}
