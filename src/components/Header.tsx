
import React from 'react';
const Header = () => {
  return <header className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=200&fit=crop&crop=face" alt="Professional headshot - Debate Coach" className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-pastel-pink shadow-lg" />
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Elite Debate
            <span className="block text-transparent bg-gradient-to-r from-pastel-pink to-pastel-blue bg-clip-text py-[4px]">
              Coaching
            </span>
          </h1>
          
          {/* Subtitle */}
          
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking" className="bg-gradient-to-r from-pastel-pink to-pastel-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">Free Demo</a>
            <a href="#about" className="border-2 border-pastel-blue text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pastel-blue-light transition-all duration-300">
              Learn More
            </a>
            <a href="#insights" className="border-2 border-pastel-pink text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pastel-pink-light transition-all duration-300">
              View Insights
            </a>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
