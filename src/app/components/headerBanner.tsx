import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CountUp from "react-countup";

interface ParticleSystemProps {
    isMobile: boolean;
}

const HeaderBanner = () => {
    const push = (path: string) => {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
    };

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "15%" : "35%"]);

    const slides = [
        {
            title: "Transform Your School with",
            highlight: "Digital Excellence",
            desc: "Nigeria's most comprehensive school management platform",
            img: "/image/hub/6396891.png",
            tag: "Management"
        },
        {
            title: "Streamline Administration with",
            highlight: "Smart Automation",
            desc: "Automate attendance, fees, and report generation",
            img: "/image/hub/6382241.png",
            tag: "Automation"
        },
        {
            title: "Connect Teachers, Students &",
            highlight: "Parents Seamlessly",
            desc: "Real-time communication portal for better outcomes",
            img: "/image/hub/10522833.webp",
            tag: "Communication"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, isMobile ? 8000 : 6000);
        return () => clearInterval(interval);
    }, [isMobile, slides.length]);

    const textVariants = {
        enter: { y: 24, opacity: 0 },
        center: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
        exit: { y: -24, opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <>
            {/* Classic serif + geometric font stack */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

                .header-banner * { box-sizing: border-box; }

                .header-font { font-family: 'Playfair Display', Georgia, serif; }
                .body-font { font-family: 'DM Sans', sans-serif; }

                /* Classic dot-grid texture */
                .dot-grid {
                    background-image: radial-gradient(circle, #6c63ff22 1px, transparent 1px);
                    background-size: 28px 28px;
                }

                /* Cross-hatch accent lines */
                .rule-line {
                    height: 2px;
                    background: #6c63ff;
                }

                /* Classic stat card */
                .stat-card {
                    border: 1px solid rgba(108,99,255,0.25);
                    background: rgba(108,99,255,0.06);
                }

                /* Slide dots */
                .slide-dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .slide-dot.active {
                    background: #6c63ff;
                    width: 24px;
                    border-radius: 4px;
                }

                /* Corner bracket decorations */
                .bracket-tl::before, .bracket-tl::after,
                .bracket-br::before, .bracket-br::after {
                    content: '';
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    border-color: #6c63ff;
                    border-style: solid;
                }
                .bracket-tl::before { top: -4px; left: -4px; border-width: 2px 0 0 2px; }
                .bracket-tl::after  { top: -4px; right: -4px; border-width: 2px 2px 0 0; }
                .bracket-br::before { bottom: -4px; left: -4px; border-width: 0 0 2px 2px; }
                .bracket-br::after  { bottom: -4px; right: -4px; border-width: 0 2px 2px 0; }

                /* Classic separator ornament */
                .ornament {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: #6c63ff;
                    font-size: 10px;
                    letter-spacing: 0.3em;
                    text-transform: uppercase;
                }
                .ornament::before, .ornament::after {
                    content: '';
                    display: block;
                    width: 32px;
                    height: 1px;
                    background: #6c63ff;
                }

                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .shimmer-btn::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: rgba(255,255,255,0.15);
                    transform: translateX(-100%) skewX(-20deg);
                    transition: none;
                }
                .shimmer-btn:hover::after {
                    animation: shimmer 0.6s ease forwards;
                }
            `}</style>

            <header
                ref={containerRef}
                className="header-banner relative overflow-hidden min-h-screen bg-[#2f2e41] pt-20 lg:pt-0 body-font"
            >
                {/* Dot-grid texture overlay */}
                <div className="dot-grid absolute inset-0 opacity-100 pointer-events-none" />

                {/* Top horizontal rule */}
                <div className="absolute top-20 left-0 right-0 h-px bg-[#6c63ff]/20" />

                {/* Decorative vertical rule - left */}
                <div className="absolute top-0 left-[8%] w-px h-full bg-[#6c63ff]/10 hidden lg:block" />

                {/* Decorative vertical rule - right */}
                <div className="absolute top-0 right-[8%] w-px h-full bg-[#6c63ff]/10 hidden lg:block" />

                {/* Large background numeral */}
                <div
                    className="header-font absolute right-0 top-1/2 -translate-y-1/2 text-[28vw] font-black leading-none select-none pointer-events-none hidden lg:block"
                    style={{ color: 'rgba(108,99,255,0.04)', right: '-2vw' }}
                >
                    {String(currentSlide + 1).padStart(2, '0')}
                </div>

                <div className="relative container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center min-h-screen">

                    {/* Top tag row */}
                    <motion.div
                        className="pt-8 lg:pt-16 pb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="ornament body-font">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={slides[currentSlide].tag}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {slides[currentSlide].tag}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center flex-1">

                        {/* ── TEXT COLUMN ── */}
                        <motion.div
                            className="lg:col-span-6 xl:col-span-5 text-white space-y-7 z-10"
                            style={{ y: yText }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    variants={textVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    className="space-y-5"
                                >
                                    <h1 className="header-font text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                        <span className="block text-white/80 text-2xl md:text-3xl font-bold mb-1">
                                            {slides[currentSlide].title}
                                        </span>
                                        <span className="text-[#6c63ff]">
                                            {slides[currentSlide].highlight}
                                        </span>
                                    </h1>

                                    {/* Classic rule after title */}
                                    <div className="flex items-center gap-3">
                                        <div className="rule-line w-16" />
                                        <div className="w-2 h-2 bg-[#6c63ff] rotate-45 flex-shrink-0" />
                                        <div className="rule-line flex-1 max-w-[80px]" />
                                    </div>

                                    <p className="text-base md:text-lg text-white/65 max-w-md leading-relaxed">
                                        {slides[currentSlide].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-3 pt-2"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.7 }}
                            >
                                <a
                                    href="https://api.axiolot.com.ng/onboard/demo?track-id=AE_1B267-619C4-812CC46E-E281"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shimmer-btn relative overflow-hidden bg-[#6c63ff] text-white text-sm font-semibold tracking-widest rounded-lg uppercase py-3.5 px-8 transition-all duration-300 hover:bg-[#5a52e0] focus:outline-none focus:ring-2 focus:ring-[#6c63ff]/50 text-center"
                                >
                                    Request Demo
                                </a>
                                <button
                                    onClick={() => push('#services')}
                                    className="bg-transparent rounded-lg border border-white/25 hover:border-[#6c63ff] text-white text-sm font-semibold tracking-widest uppercase py-3.5 px-8 transition-all duration-300 hover:text-[#6c63ff] focus:outline-none"
                                >
                                    Explore Features
                                </button>
                            </motion.div>

                            {/* Slide navigation dots */}
                            <motion.div
                                className="flex items-center gap-2 pt-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`slide-dot ${i === currentSlide ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(i)}
                                        aria-label={`Slide ${i + 1}`}
                                    />
                                ))}
                                <span className="ml-3 text-white/30 text-xs tracking-widest body-font">
                                    {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* ── IMAGE COLUMN ── */}
                        <div className="lg:col-span-6 xl:col-span-7 hidden md:flex items-center justify-center lg:justify-end relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 0.94 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative bracket-tl bracket-br"
                                >
                                    {/* Classic frame */}
                                    <div className="absolute -inset-3 border border-[#6c63ff]/20" />
                                    <div className="absolute -inset-6 border border-[#6c63ff]/10" />

                                    <motion.div
                                        animate={{ y: [0, -12, 0] }}
                                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Image
                                            src={process.env.NEXT_PUBLIC_CDN + slides[currentSlide].img}
                                            alt={slides[currentSlide].title}
                                            width={1000}
                                            height={600}
                                            priority
                                            className="object-cover w-[380px] h-[380px] lg:w-[420px] lg:h-[420px]"
                                            style={{ filter: 'drop-shadow(0 20px 40px rgba(108,99,255,0.18))' }}
                                        />
                                    </motion.div>

                                    {/* Classic caption label */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#2f2e41] border-t border-[#6c63ff]/30 px-4 py-2">
                                        <span className="text-[10px] text-[#6c63ff] tracking-[0.25em] uppercase body-font font-medium">
                                            Axiolot — School Management
                                        </span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ── STATS BAR ── */}
                    <motion.div
                        className="w-full border-t border-[#6c63ff]/20 mt-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#6c63ff]/15">
                            {[
                                { value: 6, label: "Schools Onboarded", suffix: "+" },
                                { value: 12000, label: "Students Managed", suffix: "+" },
                                { value: 530000, label: "Reports Generated", suffix: "+" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-white px-6 lg:px-10 py-7 group"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.2 + index * 0.15 }}
                                >
                                    <div className="flex items-baseline gap-1 mb-1">
                                        <span className="header-font text-3xl lg:text-4xl font-black text-[#4dd9ac]">
                                            <CountUp end={stat.value} duration={2.5} separator="," />
                                        </span>
                                        <span className="text-[#4dd9ac] text-xl font-bold">{stat.suffix}</span>
                                    </div>
                                    <p className="text-white/45 text-xs tracking-widest uppercase">{stat.label}</p>
                                    {/* Bottom accent line animates on hover */}
                                    <div className="mt-4 h-px w-0 group-hover:w-full bg-[#6c63ff] transition-all duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Geometric corner ornament - top right */}
                <div className="absolute top-24 right-6 hidden lg:block opacity-20">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <rect x="1" y="1" width="78" height="78" stroke="#6c63ff" strokeWidth="1" />
                        <rect x="12" y="12" width="56" height="56" stroke="#6c63ff" strokeWidth="1" />
                        <line x1="1" y1="40" x2="79" y2="40" stroke="#6c63ff" strokeWidth="1" />
                        <line x1="40" y1="1" x2="40" y2="79" stroke="#6c63ff" strokeWidth="1" />
                        <circle cx="40" cy="40" r="8" stroke="#6c63ff" strokeWidth="1" />
                    </svg>
                </div>

                {/* Floating geometric shapes - no gradients */}
                {!isMobile && (
                    <>
                        <motion.div
                            className="absolute top-1/3 left-[7%] w-3 h-3 bg-[#6c63ff]/40 rotate-45"
                            animate={{ y: [0, 30, 0], rotate: [45, 90, 45] }}
                            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-1/3 right-[9%] w-5 h-5 border border-[#6c63ff]/30"
                            animate={{ y: [0, -40, 0], rotate: [0, 180, 0] }}
                            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute top-2/3 left-[12%] w-2 h-2 bg-[#4dd9ac]/40 rounded-full"
                            animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </>
                )}
            </header>
        </>
    );
};

const ParticleSystem = React.memo(({ isMobile }: ParticleSystemProps) => {
    const count = isMobile ? 3 : 5;
    return (
        <>
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${i % 3 === 0 ? 'bg-[#6c63ff]/15' : i % 3 === 1 ? 'bg-white/8' : 'bg-[#4dd9ac]/10'}`}
                    style={{
                        width: Math.random() * 6 + 3 + 'px',
                        height: Math.random() * 6 + 3 + 'px',
                        top: `${Math.random() * 70 + 15}%`,
                        left: `${Math.random() * 70 + 15}%`,
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * (isMobile ? 25 : 45)],
                        x: [0, (Math.random() - 0.5) * (isMobile ? 15 : 30)],
                        opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut'
                    }}
                />
            ))}
        </>
    );
});

ParticleSystem.displayName = 'ParticleSystem';

export default HeaderBanner;