"use client";
import React from "react";
import { FaCheckCircle, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";


const Page = () => {
    
    return (
        <main className="min-h-dvh bg-white">
       {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hs1.jpg"
            alt="Book Consultation"
            className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Elegance in Every Strand
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-4xl md:text-5xl font-bold text-emerald-700 text-center mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }} >
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 text-center mb-6">
            SaRel Holistic Care is where <span className="font-bold text-emerald-700">Elegance in Every Strand</span> comes alive!
          </p>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              We create and provide exceptional hair care products and services, like SaRel hair oil, tea rinse, shampoo, deep conditioners, stimulating and moisturizing hair butters. Our journey began with a simple belief: that everyone deserves access to premium, natural hair care that truly works.
            </p>
            <p>
              For over 50 years, we've been a trusted name in homes worldwide. What sets us apart is our holistic approach to hair care - we don't just treat symptoms, we nourish your hair from root to tip with nature's finest ingredients.
            </p>
            <p>
              We also offer personalized coaching and consultancy services to help you unlock your full beauty potential. Our experts work one-on-one with clients to create customized hair care routines that deliver real, lasting results.
            </p>
          </div>
        </div>
        {/* Decorative gradient bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-700 to-emerald-800 rounded-b-3xl transform scale-x-0 transition-transform duration-300"></div>
      </section>

      {/* Tagline, Mission, Vision Cards Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Tagline */}
            <div className="bg-linear-to-br from-amber-50 to-amber-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-amber-600 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                Our Tagline
              </h3>
              <p className="text-gray-700 font-semibold">
                Beauty Beyond Boundaries
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-linear-to-br from-emerald-50 to-teal-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-emerald-700 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Our Mission
              </h3>
              <p className="text-gray-700">
                To nourish, nurture, and care for your hair with top-notch quality products and expert guidance
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-linear-to-br from-white to-gray-100 rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-gray-700 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Our Vision
              </h3>
              <p className="text-gray-700">
                To empower individuals to unlock their full beauty potential, through innovative hair and beauty solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Story
          </h2>
          <div className="bg-teal-50 rounded-2xl p-8 md:p-10 space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              SaRel Holistic Care was born from a passion for natural beauty and wellness. Our founders recognized a gap in the market for hair care products that truly respected and celebrated diverse hair types, particularly textured and natural hair.
            </p>
            <p>
              What started as a small collection of homemade remedies has grown into a comprehensive line of premium products trusted by thousands of families worldwide. Every formula is carefully crafted with natural ingredients, drawing from traditional wisdom and modern hair science.
            </p>
            <p>
              Today, we're proud to serve customers across the globe, offering not just products but a complete hair wellness experience. Our commitment to quality, authenticity, and customer satisfaction remains unwavering as we continue to grow.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-b from-white to-emerald-50 rounded-2xl p-8 md:p-10 text-center">
            <h2 
              className="text-3xl md:text-4xl font-bold text-emerald-700 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }} >
              Who We Serve
            </h2>
            <p className="text-xl text-gray-700 mb-4">
              Our products are useable for both <span className="font-bold text-emerald-700">male and female</span> - Children and adults alike.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe beautiful hair is for everyone, regardless of age, gender, or hair type. Our holistic approach works for all textures - from straight to coily, fine to thick.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }} >
            What Makes Us Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 100% Natural Ingredients */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  100% Natural Ingredients
                </h3>
                <p className="text-gray-600">
                  No harsh chemicals, sulfates, or parabens. Just pure, natural goodness for your hair.
                </p>
              </div>
            </div>

            {/* 50+ Years of Trust */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }} >
                  50+ Years of Trust
                </h3>
                <p className="text-gray-600">
                  Generations of families have trusted SaRel for their hair care needs.
                </p>
              </div>
            </div>

            {/* Expert Guidance */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Expert Guidance
                </h3>
                <p className="text-gray-600">
                  Free consultations with our hair care specialists to find your perfect routine.
                </p>
              </div>
            </div>

            {/* Global Reach */}
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Global Reach
                </h3>
                <p className="text-gray-600">
                  We ship worldwide, bringing holistic hair care to your doorstep wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-linear-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Have questions or need personalized advice? We're here to help you on your hair care journey!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email Us */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-7 h-7 text-amber-500" />
                </div>
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email Us
              </h3>
              <a href="mailto:sarelholisticcare@gmail.com" className="text-gray-600 hover:text-emerald-700">
                sarelholisticcare@gmail.com
              </a>
            </div>

            {/* Call Us */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <FaPhone className="w-7 h-7 text-teal-700" />
                </div>
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                Call Us
              </h3>
              <a href="tel:+2348123788854" className="text-gray-600 hover:text-emerald-700">
                +234 812-378-8854
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-7 h-7 text-gray-900" />
                </div>
              </div>
              <h3 
                className="text-xl font-bold text-gray-900 mb-2"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Location
              </h3>
              <p className="text-gray-600">
                Global Delivery Available
              </p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="text-center">
            <a
              href="https://wa.me/2348123788854"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105" >
              <FaWhatsapp className="w-6 h-6" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>


      {/* Personalized Services Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }} >
            Personalized Services
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Beyond our products, we offer personalized coaching and consultancy services. Let us help you create a custom hair care routine tailored to your unique needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hair Care Coaching */}
            <div className="bg-linear-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-lg">
              <h3 
                className="text-2xl md:text-3xl font-bold text-amber-500 mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Hair Care Coaching
              </h3>
              <p className="text-gray-700 leading-relaxed">
                One-on-one sessions to understand your hair type, challenges, and goals. Get expert recommendations for your perfect routine.
              </p>
            </div>

            {/* Beauty Consultancy */}
            <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
              <h3 
                className="text-2xl md:text-3xl font-bold text-emerald-700 mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                Beauty Consultancy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive beauty advice to help you unlock your full potential. From product selection to styling tips.
              </p>
            </div>
          </div>
        </div>
      </section>
        </main>
    )

}

export default Page;