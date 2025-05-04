import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Testimonial {
    id: number;
    quote: string;
    name: string;
    office: string;
    workPlace: string;
    image: string;
}

interface TestimonialCardSwipeProps {
    testimonials?: Testimonial[];
    autoPlayInterval?: number; // In milliseconds
    decorColor?: string; // Optional color for styling
}

const TestimonialCardSwipe: React.FC<TestimonialCardSwipeProps> = ({
    testimonials = defaultTestimonials,
    autoPlayInterval = 6000,
    decorColor = '#6c63ff',
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-play effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, autoPlayInterval);
        return () => clearInterval(interval);
    }, [autoPlayInterval, testimonials.length]);

    // Custom easing for animations
    const customEase = [0.6, -0.05, 0.01, 0.99];

    // Handle swipe navigation
    const handleDragEnd = (info: any) => {
        if (info.offset.x > 100) {
            setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        } else if (info.offset.x < -100) {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4">
            <div className="relative h-[400px] md:h-[450px]">
                <AnimatePresence initial={false}>
                    {testimonials.map((item, index) => (
                        currentSlide === index && (
                            <motion.div
                                key={item.id}
                                className="absolute top-0 left-0 w-full bg-white rounded-3xl shadow-xl p-6 md:p-8 text-rasin-black border border-slate-100"
                                style={{
                                    background: `linear-gradient(135deg, rgba(255,255,255,0.95), rgba(${getRGB(decorColor)},0.1))`,
                                }}
                                initial={{ x: 300, opacity: 0, rotate: 5, scale: 0.9 }}
                                animate={{ x: 0, opacity: 1, rotate: 0, scale: 1 }}
                                exit={{ x: -300, opacity: 0, rotate: -5, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: customEase }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_event, info) => handleDragEnd(info)}
                            >
                                {/* Star Rating */}
                                <div className="flex justify-center mb-6">
                                    <ul className="flex gap-1 rounded-lg border border-slate-100 py-1 px-3.5 bg-white/50">
                                        {Array(5)
                                            .fill(0)
                                            .map((_, i) => (
                                                <li key={i} className="text-[#fc0]">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                                                    </svg>
                                                </li>
                                            ))}
                                    </ul>
                                </div>

                                {/* Quote Icon */}
                                <div className="absolute right-4 -top-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-slate-700 w-12 h-12 md:w-16 md:h-16"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        fillOpacity={0.25}
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.411 6.33A2.751 2.751 0 0 1 14.5 9v.25A2.75 2.75 0 0 1 11.75 12h-.25a2.747 2.747 0 0 1-2.748-2.657V9.34H8.75V9c0-.131.01-.26.027-.386c.02-.261.05-.518.09-.77a8.028 8.028 0 0 1 .559-1.918a7.207 7.207 0 0 1 2.162-2.801l.098-.076A.238.238 0 0 1 11.83 3c.186 0 .306.202.22.367a18.552 18.552 0 0 0-.22.433a17.949 17.949 0 0 0-.43.951a14.39 14.39 0 0 0-.557 1.578l.054-.013a2.76 2.76 0 0 1 .603-.066h.25c.228 0 .45.028.661.08m.549-1.405A4.252 4.252 0 0 1 16 9v.25a4.25 4.25 0 0 1-4.25 4.25h-.25A4.245 4.245 0 0 1 8 11.662A4.245 4.245 0 0 1 4.5 13.5h-.25A4.25 4.25 0 0 1 0 9.336V9c0-.183.012-.365.035-.543c.207-2.62 1.358-4.966 3.488-6.599A1.738 1.738 0 0 1 4.58 1.5c1.341 0 2.146 1.425 1.548 2.564c-.111.211-.26.508-.418.86c.788.234 1.481.69 2.005 1.297a8.763 8.763 0 0 1 3.058-4.363A1.738 1.738 0 0 1 11.83 1.5c1.341 0 2.146 1.425 1.548 2.564c-.111.211-.26.508-.418.86ZM5.16 6.33a2.756 2.756 0 0 0-.661-.08h-.25a2.76 2.76 0 0 0-.657.079a14.398 14.398 0 0 1 .68-1.865A17.736 17.736 0 0 1 4.8 3.367A.251.251 0 0 0 4.58 3a.238.238 0 0 0-.144.049a7.737 7.737 0 0 0-.93.844a7.208 7.208 0 0 0-1.39 2.172a8.029 8.029 0 0 0-.498 1.779a8.753 8.753 0 0 0-.091.77A2.773 2.773 0 0 0 1.5 9v.339h.001v.004A2.747 2.747 0 0 0 4.25 12h.251a2.75 2.75 0 0 0 2.75-2.75V9c0-1.29-.89-2.374-2.089-2.67Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>

                                {/* Quote */}
                                <blockquote className="mt-5 pt-2 px-4 md:px-8">
                                    <p className="text-rasin-black text-base md:text-lg text-center font-medium md:font-semibold font-satoshi">
                                        {item.quote}
                                    </p>
                                </blockquote>

                                {/* Author Info */}
                                <div className="flex justify-center items-center mt-6">
                                    <figure className="rounded-full overflow-hidden w-[68px] border-2 border-slate-100">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={68}
                                            height={69}
                                            className="max-w-full h-auto object-cover"
                                            priority={index === 0}
                                        />
                                    </figure>
                                    <div className="text-start pl-4">
                                        <h3 className="text-black font-roboto font-semibold text-base">{item.name}</h3>
                                        <h4 className="text-slate-400 font-normal text-sm">{item.office}</h4>
                                    </div>
                                </div>

                                {/* Workplace */}
                                <div className="border-t border-slate-100 mt-3.5 pt-3.5">
                                    <p className="text-center font-semibold text-lg md:text-xl font-roboto text-rasin-black">
                                        {item.workPlace}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-[var(--decor-color)] w-6' : 'bg-white/30'
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={() =>
                        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                    }
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Next testimonial"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

// Default testimonials data
const defaultTestimonials: Testimonial[] = [
    { id: 1, image: "/image/hub/person.png", name: "Rev Fr. Hillary Mgbodile", office: "PPSMB Chairman (Formerly CIC Principal)", workPlace: "PPSMB Office", quote: "This software has revolutionized our school's administration. The Academics Portal simplifies result management, enhancing educational outcomes. The Staff Pay Manager ensures accurate, timely salary payments, boosting staff morale. The Analytics Gateway provides invaluable data for strategic decisions. This platform has significantly improved our efficiency and communication." },
    { id: 2, image: "/image/hub/person.png", name: "Ngwu Fransica", office: "Parent", workPlace: "Educational Sector", quote: "As a parent, the Axiolot Hub Portal is a lifesaver. The e-Payment system makes fee transactions effortless and secure. I can track my child's progress easily and stay informed through seamless communication. This portal has made managing my child's education transparent and convenient." },
    { id: 3, image: "/image/hub/person.png", name: "Agu Michael", office: "Student CIC Enugu", workPlace: "College Of The Immaculate Conception Enugu", quote: "The Axiolot Hub Portal has enhanced my learning experience. The Academics Portal helps me track my progress effortlessly, while the user-friendly interface makes accessing information easy. Improved online communication keeps me connected with teachers and peers. This portal supports my academic journey immensely." }

];

// Helper to convert hex to RGB
const getRGB = (hex: string) => {
    const hexValue = hex.replace('#', '');
    const r = parseInt(hexValue.substring(0, 2), 16);
    const g = parseInt(hexValue.substring(2, 4), 16);
    const b = parseInt(hexValue.substring(4, 6), 16);
    return `${r},${g},${b}`;
};

export default TestimonialCardSwipe;