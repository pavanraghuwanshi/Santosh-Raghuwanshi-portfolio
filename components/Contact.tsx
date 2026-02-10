import React from 'react';
import { PROFILE } from '../constants';
import { Mail, Phone, Linkedin, Github, ChevronUp } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-background border-t border-slate-800 relative pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-12">
          <span className="text-accent font-mono text-sm">04. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8">
            Currently seeking a dynamic role in a growth-oriented company. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <a 
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent font-mono hover:bg-accent/10 rounded-md transition-all duration-300"
          >
            Say Hello
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left bg-surface/50 p-8 rounded-xl border border-slate-800">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-full">
                 <Mail className="h-5 w-5 text-slate-300" />
              </div>
              <div>
                 <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                 <a href={`mailto:${PROFILE.email}`} className="text-white hover:text-accent transition-colors text-sm break-all">{PROFILE.email}</a>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-full">
                 <Phone className="h-5 w-5 text-slate-300" />
              </div>
              <div>
                 <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                 <p className="text-white text-sm">{PROFILE.phone}</p>
              </div>
           </div>

           <div className="flex items-center gap-4">
              <div className="p-3 bg-slate-800 rounded-full">
                 <Linkedin className="h-5 w-5 text-slate-300" />
              </div>
              <div>
                 <p className="text-xs text-slate-500 uppercase tracking-wider">Social</p>
                 <a href={`https://${PROFILE.linkedin}`} target="_blank" rel="noreferrer" className="text-white hover:text-accent transition-colors text-sm">LinkedIn Profile</a>
              </div>
           </div>
        </div>

        <div className="flex justify-between items-end pt-8 border-t border-slate-800">
          <div className="text-left">
            <div className="flex gap-4 mb-4">
               {/* Dummy Github link since resume didn't have one, but essential for devs */}
               <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Github className="h-5 w-5" /></a>
               <a href="#" className="text-slate-400 hover:text-accent transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
            <p className="text-slate-600 text-sm font-mono">
              Designed & Built by Santosh Raghuwanshi
            </p>
          </div>
          
          <a href="#home" className="p-2 bg-slate-800 hover:bg-accent hover:text-background text-accent rounded transition-colors duration-300">
             <ChevronUp className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;