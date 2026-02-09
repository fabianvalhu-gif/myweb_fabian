import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[120px] h-[72px] flex items-center justify-center">
        <div className="flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-[#9AA6B2] hover:text-[#E9EEF5] transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-[#9AA6B2] hover:text-[#E9EEF5] transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('resume')} className="text-[#9AA6B2] hover:text-[#E9EEF5] transition-colors">
            Resume
          </button>
          <button onClick={() => scrollToSection('cases')} className="text-[#9AA6B2] hover:text-[#E9EEF5] transition-colors">
            Cases
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-[#9AA6B2] hover:text-[#E9EEF5] transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};
