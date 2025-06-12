import React from 'react';
const About = () => {
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pastel-pink-light to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Your Coach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Competition Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Former national debate champion with 10+ years coaching experience, helping students reach finals in NSDA tournaments. My competitive background spans Policy Debate, Lincoln-Douglas, and Public Forum, with multiple state and national recognition.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Coaching Philosophy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I believe every student has unique strengths that can be developed through personalized coaching. My approach combines rigorous analytical training with confidence-building techniques to help debaters excel both in competition and in life.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pastel-pink mb-2">150+</div>
                <div className="text-gray-600">Students Coached</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pastel-blue mb-2">85%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Experience</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  National Speech & Debate Association Champion
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  3x State Championship Winner
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Tournament of Champions Qualifier
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Master's in Communications & Rhetoric
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pastel-pink-light text-gray-700 rounded-full text-sm">Policy Debate</span>
                <span className="px-3 py-1 bg-pastel-blue-light text-gray-700 rounded-full text-sm">Lincoln-Douglas</span>
                <span className="px-3 py-1 bg-pastel-pink-light text-gray-700 rounded-full text-sm">Public Forum</span>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;