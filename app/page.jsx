"use client";
import { Theme } from "@/components/Styles";
import React, { useState, useEffect } from "react";
import { FaLeaf, FaHeart, FaUsers, FaHandshake } from "react-icons/fa";
import { TbArrowBadgeRightFilled, TbArrowBadgeLeftFilled } from "react-icons/tb";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images for carousel 
  const heroImages = [
    '/hs1.jpg',
    '/full.jpg',
    '/11.jpg',
    '/14.jpg'
    
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Show products
  const products = [
    {
      name: 'Hair Butter',
      description: 'Rich moisturizing butter that nourishes, defines, and protects your natural texture.',
      image: '/hb.jpg',
      price: "N12,000"
    },
    {
      name: 'Tea Rinse',
      description: 'Herbal infusion that cleanses, soothes the scalp, and promotes natural shine and vitality.',
      image: "/tea.jpg",
      price: "N14,500"
    },
    {
      name: 'Shampoo',
      description: 'Gentle cleansing formula that purifies without stripping natural oils for healthy hair.',
      image: "/sha.jpg",
      price: "N9,000"
    },
    {
      name: 'Deep Conditioner',
      description: 'Intensive treatment that repairs, restores moisture, and revitalizies damaged strands.',
      image: "/deep.jpg",
      price: "N10,000"
    },
    //  {
    //   name: 'Hair Oil',
    //   description: 'Nourishing blend that strengthens, protects, and keeps your hair healthy with every use.',
    //   image: "/ho.jpg",
    //   price: "N10,000"
    // },
    // {
    //   name: 'Leave-In Conditioner',
    //   description: 'Lightweight formula that hydrates, detangles, and keeps hair soft and manageable all day.',
    //   image: '/livin.jpg',
    //   price: "12,000"
    // }
  ];

  const whyChooseUs = [
    {
      icon: <FaLeaf className="w-12 h-12" />,
      title: "Nature-Rooted Formulations",
      description: "Our products harness the power of natural ingredients, combining traditional herbal wisdom with modern science for optimal hair health."
    },
    {
      icon: <FaHeart className="w-12 h-12" />,
      title: "Holistic Wellness Approach",
      description: "We believe in nurturing hair from root to tip, addressing both external beauty and internal wellness for truly radiant results."
    },
    {
      icon: <FaUsers className="w-12 h-12" />,
      title: "For Everyone",
      description: "Our versatile range is designed for all hair types, ages, and genders—because beautiful hair knows no boundaries."
    },
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Expert Guidance & Support",
      description: "Beyond products, we offer personalized coaching and consultancy to help you unlock your full beauty potential."
    }
  ];

  return (
    <main className="min-h-dvh bg-white">
      {/* Hero section with Image Carousel Background*/}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`} 
            style={{ pointerEvents: index === currentSlide? 'auto' : 'none' }} >
            <img
              src={img}
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover" />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>
      {/* Content Overlay */}
      <div className="relative z-10 w-full px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title - Elegant Script Font */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-emerald-700 mb-6"
            style={{ 
              fontFamily: "'Great Vibes', 'Brush Script MT', cursive",
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }} >
            SaRel Holistic Care
          </h1>
          {/* Subtitle - Bold Sans-serif */}
          <p 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-8"
            style={{ 
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }} >
            Beauty Beyond Boundaries
          </p>
          {/* Description Text */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto"
            style={{ 
              fontFamily: "'Poppins', 'Helvetica', sans-serif",
              textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
            }} >
            Nurture your crown naturally with holistic hair care rooted in nature's wellness.
            Experience elegance in every strand with our premium formulations.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              style={{ fontFamily: "'Poppins', sans-serif" }} >
              Discover Our Collection
            </button>
            <button 
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }} >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators (Dots) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 py-4 bg-linear-to-t from-black/30 to-transparent">
      <div className="flex justify-center items-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'bg-emerald-700 w-1 h-1 shadow-md' 
                : 'bg-white/70 w-1.5 h-1.5 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        </div>
      </div>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
    </section>

       {/* NEW: Why Choose SaRel Section */}
      <section className="py-18 px-6 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose SaRel?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where elegance in every strand comes alive through holistic care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl border border-emerald-100 hover:bg-teal-100 transition-all duration-300 transform">
                {/* Icon circle with gradient */}
                <div className="absolute -top-8 left-10">
                <div style={{ backgroundColor:Theme.lightCyan}} className="w-15 h-15 flex items-center justify-center rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                </div>
                <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Decorative gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-700 to-emerald-800 rounded-b-3xl transform scale-x-0 group-hover:scala-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="relative h-110 py-20 px-6 bg-linear-to-br from-emerald-700 to-emerald-800 overflow-hidden"></section>


      {/* Products Section */}
      <section className="py-20 px-6 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Best Sellers
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Premium holistic hair care products crafted with nature's finest ingredients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
                <div className="relative h-90 overflow-hidden">
                  <img src={product.image} alt={product.name}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}> {product.name} </h3>
                  <span className="text-xl font-semibold text-emerald-700">
                    {product.price}
                  </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* View All Products Link */}
        <div className="text-center">
          <a 
            href="/products" 
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            style={{ fontFamily: 'Poppins, sans-serif' }} >
            View All Products
          </a>
        </div>
      </div>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');`} </style>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-teal-100">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Transform your Hair Care Ritual
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands who have discovered the power of holistic hair care
          </p>
          <button className="bg-white text-emerald-700 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
