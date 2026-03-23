
'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HeritageCardFrame, OrnateBorder, MistyOverlay } from '@/components/ui/HeritageUI';

gsap.registerPlugin(ScrollTrigger);

function WhyZencuraDesktop() {
    const sectionRef = useRef<HTMLElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!sectionRef.current || !pinRef.current || !contentRef.current) return;

        const pin = pinRef.current;
        const cards = gsap.utils.toArray('.heritage-card');

        // Separate timeline for the quick entry animation (starts before pinning)
        gsap.fromTo(
            contentRef.current,
            { y: '30vh', opacity: 0 },
            {
                y: '0',
                opacity: 1,
                ease: 'power3.out',
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%', // Triggers when top of section is at middle of viewport
                    end: 'top top',
                    scrub: 1
                }
            }
        );

        // Dynamic timeline height based on absolute content (for the scrolling through cards)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pin,
                start: 'top top',
                end: () => `+=${(contentRef.current?.scrollHeight || window.innerHeight) * 1.2}px`, // Scalable end based on actual content size
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
            }
        });

        tl.addLabel("scrollMoving")
            .to(contentRef.current, {
                y: () => {
                    const el = contentRef.current;
                    if (!el) return 0;
                    // Scroll up so the bottom of the content becomes visible (+ padding)
                    const offset = el.scrollHeight > window.innerHeight ? el.scrollHeight - window.innerHeight + 150 : 0;
                    return offset > 0 ? -offset : 0;
                },
                ease: 'none',
                duration: 0.8 // Scroll smoothly through the content taking most of timeline
            }, "scrollMoving")
            .fromTo(
                cards,
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.1, ease: 'power3.out', duration: 0.3 },
                "scrollMoving+=0.05"
            );

    }, []);

    return (
        <section
            id="why"
            ref={sectionRef}
            className="relative md:block hidden z-40"
        >
            {/* Pinned Viewport */}
            <div ref={pinRef} className="relative h-screen overflow-hidden flex flex-col bg-bg">
                {/* Additional Fog Component */}
                <MistyOverlay className="opacity-40 z-20 pointer-events-none" />

                {/* IMAGE VIEWPORT (FIXED BACKGROUND) */}
                <div className="relative h-full w-full overflow-hidden">
                    {/* Fog elements for the starting and ending phase */}
                    <div className="absolute top-0 left-0 w-full h-32 md:h-64 bg-gradient-to-b from-bg via-bg/80 to-transparent z-10 pointer-events-none"></div>


                    <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 bg-gradient-to-t from-bg via-bg/80 to-transparent z-10 pointer-events-none"></div>
                </div>

                {/* Content Area sits on top of the image and scrolls */}
                <div
                    ref={contentRef}
                    className="absolute top-0 left-0 w-full z-10 flex flex-col items-center px-8 will-change-transform pt-[160px] md:pt-[240px]"
                >
                    <div className="w-full max-w-[1050px] mx-auto">

                        {/* HEADER RIBBON */}
                        <div className="relative w-full max-w-[650px] mx-auto mb-[40px] flex justify-center text-center">
                            <Image
                                src="/letterflag.png"
                                alt="Ribbon Header"
                                width={650}
                                height={200}
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center -mt-4">
                                <span className="text-[12px] font-canela tracking-[0.35em] uppercase text-brand">
                                    Our Global Mandate
                                </span>
                                <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-canela tracking-[0.08em] uppercase text-brand mt-2 leading-none">
                                    Why ZENCURA
                                </h2>
                            </div>
                        </div>

                        {/* CARDS WRAPPER */}
                        <div className="w-full space-y-16">

                            {/* CARD 1 */}
                            <div className="heritage-card relative p-[60px] max-w-[1050px] mx-auto flex gap-[60px] items-center">
                                {/* TEXT SIDE */}
                                <div className="w-[60%] space-y-6">
                                    <h3 className="font-canela text-[28px] text-brand">Preventive Healthcare</h3>

                                    <p className="font-source-serif text-[18px] text-main leading-[1.7]">
                                        Zencura was founded in response to a fundamental shift in the human condition.
                                        Healthcare systems are expanding lifespan but not vitality.
                                    </p>

                                    <ul className="grid grid-cols-2 gap-[12px] text-main font-source-serif">
                                        <li>❖ Preventive ecosystems</li>
                                        <li>❖ Integrative medicine</li>
                                        <li>❖ Environmental harmony</li>
                                        <li>❖ Global healthcare networks</li>
                                    </ul>
                                </div>

                                {/* IMAGE SIDE */}
                                <div className="w-[40%] flex justify-end">
                                    <div className="relative w-[320px] h-auto md:scale-[1.25]">
                                        {/* inner image layer ON TOP */}
                                        <div className="absolute top-[18%] left-[12%] w-[76%] h-[62%] overflow-hidden z-[30]">
                                            <Image
                                                src="/images/community.png"
                                                alt="Zencura vision"
                                                fill
                                                className="object-cover sepia-[0.25] contrast-[1.08] brightness-[1.05] saturate-[0.9]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#3a2a18]/50 via-transparent to-[#ffffff]/10 mix-blend-multiply z-[25] pointer-events-none" />
                                            <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none z-[25]" />
                                            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] md:shadow-[inset_0_0_35px_rgba(0,0,0,0.6)] z-[25] pointer-events-none" />
                                        </div>
                                        {/* FRAME AS BASE BACKGROUND */}
                                        <Image
                                            src="/photo.png"
                                            alt="frame"
                                            width={1368}
                                            height={1031}
                                            className="relative z-[20] w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] block pointer-events-none"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* CARD 2 */}
                            <div className="heritage-card relative p-[60px] max-w-[1050px] mx-auto flex gap-[60px] items-center">
                                {/* TEXT SIDE */}
                                <div className="w-[60%] space-y-6">
                                    <h3 className="font-canela text-[28px] text-brand">Integrated Medicine</h3>

                                    <p className="font-source-serif text-[18px] text-main leading-[1.7]">
                                        By merging classical medical wisdom with modern empirical validation,
                                        Zencura builds ecosystems that respect both biological systems and environmental balance.
                                    </p>

                                    <ul className="grid grid-cols-2 gap-[12px] text-main font-source-serif">
                                        <li>❖ Scientific validation</li>
                                        <li>❖ Traditional wisdom</li>
                                        <li>❖ Personal biology</li>
                                        <li>❖ Longevity design</li>
                                    </ul>
                                </div>

                                {/* IMAGE SIDE */}
                                <div className="w-[40%] flex justify-end">
                                    <div className="relative w-[320px] h-auto md:scale-[1.25]">
                                        {/* inner image layer ON TOP */}
                                        <div className="absolute top-[18%] left-[12%] w-[76%] h-[62%] overflow-hidden z-[30]">
                                            <Image
                                                src="/close-up-bowl-with-plants.jpg"
                                                alt="Zencura ecosystem"
                                                fill
                                                className="object-cover sepia-[0.25] contrast-[1.08] brightness-[1.05] saturate-[0.9]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-[#3a2a18]/50 via-transparent to-[#ffffff]/10 mix-blend-multiply z-[25] pointer-events-none" />
                                            <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-40 mix-blend-multiply pointer-events-none z-[25]" />
                                            <div className="absolute inset-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] md:shadow-[inset_0_0_35px_rgba(0,0,0,0.6)] z-[25] pointer-events-none" />
                                        </div>
                                        {/* FRAME AS BASE BACKGROUND */}
                                        <Image
                                            src="/photo.png"
                                            alt="frame"
                                            width={1368}
                                            height={1031}
                                            className="relative z-[20] w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] block pointer-events-none"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Separate mobile component for static display
function WhyZencuraMobile() {
    return (
        <section className="relative py-20 px-8 bg-bg md:hidden block">
            <MistyOverlay className="opacity-40 z-20 pointer-events-none" />
            <div className="space-y-12 relative z-30">
                <div className="relative h-[250px] rounded-[4px] overflow-hidden shadow-lg border border-motifs/15 bg-bg">
                    <Image
                        src="/leaf.jpg"
                        alt="Why Zencura"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-70 mix-blend-multiply saturate-[.6] sepia-[.4] contrast-[1.1]"
                        priority
                    />
                </div>

                <div className="bg-card p-10 rounded-[4px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-motifs/15">
                    <div className="space-y-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent block">
                            Our Global Mandate
                        </span>
                        <h2 className="text-3xl font-canela font-bold text-primary leading-tight uppercase">
                            Why ZENCURA?
                        </h2>
                        <div className="w-12 h-px bg-motifs/30" />
                        <div className="space-y-6">
                            <p className="text-base font-source-serif italic text-text-body/80 leading-relaxed font-light">
                                "Zencura was founded in response to a fundamental shift in the human condition. We exist to transform healthcare from reactive intervention to conscious, preventive living."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function WhyZencura() {
    return (
        <>
            <WhyZencuraDesktop />
            <WhyZencuraMobile />
        </>
    );
}
