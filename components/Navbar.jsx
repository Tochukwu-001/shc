"use client"
import React, { useState} from "react";
import { HiMenu, HiX, HiShoppingCart, HiUser, HiSearch } from 'react-icons/hi'; 

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
                            className="h-34 w-34 object-cover" />
                         </a>
                    </div>
                    {/* Desktop Navigation Links - Hidden on mobile, shows on tablets+ */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> Home </a>
                        <a href="/products" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> Products </a>
                        <a href="/about" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> About </a>
                        <a href="/contact" className="text-gray-700 hover:text-green-700 transition-colors font-medium text-base"> Contact </a>
                    </div>
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        {/* Search Icon */}
                        <button className="text-gray-700 hover:text-green-700 transition-colors p-2" 
                        aria-label="Search" >
                            <HiSearch size={22} />
                        </button>
                        {/* User/Account Icon */}
                        <button className="text-gray-700 hover:text-green-700 transition-colors p-2" 
                        aria-label="User Account" >
                            <HiUser size={22} />
                        </button>
                        {/* Shopping Cart Icon with Badge */}
                        <button className="text-gray-700 hover:text-green-700 transition-colors p-2" 
                        aria-label="Shopping Cart" >
                            <HiShoppingCart size={22} />
                            {/* Cart Item Counter Badge */}
                            <span className="absolute top-0 right-0 bg-green-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                                0
                            </span>
                        </button>
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