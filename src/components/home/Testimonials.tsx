'use client';

import React, { useState, useCallback, useEffect, useRef, forwardRef } from "react";
// @ts-ignore
import HTMLFlipBook from "react-pageflip";

const testimonials = [
    {
        name: "Dr. Meera Iyer",
        role: "Consultant Physician",
        image: "https://i.pravatar.cc/150?img=32",
        quote: "Zencura institutionalizes prevention — not as theory, but as structured clinical practice.",
        rating: 5,
        clippingStyle: "rotate-1 translate-x-1"
    },
    {
        name: "Arjun Narayanan",
        role: "Metabolic Health Program Member",
        image: "https://i.pravatar.cc/150?img=12",
        quote: "My health is now managed as a system — not a collection of symptoms.",
        rating: 5,
        clippingStyle: "-rotate-2 -translate-y-2"
    },
    {
        name: "Lakshmi Raman",
        role: "Community Health Volunteer",
        image: "https://i.pravatar.cc/150?img=47",
        quote: "Zencura brings institutional healthcare into the heart of the community.",
        rating: 5,
        clippingStyle: "rotate-2 translate-y-1"
    },
    {
        name: "Dr. Ravi Subramanian",
        role: "Cardiologist",
        image: "https://i.pravatar.cc/150?img=68",
        quote: "Prevention elevated to institutional science.",
        rating: 5,
        clippingStyle: "-rotate-1 -translate-x-2"
    },
    {
        name: "Nandita Krishnan",
        role: "Environmental Design Consultant",
        image: "https://i.pravatar.cc/150?img=5",
        quote: "Health designed for both the body and the environment.",
        rating: 5,
        clippingStyle: "rotate-3 translate-x-2"
    }
];

const PageLayout = forwardRef<HTMLDivElement, { item: any, pageNumber: number, side?: "left" | "right" }>(({ item, pageNumber, side = "right" }, ref) => (
    <div className={`page relative w-full h-full flex flex-col bg-bg group overflow-hidden`} ref={ref}>
        {/* Physical Texture Layers */}
        <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] bg-repeat opacity-70 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[url('/testimonial/ink-stains.png')] bg-cover opacity-25 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none bg-[url('/testimonial/paper-grain.png')]" />

        {/* Torn Edge Mask Overlay */}
        <div className="absolute inset-0 pointer-events-none torn-edge bg-black/5" />

        {/* Content Area */}
        <div className={`relative z-10 flex-1 p-12 flex flex-col items-center justify-center text-center overflow-hidden ${side === "left" ? "pr-16" : "pl-16"}`}>
            {/* Profile Clipping (Taped/Collage style) */}
            <div className={`relative mb-10 ${item.clippingStyle} transition-transform duration-500`}>
                {/* Tape Top */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/40 border border-black/5 rotate-2 z-20 shadow-sm backdrop-blur-[1px]" />

                {/* Clipping Frame */}
                <div
                    className="relative w-36 h-36 p-2 photo-frame"
                    style={{
                        background: 'var(--bg)',
                        boxShadow: '0 4px 10px rgba(0,0,0,.3), inset 0 0 2px rgba(0,0,0,.25)'
                    }}
                >
                    <img
                        src={item.image}
                        className="w-full h-full object-cover filter sepia-[0.4] contrast-[1.1]"
                        alt={item.name}
                    />
                </div>

                {/* Tape Corner */}
                <div className="absolute -bottom-2 -right-4 w-12 h-5 bg-white/30 border border-black/5 -rotate-12 z-20 shadow-sm backdrop-blur-[1px]" />
            </div>

            <div className="space-y-6 max-w-[90%] mx-auto">
                <h3 className="text-4xl font-olivera text-brand leading-none mb-1 transition-colors">
                    {item.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent font-manrope">
                    {item.role}
                </p>

                <div className="w-16 h-px bg-brand/20 mx-auto" />

                <p
                    className="text-3xl font-source-serif italic text-brand/80 leading-relaxed leading-[1.6]"
                    style={{ textShadow: "0 0 .3px rgba(0,0,0,.25), 0 0 .6px rgba(0,0,0,.1)" }}
                >
                    “{item.quote}”
                </p>

                <div className="flex gap-1.5 text-accent/60 justify-center">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-xl ${i < item.rating ? "" : "opacity-20"}`}>★</span>
                    ))}
                </div>
            </div>

            <div className={`absolute bottom-8 ${side === "left" ? "left-8" : "right-8"} text-[11px] font-manrope font-black opacity-10 uppercase tracking-[0.2em] transform ${side === "left" ? "-rotate-90 origin-bottom-left" : "rotate-90 origin-bottom-right"}`}>
                Entry ID: {pageNumber.toString().padStart(4, '0')}
            </div>
        </div>

        {/* Spine Fold Center Gutter */}
        <div className={`absolute top-0 bottom-0 w-20 z-20 pointer-events-none ${side === "left"
            ? "right-[-8px] bg-[radial-gradient(ellipse_at_right,rgba(0,0,0,0.25),transparent_70%)]"
            : "left-[-8px] bg-[radial-gradient(ellipse_at_left,rgba(0,0,0,0.25),transparent_70%)]"
            }`} />

        {/* Page Shadow for stack depth */}
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10" />
    </div>
));
PageLayout.displayName = "PageLayout";

export default function DeepPhysicalScrapbook() {
    const bookRef = useRef<any>(null);
    const flippingRef = useRef(false);

    const handleNext = useCallback(() => {
        if (flippingRef.current) return;
        flippingRef.current = true;

        if (bookRef.current && bookRef.current.pageFlip()) {
            bookRef.current.pageFlip().flipNext();
        }

        setTimeout(() => {
            flippingRef.current = false;
        }, 900);
    }, []);

    const handlePrev = useCallback(() => {
        if (flippingRef.current) return;
        flippingRef.current = true;

        if (bookRef.current && bookRef.current.pageFlip()) {
            bookRef.current.pageFlip().flipPrev();
        }

        setTimeout(() => {
            flippingRef.current = false;
        }, 900);
    }, []);

    // Create a flat array of concrete React elements (no fragments, no nulls)
    // react-pageflip will crash with "parameter 1 is not of type 'Node'" if it encounters nulls.
    const flipbookPages = [];
    for (let i = 0; i < testimonials.length; i += 2) {
        // Left Page
        flipbookPages.push(
            <PageLayout
                key={`page-${i}`}
                item={testimonials[i]}
                pageNumber={i + 1}
                side="left"
            />
        );

        // Right Page
        if (testimonials[i + 1]) {
            flipbookPages.push(
                <PageLayout
                    key={`page-${i + 1}`}
                    item={testimonials[i + 1]}
                    pageNumber={i + 2}
                    side="right"
                />
            );
        } else {
            // Add a concrete blank page so it doesn't break the spread calculation or pass ref to null
            flipbookPages.push(
                <div key={`page-${i + 1}-blank`} className="page relative w-full h-full bg-bg overflow-hidden flex flex-col items-center justify-center pointer-events-none">
                    <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] bg-repeat opacity-70 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none bg-[url('/testimonial/paper-grain.png')]" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none" />
                </div>
            );
        }
    }

    return (
        <section className="py-24 flex flex-col items-center bg-bg overflow-hidden min-h-screen">


            {/* Header Clipping Style */}
            <div className="text-center mb-16 relative">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-12 bg-brand/5 blur-3xl rounded-full" />
                <span className="text-[12px] font-bold uppercase tracking-[0.5em] text-accent block mb-2">
                    Historical Archives
                </span>
                <h2 className="text-5xl md:text-7xl font-olivera text-brand uppercase tracking-tighter">
                    Testimonials
                </h2>
            </div>

            {/* THE OPEN BOOK WRAPPER */}
            <div
                className="relative perspective-[2000px] z-10 flex justify-center items-center mt-10"
            >
                {/* REPOSITIONED DECORATIVE KNOT (Completely behind the entire physical object) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-10] scale-[2.8] opacity-60 drop-shadow-[0_25px_45px_rgba(0,0,0,0.85)] blur-[0.4px] pointer-events-none">
                    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="ropePatternBrownKnot" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                <rect width="4" height="8" fill="rgba(0,0,0,0.3)" />
                                <rect x="4" y="0" width="4" height="8" fill="rgba(255,255,255,0.05)" />
                            </pattern>
                        </defs>
                        {/* Left Loop */}
                        <path d="M40 25C30 15 10 15 5 25C10 35 30 35 40 25Z" fill="#5c4033" stroke="#3d2a21" strokeWidth="2.5" />
                        <path d="M40 25C30 15 10 15 5 25C10 35 30 35 40 25Z" fill="url(#ropePatternBrownKnot)" />
                        {/* Right Loop */}
                        <path d="M40 25C50 15 70 15 75 25C70 35 50 35 40 25Z" fill="#5c4033" stroke="#3d2a21" strokeWidth="2.5" />
                        <path d="M40 25C50 15 70 15 75 25C70 35 50 35 40 25Z" fill="url(#ropePatternBrownKnot)" />
                        {/* Central Knot */}
                        <circle cx="40" cy="25" r="7.5" fill="#3d2a21" />
                        <circle cx="40" cy="25" r="4.5" fill="#5c4033" opacity="0.7" />
                        {/* Rope Ends */}
                        <path d="M38 28C30 48 20 52 12 45" stroke="#5c4033" strokeWidth="4.5" strokeLinecap="round" />
                        <path d="M38 28C30 48 20 52 12 45" stroke="url(#ropePatternBrownKnot)" strokeWidth="4.5" strokeLinecap="round" opacity="0.6" />
                        <path d="M42 28C50 48 60 52 68 45" stroke="#5c4033" strokeWidth="4.5" strokeLinecap="round" />
                        <path d="M42 28C50 48 60 52 68 45" stroke="url(#ropePatternBrownKnot)" strokeWidth="4.5" strokeLinecap="round" opacity="0.6" />
                    </svg>
                </div>

                {/* THE BOOK STACK (Simulating Physical Depth) */}
                <div className="book-stack absolute inset-0 z-[-1]" />

                {/* SHADOW UNDER THE BOOK */}
                <div className="absolute -bottom-10 left-10 right-10 h-20 bg-black/25 blur-[65px] rounded-[18px] pointer-events-none z-[-2]" />

                {/* MAIN OPEN BOOK */}
                <div className="relative z-10 group/book">
                    {/* Hover Zones Removed */}

                    {/* @ts-ignore */}
                    <HTMLFlipBook
                        width={550}
                        height={660}
                        size="fixed"
                        minWidth={550}
                        maxWidth={550}
                        minHeight={660}
                        maxHeight={660}
                        drawShadow={true}
                        flippingTime={900}
                        usePortrait={false}
                        startPage={0}
                        showCover={false}
                        mobileScrollSupport={false}
                        maxShadowOpacity={0.35}
                        useMouseEvents={true} /* Enabled native mouse events for realistic drag-to-flip */
                        swipeDistance={30}
                        clickEventForward={false}
                        ref={bookRef}
                        className="shadow-[0_50px_100px_rgba(0,0,0,0.35)] rounded-[18px]"
                    >
                        {flipbookPages}
                    </HTMLFlipBook>
                </div>

                {/* HANDCRAFTED REALISTIC BROWN ROPE BINDING */}
                <div className="pointer-events-none absolute inset-y-0 left-1/2 z-5 -translate-x-1/2 w-[60px] flex flex-col items-center justify-around py-8">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="relative w-full h-8 flex items-center justify-between px-2">
                            {/* Punch Hole Left */}
                            <div className="w-2.5 h-2.5 bg-[#422e24] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.95)] border-t border-white/5" />

                            {/* Realistic Brown Rope Stitch */}
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[6px] bg-[#5c4033] shadow-[0_3px_5px_rgba(0,0,0,0.55)] rounded-full overflow-hidden rope-texture">
                                <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-black/35 opacity-70" />
                                <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]" />
                            </div>

                            {/* Punch Hole Right */}
                            <div className="w-2.5 h-2.5 bg-[#422e24] rounded-full shadow-[inset_0_1px_3px_rgba(0,0,0,0.95)] border-t border-white/5" />
                        </div>
                    ))}
                </div>

                {/* NAVIGATION CONTROLS REMOVED */}
            </div>


            <style jsx global>{`
                .torn-edge {
                    -webkit-mask-image: url('/testimonial/torn-mask.png');
                    mask-image: url('/testimonial/torn-mask.png');
                    -webkit-mask-size: 100% 100%;
                    mask-size: 100% 100%;
                }

                .rope-texture {
                    background-image: repeating-linear-gradient(
                        45deg,
                        rgba(255, 255, 255, 0.08) 0px,
                        rgba(255, 255, 255, 0.08) 1px,
                        transparent 1px,
                        transparent 3px,
                        rgba(0, 0, 0, 0.3) 3px,
                        rgba(0, 0, 0, 0.3) 4px,
                        transparent 4px,
                        transparent 6px
                    );
                    background-size: 8px 8px;
                }

                .book-stack {
                    border-radius: 18px;
                    pointer-events: none;
                }

                /* bottom thickness */
                .book-stack::after {
                    content: "";
                    position: absolute;
                    left: 8px;
                    right: 8px;
                    bottom: -18px;
                    height: 30px;
                    background: linear-gradient(
                        to bottom,
                        #d1b78d,
                        #9e7d4f
                    );
                    border-radius: 0 0 18px 18px;
                    box-shadow:
                        0 25px 45px rgba(0,0,0,.45),
                        inset 0 6px 10px rgba(255,255,255,.3);
                }

                /* top paper edge brightness */
                .book-stack::before {
                    content: "";
                    position: absolute;
                    left: 10px;
                    right: 10px;
                    top: -8px;
                    height: 12px;
                    background: linear-gradient(
                        to bottom,
                        rgba(255,255,255,0.7),
                        rgba(255,255,255,0)
                    );
                    border-radius: 18px;
                }

                .page {
                    box-shadow:
                        inset 0 0 0 1px rgba(0,0,0,0.08),
                        inset 0 -12px 20px rgba(0,0,0,0.22);
                    background:
                        linear-gradient(
                            to bottom,
                            rgba(255,255,255,.12),
                            rgba(0,0,0,.08)
                        ),
                        #f5f2eb !important;
                    transform: perspective(2000px) rotateX(.3deg);
                    mask-image: url('/testimonial/page-edge-mask.png');
                    mask-size: 100% 100%;
                    -webkit-mask-image: url('/testimonial/page-edge-mask.png');
                    -webkit-mask-size: 100% 100%;
                }

                .page::before {
                    content: "";
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    right: 0;
                    height: 8px;
                    background: linear-gradient(
                        to bottom,
                        #d8c6a0,
                        #b79b6c
                    );
                    border-radius: 0 0 8px 8px;
                    filter: blur(0.4px);
                    opacity: .85;
                }

                .page::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    pointer-events: none;
                    background:
                        linear-gradient(to right, rgba(0,0,0,.15), transparent 80%),
                        linear-gradient(to left, rgba(0,0,0,.12), transparent 80%);
                    mix-blend-mode: multiply;
                    opacity: .35;
                }
            `}</style>
        </section>
    );
}
