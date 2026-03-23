'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { HeritageIcons, NilaiDivider } from './HeritageOrnaments';
import { HeritageTitleUnderline } from './HeritageFrames';

export const MistyOverlay = ({ className = "" }: { className?: string }) => {
    const id = React.useId();
    return (
        <div className={`absolute inset-0 pointer-events-none z-10 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg/20 to-bg/80" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_70%)] animate-pulse" />
            </div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.4),transparent_80%)]" />
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.2),transparent_80%)]" />
            </div>
        </div>
    );
};

export const InstitutionalStamp = ({ text = "AUTHENTIC SCIENCE • ZENCURA", className = "" }: { text?: string, className?: string }) => {
    const id = React.useId();
    return (
        <div className={`relative w-40 h-40 flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-brand/20 animate-[spin_40s_linear_infinite]">
                <defs>
                    <path id={`circlePath-${id}`} d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
                </defs>
                <text className="text-[10px] font-bold tracking-[0.2em] uppercase fill-current">
                    <textPath xlinkHref={`#circlePath-${id}`}>{text}</textPath>
                </text>
            </svg>
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
                <HeritageIcons.Lotus />
            </div>
        </div>
    );
};

export const NilaiSectionHeader = ({ title, subtitle, className = "", inverted = false }: { title: string, subtitle?: string, className?: string, inverted?: boolean }) => {
    return (
        <div className={twMerge("flex flex-col items-center text-center space-y-4 mb-20", className)}>
            <NilaiDivider className={twMerge("opacity-40", inverted && "invert brightness-0")} />
            <div className="space-y-2 flex flex-col w-full inherit-alignment">
                {subtitle && (
                    <span className={twMerge(
                        "text-[11px] font-bold uppercase block mb-2",
                        inverted ? "text-bg/40" : "text-brand/30"
                    )}>
                        {subtitle}
                    </span>
                )}
                <h2 className={twMerge(
                    "text-4xl md:text-5xl font-canela font-bold leading-tight uppercase",
                    inverted ? "!text-bg" : "!text-brand"
                )}>
                    {title}
                </h2>
                <HeritageTitleUnderline className={twMerge("opacity-30", inverted && "opacity-20")} inverted={inverted} />
            </div>
            <style jsx>{`
                .inherit-alignment {
                    align-items: inherit;
                    text-align: inherit;
                }
            `}</style>
        </div>
    );
};

export const PageFrame = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <div className="absolute inset-8 border border-brand/5 rounded-[32px]" />
        </div>
    );
};

export const HeritageDesignAccent = ({ className = "" }: { className?: string }) => {
    return null;
};
