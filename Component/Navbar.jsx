"use client"
import React, { useState} from "react";
import { HiMenu, HiX } from 'react-icons/hi'; 

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo section */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img
                            src="/Shc.png"
                            alt="SaRel Logo" 
                            className="h-44 w-42 object-contain" style={{ imageRendering: 'crisp-edges',
                          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.15))' }} />
                         </a>
                    </div>
                     {/* Right Section */}
                    <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
                    {/* Desktop Navigation Links - Hidden on mobile, shows on tablets+ */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="/" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> Home </a>
                        <a href="/products" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> Products </a>
                        <a href="/about" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> About </a>
                        <a href="/contact" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> Contact </a>
                    </div>    
                        {/* Mobile Menu Toggle Button - Only shows on mobile */}
                        <button className="md:hidden text-gray-700 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                        aria-label="Toggle Menu" >
                           {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu - shows when mobileMenuOpen is true */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            <a href="/" className="text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)} >
                                Home
                            </a>
                            <a href="/products" className="text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)} >
                                Products
                            </a>
                            <a href="/about" className="text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)} >
                                About
                            </a>
                            <a href="/contact" className="text-gray-700 hover:text-green-700 hover:bg-gray-50 transition-colors font-medium px-4 py-3 rounded-lg"
                            onClick={() => setMobileMenuOpen(false)} >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;