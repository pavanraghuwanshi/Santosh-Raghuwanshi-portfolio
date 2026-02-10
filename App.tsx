import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-background min-h-screen text-slate-300 font-sans selection:bg-accent selection:text-background">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default App;