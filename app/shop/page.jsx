"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ShopPage = () => {
  // Individual Products
  const individualProducts = [
    {
      name: 'SaRel Hair Oil',
      description: 'Nourishing hair oil for healthy growth and shine',
      image: '/ho.jpg',
      price: 'N24,999'
    },
    {
      name: 'Tea Rinse',
      description: 'Refreshing tea rinse for scalp health',
      image: '/tea.jpg',
      price: 'N19,999'
    },
    {
      name: 'Shampoo',
      description: 'Gentle cleansing shampoo for all hair types',
      image: '/sha.jpg',
      price: 'N16,999'
    },
    {
      name: 'Deep Conditioner',
      description: 'Intensive conditioning treatment for damaged hair',
      image: '/deep.jpg',
      price: 'N22,999'
    },
    {
      name: 'Hair Butter',
      description: 'Rich moisturizing butter for natural hair',
      image: '/hb.jpg',
      price: 'N18,999'
    },
    {
      name: 'Leave-In Conditioner',
      description: 'Lightweight leave-in for daily moisture',
      image: '/livin.jpg',
      price: 'N15,999'
    }
  ];

  // Package Deals
  const packageDeals = [
    {
      name: 'Complete Care Package',
      description: 'Full Set: Oil, Rinse, Conditioner & Shampoo',
      image: '/full.jpg',
      price: 'N74,999',
      originalPrice: 'N84,996'
    },
    {
      name: 'Growth Boost Package',
      description: 'Hair Oil + Stimulating Butter + Tea Rinse',
      image: '/hb1.jpg',
      price: 'N58,999',
      originalPrice: 'N63,997'
    }
  ];

      return (
    <main className="min-h-dvh bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our range of exceptional hair care products. Each item is crafted with natural ingredients to nourish, nurture, and care for your hair.
          </p>
        </div>
      </section>

      {/* Individual Products Section */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              Individual Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {individualProducts.map((product, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-emerald-700 transition-all duration-300">
                <div className="relative h-80 md:h-90 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-700">
                      {product.price}
                    </span>
                    <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md flex items-center gap-2">
                      <FaWhatsapp className="w-5 h-5" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals Section */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-linear-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}>
              Package Deals
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {packageDeals.map((pkg, index) => (
              <div 
                key={index} 
                className="relative bg-white rounded-2xl overflow-hidden border-2 hover:bg-teal-100 transition-all duration-300 hover:">
                {/* Package Deal Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span 
                    className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                    style={{ fontFamily: 'Poppins, sans-serif' }} >
                    Package Deal
                  </span>
                </div>

                <div className="relative h-72 md:h-80 overflow-hidden bg-gray-100">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 
                    className="text-2xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }} >
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-lg">
                    {pkg.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-emerald-700">
                        {pkg.price}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {pkg.originalPrice}
                        </span>
                      )}
                    </div>
                    <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                      <FaWhatsapp className="w-5 h-5" />
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Have Questions Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }} >
            Have Questions?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Contact us on WhatsApp for personalized recommendations, bulk orders, or any queries about our products.
          </p>
          <a 
            href="https://wa.me/2348123788854" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl transform">
            <FaWhatsapp className="w-6 h-6" />
            Chat with Us
          </a>
        </div>
      </section>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>
    </main>
  );
};

export default ShopPage;
