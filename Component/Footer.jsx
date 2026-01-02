"use client";
import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-linear-to-br from-green-800 to-green-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                {/* Main Footer Grid - Responsive layout */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>

                    {/* Column 1: Logo and Description */}
                    <div>
                        <img src='/logo.jpeg' alt='SaRel Logo' className='h-28 w-auto mb-4' />
                        <p className='text-green-100 text-sm leading-relaxed'>
                            Beauty Beyond Boundaries - Where elegance in every strand comes alive! We create exceptional hair care products for your natural beauty.
                        </p>
                    </div>
                </div>
                {/* Column 2: Shop Links */}
                <div>
                    <h3 className='text-lg font-semibold mb-4 border-b border-green-600 pb-2'>Shop</h3>
                    <ul className='space-y-3'>
                        <li>
                            <a href='/products/hair-oil' className='text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200'>
                            Hair Oil </a>
                        </li>
                        <li>
                            <a href='/products/tea-rinse' className='text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200'>
                            Tea Rinse </a>
                        </li>
                        <li>
                            <a href='/products/shampoo' className='text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200'>
                            Shampoo </a>
                        </li>
                        <li>
                            <a href='/products/conditioners' className='text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200'>
                            Deep Conditioners </a>
                        </li>
                        <li>
                            <a href='/products/hair-butter' className='text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200'>
                            Hair Butter </a>
                        </li>
                    </ul>
                </div>
                {/* Column 3: Quick Links & Contact */}
                 <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-green-600 pb-2 mt-5">Quick Links</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <a 
                  href="/" 
                  className="text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="/contact" 
                  className="text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="/terms" 
                  className="text-green-100 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="text-green-100 text-sm space-y-2">
              <p className="font-semibold text-white mb-2">Contact Us:</p>
              <p>Email: info@sarelcare.com</p>
              <p>Phone: +234 XXX XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright Section */}
        <div className="border-t border-green-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-5">
              <a 
                href="https://wa.me/234XXXXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={22} />
              </a>
              
              <a 
                href="https://instagram.com/sarelcare" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
              
              <a 
                href="https://tiktok.com/@sarelcare" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <FaTiktok size={22} />
              </a>
              
              <a 
                href="https://facebook.com/sarelcare" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF size={22} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-green-200 text-sm text-center md:text-right">
              <p>&copy; 2024 SaRel Holistic Care. All rights reserved.</p>
              {/* <p className="text-xs mt-1">Powered by Excellence</p> */}
            </div>
          </div>
       </div>
        </footer>
    )
};

export default Footer;