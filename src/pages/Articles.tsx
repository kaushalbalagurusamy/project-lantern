
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowLeft, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Article data
  const allBlogPosts = [
    {
      id: "1",
      title: "The Identity Model: From Limited to Unlimited",
      excerpt: "We start from limited identifications rooted in self-centric concerns, security and survival. Explore the journey of growth from constrained identity to boundless possibility.",
      date: "December 12, 2024",
      readTime: "4 min read",
      category: "Philosophy",
      tags: ["identity", "growth", "consciousness", "debate"],
      content: `We start from limited identifications rooted in self-centric concerns, security and survival. In early development, our sense of self is narrowly focused on what keeps us alive and comfortable. This basic orientation shapes how we perceive the world and defines the boundaries of our initial identity.

As we take in impressions of reality and save these projections as memories, we form an ever-tighter web around ourselves. Each new experience is woven into our mental tapestry, reinforcing the filters through which we interpret subsequent events. Over time, this network of memories becomes the architecture of our personal worldview.

The symbolic systems of logic, math, music and language that we learn at a young age give us powerful tools for understanding—but they also become the intellectual straitjacket we wear throughout our lives. These abstract frameworks organize our thinking and communication, yet they can constrain our ability to perceive what lies beyond familiar patterns and established definitions.

Yet there is always a longing for the unlimited, an inclusive boundlessness within us that these fixed identities cannot fully satisfy. Even as we rely on our learned systems to make sense of the world, we feel a persistent pull toward something greater—an openness and freedom that transcends the confines of our constructed selves.

Those moments when we glimpse that boundlessness are deeply empowering. We feel truly alive, liberated from the narrow web of our habitual perceptions. In those flashes of expansive awareness, we sense the potential for growth beyond any single identity.

For many people, questioning formative assumptions through debate provides a taste of this experience. Challenging our own glossaries and those of others forces us to step outside our comfort zones and explore new conceptual territory.

This is the process of growth: a continual movement from limited to unlimited. By confronting and expanding the boundaries of our identities, we open ourselves to ever-larger bubbles of possibility.`
    },
    {
      id: "2",
      title: "Synchronizing Glossaries: Aligning Judge and Debater Frameworks",
      excerpt: "Presenting in debate is inherently asymmetrical: you project claims without the benefit of direct, haptic feedback from your audience. Learn how to align with judge frameworks for deeper resonance.",
      date: "December 13, 2024",
      readTime: "5 min read",
      category: "Debate Strategy",
      tags: ["debate", "communication", "strategy", "frameworks"],
      content: `Presenting in debate is inherently asymmetrical: you project claims without the benefit of direct, haptic feedback from your audience. Only about seven percent of communication is carried by the words you speak; the rest—tone, body language, eye contact—conveys the bulk of your message. At first glance, this imbalance seems unfair, but it reflects a deeper dynamic rooted in the identity model.

When we communicate, listeners reverse-engineer our core identities and the "size" of our mental bubble from every available data point. They unconsciously scan our expressions, gestures, and vocal inflections, weaving these impressions into a picture of who we are and what we believe. That picture is filtered through their own glossary—their memories and internal definitions—so every cue is interpreted in light of pre-existing mental frameworks.

As debaters, we must actively infer a judge's identifications by leveraging every resource at our disposal: public profiles, social media cues, conversational exchanges, or even known paradigms they favor. This is not merely about crafting arguments that superficially appeal; it's about resonating at the identity level. Even when both sides adopt a judge's preferred topic or domain, deeper biases and default assumptions continue to shape how evidence and logic are weighed.

This perspective also sheds light on why "winning on the tech flow" can feel trivial. Technical prowess alone does not secure victory; it is alignment with the judge's reference frame that empowers certain arguments. Judges reward positions that gently stretch—or comfortably fit within—their existing bubble, elevating arguments that make them feel intellectually competent and affirmed in their worldview.

By perceiving and synchronizing glossaries, you transform debate from a unilateral presentation into a collaborative exploration of ideas. You guide judges into a shared conceptual space where your definitions and priorities intersect, ensuring that your arguments are not only heard but genuinely integrated into the lenses they use to judge.`
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
