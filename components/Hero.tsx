import React from 'react';
import { PROFILE } from '../constants';
import { Download, ArrowRight, Server, Cloud, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6 z-10 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent text-sm font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </div>
          
          <div>
            <h2 className="text-slate-400 font-mono text-lg mb-2">Hello, I am</h2>
            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              Santosh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-600">
                Raghuwanshi
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              {PROFILE.role}. Orchestrating robust cloud infrastructures and seamless server migrations with over a decade of expertise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-background bg-accent hover:bg-cyan-300 transition-colors shadow-lg shadow-accent/20"
            >
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <button 
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-base font-medium rounded-lg text-slate-300 hover:bg-slate-800 transition-colors bg-transparent"
              onClick={() => alert("Resume download simulation")}
            >
              Download CV <Download className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Visual Content - Isometric Style Representation */}
        <div className="relative z-10 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md aspect-square">
            
            {/* Base Platform */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-slate-800 rounded-3xl rotate-45 border-4 border-slate-700 shadow-2xl"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 bg-surface p-4 rounded-xl border border-slate-600 shadow-xl animate-[bounce_3s_infinite]">
                <Server className="h-12 w-12 text-accent" />
                <p className="text-xs text-center mt-2 font-mono text-slate-400">Linux</p>
            </div>

            <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-12 bg-surface p-4 rounded-xl border border-slate-600 shadow-xl animate-[bounce_4s_infinite] delay-700">
                <Cloud className="h-12 w-12 text-blue-400" />
                <p className="text-xs text-center mt-2 font-mono text-slate-400">Azure</p>
            </div>

            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-8 bg-surface p-4 rounded-xl border border-slate-600 shadow-xl animate-[bounce_5s_infinite] delay-300">
                <Shield className="h-12 w-12 text-green-400" />
                <p className="text-xs text-center mt-2 font-mono text-slate-400">Security</p>
            </div>

            {/* Code Card Window */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900 w-72 rounded-lg border border-slate-700 shadow-2xl p-4 z-20">
               <div className="flex gap-1.5 mb-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                 <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
               </div>
               <div className="space-y-2 font-mono text-xs">
                 <div className="flex">
                   <span className="text-purple-400 mr-2">const</span>
                   <span className="text-blue-400">expert</span>
                   <span className="text-white mx-2">=</span>
                   <span className="text-yellow-300">{"{"}</span>
                 </div>
                 <div className="pl-4 text-slate-300">
                   experience: <span className="text-orange-400">11+</span>,
                 </div>
                 <div className="pl-4 text-slate-300">
                   tech: [<span className="text-green-400">'Linux'</span>, <span className="text-green-400">'Azure'</span>],
                 </div>
                 <div className="pl-4 text-slate-300">
                   certified: <span className="text-purple-400">true</span>
                 </div>
                 <div className="text-yellow-300">{"}"}</div>
               </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;