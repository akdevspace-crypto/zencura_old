'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';

export const HeritageDivider = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("w-full h-12 relative flex items-center justify-center select-none pointer-events-none opacity-20", className)}>
        <img src="/title(4).png" alt="" className="h-full object-contain" />
    </div>
);

export const HeritageIcons = {
    Lotus: ({ className = "" }: { className?: string }) => (
        <svg viewBox="0 0 100 100" className={`w-12 h-12 text-brand/60 ${className}`} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Center petal */}
            <path d="M50 80 C 45 60, 40 30, 50 15 C 60 30, 55 60, 50 80" strokeWidth="1.2" />
            {/* Side petals */}
            <path d="M50 80 C 35 70, 20 50, 25 35 C 35 45, 45 60, 50 80" />
            <path d="M50 80 C 65 70, 80 50, 75 35 C 65 45, 55 60, 50 80" />
            {/* Lower side petals */}
            <path d="M50 80 C 30 80, 10 65, 15 50 C 25 65, 40 75, 50 80" />
            <path d="M50 80 C 70 80, 90 65, 85 50 C 75 65, 60 75, 50 80" />
            {/* Base swooping leaves */}
            <path d="M50 82 C 30 85, 10 75, 5 60 C 15 75, 35 80, 50 82" strokeWidth="1.2" />
            <path d="M50 82 C 70 85, 90 75, 95 60 C 85 75, 65 80, 50 82" strokeWidth="1.2" />
            {/* Sparkles/Stars */}
            <path d="M50 5 L50 9 M48 7 L52 7" strokeWidth="0.8" />
            <path d="M25 15 L25 19 M23 17 L27 17" strokeWidth="0.8" />
            <path d="M75 15 L75 19 M73 17 L77 17" strokeWidth="0.8" />
        </svg>
    ),
    Chakra: ({ className = "" }: { className?: string }) => (
        <svg viewBox="0 0 100 100" className={`w-12 h-12 text-brand/60 ${className}`} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="50" cy="50" r="18" />
            <circle cx="50" cy="50" r="22" strokeDasharray="2 3" />
            <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.2" />
            {/* Sun rays complex */}
            <path d="M50 20 L50 5 M50 80 L50 95 M20 50 L5 50 M80 50 L95 50" strokeWidth="1.5" />
            <path d="M28 28 L15 15 M72 72 L85 85 M72 28 L85 15 M28 72 L15 85" strokeWidth="1.2" />
            {/* Inner star geometric */}
            <path d="M50 32 L55 45 L68 50 L55 55 L50 68 L45 55 L32 50 L45 45 Z" />
            {/* Outer mini triangles */}
            <path d="M50 28 L47 22 L53 22 Z M50 72 L47 78 L53 78 Z M28 50 L22 47 L22 53 Z M72 50 L78 47 L78 53 Z" fill="currentColor" />
        </svg>
    ),
    TempleMandala: ({ className = "" }: { className?: string }) => (
        <svg viewBox="0 0 100 100" className={`w-12 h-12 text-brand/60 ${className}`} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Mortar & Pestle */}
            <path d="M40 70 C40 85, 50 90, 60 90 C70 90, 80 85, 80 70 L85 55 L35 55 Z" strokeWidth="1.2" />
            <ellipse cx="60" cy="55" rx="25" ry="6" />
            <path d="M55 55 L45 20 C43 15, 48 10, 52 15 L60 55" strokeWidth="1.5" />
            {/* Herbs / Leaves growing around */}
            <path d="M35 50 C 20 30, 10 40, 5 20 C 15 30, 25 20, 30 35" />
            <path d="M25 40 C 15 25, 20 15, 15 10 C 20 20, 25 15, 30 25" />
            <path d="M75 50 C 90 35, 85 20, 95 10 C 85 20, 75 15, 70 30" />
            <circle cx="20" cy="50" r="1.5" fill="currentColor" />
            <circle cx="30" cy="20" r="1.5" fill="currentColor" />
            <circle cx="85" cy="30" r="1.5" fill="currentColor" />
        </svg>
    ),
    KolamGeometry: ({ className = "" }: { className?: string }) => (
        <svg viewBox="0 0 100 100" className={`w-12 h-12 text-brand/60 ${className}`} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Globe */}
            <circle cx="50" cy="50" r="22" strokeWidth="1.2" />
            <ellipse cx="50" cy="50" rx="10" ry="22" />
            <path d="M28 50 L72 50" />
            <path d="M32 38 L68 38 M32 62 L68 62" strokeDasharray="4 2" />
            {/* Leafy branch encircling */}
            <path d="M30 80 C 10 70, 10 30, 30 20 C 50 10, 80 20, 90 50" strokeWidth="1.5" />
            {/* Leaves on the branch */}
            <path d="M30 80 C 20 85, 15 80, 20 75 Z" />
            <path d="M15 50 C 5 50, 5 40, 15 45 Z" />
            <path d="M25 25 C 20 15, 30 15, 35 25 Z" />
            <path d="M60 15 C 65 5, 75 10, 70 20 Z" />
            <path d="M85 30 C 95 25, 95 35, 85 40 Z" />
            {/* Extra branch */}
            <path d="M65 85 C 80 80, 90 65, 85 45" />
            <path d="M75 75 C 85 80, 90 70, 80 65 Z" />
        </svg>
    ),
    CardLeaves: ({ className = "" }: { className?: string }) => (
        <svg viewBox="0 0 200 50" className={`w-full h-full text-brand/60 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            {/* Left plant */}
            <path d="M80 40 C 60 30, 40 20, 20 30" strokeWidth="1.5" />
            <path d="M20 30 C 15 25, 25 20, 30 25 C 25 30, 15 25, 20 30 Z" />
            <path d="M40 25 C 30 15, 40 10, 45 20 C 40 25, 30 15, 40 25 Z" />
            <path d="M60 32 C 55 20, 65 15, 70 25 C 65 30, 55 20, 60 32 Z" />
            <path d="M30 35 C 25 45, 35 50, 40 40 C 35 35, 25 45, 30 35 Z" />
            <path d="M75 45 C 80 40, 85 45, 80 50 C 75 45, 80 40, 75 45 Z" fill="currentColor" />

            {/* Right plant */}
            <path d="M120 40 C 140 30, 160 20, 180 30" strokeWidth="1.5" />
            <path d="M180 30 C 185 25, 175 20, 170 25 C 175 30, 185 25, 180 30 Z" />
            <path d="M160 25 C 170 15, 160 10, 155 20 C 160 25, 170 15, 160 25 Z" />
            <path d="M140 32 C 145 20, 135 15, 130 25 C 135 30, 145 20, 140 32 Z" />
            <path d="M170 35 C 175 45, 165 50, 160 40 C 165 35, 175 45, 170 35 Z" />
            <path d="M125 45 C 120 40, 115 45, 120 50 C 125 45, 120 40, 125 45 Z" fill="currentColor" />
        </svg>
    )
};

export const VintageSeal = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`relative w-24 h-24 flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-brand/30 animate-[spin_80s_linear_infinite]">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3 3" fill="none" />
                <path d="M50 5 L55 45 L95 50 L55 55 L50 95 L45 55 L5 50 L45 45 Z" fill="currentColor" opacity="0.15" />
                <circle cx="50" cy="50" r="12" fill="none" stroke="currentColor" strokeWidth="0.3" />
            </svg>
        </div>
    );
};

export const CornerFlourish = ({ className = "" }: { className?: string }) => null;

export const BotanicalOrnament = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => null;

export const VerticalFiligree = ({ className = "" }: { className?: string }) => null;

export const HeaderFlourish = ({ className = "" }: { className?: string }) => null;

export const ElegantDivider = ({ className = "" }: { className?: string }) => null;

export const NilaiDivider = ({ className = "" }: { className?: string }) => (
    <div className={twMerge("w-full h-16 relative flex items-center justify-center select-none pointer-events-none opacity-30", className)}>
        <img src="/title(4).png" alt="" className="h-full object-contain rotate-180" />
    </div>
);

export const HeritageBackground = () => (
    <div className="fixed inset-0 pointer-events-none select-none z-[-1] overflow-hidden">
        <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: "url('/kolam.png')",
                backgroundSize: '300px 300px',
                backgroundRepeat: 'repeat',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg opacity-40" />
    </div>
);

export const NilaiBotanicalTexture = ({ className = "", style = {} }: { className?: string, style?: React.CSSProperties }) => {
    return (
        <div className={twMerge("w-64 h-64 pointer-events-none select-none", className)} style={style}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent opacity-[0.08]">
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.2" />
                <path d="M10,10 L90,90 M90,10 L10,90" stroke="currentColor" strokeWidth="0.1" />
                <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </svg>
        </div>
    );
};

export const FlowerDecoration = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => (
    <div className={twMerge("pointer-events-none select-none overflow-hidden", className)}>
        <img
            src="/flower.png"
            alt="Flower Decoration"
            className="w-full h-full object-contain mix-blend-multiply opacity-100 grayscale contrast-[1.1] brightness-90"
            style={{ opacity }}
        />
    </div>
);

export const CardCrest = ({ className = "" }: { className?: string }) => null;

export const ClassicalFiligree = HeritageDivider;
export const LeafPattern = BotanicalOrnament;
