
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Elite Debate Coaching</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering the next generation of debate champions through personalized coaching and proven strategies.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-pastel-pink transition-colors duration-200">About</a></li>
              <li><a href="#blog" className="hover:text-pastel-pink transition-colors duration-200">Blog</a></li>
              <li><a href="#booking" className="hover:text-pastel-pink transition-colors duration-200">Book Session</a></li>
              <li><a href="#" className="hover:text-pastel-pink transition-colors duration-200">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:coach@example.com" className="hover:text-pastel-blue transition-colors duration-200">coach@example.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-pastel-blue transition-colors duration-200">(123) 456-7890</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors duration-200">LinkedIn</a></li>
              <li><a href="#" className="hover:text-pastel-blue transition-colors duration-200">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Elite Debate Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
