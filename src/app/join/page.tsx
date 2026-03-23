'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Sparkles, Shield } from 'lucide-react';
import Image from 'next/image';
import {
    NilaiBotanicalTexture,
    NilaiDivider,
    OrnateBorder,
    HeritageCardFrame,
    HeritageDoubleFrame,
    HeritageSectionBorder,
    HeritageTitleUnderline,
    MistyOverlay,
    InstitutionalStamp,
    NilaiSectionHeader,
    HeritageDesignAccent,
    FlowerDecoration
} from '@/components/ui/HeritageUI';

export default function Join() {
    return (
        <div className="flex flex-col relative bg-bg text-primary font-manrope min-h-screen">
            {/* Header - Page Background */}
            <section className="pt-24 pb-20 px-8 md:px-16 max-w-7xl mx-auto relative z-10 overflow-hidden">
                <MistyOverlay className="opacity-10" />

                {/* Nilai Botanical Corners & Heritage Accents */}
                <HeritageDesignAccent className="absolute top-20 left-20 w-80 h-80 opacity-[0.03] -rotate-12" />
                <HeritageDesignAccent className="absolute bottom-20 right-20 w-80 h-80 opacity-[0.03] rotate-12" />

                <NilaiBotanicalTexture className="absolute top-10 right-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 left-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 right-[5%] -translate-y-1/2 w-72 h-72 opacity-[0.02] rotate-12" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col space-y-10 text-center md:text-left"
                >
                    <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-primary/40 block">Member Admissions</span>
                    <h1 className="text-4xl md:text-6xl font-canela font-bold text-primary leading-tight uppercase tracking-widest whitespace-nowrap">
                        Join the Movement
                    </h1>
                    <HeritageTitleUnderline className="!justify-start !w-64 opacity-40" />
                    <p className="text-3xl md:text-4xl font-source-serif italic text-primary/70 leading-relaxed max-w-4xl font-light">
                        "Entry into Zencura is an initiation into a higher standard of biological existence."
                    </p>

                    <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
                        <InstitutionalStamp text="ZEN • CURA • ADMISSION • INITIATE" className="scale-[2.5]" />
                    </div>
                </motion.div>
            </section>

            {/* Commitment Grid */}
            <section className="bg-bg py-16 md:py-24 px-8 md:px-16 relative z-10 overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-20 right-20 w-80 h-80 opacity-[0.015] grayscale" />
                <FlowerDecoration className="absolute bottom-20 left-20 w-80 h-80 opacity-[0.015] grayscale rotate-180" />


                <div className="max-w-7xl mx-auto relative z-10">
                    <NilaiSectionHeader
                        title="The Path Within"
                        subtitle="Membership Benefits"
                    />

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {[
                            { title: "Personal Heritage", desc: "Access to personalized clinical protocols rooted in your unique biology and heritage.", icon: Leaf },
                            { title: "Institutional Assets", desc: "Priority access to our global network of research hubs, clinics, and sanctuary retreats.", icon: Shield },
                            { title: "Collective Intelligence", desc: "Join an elite community of conscious individuals architecting the future of human health.", icon: Sparkles }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1 }}
                                className="group transition-all duration-700 relative overflow-hidden"
                            >
                                <HeritageCardFrame overlay={true} motifInset="-inset-32" motifScale="scale-150">
                                    <OrnateBorder className="bg-section/10 border-none space-y-10 hover:bg-section/20 transition-all duration-700 shadow-sm rounded-[32px] p-12 md:p-16 lg:p-20 flex flex-col items-center text-center h-full">
                                        <div className="flex flex-col items-center space-y-8 w-full relative z-10">
                                            <div className="w-16 h-16 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-all duration-700 border border-primary/10">
                                                <item.icon size={32} strokeWidth={1} />
                                            </div>
                                        </div>
                                        <h3 className="text-3xl font-canela font-bold text-primary leading-tight w-full relative z-10">{item.title}</h3>
                                        <div className="w-16 h-px bg-primary/10 mx-auto" />
                                        <p className="text-xl font-source-serif italic text-primary/60 leading-relaxed font-light w-full relative z-10">{item.desc}</p>
                                    </OrnateBorder>
                                </HeritageCardFrame>
                                <MistyOverlay className="opacity-5" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-16 md:py-28 px-8 md:px-16 bg-bg relative overflow-hidden">
                {/* Nilai Botanical Corners */}
                <NilaiBotanicalTexture className="absolute top-10 left-10 opacity-[0.04]" />
                <NilaiBotanicalTexture className="absolute bottom-10 right-10 opacity-[0.04] rotate-180" />
                <FlowerDecoration className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.01] grayscale" />

                <MistyOverlay className="opacity-[0.05]" />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
                    {/* Admission Details (Left) */}
                    <div className="flex flex-col space-y-16">
                        <div className="relative w-full max-w-[600px] mb-8 flex justify-center text-center">
                            <Image src="/letterflag.png" width={600} height={150} className="w-full h-auto" alt="Ribbon" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                                <span className="text-[10px] md:text-[11px] font-canela tracking-[0.35em] uppercase text-brand">Selective Intake</span>
                                <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none px-4">Initiate Admission</h2>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl font-source-serif italic text-primary/60 leading-relaxed max-w-lg font-light">
                            "Our admission process is selective, focusing on individuals committed to biological excellence."
                        </p>

                        <div className="flex flex-col space-y-12">
                            {[
                                { label: "Standard", value: "Review" },
                                { label: "Induction", value: "3-Months" },
                                { label: "Alignment", value: "Bio-Protocol" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start space-x-8">
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/40 leading-none">{item.label}</span>
                                        <span className="text-2xl font-canela font-bold text-primary">{item.value}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-16 border-t border-primary/10">
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary/30 italic font-manrope">Selective Admission Policy &middot; Institutional Grade Only</p>
                        </div>
                    </div>

                    {/* Form Container (Right) */}
                    <div className="relative w-full">
                        <div className="group relative flex flex-col text-center bg-[url('/photo3.png')] bg-[length:100%_100%] bg-center min-h-[550px] p-10 md:p-16 lg:p-20 transition-all duration-500 w-full">
                            <div className="text-center mb-16">
                                <h3 className="text-2xl font-canela font-bold text-brand uppercase tracking-widest">
                                    Admission Request
                                </h3>
                                <div className="w-24 h-px bg-brand/30 mx-auto mt-6" />
                            </div>

                            <form className="flex flex-col space-y-10 flex-grow text-left text-brand w-full">
                                <div className="flex flex-col space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/60">Your Full Name</label>
                                    <input type="text" className="bg-transparent border-b border-brand/20 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl w-full text-brand font-light placeholder:text-brand/30" placeholder="Institutional Name" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/60">Electronic Address</label>
                                    <input type="email" className="bg-transparent border-b border-brand/20 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl w-full text-brand font-light placeholder:text-brand/30" placeholder="name@organization.com" />
                                </div>
                                <div className="flex flex-col space-y-4">
                                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand/60">Primary Wellness Goal</label>
                                    <input type="text" className="bg-transparent border-b border-brand/20 py-3 outline-none focus:border-brand transition-all font-source-serif italic text-xl w-full text-brand font-light placeholder:text-brand/30" placeholder="Longevity, Brain Health..." />
                                </div>

                                <button type="button" className="w-full py-6 mt-8 bg-brand text-bg rounded-full border border-brand/20 text-[12px] font-bold uppercase tracking-[0.4em] shadow-lg hover:bg-brand/90 transition-all group flex items-center justify-center space-x-4">
                                    <span>Initiate Request</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
