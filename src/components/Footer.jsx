import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-gray-400 py-12 px-6 md:px-16 border-t border-red-950/60 relative overflow-hidden">
      {/* Subtle Spider Web Background in Footer */}
      <img
        src="/assets/web1.png"
        alt="Spider Web"
        className="absolute top-0 right-0 w-80 h-80 object-contain opacity-5 pointer-events-none translate-x-1/3 -translate-y-1/3"
      />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <img src="/assets/spydy.png" alt="Spider Logo" className="w-6 h-6 object-contain" />
            <span className="text-white text-xl font-black italic tracking-tighter uppercase">
              <span className="text-red-600">P</span>AVAN TEJA.
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium tracking-wide">
            Your Friendly Neighborhood Full-Stack Software Engineer
          </p>
        </div>

        {/* Social Profile Links */}
        <div className="flex items-center gap-5 text-xs font-bold uppercase tracking-wider">
          <a
            href="https://github.com/PavanTeja077"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-red-600"
          >
            <span>GitHub</span>
            <span className="text-red-500">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pavan-teja-107225379"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-red-600"
          >
            <span>LinkedIn</span>
            <span className="text-red-500">↗</span>
          </a>
          <a
            href="https://leetcode.com/u/RovUE7ICIs/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-gray-900 border border-gray-800 hover:border-red-600"
          >
            <span>LeetCode</span>
            <span className="text-red-500">↗</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-red-600 transition-all cursor-pointer"
        >
          Back to Top ↑
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
        <p>© {new Date().getFullYear()} Mogili Pavan Teja. All rights reserved.</p>
        <div className="flex items-center gap-4 mt-2 sm:mt-0">
          <a href="#about" className="hover:text-red-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-red-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-red-500 transition-colors">Projects</a>
          <a href="#education" className="hover:text-red-500 transition-colors">Education</a>
          <a href="#contact" className="hover:text-red-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
