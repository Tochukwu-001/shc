"use client";
import React, { useState, useEffect} from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero images for carousel 
  const heroImages = [
    '/a1.jpg',
    '/a2.jpg',
    '/a3.jpg',
    '/a4.jpg'
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
      image: "/a6.jpg"
    },
    {
      name: 'Tea Rinse',
      description: 'Herbal infusion that cleanses, soothes the scalp, and promotes natural shine and vitality.',
      image: "/a6.jpg"
    },
    {
      name: 'Shampoo',
      description: 'Gentle cleansing formula that purifies without stripping natural oils for healthy hair.',
      image: "/a6.jpg"
    },
    {
      name: 'Deep Conditioner',
      description: 'Intensive treatment that repairs, restores moisture, and revitalizies damaged strands.',
      image: "/a6.jpg"
    },
    {
      name: 'Hair Butter',
      description: 'Rich moisturizing butter that nourishes, defines, and protects your natural texture.',
      image: '/a6.jpg'
    }
  ];

  return (
   <main className="min-h-dvh bg-white font-sans">
   {/* Hero section */}
   <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-amber-50 via-emerald-50 to-teal-50 px-6 py-20">
    <div className="max-w-4xl mx-auto text-center z-10">
      <div className="mb-8">
        <div className="inline-block mb-6">
          <div className="w-24 h-24 mx-auto bg-linear-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl font-bold text-white" style={{ fontFamily: 'Georgia, serif' }}>S</span>
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}> SaRel Holistic Care </h1>

        <p className="text-3xl md:text-4xl font-light text-emerald-700 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}> Beauty Beyond Boundaries </p>
      </div>

      <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
        Nurture your crown naturally with holistic hair care rooted in nature's wellness.
        Experience elegance in every strand with our premium formulations.
      </p>

      <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
        Discover Our Collection
      </button>
    </div>
    {/* Decorative elements */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200 rounded-full opacity-20 blur-3xl"></div>
   </section>

   {/* Image Carousel Section */}
    <section className="relative h-screen bg-gray-900">
        <div className="relative h-full overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
   </main>
  );
};

export default Page;
