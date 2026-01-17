"use client";
import { Theme } from "@/components/Styles";
import React, { useState, useEffect } from "react";
import { FaLeaf, FaHeart, FaUsers, FaHandshake } from "react-icons/fa";
import { TbArrowBadgeRightFilled, TbArrowBadgeLeftFilled } from "react-icons/tb";
import { FaStar } from "react-icons/fa";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);

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
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };
  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
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
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ pointerEvents: index === currentSlide ? 'auto' : 'none' }} >
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
        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@700;800;900&family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
      </section>

      {/* Slide Indicators (Dots) */}
      <div className="w-full py-6">
        <div className="flex justify-center items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'bg-emerald-700 w-1 h-1 shadow-md'
                  : 'bg-gray-200 w-1 h-1 hover:bg-gray-300'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20 px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
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

      {/* Review Section */}
      <section className="relative py-18 px-10 bg-linear-to-br from-emerald-700 to-emerald-800 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              150+ Happy Customers
            </h2>
            <p className="text-xl text-white/90">
              See what our customers are saying
            </p>
          </div>
          {/* Reviews Carousel */}
          <div className="relative">
            {/* Left Arrow */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white/20 hover:bg-white/30  text-white p-3 rounded-full transition-all duration-300"
              aria-label="Previous review">
              <TbArrowBadgeLeftFilled size={28} />
            </button>

            {/* Reviews Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-0">
              {visibleReviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white/95 rounded-2xl p-6 shadow-xl transform transition-all duration-500">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 w-5 h-5" />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>
                  {/* Author */}
                  <p
                    className="text-gray-900 font-semibold text-lg"
                    style={{ fontFamily: 'Poppins, sans-serif' }} >
                    — {review.author}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
              aria-label="Next review" >
              <TbArrowBadgeRightFilled size={28} />
            </button>
          </div>
        </div>

        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
      </section>


      {/* NEW: Why Choose SaRel Section */}
      <section className="py-20 px-10 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-26">
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
                  <div style={{ backgroundColor: Theme.lightCyan }} className="w-15 h-15 flex items-center justify-center rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
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

      {/* Our Holistic Promise */}
      <section style={{ backgroundColor: Theme.darkYellow }} className="relative py-18 px-10 overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Holistic Promise
            </h2>
            <p className="text-xl text-white/90">
              At SaRel Holistic Care, we believe that beautiful hair starts with wellness from within. Our premium formulations combine time-honored natural remedies with modern hair science to deliver results you can see and feel. Every product is designed to nourish, nurture, and care for your unique crown.
            </p>
          </div>
          {/* Promise Carousel */}
          <div className="relative">

            {/* Promise Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-2">
              {HolisticPromise.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-10 shadow-xl hover:shadow-2xl">
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold text-teal-700 mb-5" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
        </div>

        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
      `}</style>
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
