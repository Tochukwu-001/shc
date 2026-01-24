"use client";
import { Theme } from "../components/Styles";
import React, { useState, useEffect } from "react";
import { FaLeaf, FaHeart, FaUsers, FaHandshake } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [direction, setDirection] = useState('next');

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
      price: "N18,999"
    },
    {
      name: 'Tea Rinse',
      description: 'Herbal infusion that cleanses, soothes the scalp, and promotes natural shine and vitality.',
      image: "/tea.jpg",
      price: "N19,999"
    },
    {
      name: 'Shampoo',
      description: 'Gentle cleansing formula that purifies without stripping natural oils for healthy hair.',
      image: "/sha.jpg",
      price: "N16,999"
    },
    {
      name: 'Deep Conditioner',
      description: 'Intensive treatment that repairs, restores moisture, and revitalizies damaged strands.',
      image: "/deep.jpg",
      price: "N22,999"
    },
  ];

  const reviews = [
    {
      text: "Best hair products I've ever used! My hair has never felt so healthy.",
      author: "Amara Johnson",
      rating: 5
    },
    {
      text: "The tea rinse is amazing. My scalp feels so refreshed!",
      author: "Kwame Osei",
      rating: 5
    },
    {
      text: "Love the natural ingredients. Great for my daughter's hair too.",
      author: "Zuri Williams",
      rating: 5
    },
    {
      text: "Finally found products that work for my hair type. Highly recommend!",
      author: "Jamal Brown",
      rating: 5
    },
    {
      text: "The hair butter is a game changer. So moisturizing!",
      author: "Nia Davis",
      rating: 5
    },
    {
      text: "The deep conditioner restored my damaged hair. Incredible results!",
      author: "Malik Thompson",
      rating: 5
    },
    {
      text: "These formulations are truly holistic. I feel the wellness in every strand.",
      author: "Ayanna Clarke",
      rating: 5
    },
    {
      text: "The hair oil strengthened my hair and gave it beautiful shine.",
      author: "Kofi Mensah",
      rating: 5
    }
  ];
  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentReview]);

  const handleNext = () => {
    setDirection('next');
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 50);
  };
  const handlePrev = () => {
    setDirection('prev');
    setTimeout(() => {
       setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, 50);
  };

  // Get 3 reviews to display (current and next 2)
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentReview + i) % reviews.length]);
    }
    return visible;
  };
  const visibleReviews = getVisibleReviews();

  // Why choose Us options
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

  // Holistic Promise
  const HolisticPromise = [
    {
      title: "Personalized Care",
      description: "Not sure which products are right for you? Book a free consultation with our hair care experts."
    },
    {
      title: "Global Reach",
      description: "From local communities to international customers, we deliver wellness to your doorstep."
    }
  ];

  return (
    <main className="min-h-dvh bg-white w-full">
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
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8"
            style={{ 
              fontFamily: "'Montserrat', 'Arial Black', sans-serif",
              letterSpacing: '0.02em',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }} >
            Beauty Beyond Boundaries
          </p>
          {/* Description Text */}
          <p 
            className="text-lg md:text-xl lg:text-2xl text-white font-light mb-12 leading-relaxed max-w-3xl mx-auto"
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
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl transform"
              style={{ fontFamily: "'Poppins', sans-serif" }} >
              Discover Our Collection
            </button>
            <button 
              className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full text-lg font-bold transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }} >
              Book Consultation
            </button>
          </div>
        </div>
        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
      </div>
      </section>

    {/* Slide Indicators (Dots) */}
      <div className="w-full py-6">
      <div className="flex justify-center items-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'bg-emerald-700 w-3 h-3 shadow-md' 
                : 'bg-gray-200 w-2.5 h-2.5 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
        </div>
      </div>

    {/* Features Section */}
    <section className="py-12 md:py-16 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Free Shipping */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Free Shipping
            </h3>
            <p className="text-gray-600">
              Local and international shipping
            </p>
          </div>

          {/* Secure Payment */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Secure Payment
            </h3>
            <p className="text-gray-600">
              Make payment with ease
            </p>
          </div>

          {/* Trusted Brands */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Trusted Brands
            </h3>
            <p className="text-gray-600">
              Trusted in homes for over 50 years
            </p>
          </div>

          {/* Customer Support */}
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Customer Support
            </h3>
            <p className="text-gray-600">
              Enjoy great customer support
            </p>
          </div>
        </div>
      </div>
     </section>

     {/* Products Section */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-700 mb-4" style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }}>
              Best Sellers
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Premium holistic hair care products crafted with nature's finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden">
                <div className="relative h-80 md:h-90 overflow-hidden">
                  <img src={product.image} alt={product.name}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/10 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            href="/shop" 
            className="inline-block w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl transform"
            style={{ fontFamily: 'Poppins, sans-serif' }} >
            View All Products
          </a>
        </div>
      </div>
      </section>

       {/* Review Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6 bg-linear-to-br from-emerald-700 to-emerald-800 overflow-hidden">
        {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-4xl md:text-6xl font-bold text-amber-500 mb-4 px-4"
            style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }} >
            150+ Happy Customers
          </h2>
          <p className="text-lg md:text-xl text-white/90">
            See what our customers are saying
          </p>
        </div>
        {/* Reviews Carousel */}
        <div className="relative px-8 md:px-16">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Previous review">
            <FiChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>
          {/* Reviews Container with sliding animation */}
          <div className="overflow-hidden">
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-in-out ${
                direction === 'next' ? 'animate-slideInRight' : 'animate-slideInLeft'}`}
              key={currentReview}>
              {visibleReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl transform transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-500 w-4 h-4 md:w-5 md:h-5" />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed italic min-h-20">
                    "{review.text}"
                  </p>
                  {/* Author */}
                  <p 
                    className="text-gray-900 font-semibold text-base md:text-lg"
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                    — {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 bg-white/30 backdrop-blur-sm text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            aria-label="Next review">
            <FiChevronRight size={24} className="md:w-7 md:h-7" />
          </button>
        </div>
      </div>
      {/* Google Fonts and Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
        
        @keyframes slideInRight {
          0% {
            transform: translateX(70%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.7s ease-in-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.7s ease-in-out forwards;
        }
      `}</style>
      </section>

       {/* NEW: Why Choose SaRel Section */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-emerald-700 mb-4" style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }}>
              Why Choose SaRel?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Where elegance in every strand comes alive through holistic care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-8 md:mb-12">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl border border-emerald-100 hover:bg-teal-100 transition-all duration-300 transform">
                {/* Icon circle with gradient */}
                <div className="flex justify-center mb-6">
                <div style={{ backgroundColor:Theme.lightCyan}} className="w-20 h-20 flex items-center justify-center rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                </div>
                <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Decorative gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-700 to-emerald-800 rounded-b-3xl transform scale-x-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Holistic Promise */}
      <section className="relative py-12 md:py-18 px-6 md:px-10 overflow-hidden bg-linear-to-b from-emerald-700 to-teal-600">
        {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10"></div>
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 
            className="text-4xl md:text-6xl font-bold text-amber-500 mb-4"
            style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }}>
            Our Holistic Promise
          </h2>
          <p className="text-xl md:text-xl text-white/90 leading-relaxed">
            At SaRel Holistic Care, we believe that beautiful hair starts with wellness from within. Our premium formulations combine time-honored natural remedies with modern hair science to deliver results you can see and feel. Every product is designed to nourish, nurture, and care for your unique crown.
          </p>
        </div>
    
          {/* Promise Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-0 md:px-2">
           {HolisticPromise.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 md:p-10 shadow-xl hover:shadow-2xl">
                <div className="mt-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Decorative gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-700 to-emerald-800 rounded-b-3xl transform scale-x-0 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
          </div>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-6 bg-linear-to-b from-white to-teal-200">
        <div className="max-w-4xl mx-auto text-center text-gray-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Transform your Hair Care Ritual
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands who have discovered the power of holistic hair care
          </p>
          <button className="w-full sm:w-auto bg-white text-emerald-700 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 transform shadow-xl">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
};

export default Page;
