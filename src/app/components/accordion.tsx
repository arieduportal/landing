import React, { useState, useRef, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const [opacity, setOpacity] = useState('0');
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className="border-b border-slate-400 pb-6 mb-10">
            <div className="flex justify-between items-center gap-4 cursor-pointer" onClick={toggleAccordion}>
                <h2 className="text-black font-medium font-roboto text-base md:text-lg">{title}</h2>
                <span style={{transition: "transform 0.4s ease"}} className="w-6 h-6 rounded-full bg-teal-500 items-center justify-center flex flex-shrink-0 text-white">
                    {isOpen ? <FaMinus className="text-white w-3 h-3" /> : <FaPlus className="w-3 h-3 text-white" />}
                </span>
            </div>
            <div ref={contentRef}
                style={{ height: height, overflow: 'hidden', transition: "height 0.4s ease-in-out" }}
            >
                {children}
            </div>
        </div>
    );
};

export default Accordion;
