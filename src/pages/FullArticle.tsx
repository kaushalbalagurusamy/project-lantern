
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const FullArticle = () => {
  const { id } = useParams<{ id: string }>();

  // Empty articles object - ready for real content
  const articles: Record<string, any> = {};

  const article = articles[id as keyof typeof articles];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pastel-blue-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/articles" className="flex items-center text-pastel-blue hover:text-pastel-pink transition-colors duration-200 mb-4">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Articles
          </Link>
        </div>
      </div>

      {/* Article Not Found */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Article Not Found</h1>
            <p className="text-gray-600 mb-8">
              This article doesn't exist yet. Articles are coming soon!
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link 
                to="/articles" 
                className="flex items-center text-pastel-blue hover:text-pastel-pink font-semibold transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Link>
              <Link 
                to="/" 
                className="bg-gradient-to-r from-pastel-pink to-pastel-blue text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullArticle;
