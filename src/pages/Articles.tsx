
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Empty articles array - ready for real content
  const allBlogPosts: any[] = [];

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery) return allBlogPosts;
    
    const query = searchQuery.toLowerCase();
    return allBlogPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some((tag: string) => tag.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pastel-blue-light">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-pastel-blue hover:text-pastel-pink transition-colors duration-200">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">All Articles</h1>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Section */}
        <div className="mb-12">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, categories, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-3 bg-white border-pastel-blue-light focus:border-pastel-blue"
              />
            </div>
          </div>
          {searchQuery && (
            <p className="text-center mt-4 text-gray-600">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </p>
          )}
        </div>

        {/* Articles Grid or Empty State */}
        {allBlogPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Yet</h3>
              <p className="text-gray-600 mb-8">
                Articles are coming soon! Check back later for the latest insights on debate coaching, techniques, and strategies.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pastel-pink to-pastel-blue text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map(post => (
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
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs bg-pastel-blue-light text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
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

            {filteredArticles.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your search.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-pastel-blue hover:text-pastel-pink font-semibold"
                >
                  Clear search
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Articles;
