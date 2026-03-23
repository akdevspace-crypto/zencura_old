'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { FlowerDecoration } from '@/components/ui/HeritageUI';
import Image from 'next/image';

const DividerLine = () => (
    <div className="flex items-center justify-center w-full my-6 opacity-60">
        <div className="w-16 md:w-32 h-[1px] bg-[#8b6a45]"></div>
        <div className="mx-3 flex items-center justify-center relative">
            <div className="w-1.5 h-1.5 rotate-45 border border-[#8b6a45] absolute"></div>
            <div className="w-0.5 h-0.5 bg-[#8b6a45] rotate-45"></div>
        </div>
        <div className="w-16 md:w-32 h-[1px] bg-[#8b6a45]"></div>
    </div>
);

export default function HeroSection() {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const containerRef = React.useRef<HTMLElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setHasScrolled((prev) => {
                // Instantly trigger, removing scroll dependency for better UX on load if requested
                // But the user previously wanted scroll interaction. For a hero, it's often better to just animate in. Let's make it more eager.
                if (latest > -1 && !prev) return true;
                return prev;
            });
        });

        // Failsafe auto-trigger after 1s
    }, [scrollY]);

    React.useEffect(() => {
        // Force animation to play even if user hasn't scrolled yet
        setHasScrolled(true);
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // Slow motion
        }
    }, []);

    const contentVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.25, 0.1, 0.25, 1],
                staggerChildren: 0.2, // Staggering effect
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" }
        }
    };

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 overflow-hidden bg-bg"
        >
            {/* Background Video layered behind vintage overlays */}
            <div
                className="absolute inset-0 z-0 overflow-hidden drop-shadow-[0_12px_20px_rgba(0,0,0,0.25)]"
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover opacity-100 mix-blend-multiply"
                    src="/Hero_section.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />



                {/* Sepia parchment overlay */}
                <div className="absolute inset-0 bg-section/40 mix-blend-multiply z-1"></div>
                <div className="absolute inset-0 bg-bg/60 mix-blend-screen z-1"></div>

            </div>

            {/* Corner Ornaments */}
            <div className="absolute top-[-3%] left-[-1.3%] w-32 md:w-48 xl:w-64 aspect-square z-10 pointer-events-none opacity-80 mix-blend-multiply">
                <Image src="/images/hero_corner_border.png" alt="corner ornament" fill className="object-contain object-top object-left" />
            </div>
            <div className="absolute top-[-3%] right-[-1.3%] w-32 md:w-48 xl:w-64 aspect-square z-10 pointer-events-none opacity-80 mix-blend-multiply scale-x-[-1]">
                <Image src="/images/hero_corner_border.png" alt="corner ornament" fill className="object-contain object-top object-left" />
            </div>
            <div className="absolute bottom-[-3%] left-[-1.3%] w-32 md:w-48 xl:w-64 aspect-square z-10 pointer-events-none opacity-80 mix-blend-multiply scale-y-[-1]">
                <Image src="/images/hero_corner_border.png" alt="corner ornament" fill className="object-contain object-top object-left" />
            </div>
            <div className="absolute bottom-[-3%] right-[-1.3%] w-32 md:w-48 xl:w-64 aspect-square z-10 pointer-events-none opacity-80 mix-blend-multiply scale-[-1]">
                <Image src="/images/hero_corner_border.png" alt="corner ornament" fill className="object-contain object-top object-left" />
            </div>

            {/* Botanical Decorations */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden max-w-[1920px] mx-auto relative">
                <FlowerDecoration className="absolute left-[-2%] top-[45%] -translate-y-1/2 w-[350px] md:w-[450px] opacity-90 mix-blend-multiply" />
                <FlowerDecoration className="absolute right-[-2%] top-[45%] -translate-y-1/2 w-[350px] md:w-[450px] rotate-180 opacity-90 mix-blend-multiply" />
            </div>

            {/* Main Editorial Content - Left Aligned */}
            <motion.div
                initial="hidden"
                animate={hasScrolled ? "visible" : "hidden"}
                variants={contentVariants}
                className="relative z-20 max-w-4xl flex flex-col items-center justify-center pt-24 pb-0"
            >
                {/* Small Decorative Label */}
                <motion.div variants={itemVariants} className="flex items-center gap-4 md:gap-6 mb-6">
                    <div className="w-12 md:w-24 h-[1px] bg-brand" />
                    <span className="text-[10px] md:text-[12px] tracking-[0.35em] uppercase text-brand font-semibold">
                        HEALTHCARE MUST EVOLVE
                    </span>
                    <div className="w-12 md:w-24 h-[1px] bg-brand" />
                </motion.div>

                {/* Large Serif Title */}
                <motion.h1 variants={itemVariants} className="font-canela text-[60px] md:text-[90px] lg:text-[120px] text-brand leading-[0.9] drop-shadow-sm tracking-tight">
                    ZENCURA
                </motion.h1>

                {/* Subtitle */}
                <motion.h2 variants={itemVariants} className="font-canela tracking-[0.1em] text-[18px] md:text-[26px] uppercase text-brand mt-4 mb-4 drop-shadow-sm">
                    THE FUTURE OF PREVENTIVE MEDICINE
                </motion.h2>

                <motion.div variants={itemVariants} className="w-full">
                    <DividerLine />
                </motion.div>

                {/* Quote Text */}
                <motion.p variants={itemVariants} className="max-w-3xl text-[20px] md:text-[26px] italic font-source-serif text-main leading-[1.6] drop-shadow-sm px-4">
                    Advances healthcare from reactive treatment to conscious, preventive living.
                </motion.p>

            </motion.div>

        </section>
    );
}
