import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Khiana White</h1>
        <p className="text-2xl mb-6">Aspiring Brand Ambassador & Influencer</p>
        <a href="#contact" className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-100">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;