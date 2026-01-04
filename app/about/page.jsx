"use client";
import React, { useState} from "react";
import { FaLeaf, FaStar, FaHeart,FaLightbulb, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const Page = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const coreValues = [
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Integrity",
      description: "We ramain honest and transparent in our formulations, practices, and promises. Every ingredient, every product, every claim is backed by truth and care."
    },
    {
      icon: <FaStar className="w-12 h-12" />,
      title: "Excellence",
      description: "From sourcing raw materials to final packaging, we uphold high standards to ensure premium quality, effective results, and a memorable customer experience."
    },
    {
      icon: <FaHeart className="w-12 h-12" />,
      title: "Empathy",
      description: "We listen to our clients' hair journeys, challenges, and goals. Our products and services are designed to meet real needs with compassion and understanding."
    },
    {
      icon: <FaLightbulb className="w-12 h-12" />,
      title: "Innovation",
      description: "We combine traditional herbal wisdom with modern knowledge to continuously improve and develop natural hair care solutions that truly work."
    },
    {
      icon: <FaCheckCircle className="w-12 h-12" />,
      title: "Accountability",
      description: "We take full responsibility for what we create and how it impacts our customers. We stand by our products and always strive to deliver what we promise."
    },
    {
      icon: <FaLeaf className="w-12 h-12" />,
      title: "Consistency",
      description: "We consistently deliver steady dedication in product quality, customer service, and our commitment to healthy hair journeys, every single time."
    }
    ];
    return (
        <main className="min-h-dvh bg-white font-sans">
            {/* Hero Section */}
          <section className="pt-20 pb-20 px-6 bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          {/* <div className="inline-block mb-6">
            <FaLeaf className="w-16 h-16 mx-auto text-amber-300" />
          </div> */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            About SaRel Holistic Care
          </h1>
          <p className="text-2xl md:text-3xl font-light opacity-90">
            Beauty Beyond Boundaries
          </p>
        </div>
      </section>

      {/* About Us Content */}
      <section id="about" className="py-20 px-6 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Where Elegance in Every Strand Comes Alive
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We create and provide exceptional hair care products and services, like SaRel hair oil, tea rinse, shampoo, deep conditioners, stimulating and moisturizing hair butters.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We also offer personalized coaching and consultancy services to help you unlock your full beauty potential.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="/aa.jpg" 
                  alt="Natural Hair Care"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-400 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Mission, Vision, Audience Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-emerald-600">
              <h3 className="text-2xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To nourish, nurture, and care for your hair with top-notch quality products and expert guidance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-teal-600">
              <h3 className="text-2xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To empower individuals to unlock their full beauty potential, through innovative hair and beauty solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-amber-500">
              <h3 className="text-2xl font-bold text-amber-600 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Audience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our products are useable for both male and female - children and adults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 px-6 bg-linear-to-br from-emerald-700 via-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Our Core Values
            </h2>
            <p className="text-xl text-emerald-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              >
                <div className="text-emerald-700 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-amber-600 mb-4 uppercase tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {value.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Experience SaRel?
          </h2>
          <p className="text-xl text-gray-700 mb-10">
            Join us on a journey to healthier, more beautiful hair
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Shop Now
            </button>
            <button className="bg-white hover:bg-gray-50 text-emerald-700 border-2 border-emerald-700 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Contact Us
            </button>
          </div>
        </div>
      </section>
        </main>
    )

}

export default Page;