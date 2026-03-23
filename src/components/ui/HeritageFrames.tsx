'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const OrnateBorder = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={twMerge("relative p-10 rounded-[20px] border-2 border-brand/5 bg-bg/50 overflow-hidden", className)}>
            <div className="absolute inset-2 border border-brand/10 pointer-events-none" />
            <div className="absolute inset-4 border border-brand/5 pointer-events-none" />
            {children}
        </div>
    );
};

export const HeritageTitleUnderline = ({ className = "", inverted = false }: { className?: string, inverted?: boolean }) => (
    <div className={twMerge(
        "w-full h-14 max-w-[900px] relative opacity-90 grayscale contrast-125 overflow-visible z-10",
        inverted ? "mix-blend-lighten" : "mix-blend-multiply",
        className
    )}>
        <Image
            src="/title(4).png"
            alt="Heritage Underline"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={twMerge(
                "object-contain scale-y-[0.7] scale-x-[1.2] opacity-100",
                inverted && "invert brightness-0"
            )}
            priority
        />
    </div>
);

export const HeritageCardFrame = ({
    children,
    className = "",
    motifInset = "-inset-16",
    motifScale = "scale-100",
    motifOpacity = "opacity-[0.18]",
    motifBrightness = "",
    overlay = false
}: {
    children: React.ReactNode,
    className?: string,
    motifInset?: string,
    motifScale?: string,
    motifOpacity?: string,
    motifBrightness?: string,
    overlay?: boolean
}) => {
    return (
        <div className={twMerge("relative", className)}>
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
            <div className={twMerge(
                "absolute pointer-events-none select-none overflow-visible",
                motifInset,
                overlay ? "z-20" : "z-0"
            )}>
                <div className={twMerge("relative w-full h-full transition-transform duration-1000", motifScale)}>
                    <Image
                        src="/frame2.png"
                        alt="Card Frame"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={twMerge("object-contain mix-blend-multiply grayscale contrast-[1.1] brightness-90", motifOpacity, motifBrightness)}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export const HeritageCircleFrame = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={twMerge("relative aspect-square w-full max-w-[650px] mx-auto", className)}>

            {/* ROTATING GROUP (one transform origin) */}
            <motion.div
                className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center"
                style={{ transformOrigin: "50% 50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {/* Optical offset INSIDE rotation */}
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{
                        transform: "translate(10px, -10px)", // 🔥 micro-tune: 6–10px range
                        willChange: "transform",
                    }}
                >
                    <Image
                        src="/circleframe.png"
                        alt="Decorative Circle Frame"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-contain grayscale contrast-110 brightness-90 opacity-70"
                        draggable={false}
                    />
                </div>
            </motion.div>

            {/* Masked Content */}
            <svg
                viewBox="0 0 1000 1000"
                className="absolute inset-0 w-full h-full z-20"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    {/* 🔥 This circle must match the real hole of your frame */}
                    <clipPath id="frameHole">
                        <circle cx="500" cy="500" r="385" />
                    </clipPath>
                </defs>

                <foreignObject
                    x="0"
                    y="0"
                    width="1000"
                    height="1000"
                    clipPath="url(#frameHole)"
                >
                    <div className="w-full h-full rounded-full overflow-hidden">
                        {children}
                    </div>
                </foreignObject>
            </svg>

            {/* Inner ring for realism */}
            <div className="absolute inset-[10%] rounded-full border border-brand/20 z-40 pointer-events-none" />
        </div>
    );
};

export const HeritageSectionBorder = ({
    className = "",
    variant = 1,
}: {
    className?: string;
    variant?: 1 | 2 | 3;
}) => {
    const src = `/title(${variant}).png`;
    return (
        <div className={twMerge("w-full h-20 relative opacity-20 mix-blend-multiply grayscale contrast-125 overflow-visible", className)}>
            <Image
                src={src}
                alt={`Heritage Section Border ${variant}`}
                fill
                className="object-contain opacity-80 scale-x-105"
            />
        </div>
    );
};

export const HeritageDoubleFrame = ({
    children,
    className = "",
}: {
    children: React.ReactNode,
    className?: string,
}) => {
    return (
        <div className={twMerge("relative group transition-all duration-700 rounded-[32px] overflow-hidden", className)}>
            <div className="relative z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
};

export const HeritageDoubleBorder = ({ className = "" }: { className?: string }) => {
    return <div className={twMerge("w-0 h-0", className)} />;
};
