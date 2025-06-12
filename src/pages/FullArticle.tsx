
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const FullArticle = () => {
  const { id } = useParams<{ id: string }>();

  // Article data
  const articles = {
    "1": {
      title: "The Identity Model: From Limited to Unlimited",
      content: `We start from limited identifications rooted in self-centric concerns, security and survival. In early development, our sense of self is narrowly focused on what keeps us alive and comfortable. This basic orientation shapes how we perceive the world and defines the boundaries of our initial identity.

As we take in impressions of reality and save these projections as memories, we form an ever-tighter web around ourselves. Each new experience is woven into our mental tapestry, reinforcing the filters through which we interpret subsequent events. Over time, this network of memories becomes the architecture of our personal worldview.

The symbolic systems of logic, math, music and language that we learn at a young age give us powerful tools for understanding—but they also become the intellectual straitjacket we wear throughout our lives. These abstract frameworks organize our thinking and communication, yet they can constrain our ability to perceive what lies beyond familiar patterns and established definitions.

Yet there is always a longing for the unlimited, an inclusive boundlessness within us that these fixed identities cannot fully satisfy. Even as we rely on our learned systems to make sense of the world, we feel a persistent pull toward something greater—an openness and freedom that transcends the confines of our constructed selves.

Those moments when we glimpse that boundlessness are deeply empowering. We feel truly alive, liberated from the narrow web of our habitual perceptions. In those flashes of expansive awareness, we sense the potential for growth beyond any single identity.

For many people, questioning formative assumptions through debate provides a taste of this experience. Challenging our own glossaries and those of others forces us to step outside our comfort zones and explore new conceptual territory.

This is the process of growth: a continual movement from limited to unlimited. By confronting and expanding the boundaries of our identities, we open ourselves to ever-larger bubbles of possibility.`,
      date: "December 12, 2024",
      readTime: "4 min read",
      category: "Philosophy",
      tags: ["identity", "growth", "consciousness", "debate"]
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
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
                This article doesn't exist.
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
  }

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

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Article Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <span className="px-4 py-2 bg-pastel-pink-light text-gray-700 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center space-x-4 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {article.readTime}
                </div>
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <span key={tag} className="flex items-center text-sm bg-pastel-blue-light text-gray-600 px-3 py-1 rounded-full">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Article Body */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          
          {/* Article Footer */}
          <div className="p-8 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <Link 
                to="/articles" 
                className="flex items-center text-pastel-blue hover:text-pastel-pink font-semibold transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Articles
              </Link>
              <div className="text-sm text-gray-500">
                Published on {article.date}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FullArticle;
