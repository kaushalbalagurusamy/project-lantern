
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Expanded blog posts data
  const allBlogPosts = [
    {
      id: 1,
      title: "Mastering Cross-Examination: Advanced Techniques for Competitive Debaters",
      excerpt: "Learn how to turn cross-examination from a defensive moment into your strongest offensive weapon...",
      content: "Cross-examination is often seen as the most challenging part of competitive debate, but with the right techniques, it can become your most powerful tool. In this comprehensive guide, we'll explore advanced strategies that will transform how you approach cross-ex.",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Strategy",
      tags: ["cross-examination", "strategy", "competitive debate", "questioning techniques"]
    },
    {
      id: 2,
      title: "Building Confidence: Overcoming Speech Anxiety in High-Stakes Debates",
      excerpt: "Practical techniques to manage nerves and project confidence during tournament rounds...",
      content: "Speech anxiety affects even the most experienced debaters. The key is not to eliminate nerves entirely, but to channel that energy into powerful, confident delivery. Here are proven techniques used by national champions.",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Mental Game",
      tags: ["confidence", "anxiety", "performance", "mental preparation"]
    },
    {
      id: 3,
      title: "Research Methods That Win: Efficient Evidence Gathering for Policy Debate",
      excerpt: "Streamline your research process and build stronger cases with these proven methods...",
      content: "Effective research is the foundation of successful policy debate. Learn how to efficiently gather, organize, and deploy evidence that wins rounds. This systematic approach will save you hours while improving your case quality.",
      date: "December 1, 2024",
      readTime: "7 min read",
      category: "Research",
      tags: ["research", "evidence", "policy debate", "preparation"]
    },
    {
      id: 4,
      title: "The Art of Flowing: Note-Taking Systems for Peak Performance",
      excerpt: "Master the essential skill that separates good debaters from great ones...",
      content: "Flowing is more than just taking notes - it's about creating a roadmap of the debate that allows you to track arguments, identify drops, and construct winning rebuttals. Master these techniques to elevate your performance.",
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Fundamentals",
      tags: ["flowing", "note-taking", "fundamentals", "organization"]
    },
    {
      id: 5,
      title: "Advanced Rebuttals: Turning Defense into Offense",
      excerpt: "Learn how to transform defensive arguments into winning offensive strategies...",
      content: "The best debaters don't just defend - they turn every attack into a launching pad for their own offense. This advanced guide shows you how to flip the script in any debate round.",
      date: "November 25, 2024",
      readTime: "6 min read",
      category: "Strategy",
      tags: ["rebuttals", "offense", "defense", "strategy"]
    },
    {
      id: 6,
      title: "Public Forum Debate: Mastering the Art of Persuasion",
      excerpt: "Techniques specific to Public Forum that will make your arguments more compelling...",
      content: "Public Forum debate requires a unique blend of logical argumentation and persuasive communication. Learn the specific techniques that make PF debaters successful in front of lay judges.",
      date: "November 22, 2024",
      readTime: "5 min read",
      category: "Format-Specific",
      tags: ["public forum", "persuasion", "lay judges", "communication"]
    }
  ];

  // Filter articles based on search query
  const filteredArticles = useMemo(() => {
    if (!searchQuery) return allBlogPosts;
    
    const query = searchQuery.toLowerCase();
    return allBlogPosts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
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

        {/* Articles Grid */}
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
      </div>
    </div>
  );
};

export default Articles;
