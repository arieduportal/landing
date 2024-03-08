"use client";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-gray-300">
            <div className="bg-slate-100 py-8 relative"></div>
            <div className="bg-rasin-black border-t border-dashed p-4 border-white">
                <div className="app-container text-center text-white text-xs">
                    <p>© 2021 - {currentYear}. <span className="ml-2">AJHUB™ Helping schools to track student proformance, manage grades and others</span> </p>
                </div>
            </div>
        </footer>
    )
}