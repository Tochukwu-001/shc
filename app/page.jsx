"use client";
import { Theme } from "@/components/Styles";
import React, { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { FaLeaf, FaHeart, FaUsers, FaHandshake } from "react-icons/fa";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Hero images for carousel 
  const heroImages = [
    '/14.jpg',
    '/AF3.jpg',
    '/16.jpg',
    '/CA1.jpg',
    '/12.jpg'
    
  ];

  // Animated phrases
  const phrases = [
    "Nurture Your Crown",
    "Embrace Natural Beauty",
    "Elevate Your Confidence"
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate phrases
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  // Show products
  const products = [
    {
      name: 'Hair Oil',
      description: 'Nourishing blend that strengthens, protects, and keeps your hair healthy with every use.',
      image: "/ho.jpg"
    },
    {
      name: 'Tea Rinse',
      description: 'Herbal infusion that cleanses, soothes the scalp, and promotes natural shine and vitality.',
      image: "/tea.jpg"
    },
    {
      name: 'Shampoo',
      description: 'Gentle cleansing formula that purifies without stripping natural oils for healthy hair.',
      image: "/sha.jpg"
    },
    {
      name: 'Deep Conditioner',
      description: 'Intensive treatment that repairs, restores moisture, and revitalizies damaged strands.',
      image: "/deep.jpg"
    },
    {
      name: 'Hair Butter',
      description: 'Rich moisturizing butter that nourishes, defines, and protects your natural texture.',
      image: '/hb.jpg'
    },
    {
      name: 'Leave-In Conditioner',
      description: 'Lightweight formula that hydrates, detangles, and keeps hair soft and manageable all day.',
      image: '/livin.jpg'
    }
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
      {/* Hero section with animated gradient*/}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-100 via-teal-50 to-emerald-200 animate-pulse"></div>
      <style jsx>{`
      @keyframes gradient {
      0% {
      background-position: 0% 50%;
      }
      50% {
      background-position: 100% 50%;
      }
      100% {
      background-position: 0% 50%;
      }
      }
      .animate-gradient {
      background: linear-gradient(135deg, #e8f5e9, #b2dfdb, #c8e6c9, #80cbc4, #a5d6a7, #00897B, #C5A047);
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      }
      `}</style>

       {/* Content */}
      <blockquote className="relative z-10 min-h-dvh w-full p-10">
        <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-2">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4"> SaRel Holistic Care </h1>

            <p className="text-3xl md:text-4xl font-light text-emerald-700 mb-8"> Beauty Beyond Boundaries </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-800 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nurture your crown naturally with holistic hair care rooted in nature's wellness.
            Experience elegance in every strand with our premium formulations.
          </p>

          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl">
            Discover Our Collection
          </button>
        </div>
      </blockquote>
      </section>

      {/* Animated Text Banner */}
       <section style={{ backgroundColor: Theme.lightCyan}} className="relative py-6 md:py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative h-16 md:h-20 flex items-center justify-center">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  index === currentPhrase
                    ? 'opacity-100 translate-x-0'
                    : index === (currentPhrase - 1 + phrases.length) % phrases.length
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-wide px-2 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {phrase}
                </h2>
              </div>
            ))}
          </div>
        </div>
       
        {/* Decorative line animation */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-white to-transparent opacity-50"></div>
      </section>

       {/* NEW: Why Choose SaRel Section */}
      <section className="py-24 px-6 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Why Choose SaRel?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Where elegance in every strand comes alive through holistic care
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:gap-12 gap-10">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl border border-emerald-100 hover:bg-teal-100 transition-all duration-300 transform"
              >
                {/* Icon circle with gradient */}
                <div className="absolute -top-8 left-10">
                <div style={{ backgroundColor:Theme.lightCyan}} className="w-20 h-20 flex items-center justify-center rounded-full text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                </div>
                <div className="mt-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Decorative gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-600 to-teal-600 rounded-b-3xl transform scale-x-0 group-hover:scala-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Image Carousel Section */}
      <section className="relative h-screen bg-gray-900">
        <div className="relative h-full overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <FiArrowLeftCircle size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 z-10"
          >
            <FiArrowRightCircle size={32} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 px-6 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Premium holistic hair care products crafted with nature's finest ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl">
                <div className="relative h-80 overflow-hidden">
                  <img src={product.image} alt={product.name}
                    className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}> {product.name} </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3 rounded-full font-semibold">
                    Shop {product.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
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
