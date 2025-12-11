"use client";
import Link from "next/link";
import { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar({ principal }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 65;
            const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: topPosition,
                behavior: "smooth"
            });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-quintenario/90 shadow-md z-50">
            <div className="flex flex-row items-center justify-between p-4 gap-2">
                <Link href="/" className="text-2xl font-bold transition-colors duration-300 focus:outline-none lg:text-3xl md:text-2xl">
                    Caique Dev
                </Link>

                {principal && (
                    <div className="relative md:flex md:items-center md:justify-end">
                        <button onClick={toggleMenu} className="md:hidden focus:outline-none transition-transform duration-300 ease-in-out transform">
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="w-6 h-6 transition-all duration-300" />
                        </button>
                        <div className={`absolute end-0 top-full mt-2 w-40 bg-quintenario/90 shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out md:static md:w-auto md:bg-transparent md:shadow-none md:flex md:gap-8 md:opacity-100 md:scale-100 ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none md:opacity-100 md:pointer-events-auto'}`}>
                            <ul className="flex flex-col md:flex-row gap-2 md:gap-8 p-2 md:p-0">
                                {[ 
                                    { item: 'sobre', id: 'sobre' }, 
                                    { item: 'habilidades', id: 'habilidades' }, 
                                    { item: 'portfólio', id: 'portfolio' }, 
                                    { item: 'experiência', id: 'experiencia' }
                                ].map(({ item, id }) => (
                                    <li key={id}>
                                        <button onClick={() => scrollToSection(id)}
                                            className="block w-full text-sm text-left md:text-center px-4 py-2 md:px-0 md:py-0 hover:text-quaternario transition-colors duration-300 uppercase">
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}