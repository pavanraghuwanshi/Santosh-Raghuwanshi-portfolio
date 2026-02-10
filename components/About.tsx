import React from 'react';
import { PROFILE } from '../constants';
import { User, MapPin, Mail, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Avatar / Image Placeholder */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
             <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl">
                <img 
                  src="./image.png" 
                  alt="Profile" 
                  className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
             </div>
             
             <div className="mt-8 grid grid-cols-1 gap-4 w-full">
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Location</p>
                        <p className="text-sm font-medium text-white">{PROFILE.location}</p>
                    </div>
                </div>
                <div className="glass-panel p-4 rounded-lg flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg">
                        <Award className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400">Experience</p>
                        <p className="text-sm font-medium text-white">11+ Years</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-2/3">
             <div className="flex items-center gap-2 mb-6">
                <span className="text-accent font-mono text-sm">01.</span>
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <div className="h-px bg-slate-700 flex-grow ml-4"></div>
             </div>

             <div className="prose prose-invert max-w-none">
                <p className="text-slate-300 leading-relaxed mb-6">
                    {PROFILE.summary}
                </p>
                
                <h3 className="text-xl font-semibold text-white mb-4">Key Behaviors</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        "Business & Customer Focused", 
                        "Positive & Motivated Thinker", 
                        "Analytical & Creative", 
                        "Reliable & Flexible",
                        "Strong Problem Solving", 
                        "Excellent Communication"
                    ].map((trait, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-400 text-sm">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            {trait}
                        </li>
                    ))}
                </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;