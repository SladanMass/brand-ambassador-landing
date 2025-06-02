import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Replace with your images */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            Campaign 1
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            Campaign 2
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            Campaign 3
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;