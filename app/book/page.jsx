"use client";
import React, { useState } from "react";
import { FaUser, FaComments, FaCalendarCheck } from "react-icons/fa";

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    hairType: '',
    mainConcern: '',
    additionalMessage: ''
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
    
    // Create WhatsApp message
    const message = `
Hello! I'd like to book a free consultation.

*Full Name:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Preferred Date:* ${formData.preferredDate}
*Preferred Time:* ${formData.preferredTime}
*Hair Type:* ${formData.hairType}
*Main Concern:* ${formData.mainConcern}
*Additional Message:* ${formData.additionalMessage}
    `.trim();

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/2348123788854?text=${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, '_blank');
  };

  const whatToExpect = [
    {
      icon: <FaUser className="w-8 h-8" />,
      title: "Personalized Assessment",
      description: "Our experts will assess your hair type, texture, and specific concerns to create a customized care plan."
    },
    {
      icon: <FaComments className="w-8 h-8" />,
      title: "Product Recommendations",
      description: "Get tailored product suggestions based on your unique hair needs and goals."
    },
    {
      icon: <FaCalendarCheck className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Receive a complete hair care routine and ongoing guidance to help you achieve your hair goals."
    }
  ];

  return (
     <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/14.jpg"
            alt="Book Consultation"
            className="w-full h-full object-cover"/>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Book Your Free Consultation
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Get personalized hair care advice from our experts
          </p>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            What to Expect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatToExpect.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-emerald-700 rounded-full flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                </div>
                <h3 
                  className="text-xl md:text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100% Free Consultation Banner */}
      <section className="py-12 md:py-16 px-6 md:px-10 bg-emerald-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }} >
              100% Free Consultation
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This consultation is completely free with no obligation to purchase. We're here to help you unlock your hair's full potential!
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Your Session Form */}
      <section className="py-12 md:py-20 px-6 md:px-10 bg-linear-to-br from-white to-emerald-50">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: 'Poppins, sans-serif' }}>
            Schedule Your Session
          </h2>

          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
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

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (234) 567-8900"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"/>
            </div>

            {/* Preferred Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"/>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Preferred Time <span className="text-red-500">*</span>
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100">
                  <option value="">Select time</option>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="1:00 PM">1:00 PM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="3:00 PM">3:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                </select>
              </div>
            </div>

            {/* Hair Type */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Hair Type <span className="text-red-500">*</span>
              </label>
              <select
                name="hairType"
                value={formData.hairType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100">
                <option value="">Select your hair type</option>
                <option value="Type 1 - (Straight)">Type 1 - (Straight)</option>
                <option value="Type 2 - (Wavy)">Type 2 - (Wavy)</option>
                <option value="Type 3 - (Curly)">Type 3 - (Curly)</option>
                <option value="Type 4 - (Coily/Kinky)">Type 4 - (Coily/Kinky)</option>
                <option value="Not Sure">Not Sure</option>
              </select>
            </div>

            {/* Main Hair Concerns */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Main Hair Concerns <span className="text-red-500">*</span>
              </label>
              <select
                name="mainConcern"
                value={formData.mainConcern}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100" >
                <option value="">Select main concern</option>
                <option value="Dryness">Dryness</option>
                <option value="Hair Loss/Thinning">Hair Loss/Thinning</option>
                <option value="Breakage">Breakage</option>
                <option value="Scalp Issues">Scalp Issues</option>
                <option value="Growth">Growth</option>
                <option value="Damage">Damage</option>
                <option value="General Maintenance">General Maintenance</option>
              </select>
            </div>

            {/* Additional Message */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Message
              </label>
              <textarea
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleChange}
                rows="4"
                placeholder="Tell us more about your hair journey and goals..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-4 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: 'Poppins, sans-serif' }} >
              Book Free Consultation
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              By submitting this form, you'll be redirected to WhatsApp to confirm your appointment.
            </p>
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

export default ConsultationPage;