import React from 'react';
import { EXPERIENCE, EDUCATION } from '../constants';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-surface/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-2 mb-12">
            <span className="text-accent font-mono text-sm">03.</span>
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
            <div className="h-px bg-slate-700 flex-grow ml-4"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[20px] top-0 bottom-0 w-px bg-slate-700 -z-10"></div>
              
              <div className="flex flex-col md:flex-row gap-8 group">
                {/* Timeline Dot & Line Mobile */}
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent md:hidden"></div>
                <div className="absolute left-1.5 top-5 bottom-0 w-px bg-slate-800 md:hidden"></div>

                {/* Date Column (Desktop) */}
                <div className="hidden md:flex flex-col items-start w-48 pt-1 relative">
                   <div className="absolute right-0 top-2 w-3 h-3 rounded-full bg-slate-700 border-2 border-slate-900 group-hover:bg-accent transition-colors z-10 translate-x-[7px]"></div>
                   <span className="text-sm font-mono text-accent">{job.duration.split(' - ')[0]}</span>
                   <span className="text-xs text-slate-500 mt-1">to {job.duration.split(' - ')[1]}</span>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-background border border-slate-700 hover:border-slate-600 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 mt-1">
                        <Briefcase className="h-4 w-4" />
                        <span className="font-medium">{job.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-slate-500 font-mono">
                       <span className="md:hidden text-accent">{job.duration}</span>
                       <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                       </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 italic border-l-2 border-slate-700 pl-3">
                    {job.description}
                  </p>

                  <ul className="space-y-2">
                    {job.points.slice(0, 4).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-slate-600"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20">
           <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="text-accent h-6 w-6" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-lg border border-slate-700 flex items-start gap-4">
                   <div className="p-3 bg-slate-800 rounded-full">
                      <GraduationCap className="h-6 w-6 text-slate-300" />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">{edu.degree}</h4>
                      <p className="text-accent text-sm mt-1">{edu.school}</p>
                      <div className="flex gap-4 mt-2 text-xs text-slate-500 font-mono">
                        <span>Year: {edu.year}</span>
                        <span>Grade: {edu.grade}</span>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;