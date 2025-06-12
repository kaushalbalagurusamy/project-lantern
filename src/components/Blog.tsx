
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
        
        {blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">Articles coming soon!</p>
            <p className="text-gray-500">Check back later for the latest insights on debate coaching and techniques.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-pastel-pink-light text-gray-700 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-pastel-blue transition-colors duration-200">
                    <Link to={`/article/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link 
                      to={`/article/${post.id}`}
                      className="text-pastel-blue hover:text-pastel-pink font-semibold transition-colors duration-200"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link 
            to="/articles" 
            className="inline-flex items-center px-6 py-3 border-2 border-pastel-blue text-pastel-blue hover:bg-pastel-blue hover:text-white rounded-full font-semibold transition-all duration-300"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
