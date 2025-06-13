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
    },
    "2": {
      title: "Synchronizing Glossaries: Aligning Judge and Debater Frameworks",
      content: `Presenting in debate is inherently asymmetrical: you project claims without the benefit of direct, haptic feedback from your audience. Only about seven percent of communication is carried by the words you speak; the rest—tone, body language, eye contact—conveys the bulk of your message. At first glance, this imbalance seems unfair, but it reflects a deeper dynamic rooted in the identity model.

When we communicate, listeners reverse-engineer our core identities and the "size" of our mental bubble from every available data point. They unconsciously scan our expressions, gestures, and vocal inflections, weaving these impressions into a picture of who we are and what we believe. That picture is filtered through their own glossary—their memories and internal definitions—so every cue is interpreted in light of pre-existing mental frameworks.

As debaters, we must actively infer a judge's identifications by leveraging every resource at our disposal: public profiles, social media cues, conversational exchanges, or even known paradigms they favor. This is not merely about crafting arguments that superficially appeal; it's about resonating at the identity level. Even when both sides adopt a judge's preferred topic or domain, deeper biases and default assumptions continue to shape how evidence and logic are weighed.

This perspective also sheds light on why "winning on the tech flow" can feel trivial. Technical prowess alone does not secure victory; it is alignment with the judge's reference frame that empowers certain arguments. Judges reward positions that gently stretch—or comfortably fit within—their existing bubble, elevating arguments that make them feel intellectually competent and affirmed in their worldview.

By perceiving and synchronizing glossaries, you transform debate from a unilateral presentation into a collaborative exploration of ideas. You guide judges into a shared conceptual space where your definitions and priorities intersect, ensuring that your arguments are not only heard but genuinely integrated into the lenses they use to judge.`,
      date: "December 13, 2024",
      readTime: "5 min read",
      category: "Debate Strategy",
      tags: ["debate", "communication", "strategy", "frameworks"]
    },
    "3": {
      title: "AI Debate Agent Product Spec",
      content: `This product specification outlines an advanced AI-powered debate preparation and analysis tool designed to revolutionize competitive debate training and performance.

**User Interface Layout**

The interface features a three-panel design optimized for debate preparation workflow:
• Left Panel: File navigation, showing folders and prep-bank categories for quick switching
• Middle Panel: Large, multi-window text editor for manual editing and readability of cases, evidence cards, analytics entries, and speech documents  
• Right Panel: Interactive AI Agent window for real-time prompts, suggestions, and research assistance

**Prep Bank Data Types**

The system manages two primary data categories:

*Evidence Management:*
• Operating literature definitions to define scope and identify literature clusters
• Systematic literature reviews (SLRs) and meta-studies, referenced and used as a graph to identify depth searches, niche literature, and new publications
• Mechanistic warranting with detailed source tracking
• Card-based return format with verbatim-style hotkeying for highlighting and minimization
• Author qualifications and study methodology documentation
• Tags serve as labels in the database for easy categorization

*Analytics Framework:*
• Arguments constructed without evidence (e.g., theoretical frameworks, paradigms, value hierarchies)
• Each entry is saved with an editable summary for quick reference
• Searchable theoretical constructs and philosophical positions

**Case Construction System**

The platform provides intelligent case building through:
• Searchable database allowing users to check off and order arguments systematically
• One-click generation of fixed, preset cases for common debate scenarios
• Dynamic adaptation via opponent and judge profiling, leveraging scraped data from paradigms, wikis, social media, and LinkedIn

**In-Round Support Features**

Real-time assistance during competitive rounds includes:
• Live ingestion of voice input or speech documents for instant analysis
• Argument clustering for instantaneous flow tracking and organization
• Case summary and Ask feature for unpacking unfamiliar arguments on the fly
• Live-counter deep research to fetch new evidence cards on demand
• Flow analytics stored in a temporary Round Prep bank, with post-round confirmation for permanent migration

*Speech Document Creation:*
• Mirrors case construction via checklist-driven database fields
• Configurable speech time, extemporaneous time, and words-per-minute (WPM) settings
• Automatic calculation of per-argument read time and display of time used versus total available (speech time minus extemporaneous reserve)

**Post-Round Analysis**

Comprehensive performance evaluation through:
• Moment-by-moment feedback on argument effectiveness and strategic positioning
• Analysis of strategic pivots and their impact on round outcomes
• Opponent tactics identification and counter-strategy suggestions
• Judge Reason-for-Decision (RFD) pattern analysis for future adaptation

This AI Debate Agent represents the next evolution in competitive debate preparation, combining traditional research methods with cutting-edge artificial intelligence to create a comprehensive training and performance platform.`,
      date: "December 14, 2024",
      readTime: "6 min read",
      category: "Technology",
      tags: ["AI", "technology", "debate", "product"]
    }
  };

  const article = articles[id as keyof typeof articles];

  // Helper function to render formatted content
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Handle bold headers (text wrapped in **)
      if (paragraph.includes('**')) {
        const parts = paragraph.split('**');
        return (
          <div key={index} className="mb-6">
            {parts.map((part, partIndex) => {
              if (partIndex % 2 === 1) {
                return <h3 key={partIndex} className="text-xl font-bold text-gray-900 mb-4">{part}</h3>;
              } else if (part.trim()) {
                return <p key={partIndex} className="text-gray-700 leading-relaxed">{part}</p>;
              }
              return null;
            })}
          </div>
        );
      }
      
      // Handle bullet points (lines starting with •)
      if (paragraph.includes('•')) {
        const lines = paragraph.split('\n');
        const bulletPoints = [];
        const regularText = [];
        
        lines.forEach(line => {
          if (line.trim().startsWith('•')) {
            bulletPoints.push(line.trim().substring(1).trim());
          } else if (line.trim()) {
            regularText.push(line.trim());
          }
        });
        
        return (
          <div key={index} className="mb-6">
            {regularText.length > 0 && (
              <div className="mb-4">
                {regularText.map((text, textIndex) => {
                  // Check if this is italic text (wrapped in *)
                  if (text.includes('*') && !text.includes('**')) {
                    const parts = text.split('*');
                    return (
                      <p key={textIndex} className="text-gray-700 leading-relaxed mb-2">
                        {parts.map((part, partIndex) => {
                          if (partIndex % 2 === 1) {
                            return <em key={partIndex}>{part}</em>;
                          }
                          return part;
                        })}
                      </p>
                    );
                  }
                  return <p key={textIndex} className="text-gray-700 leading-relaxed mb-2">{text}</p>;
                })}
              </div>
            )}
            {bulletPoints.length > 0 && (
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                {bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="leading-relaxed">{point}</li>
                ))}
              </ul>
            )}
          </div>
        );
      }
      
      // Handle regular paragraphs
      if (paragraph.trim()) {
        return (
          <p key={index} className="text-gray-700 leading-relaxed mb-6">
            {paragraph}
          </p>
        );
      }
      
      return null;
    });
  };

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
              {renderContent(article.content)}
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
