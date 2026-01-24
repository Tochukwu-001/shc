"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    yourMessage: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.preferredDate || !formData.preferredTime || !formData.hairType || !formData.mainConcern) {
      alert('Please fill in all required fields');
      return;
    }
    
    const message = `
   *Name:* ${formData.name}
   *Email:* ${formData.email}
   *Subject:* ${formData.subject}
   *Message:* ${formData.message}
    `.trim();

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/2348123788854?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
     <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/16.jpg"
            alt="Book Consultation"
            className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
     <section className="py-16 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-7 h-7 text-gray-700" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-emerald-700 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }}>
                Email
              </h3>
              <a href="mailto:sarelholisticcare@gmail.com" className="text-gray-600 hover:text-emerald-700 block">
                sarelholisticcare@gmail.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <FaPhone className="w-7 h-7 text-teal-700" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-emerald-800 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Phone
              </h3>
              <a href="tel:+2348123788854" className="text-gray-600 hover:text-emerald-700 block mb-2">
                +234 812-378-8854
              </a>
              <p className="text-gray-500 text-sm">Mon-Sat: 9AM - 6PM</p>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-7 h-7 text-gray-700" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-emerald-700 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Location
              </h3>
              <p className="text-gray-600">Global Delivery</p>
              <p className="text-gray-600">Worldwide Shipping</p>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
                  <FaClock className="w-7 h-7 text-teal-700" />
                </div>
              </div>
              <h3 
                className="text-2xl font-bold text-emerald-800 mb-3"
                style={{ fontFamily: 'Poppins, sans-serif' }} >
                Business Hours
              </h3>
              <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
              <p className="text-gray-600">Sat: 10AM - 4PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Your Session Form */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Send Us a Message
          </h2>

          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"/>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"/>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                name="mainConcern"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" >
                <option value="">Select a subject</option>
                <option value="Product Inquiry">Product Inquiry</option>
                <option value="Order Support">Order Support</option>
                <option value="Consultation">Consultation</option>
                <option value="Partnership">Partnership</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Your Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Your Message
              </label>
              <textarea
                name="additionalMessage"
                value={formData.YourMessage}
                onChange={handleChange}
                rows="6"
                placeholder="How can we help you?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif' }} >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
       <section className="py-14 md:py-18 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Have a question about our products or services? We're here to help! Fill out the form or reach out to us directly through any of the methods below.
          </p>
        </div>
      </section>

      {/* Instant Support Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-white mt-1">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-teal-100 to-teal-200 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <FaWhatsapp className="w-8 h-8 text-emerald-700 shrink-0 mt-1" />
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-bold text-gray-700 mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Instant Support via WhatsApp
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Get immediate assistance by chatting with us on WhatsApp. We respond quickly to help with your inquiries.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h3 
              className="text-2xl md:text-3xl font-bold text-gray-700 mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }} >
              FAQs
            </h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>What is your shipping policy?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>How do I choose the right products?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>Do you offer international shipping?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-700 font-bold">•</span>
                <span>How can I track my order?</span>
              </li>
            </ul>
            <p className="text-gray-600">
              For detailed answers, please visit our FAQ section or contact us directly.
            </p>
          </div>
        </div>
      </section>

      {/* Business Inquiries Section */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-amber-100 to-amber-200 rounded-2xl p-8 md:p-10">
            <h3 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }} >
              Business Inquiries
            </h3>
            <p className="text-gray-700 mb-3">
              For wholesale, partnerships, or media inquiries:
            </p>
            <a 
              href="mailto:sarelholisticcare@gmail.com" 
              className="text-emerald-700 font-semibold hover:text-emerald-800 text-lg" >
              sarelholisticcare@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-teal-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our customer support team is always ready to assist you with any concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+2348123788854"
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg" >
              Call Us Now
            </a>
            <a
              href="https://wa.me/2348123788854"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg">
              <FaWhatsapp className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
      `}</style>
    </main>
  );
  };

export default Page;