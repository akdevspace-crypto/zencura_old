'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function MissingFoundation() {
    const points = [
        "Humanity is extending its lifespan across continents and cultures. Yet vitality, resilience, and clarity are quietly eroding.",
        "Healthcare systems have evolved into specialties and silos. But the human body has never ceased to function as one integrated whole.",
        "What if the next evolution of medicine is not greater reaction but deeper prevention?",
        "What if health is not restored in hospitals, but sustained in daily living?"
    ];

    return (
        <section className="relative bg-bg py-24 flex justify-center items-center overflow-hidden min-h-screen">
            {/* The primary relative wrapper that locks physical dimensions to the scroll img */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative w-[92vw] max-w-[1700px] aspect-[1.12] xl:aspect-[1.25] mx-auto flex items-center justify-center z-20"
            >


                {/* 2. ABSOLUTE CONTENT OVERLAY */}
                {/* Because the wrapper takes the exact width/height of the Image above, 
                    using % bounds keeps everything perfectly seated relative to the ribbon and page edges! */}
                <div className="absolute inset-0 w-full h-full text-center">

                    {/* Ribbon Title */}
                    <motion.div
                        className="absolute flex justify-start items-center text-left px-2 sm:px-4 md:px-0"
                        style={{ top: '8%', left: '8%' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >

                        <h2 className="relative z-1 font-canela text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[68px] text-brand leading-[1.1] md:leading-[1.05]">
                            <div className="flex items-center">
                                <div className="w-[30px] sm:w-[40px] md:w-[50px] lg:w-[60px] xl:w-[80px] h-[1.5px] sm:h-[2px] lg:h-[3px] bg-brand mr-[12px] sm:mr-[16px] md:mr-[20px] lg:mr-[24px] xl:mr-[28px]"></div>
                                <span>The Missing Foundation</span>
                            </div>
                        </h2>
                    </motion.div>

                    {/* LEFT COLUMN: Text Content */}
                    <div
                        className="absolute flex flex-col items-start px-2 sm:px-4 md:px-0"
                        style={{ top: '25%', left: '15%', width: '38%' }}
                    >
                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="text-main italic font-source-serif text-[15px] sm:text-[18px] md:text-[22px] lg:text-[26px] xl:text-[32px] leading-relaxed mb-8 sm:mb-8 md:mb-12 text-left"
                        >
                            Modern medicine has mastered the science of fighting disease. <br />
                            Yet prevention remains the missing foundation.
                        </motion.p>

                        {/* Bullet Points */}
                        <ul className="space-y-4 md:space-y-6 lg:space-y-8 text-main/90 font-source-serif text-[13px] md:text-[17px] lg:text-[20px] xl:text-[24px] leading-[1.8] text-left">
                            {points.map((p, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-start gap-3 md:gap-5 lg:gap-6"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 + i * 0.15, duration: 0.6 }}
                                >
                                    <div className="mt-[4px] md:mt-[8px] lg:mt-[10px] w-[20px] md:w-[24px] lg:w-[32px] flex-shrink-0 flex items-center justify-center opacity-80">
                                        <img src="/pen.png" alt="Point" className="w-full h-auto object-contain rotate-[-45deg]" />
                                    </div>
                                    <span className="leading-[1.6] md:leading-[1.7] lg:leading-[1.9] opacity-90">{p}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT COLUMN: Photo Frame */}
                    <div
                        className="absolute flex justify-center items-start"
                        style={{ top: '28%', right: '11%', width: '31%' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="relative w-full"
                        >
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    duration: 6,
                                    ease: "easeInOut",
                                    repeat: Infinity
                                }}
                                className="relative w-full -rotate-2"
                            >
                                {/* Physical Polaroid-style Photo Frame */}
                                <div className="absolute top-[22%] left-[34%] w-[52%] h-[48%] z-[30] bg-[#fbf9f4] p-[3%] pb-[8%] shadow-[0_12px_35px_rgba(0,0,0,0.35)] rotate-[4deg] rounded-sm">
                                    <div className="relative w-full h-full overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.2)]">
                                        <Image
                                            src="/images/community.png"
                                            alt="Heritage Photo"
                                            fill
                                            sizes="(max-width: 768px) 80vw, 500px"
                                            className="object-cover sepia-[0.35] contrast-[1.1] brightness-[1.05] saturate-[0.8]"
                                        />
                                        {/* Inner realistic shadows/overlays */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-[#3a2a18]/40 via-transparent to-[#ffffff]/10 mix-blend-multiply z-[25] pointer-events-none" />
                                        <div className="absolute inset-0 bg-[url('/testimonial/paper-texture.png')] opacity-30 mix-blend-multiply pointer-events-none z-[25]" />
                                    </div>
                                </div>

                                {/* Front Frame Overlay */}
                                <Image
                                    src="/photo(2).png"
                                    alt="heritage protective frame border"
                                    width={1368}
                                    height={1031}
                                    className="relative z-[20] w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] block pointer-events-none"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>

            {/* 3. BOTTOM RIGHT DECOR ELEMENT (Inkwell) */}
            <div className="absolute bottom-[-8%] right-[-6%] w-[35rem] h-[35rem] lg:w-[45rem] lg:h-[45rem] pointer-events-none z-40 flex justify-end items-end overflow-visible">
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    className="w-full h-full relative"
                >
                    <Image
                        src="/inkwell_transparent.png"
                        alt="Vintage Inkwell Decor"
                        fill
                        className="object-contain object-bottom sepia-[0.25] contrast-[1.08] brightness-[1.05] saturate-[0.9]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
