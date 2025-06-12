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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Book a free demo session to build your customized coaching package</p>
          <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-blue mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Cal.com Embed */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-pastel-pink-light to-pastel-blue-light">
              <h3 className="text-xl font-bold text-gray-900 text-center">Calendar</h3>
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