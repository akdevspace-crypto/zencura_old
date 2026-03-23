'use client';

import { useState } from 'react';
import Image from 'next/image';
import { InstitutionalStamp } from '@/components/ui/HeritageUI';

const divisions = [
    {
        title: "Integrated Clinical Medicine",
        desc: "Advanced diagnostics and modern allopathic treatment informed by systems-based interpretation and preventive strategy.",
        image: "/images/integrated_clinical.png"
    },
    {
        title: "Metabolic & Longevity Programs",
        desc: "Structured interventions for cardiometabolic resilience, cellular vitality, and long-term biological optimization.",
        image: "/images/metabolic_longevity_program.png"
    },
    {
        title: "Ayurvedic & Siddha Therapeutics",
        desc: "Institutional integration of classical Indian medical systems with evidence-informed protocols.",
        image: "/images/Aurvedic.png"
    },
    {
        title: "Community Preventive Networks",
        desc: "Embedded healthcare models designed for rural centers, urban clinics, and long-term population health.",
        image: "/images/Community.png"
    },
    {
        title: "Environmental & Lifestyle Medicine",
        desc: "Designing biological harmony through architecture, ecology, nutrition, and circadian alignment.",
        image: "/images/environmental.png"
    }
];

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="relative py-32 px-9 md:px-20 w-full flex flex-col items-center z-10 bg-bg">


            {/* Subtle Watermark */}

            <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">

                {/* Custom Inline Header ensuring token text */}
                <div className="flex flex-col items-center mb-8 text-center space-y-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-brand/70">
                        Institutional Healthcare Programs
                    </span>
                    <h2 className="text-3xl md:text-5xl lg:text-[56px] font-canela font-bold text-brand tracking-wide relative inline-block">
                        Clinical & Preventive Divisions
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-8 opacity-60">
                        <div className="w-12 h-px bg-brand" />
                        <div className="w-2 h-2 rounded-full border border-brand" />
                        <div className="w-12 h-px bg-brand" />
                    </div>
                </div >

                {/* DESKTOP LAYOUT */}
                < div className="mt-20 hidden md:grid md:grid-cols-[1.1fr_1px_1.9fr] gap-16 items-start w-full" >

                    {/* LEFT COLUMN – TITLES */}
                    < div className="flex flex-col space-y-12 pr-8" >
                        {
                            divisions.map((item, index) => (
                                <div
                                    key={index}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    className="cursor-pointer group flex items-center relative pl-8"
                                >
                                    {/* Animating Left Hover/Active Pointer */}
                                    <div className={`absolute left-[-0.5rem] md:left-[-1.5rem] top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 transition-all duration-500 ease-in-out ${activeIndex === index ? 'opacity-100 translate-x-2' : 'opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0'}`}>
                                        <Image
                                            src="/pen.png"
                                            alt="Active Indicator cursor"
                                            fill
                                            className="object-contain object-right mix-blend-multiply"
                                        />
                                    </div>
                                    <h3
                                        className={`text-[32px] md:text-[36px] lg:text-[34px] whitespace-nowrap tracking-[0.08em]  uppercase transition-all duration-500 font-medium ${activeIndex === index
                                            ? "text-brand translate-x-1"
                                            : "text-brand/50 group-hover:text-brand/80 group-hover:translate-x-1"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                </div>
                            ))
                        }
                    </div >

                    {/* VERTICAL DIVIDER */}
                    < div className="w-[1px] h-full bg-brand/20 mt-2" />

                    {/* RIGHT COLUMN – IMAGE + CONTENT */}
                    < div className="flex flex-col space-y-10 pt-2 min-h-[500px] w-full relative" >

                        {/* IMAGE STACK FOR SMOOTH CROSSFADE */}
                        < div className="relative w-full h-[450px] rounded-[24px] overflow-hidden border border-brand/10 mix-blend-multiply" >
                            {
                                divisions.map((item, index) => (
                                    <Image
                                        key={index}
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className={`object-cover scale-[1.10] contrast-[1.05] brightness-[0.95] saturate-[0.8] sepia-[0.08] transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))
                            }
                        </div >

                        {/* DESCRIPTION STACK */}
                        < div className="relative h-[120px] w-full" >
                            {
                                divisions.map((item, index) => (
                                    <p
                                        key={index}
                                        className={`absolute inset-0 top-0 left-0 font-source-serif text-xl md:text-2xl leading-relaxed text-main/90 max-w-2xl transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                    >
                                        {item.desc}
                                    </p>
                                ))
                            }
                        </div >
                    </div >
                </div >

                {/* MOBILE LAYOUT */}
                < div className="md:hidden mt-20 flex flex-col space-y-20 w-full" >
                    {
                        divisions.map((item, index) => (
                            <div key={index} className="flex flex-col space-y-6">
                                <h3 className="font-canela text-[22px] uppercase tracking-widest text-brand">
                                    {item.title}
                                </h3>

                                <div className="relative w-full h-[280px] rounded-[20px] overflow-hidden border border-brand/10 mix-blend-multiply">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover contrast-[1.05] brightness-[0.95] saturate-[0.8] sepia-[0.08]"
                                    />
                                </div>

                                <p className="font-source-serif text-[18px] leading-relaxed text-main/90">
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </div >

            </div >
        </section >
    );
}
