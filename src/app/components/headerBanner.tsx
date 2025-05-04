import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import CountUp from "react-countup";

interface ParticleSystemProps {
    isMobile: boolean;
}

const HeaderBanner = () => {
    // const router = useRouter() || {};

    const push = (path: string) => {
        document.querySelector(path)?.scrollIntoView({ behavior: 'smooth' });
    }
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);

    // Mobile detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Parallax setup (reduced on mobile)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "20%" : "50%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "10%" : "20%"]);

    const slides = [
        {
            title: "Transform Your School with",
            highlight: "Digital Excellence",
            desc: "Nigeria's most comprehensive school management platform",
            img: "/image/hub/6396891.png",
            decor: "blue"
        },
        {
            title: "Streamline Administration with",
            highlight: "Smart Automation",
            desc: "Automate attendance, fees, and report generation",
            img: "/image/hub/6382241.png",
            decor: "purple"
        },
        {
            title: "Connect Teachers, Students &",
            highlight: "Parents Seamlessly",
            desc: "Real-time communication portal for better outcomes",
            img: "/image/hub/10522833.webp",
            decor: "pink"
        }
    ];

    // Trusted partners (add your actual client logos)
    const partners = [
        { name: "Mea Mater", logo: "/image/hub/partners/mea.png" },
        { name: "CIC Enugu", logo: "/image/hub/partners/cic.png" },
        { name: "Blossom International", logo: "/image/hub/partners/blossom" },
    ];

    // Enhanced clip-path with brand colors
    const clipPath = 'polygon(0 0, 100% 0, 100% 85%, 70% 95%, 0 85%)';

    // Mobile-optimized clip-path
    const mobileClipPath = 'polygon(0 0, 100% 0, 100% 90%, 50% 97%, 0 90%)';

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, isMobile ? 8000 : 6000); // Slower transitions on mobile 

        return () => clearInterval(interval);
    }, [isMobile, slides.length]);

    // Custom easing for animations
    const customEase = [0.6, -0.05, 0.01, 0.99];

    const textVariants = {
        enter: {
            y: 20,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        },
        center: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        },
        exit: {
            y: -20,
            opacity: 0,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <header
            ref={containerRef}
            className="relative overflow-hidden h-screen max-h-[1000px] bg-[#2f2e41]"
        >
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0"
                style={{
                    clipPath: isMobile ? mobileClipPath : clipPath,
                    y: yBg,
                    background: `linear-gradient(135deg, #2f2e41 0%, #1a1a2e 100%)`
                }}
            />

            {/* Animated Slides */}
            <AnimatePresence mode='wait'>
                {slides.map((slide, index) => (
                    currentSlide === index && (
                        <motion.div
                            key={index}
                            className="absolute inset-0"
                            style={{ clipPath: isMobile ? mobileClipPath : clipPath }}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                background: `linear-gradient(135deg, #2f2e41 0%, ${slide.decor === "blue"
                                    ? "#3a3a5d"
                                    : slide.decor === "purple"
                                        ? "#4a4568"
                                        : "#5a4a7a"
                                    } 100%)`,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: isMobile ? 2 : 1.5, ease: customEase }}
                        >
                            {/* Animated grid pattern */}
                            <motion.div
                                className="absolute inset-0 opacity-10"
                                initial={{ backgroundSize: "50px 50px" }}
                                animate={{
                                    backgroundSize: ["50px 50px", "55px 55px", "50px 50px"],
                                    backgroundImage: `linear-gradient(${slide.decor === "blue"
                                        ? "#3b82f6"
                                        : slide.decor === "purple"
                                            ? "#a855f7"
                                            : "#ec4899"
                                        } 1px, transparent 1px), linear-gradient(to right, ${slide.decor === "blue"
                                            ? "#3b82f6"
                                            : slide.decor === "purple"
                                                ? "#a855f7"
                                                : "#ec4899"
                                        } 1px, transparent 1px)`,
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                            />
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Text Content with Parallax */}
                    <motion.div
                        className="text-white space-y-6 z-10"
                        style={{ y: yText }}
                        key={currentSlide}
                        custom={currentSlide}
                        variants={textVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                    >
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: customEase }}
                        >
                            {slides[currentSlide].title} <br />
                            <span className="text-[#6c63ff] bg-clip-text bg-gradient-to-r from-[#6c63ff] to-[#a855f7]">
                                {slides[currentSlide].highlight}
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-xl opacity-90 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: customEase }}
                        >
                            {slides[currentSlide].desc}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8, ease: customEase }}
                        >
                            <button
                                onClick={() => push('#demo')}
                                className="bg-[#6c63ff] hover:bg-[#7b73ff] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#6c63ff] focus:ring-opacity-50"
                            >
                                Request Demo
                            </button>
                            <button
                                onClick={() => push('#features')}
                                className="bg-transparent hover:bg-white/10 border-2 border-white/30 hover:border-[#6c63ff] text-white py-3 px-8 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                            >
                                Explore Features
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Floating Screenshot with Enhanced Animation */}
                    <motion.div
                        className="relative z-10 hidden md:block"
                        initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: isMobile ? 0.5 : 0.8, duration: 1, ease: customEase }}
                    >
                        <motion.div
                            className="relative w-full max-w-lg mx-auto"
                            animate={{
                                y: [0, isMobile ? -10 : -20, 0],
                            }}
                            transition={{
                                duration: isMobile ? 8 : 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide} // Ensure key is tied to currentSlide
                                    initial={{ scale: 0.85, opacity: 0, rotate: -3 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        rotate: 0,
                                        boxShadow: "0 25px 50px -12px rgba(108, 99, 255, 0.3)",
                                    }}
                                    exit={{ scale: 0.8, opacity: 0, rotate: 3 }}
                                    transition={{
                                        duration: 1,
                                        ease: customEase,
                                    }}
                                    className="relative"
                                >
                                    <Image
                                        src={process.env.NEXT_PUBLIC_CDN + slides[currentSlide].img}
                                        alt={slides[currentSlide].title}
                                        width={1000}
                                        height={600}
                                        priority
                                        className="rounded-xl border-4 border-white/30 backdrop-blur-sm object-cover w-[400px] h-[400px] m-auto"
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Glow effect */}
                            <motion.div
                                className="absolute inset-0 -z-10 rounded-xl bg-[#6c63ff] opacity-0 blur-2xl"
                                animate={{
                                    opacity: [0, 0.2, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Counter */}
                <motion.div
                    className="w-full overflow-hidden mt-8 md:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <div className="relative py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#2f2e41] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#2f2e41] after:to-transparent rounded-xl backdrop-blur-md shadow-custom-1">
                        <motion.div
                            className="mt-4 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            {[
                                { value: 5, label: "Schools Onboarded" },
                                { value: 10000, label: "Students Managed" },
                                { value: 500000, label: "Reports Generated" },
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="text-white"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.4 + index * 0.2, duration: 0.8 }}
                                >
                                    <motion.h3
                                        className="text-3xl md:text-4xl font-bold text-teal-400"
                                        style={{
                                            textShadow: "0 0 10px rgba(108,99,255,0.7), 0 0 20px rgba(108,99,255,0.5)",
                                        }}
                                        animate={{
                                            textShadow: [
                                                "0 0 10px rgba(108,99,255,0.7), 0 0 20px rgba(108,99,255,0.5)",
                                                "0 0 15px rgba(108,99,255,0.9), 0 0 30px rgba(108,99,255,0.7)",
                                                "0 0 10px rgba(108,99,255,0.7), 0 0 20px rgba(108,99,255,0.5)",
                                            ],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <CountUp end={stat.value} duration={3} suffix="+" className="font-inter" />
                                    </motion.h3>
                                    <p className="text-sm md:text-base opacity-80 mt-2 font-satoshi">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Slide Indicators */}
            <motion.div
                className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center gap-2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[#6c63ff] w-6' : 'bg-white/30'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </motion.div>

            {/* Mobile-optimized floating elements (fewer particles) */}
            {!isMobile && (
                <>
                    <motion.div
                        className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-[#6c63ff]/30"
                        animate={{
                            y: [0, 40, 0],
                            x: [0, 20, 0],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />

                    <motion.div
                        className="absolute bottom-1/3 right-20 w-10 h-10 rounded-full bg-[#6c63ff]/20"
                        animate={{
                            y: [0, -60, 0],
                            scale: [1, 1.4, 1]
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </>
            )}

            {/* Performance-optimized floating particles */}
            <ParticleSystem isMobile={isMobile} />
        </header>
    );
};

// Optimized particle component (prevents unnecessary re-renders)
const ParticleSystem = React.memo(({ isMobile }: ParticleSystemProps) => {
    const count = isMobile ? 3 : 6;

    return (
        <>
            {[...Array(count)].map((_, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${i % 2 === 0 ? 'bg-[#6c63ff]/20' : 'bg-white/10'} rounded-full`}
                    style={{
                        width: Math.random() * 10 + 5 + 'px',
                        height: Math.random() * 10 + 5 + 'px',
                        top: `${Math.random() * 80 + 10}%`,
                        left: `${Math.random() * 80 + 10}%`,
                    }}
                    animate={{
                        y: [0, (Math.random() - 0.5) * (isMobile ? 30 : 60)],
                        x: [0, (Math.random() - 0.5) * (isMobile ? 20 : 40)],
                        opacity: [0.3, 0.7, 0.3]
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