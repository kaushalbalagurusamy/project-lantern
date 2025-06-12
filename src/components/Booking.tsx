import React, { useEffect } from 'react';
const Booking = () => {
  useEffect(() => {
    // Cal.com inline embed initialization
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "15min", {origin:"https://cal.com"});
      
      Cal.ns["15min"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {"layout":"month_view","theme":"light"},
        calLink: "kaushal-balagurusamy-fczdbj/15min",
      });
      
      Cal.ns["15min"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);
    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  return <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Debate Skills?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book your personalized coaching session and start your journey to competitive excellence
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-blue mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Session Types */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-pastel-pink-light to-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Session Options</h3>
              
              <div className="space-y-4">
                <div className="border-l-4 border-pastel-pink pl-4">
                  <h4 className="font-semibold text-gray-800">Initial Consultation</h4>
                  <p className="text-gray-600 text-sm">15 minutes • Free</p>
                  <p className="text-gray-600 text-sm mt-1">Assessment and goal setting</p>
                </div>
                
                <div className="border-l-4 border-pastel-blue pl-4">
                  <h4 className="font-semibold text-gray-800">Individual Session</h4>
                  <p className="text-gray-600 text-sm">60 minutes • $75</p>
                  <p className="text-gray-600 text-sm mt-1">Personalized skill development</p>
                </div>
                
                <div className="border-l-4 border-pastel-pink pl-4">
                  <h4 className="font-semibold text-gray-800">Tournament Prep</h4>
                  <p className="text-gray-600 text-sm">90 minutes • $100</p>
                  <p className="text-gray-600 text-sm mt-1">Intensive competition preparation</p>
                </div>
                
                <div className="border-l-4 border-pastel-blue pl-4">
                  <h4 className="font-semibold text-gray-800">Package Deal</h4>
                  <p className="text-gray-600 text-sm">4 sessions • $270</p>
                  <p className="text-gray-600 text-sm mt-1">Save $30 with monthly package</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pastel-blue-light to-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Personalized skill assessment
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Targeted improvement plan
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Practice rounds with feedback
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Resource recommendations
                </li>
              </ul>
            </div>
          </div>
          
          {/* Cal.com Embed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-pastel-pink-light to-pastel-blue-light">
                <h3 className="text-xl font-bold text-gray-900 text-center">Book a Demo</h3>
                
              </div>
              
              {/* Cal.com Inline Widget */}
              <div className="p-4">
                <div id="my-cal-inline" style={{
                width: '100%',
                height: '600px',
                overflow: 'scroll'
              }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:coach@example.com" className="text-pastel-blue hover:text-pastel-pink font-semibold transition-colors duration-200">kaushalbalagurusamy@berkeley.edu</a>
            <span className="hidden sm:block text-gray-400">•</span>
            <a href="tel:+1234567890" className="text-pastel-blue hover:text-pastel-pink font-semibold transition-colors duration-200">781.686.4974</a>
          </div>
        </div>
      </div>
    </section>;
};
export default Booking;