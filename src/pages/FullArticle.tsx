
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const FullArticle = () => {
  const { id } = useParams<{ id: string }>();

  // Article data (in a real app, this would come from an API or database)
  const articles = {
    "1": {
      title: "Mastering Cross-Examination: Advanced Techniques for Competitive Debaters",
      content: `Cross-examination is often seen as the most challenging part of competitive debate, but with the right techniques, it can become your most powerful tool. In this comprehensive guide, we'll explore advanced strategies that will transform how you approach cross-ex.

## The Foundation: Preparation and Strategy

Before you even step into the debate round, your cross-examination success is largely determined by your preparation. The best cross-examiners don't just ask random questions—they have a clear strategic vision.

### 1. Map Your Questions to Your Arguments

Every question you ask should serve a purpose in advancing your case or undermining your opponent's. Start by identifying the key weaknesses in your opponent's position and craft questions that expose these vulnerabilities.

### 2. Create Question Trees

Don't just prepare individual questions—prepare follow-up sequences. If your opponent gives you answer A, where do you go next? What if they give you answer B? This kind of preparation prevents you from being caught off-guard.

## Advanced Questioning Techniques

### The Commitment Strategy

One of the most powerful techniques is getting your opponent to commit to a position that you can later exploit. Ask broad questions first, then narrow down to specifics.

**Example:**
- "Do you agree that economic policies should prioritize long-term stability?"
- "So you'd support policies that might have short-term costs for long-term benefits?"
- "Then why does your plan abandon the current system that economists say will stabilize in 5 years?"

### The Contradiction Reveal

Look for internal contradictions in your opponent's case. Cross-examination is the perfect time to highlight these inconsistencies.

### The Evidence Challenge

Don't just accept your opponent's evidence at face value. Ask about:
- The date of the evidence
- The qualifications of the author
- Whether the evidence actually says what they claim

## Delivery and Presence

Your delivery during cross-examination is just as important as your questions. Here are key techniques:

### Control the Pace

You set the rhythm of cross-examination. Don't let your opponent take long pauses or give speeches. If they start giving a long answer, politely interrupt: "I'm sorry, but could you just answer yes or no?"

### Stay Calm Under Pressure

Your opponent may try to fluster you with aggressive responses or non-answers. Maintain your composure and redirect: "That doesn't answer my question. Let me ask again..."

### Use Strategic Silence

Sometimes the most powerful moment in cross-examination is when you get the answer you wanted and simply pause, letting it sink in before moving on.

## Common Mistakes to Avoid

### 1. Asking Questions You Don't Know the Answer To

This is debate 101, but it bears repeating. Never ask a question unless you're prepared for any reasonable answer.

### 2. Getting Into Arguments

Cross-examination is not a time for debate. You ask questions, they give answers. If they try to turn it into a debate, redirect firmly but politely.

### 3. Asking Too Many Questions

Quality over quantity. It's better to get three devastating admissions than to ask fifteen mediocre questions.

## Practice Exercises

To master these techniques, try these practice exercises:

1. **Question Mapping**: Take a practice case and map out question trees for the major arguments
2. **Commitment Practice**: Practice getting partners to commit to positions they didn't intend to take
3. **Pressure Drilling**: Have partners give you difficult or evasive answers and practice redirecting

## Conclusion

Cross-examination is an art that requires both preparation and adaptability. Master these advanced techniques, and you'll find that cross-ex becomes not just a period you survive, but a period where you thrive and gain decisive advantages.

Remember: the goal isn't just to ask good questions—it's to use the answers to build an unshakeable narrative that supports your case and undermines your opponent's.`,
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Strategy",
      tags: ["cross-examination", "strategy", "competitive debate", "questioning techniques"]
    },
    "2": {
      title: "Building Confidence: Overcoming Speech Anxiety in High-Stakes Debates",
      content: `Speech anxiety affects even the most experienced debaters. The key is not to eliminate nerves entirely, but to channel that energy into powerful, confident delivery. Here are proven techniques used by national champions.

## Understanding Speech Anxiety

First, let's normalize something: feeling nervous before and during debates is completely normal. Even the most successful debaters experience anxiety. The difference is in how they manage and channel these feelings.

### The Physiology of Nerves

When you're nervous, your body releases adrenaline. This can cause:
- Increased heart rate
- Sweaty palms
- Shaky voice
- Racing thoughts

The goal isn't to eliminate these responses—it's to work with them.

## Pre-Round Preparation Techniques

### 1. Power Posing

Before your round, spend 2 minutes in a "power pose"—stand tall, hands on hips, chin up. Research shows this actually changes your hormone levels, increasing confidence hormones and decreasing stress hormones.

### 2. Breathing Exercises

Practice the 4-7-8 technique:
- Inhale for 4 counts
- Hold for 7 counts  
- Exhale for 8 counts
- Repeat 3-4 times

This activates your parasympathetic nervous system, naturally calming your body.

### 3. Visualization

Spend 5 minutes visualizing yourself delivering your speech confidently. See yourself speaking clearly, the judges nodding, your arguments landing powerfully. Mental rehearsal is incredibly effective.

## During-Round Strategies

### Ground Yourself

If you feel anxiety rising during the round:
1. Feel your feet on the ground
2. Take a deep breath
3. Remind yourself: "I belong here"

### Use Your Nervousness

That energy you feel? It's not just anxiety—it's excitement. Reframe it: "I'm not nervous, I'm energized and ready to perform."

### Focus on Your Message

When you focus intensely on communicating your ideas rather than on how you're being perceived, anxiety naturally decreases.

## Building Long-Term Confidence

### 1. Thorough Preparation

Confidence comes from competence. The better prepared you are, the more confident you'll feel. Know your cases inside and out.

### 2. Practice in High-Pressure Situations

- Practice in front of mirrors
- Record yourself speaking
- Practice with friends as judges
- Seek out practice rounds with strong opponents

### 3. Positive Self-Talk

Replace negative thoughts:
- Instead of "I'm going to mess up" → "I'm prepared and ready"
- Instead of "Everyone will judge me" → "I have valuable ideas to share"
- Instead of "I'm not good enough" → "I've earned my place here"

## Recovery Techniques

### When You Make a Mistake

Everyone makes mistakes in debates. The key is how you recover:

1. **Don't dwell on it** - acknowledge it briefly if necessary and move on
2. **Stay in character** - maintain your confident posture and tone
3. **Use it as fuel** - let it motivate you to deliver the rest of your speech even stronger

### Post-Round Reflection

After each round, regardless of outcome:
- Identify one thing you did well
- Identify one area for improvement
- Avoid harsh self-criticism

## Advanced Confidence Techniques

### The Anchor Technique

Develop a physical "anchor" - perhaps touching your thumb to your index finger - while visualizing your most confident speaking moment. Practice this association repeatedly. Then, use this anchor during debates to instantly access that confident state.

### Perspective Shifting

Remember that judges want you to succeed. They're not hoping you'll fail—they're hoping to hear great arguments and be persuaded by your ideas.

## Building Your Support System

### Find Your Community

Connect with other debaters who can relate to your experiences. Having a support network of people who understand the unique pressures of competitive debate is invaluable.

### Work with Coaches

A good coach can help you identify specific anxiety triggers and develop personalized strategies for managing them.

## Conclusion

Building confidence in debate is a journey, not a destination. Every round is an opportunity to practice these techniques and grow stronger. Remember: your nervousness is not a weakness—it's a sign that you care deeply about performing well.

The most confident debaters aren't those who never feel nervous—they're those who feel nervous and speak powerfully anyway.

Start implementing these techniques today, and watch as your confidence grows with each round you debate.`,
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Mental Game",
      tags: ["confidence", "anxiety", "performance", "mental preparation"]
    },
    "3": {
      title: "Research Methods That Win: Efficient Evidence Gathering for Policy Debate",
      content: `Effective research is the foundation of successful policy debate. Learn how to efficiently gather, organize, and deploy evidence that wins rounds. This systematic approach will save you hours while improving your case quality.

## The Research Mindset

Before diving into specific techniques, it's crucial to develop the right mindset about research. Research isn't just about finding evidence—it's about building a comprehensive understanding of the topic that allows you to adapt to any argument your opponents might make.

### Quality Over Quantity

Many debaters make the mistake of thinking more evidence equals better preparation. In reality, 10 high-quality, well-understood pieces of evidence will serve you better than 100 mediocre cards you barely comprehend.

## The Systematic Approach

### 1. Start with the Big Picture

Before diving into specific evidence, spend time understanding the broad landscape of your topic:

- What are the major schools of thought?
- What are the primary areas of disagreement among experts?
- What are the key terms and concepts you need to understand?

### 2. Create a Research Map

Organize your research around key questions:
- What is the current status quo?
- What are the major problems/advantages with the status quo?
- What are the primary alternative approaches?
- What are the likely outcomes of change vs. no change?

## Source Evaluation

### Hierarchy of Sources

Not all sources are created equal. Here's a rough hierarchy from most to least credible:

1. **Peer-reviewed academic journals**
2. **Government reports and official statistics**
3. **Reports from reputable think tanks**
4. **Major newspaper analysis pieces**
5. **Opinion pieces by recognized experts**

### Key Questions for Source Evaluation

- **Who is the author?** What are their credentials and potential biases?
- **When was this published?** Is the information current?
- **What type of publication is this?** Academic journal? News article? Blog post?
- **What evidence does the author provide?** Do they cite their sources?

## Efficient Research Techniques

### The Snowball Method

Start with one high-quality source, then follow its citations to find more sources. This helps you quickly identify the most important voices in a debate.

### Keyword Mastery

Develop a comprehensive list of keywords and phrases related to your topic. Don't just search for obvious terms—think about synonyms, technical terms, and related concepts.

### Database Efficiency

Learn to use academic databases effectively:
- Use Boolean operators (AND, OR, NOT)
- Learn advanced search features
- Set up alerts for new publications on your topics

## Organization Systems

### The Card System

Whether digital or physical, develop a consistent system for organizing your evidence:

- **Unique identifiers** for each piece of evidence
- **Clear tags** indicating the argument each piece supports
- **Quality ratings** so you know which evidence to use first
- **Source information** for easy citation

### Digital Tools

Consider using tools like:
- **Zotero** for source management
- **Notion** or **Obsidian** for note-taking and organization
- **Google Drive** with clear folder structures

## Advanced Research Strategies

### The Devil's Advocate Approach

Don't just research arguments that support your position. Actively seek out the strongest arguments against your case. This serves two purposes:
1. You'll be prepared for opponent arguments
2. You'll find evidence that can help you answer those arguments

### The Expert Network

Identify the 5-10 most prominent experts on your topic. Follow their recent publications, speeches, and interviews. Understanding their perspectives will give you insight into the cutting edge of the debate.

### The Historical Perspective

Many policy debates have historical precedents. Research similar policies implemented in the past:
- What were the results?
- What can we learn from previous attempts?
- How is the current situation similar or different?

## Research Ethics and Best Practices

### Accurate Representation

Never misrepresent what a source says. It's tempting to stretch evidence to fit your arguments, but this undermines your credibility and is ethically wrong.

### Understanding Context

Make sure you understand the full context of any evidence you use. A quote that seems supportive might actually be part of a larger argument that contradicts your position.

### Staying Current

Policy debates often involve rapidly changing situations. Regularly update your research to ensure you're working with current information.

## Turning Research into Arguments

### The Claim-Warrant-Impact Structure

For each piece of evidence, identify:
- **Claim**: What is the author arguing?
- **Warrant**: Why should we believe this claim?
- **Impact**: Why does this claim matter?

### Building Evidence Chains

Strong arguments often require multiple pieces of evidence working together. Practice building logical chains that connect your evidence to your conclusions.

## Common Research Mistakes

### 1. Confirmation Bias

Don't just look for evidence that supports what you already believe. Actively seek out challenging information.

### 2. Over-reliance on Secondary Sources

While news articles and summaries can provide good starting points, make sure to track down primary sources when possible.

### 3. Ignoring Methodology

When using studies or statistics, pay attention to how the research was conducted. Flawed methodology can invalidate even striking results.

## Conclusion

Effective research is a skill that improves with practice. Start with these systematic approaches, but be willing to adapt them to your personal learning style and the specific demands of your topic.

Remember: the goal isn't just to find evidence—it's to develop such a deep understanding of your topic that you can engage with any argument an opponent might make. With this level of preparation, you'll be confident and effective in any round.`,
      date: "December 1, 2024",
      readTime: "7 min read",
      category: "Research",
      tags: ["research", "evidence", "policy debate", "preparation"]
    },
    "4": {
      title: "The Art of Flowing: Note-Taking Systems for Peak Performance",
      content: `Flowing is more than just taking notes - it's about creating a roadmap of the debate that allows you to track arguments, identify drops, and construct winning rebuttals. Master these techniques to elevate your performance.

## What is Flowing?

Flowing is the system of note-taking used in competitive debate to track arguments throughout the round. Unlike regular note-taking, flowing requires you to:

- Track multiple arguments simultaneously
- Note responses and counter-responses
- Identify which arguments have been "dropped" (not responded to)
- Organize information for easy reference during speeches

## The Basic Flow Structure

### Column Layout

Set up your flow with columns representing each speech:
- **1AC** (First Affirmative Constructive)
- **1NC** (First Negative Constructive)  
- **2AC** (Second Affirmative Constructive)
- **2NC** (Second Negative Constructive)
- **1NR** (First Negative Rebuttal)
- **1AR** (First Affirmative Rebuttal)
- **2NR** (Second Negative Rebuttal)
- **2AR** (Second Affirmative Rebuttal)

### Row Organization

Organize rows by major arguments or contentions. This allows you to track how each argument develops throughout the round.

## Flowing Techniques

### Abbreviation Systems

Develop consistent abbreviations for common words and concepts:

**Common Abbreviations:**
- Gov/Govt = Government
- Econ = Economy/Economic
- Env = Environment
- Tech = Technology
- Inc = Increase
- Dec = Decrease
- B/C = Because
- W/ = With
- W/O = Without

### Symbols and Notation

Use symbols to quickly indicate argument relationships:
- **→** = Leads to/causes
- **≠** = Does not equal/is different from
- **+** = Positive effect/advantage
- **-** = Negative effect/disadvantage
- **?** = Questionable claim/need more info
- **!** = Important point
- **X** = Argument dropped/not responded to

## Advanced Flowing Strategies

### The Extension System

When tracking argument extensions, use indentation to show the relationship:

```
Main Argument
  ├─ Initial response
  │   └─ Counter-response
  └─ Alternative response
      └─ Final extension
```

### Color Coding

If using digital tools or multiple pens:
- **Black**: Initial arguments
- **Blue**: Responses/defense
- **Red**: Attacks/offense
- **Green**: Evidence/citations

### The Impact Hierarchy

Mark arguments by their potential impact on the round:
- **★★★** = Round-winning arguments
- **★★** = Significant arguments
- **★** = Minor but relevant points

## Digital vs. Paper Flowing

### Paper Advantages
- No technology failures
- Faster for many people
- Easy to draw connections between arguments
- No battery concerns

### Digital Advantages
- Easy to reorganize information
- Searchable notes
- Can include hyperlinks to evidence
- Easier to share with teammates

### Recommended Digital Tools
- **Notion**: Great for structured note-taking
- **OneNote**: Good for freeform flowing
- **Dedicated debate apps**: Several apps designed specifically for flowing

## Speech-Specific Flowing Tips

### Constructive Speeches
- Focus on getting the overall structure
- Note key evidence and citations
- Identify the main claims and warrants
- Mark important definitions

### Rebuttal Speeches
- Track which arguments are being extended
- Note new evidence being introduced
- Identify strategic choices (what they're going for vs. what they're dropping)
- Pay special attention to impact calculus

### Cross-Examination
- Flow key admissions and clarifications
- Note contradictions or inconsistencies
- Mark questions that weren't answered satisfactorily

## Common Flowing Mistakes

### 1. Trying to Write Everything Down
Flow the arguments, not every word. Focus on:
- The claim being made
- The key warrant
- The source if cited
- The impact

### 2. Getting Behind and Panicking
If you fall behind:
- Focus on the most important arguments
- Leave space to come back and fill in details
- Don't stop flowing entirely

### 3. Not Using Your Flow Strategically
Your flow should help you:
- Identify opponent weaknesses
- Plan your next speech
- Remember what you need to extend
- See the big picture of the round

## Practicing Your Flowing Skills

### Drill Exercises

1. **Speed Flowing**: Practice with fast audio to improve your basic skills
2. **Argument Mapping**: Flow complex academic articles to practice tracking multiple layers of argument
3. **Blind Flowing**: Have someone read you arguments without seeing the text
4. **Flow Analysis**: Review your flows after rounds to identify areas for improvement

### Building Muscle Memory

Like any skill, flowing improves with practice. Aim to flow:
- Practice rounds
- Scrimmages  
- Recorded debates
- Even regular conversations to build speed

## Using Your Flow in Round

### Between Speeches
- Review opponent drops
- Plan your strategy for the next speech
- Identify your strongest arguments
- Note questions for cross-examination

### During Prep Time
- Organize your arguments by importance
- Plan your time allocation
- Identify must-answer arguments
- Prepare impact comparisons

## Adapting to Different Formats

### Policy Debate
- Focus on line-by-line responses
- Track plan texts and counterplan texts exactly
- Note framework arguments carefully

### Public Forum
- Pay attention to summary/final focus strategy
- Track which arguments are being carried through
- Note evidence quality disputes

### Parliamentary Debate
- Flow definitions carefully
- Track points of information
- Note thematic arguments vs. specific responses

## Conclusion

Mastering the art of flowing takes time and practice, but it's one of the most important skills in competitive debate. A good flow doesn't just record what happened in the round—it becomes a strategic tool that helps you win.

Start with the basics: clear organization, consistent abbreviations, and focus on arguments rather than exact words. As you improve, add advanced techniques like impact hierarchies and strategic notation.

Remember: the best flow is one that helps you understand the round clearly and make strategic decisions quickly. Develop a system that works for you, and practice it consistently.

With time and effort, flowing will become second nature, freeing your mind to focus on strategy and argumentation rather than just keeping up with the debate.`,
      date: "November 28, 2024",
      readTime: "6 min read",
      category: "Fundamentals",
      tags: ["flowing", "note-taking", "fundamentals", "organization"]
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-pastel-blue-light flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/articles" className="text-pastel-blue hover:text-pastel-pink font-semibold">
            ← Back to Articles
          </Link>
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
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Article Header */}
            <div className="mb-8">
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

              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map(tag => (
                  <span key={tag} className="flex items-center text-sm bg-pastel-blue-light text-gray-600 px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-semibold text-gray-900 mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                } else if (paragraph.trim() === '') {
                  return <br key={index} />;
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-700 mb-2 ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                } else {
                  return (
                    <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-pastel-blue-light">
              <div className="flex items-center justify-between">
                <Link 
                  to="/articles" 
                  className="flex items-center text-pastel-blue hover:text-pastel-pink font-semibold transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  More Articles
                </Link>
                <Link 
                  to="/#booking" 
                  className="bg-gradient-to-r from-pastel-pink to-pastel-blue text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Coaching
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FullArticle;
