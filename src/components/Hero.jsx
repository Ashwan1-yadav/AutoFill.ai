import React from 'react';
import { Link } from 'react-router-dom';



const Hero = () => {
  const coreServices = [
    { title: "Photo Editing Automation", desc: "AI-driven batch processing for high-volume visual assets.", icon: "📸" },
    { title: "Form Filling Templates", desc: "Reusable blueprints for complex multi-page web forms.", icon: "📝" },
    { title: "Document Management", desc: "Centralized, encrypted cloud storage for all your files.", icon: "📁" },
    { title: "Customer Data Storage", desc: "GDPR-compliant databases for secure user information.", icon: "🔒" }
  ];

  return (
    <div className="bg-[#050505] text-white selection:bg-purple-500/30 font-sans overflow-x-hidden">
      
      
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scanline {
            0% { top: 0%; }
            100% { top: 100%; }
          }
          @keyframes terminalScroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes pulseGlow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
          }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
          .animate-scanline { animation: scanline 4s linear infinite; }
          .animate-terminal { animation: terminalScroll 12s linear infinite; }
          .animate-pulse-glow { animation: pulseGlow 3s ease-in-out infinite; }
        `}
      </style>

      
      <section className="min-h-[90vh] flex flex-col justify-center px-6 lg:px-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-widest">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-ping"></span> AutoFill.ai
            </div>
          
            <p className="text-gray-400 text-lg max-w-md">
              Streamline Photo Editing and Document Management with the world's most secure cyber-automation suite.
            </p>
            <div className="flex gap-4">
              <button className="px-10 py-4 bg-purple-600 rounded-xl font-bold hover:bg-purple-500 transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]">Get Started</button>
              <button className="px-10 py-4 border border-white/10 rounded-xl font-bold hover:bg-white/5 transition-all">Services</button>
            </div>
          </div>
          
          
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-4 bg-purple-600/10 blur-3xl animate-pulse-glow"></div>
            <div className="relative bg-[#0d0d0d] border border-purple-500/40 rounded-3xl p-10 shadow-2xl">
              <p className="text-gray-600 text-[10px] mb-8 uppercase tracking-[0.3em] font-bold">System Preview</p>
              <div className="space-y-5">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="w-full h-10 bg-white/5 rounded-lg border border-white/10 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                ))}
                <div className="mt-8 py-4 bg-purple-600/20 border border-purple-500/50 text-purple-400 text-center rounded-xl text-sm font-bold tracking-widest uppercase">
                  AI Processing Enabled
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-24 bg-black/50 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-[350px] bg-[#050505] border border-purple-900/50 rounded-xl overflow-hidden p-6 font-mono text-[11px] text-purple-500/80 shadow-inner">
               <div className="absolute top-0 left-0 w-full h-1 bg-purple-500/20 animate-scanline z-10"></div>
               <div className="animate-terminal">
                  <p>&gt; BOOTING CYBER_CORE...</p>
                  <p>&gt; SCANNING PHOTO_EDITING_RESOURCES...</p>
                  <p>&gt; TEMPLATE_FILL: STATUS_OK</p>
                  <p>&gt; DOCUMENT_MGMT: ENCRYPTING...</p>
                  <p>&gt; CUSTOMER_DATA: SECURING...</p>
                  <p>&gt; BYPASSING LATENCY...</p>
                  <p>&gt; RUNNING AUTO_FLOW_v4.2</p>
                  <p>&gt; LOG: 09:44 AM - SYSTEM OPTIMIZED</p>
                  <p>&gt; BOOTING CYBER_CORE...</p>
                  <p>&gt; SCANNING PHOTO_EDITING_RESOURCES...</p>
                  <p>&gt; TEMPLATE_FILL: STATUS_OK</p>
                  <p>&gt; DOCUMENT_MGMT: ENCRYPTING...</p>
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl font-bold">Pro <span className="text-purple-500">Cyber Engine</span></h2>
              <p className="text-gray-500">Deep-level automation that handles the heavy lifting while you focus on creativity. Real-time logging ensures your customer data storage is always protected.</p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-4">Core Solutions</h2>
              <p className="text-gray-500">Automated power for modern workflows.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreServices.map((service, i) => (
              <div 
                key={i} 
                className="group relative p-8 bg-white/[0.03] border border-white/5 rounded-3xl transition-all duration-500 hover:bg-white/[0.06] hover:border-purple-500/50 hover:-translate-y-3 cursor-pointer overflow-hidden"
              >
                {/* Background Hover Glow */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-500"></div>
                
                {/* Icon Animation */}
                <div className="text-4xl mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-[10deg] inline-block">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>

                
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-500 group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <footer className="bg-black border-t border-white/10 pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-24 mb-20">
          
          {/* Service List with Hover Slide */}
          <div className="space-y-8">
            <h4 className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase">Service Index</h4>
            <div className="space-y-4">
              {coreServices.map((s, i) => (
                <div key={i} className="group flex items-center gap-4 cursor-pointer overflow-hidden">
                   <span className="w-0 h-[1px] bg-purple-500 group-hover:w-8 transition-all duration-500"></span>
                   <span className="text-gray-400 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 font-medium">
                     {s.title}
                   </span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="md:text-right flex flex-col md:items-end">
            <h4 className="text-purple-500 font-mono text-xs tracking-[0.4em] uppercase mb-10">Direct Contact</h4>
            <a href="mailto:ops@quickform.ai" className="text-4xl font-light text-gray-100 hover:text-purple-400 transition-colors mb-4">ops@quickform.ai</a>
            <p className="text-gray-500 max-w-xs md:text-right">Global Automation Support Available 24/7. Encrypted Communication Active.</p>
          </div>
        </div>

        <div className="text-center pt-10 border-t border-white/5 text-[10px] text-gray-700 uppercase tracking-[1em]">
          © 2026 AutoFill.ai
        </div>
      </footer>
    </div>
  );
};

export default Hero;