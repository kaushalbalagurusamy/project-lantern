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
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-blue p-1 shadow-lg">
                <img src="/lovable-uploads/profile-photo.jpg" alt="Professional headshot - Debate Coach" className="w-full h-full rounded-full object-cover object-[center_20%] bg-white" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pastel-pink mb-2">100+</div>
                <div className="text-gray-600">Students Coached</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-pastel-blue mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pastel-pink-light text-gray-700 rounded-full text-sm">Policy Debate</span>
                <span className="px-3 py-1 bg-pastel-blue-light text-gray-700 rounded-full text-sm">Lincoln-Douglas</span>
                <span className="px-3 py-1 bg-pastel-pink-light text-gray-700 rounded-full text-sm">Public Forum</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Experience</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Top 10 Finish in Lincoln Douglas Nationally | Lexington HS (2017)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  UC Berkeley Engineering BS
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  10+ Years of Coaching Strategic Communication for Elite CEOs of $100M+ Companies and Top Ranked Debaters
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Former Head Coach @ Mission San Jose and Boston Latin
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  TOC | NDCA | NCFL | NSDA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;