'use client';

import React from 'react';

export default function MinimalPage() {
    return (
        <div className="min-h-screen bg-[#f3eee3] text-[#c18b67] font-manrope">
            {/* 1. Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-8">
                {/* Background Video Placeholder */}
                <div className="absolute inset-0 bg-gray-200/50 -z-10 flex items-center justify-center">
                    <span className="text-sm uppercase tracking-widest opacity-30">[ Background Video Placeholder ]</span>
                </div>

                <div className="max-w-4xl text-center space-y-12">
                    <h1 className="text-5xl md:text-7xl font-canela font-bold leading-tight uppercase tracking-[0.15em]">
                        The Future of <br /> Human Vitality
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="px-12 py-5 bg-[#c18b67] text-[#f3eee3] rounded-full text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all">
                            Explore Research
                        </button>
                        <button className="px-12 py-5 text-[#c18b67] rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#c18b67] hover:text-[#f3eee3] transition-all">
                            Join Foundation
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. Two-Column Narrative Section */}
            <section className="py-32 px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-canela font-bold uppercase tracking-widest">
                        The Missing Foundation
                    </h2>
                    <p className="text-lg leading-relaxed font-light text-primary/80">
                        Developing mastered medical sciences for crisis management. Yet prevention remains the missing foundation. Zencura is founded on the conviction that human biology, consciousness, and the natural world are inseparably connected.
                    </p>
                </div>
                <div className="flex justify-center">
                    {/* Circular Image Placeholder */}
                    <div className="w-full max-w-md aspect-square rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm uppercase tracking-widest opacity-30">[ Circular Image ]</span>
                    </div>
                </div>
            </section>

            {/* 3. Centered Origin / Vision Section */}
            <section className="py-32 px-8 bg-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-canela font-bold uppercase tracking-widest">
                            Why Zencura
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                        <div className="space-y-6 text-center">
                            <h3 className="text-2xl font-canela font-bold uppercase tracking-widest">Origin</h3>
                            <p className="leading-relaxed font-light opacity-80">
                                Born from the synthesis of traditional Ayurvedic wisdom and modern clinical rigor, Zencura was established to address the systemic gaps in preventive healthcare.
                            </p>
                        </div>
                        <div className="space-y-6 text-center">
                            <h3 className="text-2xl font-canela font-bold uppercase tracking-widest">Vision</h3>
                            <p className="leading-relaxed font-light opacity-80">
                                To establish a global health civilization where prevention is culture, wisdom works in harmony with science, and humanity lives consciously aligned with nature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Four-Card Grid Section */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="p-10 bg-white/30 space-y-6">
                            <h4 className="text-xl font-canela font-bold uppercase tracking-widest">
                                Division 0{i}
                            </h4>
                            <p className="text-sm leading-relaxed font-light opacity-70">
                                Providing specialized institutional support for integrated longevity protocols and biological synchronization.
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Static Footer (Minimal) */}
            <footer className="py-20 px-8 text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">
                    Zencura Institute © 2026
                </p>
            </footer>
        </div>
    );
}
