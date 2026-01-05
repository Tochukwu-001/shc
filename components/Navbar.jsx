"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        {
            label: "Home",
            url: "/"
        },
        {
            label: "About",
            url: "/about"
        },
        {
            label: "Products",
            url: "/products"
        },
        {
            label: "Contact",
            url: "/contact"
        },
    ]

    return (
        <nav className="sticky top-0 z-50">
            <section className="relative">
                <div className="bg-white shadow-md py-2 px-4">
                    <div className="flex justify-between items-center">

                        {/* Logo section */}
                        <div className="flex items-center z-50">
                            <a href="/" className="flex items-center">
                                <Image src={"/logo2.png"} width={500} height={500} alt="logo" className="w-32 h-16" />
                            </a>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center">

                            {/* Desktop Navigation Links - Hidden on mobile, shows on tablets+ */}
                            <div className="hidden md:flex space-x-8 items-center">
                                {
                                    navLinks.map((item, i) => (
                                        <Link key={i} href={item.url} className="text-gray-700 font-medium text-base relative group hover:text-[#00897B]">
                                            {item.label}
                                            <span className="absolute -bottom-1 left-0 h-0.5 transition-all duration-300 w-0 group-hover:w-full bg-[#00897B]"></span>
                                        </Link>
                                    ))
                                }
                                <Link href={"/book"} className="border px-5 py-1 border-gray-500 text-gray-700 text-base font-medium hover:border-[#00897B] hover:text-[#00897B] transition-all duration-300 rounded-full">
                                    Book Consultation
                                </Link>
                            </div>

                            {/* Mobile Menu Toggle Button - Only shows on mobile */}
                            <button
                                className="md:hidden text-gray-700 p-2 z-50 relative"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                aria-label="Toggle Menu"
                            >
                                {mobileMenuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay - Only visible on mobile */}
                {mobileMenuOpen && (
                    <div
                        className="md:hidden fixed inset-0"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                )}

                <div className={`md:hidden fixed top-0 right-0 h-full w-full bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="flex flex-col p-8 pt-30 gap-10 items-center">
                        {navLinks.map((item, i) => (
                            <Link
                                key={i}
                                href={item.url}
                                className="text-gray-700 font-medium text-lg hover:text-[#00897B] transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href={"/book"}
                            className="border px-5 py-2 border-gray-500 text-gray-700 text-base font-medium hover:border-[#00897B] hover:text-[#00897B] transition-all duration-300 rounded-full text-center mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;