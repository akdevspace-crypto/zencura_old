'use client';

import { motion } from 'framer-motion';

export const BotanicalPattern = ({ className = "", opacity = 0.05 }: { className?: string, opacity?: number }) => {
    return (
        <div className={`pointer-events-none select-none overflow-hidden ${className}`} style={{ opacity }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                className="text-brand"
            >
                <defs>
                    <pattern id="botanical-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path
                            d="M20 5C20 5 22 15 35 15C22 15 20 25 20 25C20 25 18 15 5 15C18 15 20 5 20 5Z"
                            stroke="currentColor"
                            strokeWidth="0.5"
                        />
                        <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="0.5" />
                        <path
                            d="M5 5Q10 0 15 5T25 5"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            fill="none"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#botanical-pattern)" />
            </svg>
        </div>
    );
};

export const OrganicBorder = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="text-secondary/20">
                <path
                    d="M10,10 Q50,0 90,10 Q100,50 90,90 Q50,100 10,90 Q0,50 10,10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="2 2"
                />
            </svg>
        </div>
    )
}
