import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Social Media Promotion</h3>
            <p>Engaging content creation for Instagram, TikTok, and more.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Event Appearances</h3>
            <p>Representing your brand at events with charisma.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Content Collaboration</h3>
            <p>Partnering to create authentic branded content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;