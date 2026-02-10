import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-20 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-12 justify-center">
            <span className="text-accent font-mono text-sm">02.</span>
            <h2 className="text-3xl font-bold text-white">Technical Proficiency</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, index) => {
              const Icon = skillGroup.icon;
              return (
                <div 
                  key={index}
                  className="group bg-surface hover:bg-slate-800 border border-slate-700 hover:border-accent/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-accent/10 transition-colors">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-slate-900 rounded-md text-xs font-mono text-slate-400 border border-slate-700/50 hover:text-white hover:border-slate-500 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
       </div>
    </section>
  );
};

export default Skills;