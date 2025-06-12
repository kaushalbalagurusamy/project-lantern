
import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts: any[] = [];

  return (
    <section id="insights" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-pastel-blue-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-blue mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-6">Articles coming soon!</p>
          <p className="text-gray-500">Check back later for the latest insights on debate coaching and techniques.</p>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/articles" 
            className="inline-flex items-center px-6 py-3 bg-pastel-pink hover:bg-pastel-pink text-white hover:shadow-lg rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
