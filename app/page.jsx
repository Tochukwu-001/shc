"use client";
import React, { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images for carousel 
  const heroImages = [
    '/a8.jpg',
    '/b1.jpg',
    '/a3.jpg',
    '/a5.jpg'
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
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

  return (
    <main className="min-h-dvh bg-white">
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-[url('/a3.jpg')] bg-no-repeat bg-center bg-cover">
        {/* <div className="max-w-4xl mx-auto text-center z-10">
          <div className="mb-2">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4"> SaRel Holistic Care </h1>

            <p className="text-3xl md:text-4xl font-light text-emerald-700 mb-8"> Beauty Beyond Boundaries </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            Nurture your crown naturally with holistic hair care rooted in nature's wellness.
            Experience elegance in every strand with our premium formulations.
          </p>

          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
            Discover Our Collection
          </button>
        </div> */}
        {/* Decorative elements */}
        {/* <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full opacity-20 blur-3xl"></div> */}
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
