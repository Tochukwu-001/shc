"use client";
import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Theme } from './Styles';

const Footer = () => {
  return (
    <footer style={{backgroundColor: Theme.baseGreen}} className='text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        {/* Main Footer Grid - Responsive layout */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12'>

          {/* Left Side: Logo, Description & Shop links */}
          <div className='space-y-8'>
            {/* Logo & description */}
            <div>
              <img src='/logo.jpeg' alt='SaRel Logo' className='h-28 w-auto mb-4' />
              <p className='text-green-100 text-sm leading-relaxed'>
                Beauty Beyond Boundaries - Where elegance in every strand comes alive! We create exceptional hair care products for your natural beauty.
              </p>
            </div>
            {/* Shop Links */}
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
          </div>
          {/* Right Side: Quick Links, Contact & Social Media */}
          <div className='space-y-8'>
            {/*Quick links  */}
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
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-green-600 pb-2 inline-block">Contact Us </h3>
              <div className="text-green-100 text-sm space-y-2 mt-4">
                <p className='flex items-start'>
                  <span className='font-semibold text-white mr-2'>Email:</span>
                  <a href='mailto:info@sarelcare.com' className='hover:text-white transition-colors'>
                    info@sarelcare.com
                  </a>
                </p>
                <p className='flex items-start'>
                  <span className='font-semibold text-white mr-2'>Phone:</span>
                  <a href='tel:+234XXXXXXXXXX' className='hover:text-white transition-colors'>
                    +234 XXX XXX XXXX
                  </a>
                </p>
              </div>
            </div>
            {/* Social Media Icons */}
            <div>
              <h3 className='text-xl font-semibold mb-4 border-b border-green-600 pb-2 inline-block'>Follow Us</h3>
              <div className="flex items-center space-x-4 mt-4 text-gray-800">
                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-300 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={20} />
                </a>

                <a
                  href="https://instagram.com/sarelcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-300 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>

                <a
                  href="https://facebook.com/sarelcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-300 bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-green-700 pt-6">
          <div className="text-green-200 text-sm text-center">
            <p>&copy; 2024 SaRel Holistic Care. All rights reserved.</p>
            {/* <p className="text-xs mt-1">Powered by Excellence</p> */}
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;