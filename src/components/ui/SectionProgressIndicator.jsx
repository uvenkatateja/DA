import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'solution-overview', label: 'Platform' },
    { id: 'benefits-showcase', label: 'Benefits' },
    { id: 'testimonials', label: 'Customers' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'demo', label: 'Demo' },
    { id: 'trial-signup', label: 'Trial' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));

      // Show indicator after hero section
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        setIsVisible(heroRect.bottom < window.innerHeight * 0.5);
      }

      // Update active section
      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="bg-background border border-border rounded-full p-2 shadow-elevation">
        {/* Progress Bar */}
        <div className="relative w-1 h-48 bg-surface rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-accent transition-all duration-300 rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Section Indicators */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full top-0 space-y-6 py-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={`group relative w-3 h-3 rounded-full border-2 transition-all duration-250 hover:scale-125 ${
                activeSection === section.id
                  ? 'bg-accent border-accent' :'bg-background border-border hover:border-accent'
              }`}
              style={{ 
                top: `${(index / (sections.length - 1)) * 100}%`,
                position: 'absolute'
              }}
              title={section.label}
            >
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none">
                <div className="bg-text-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {section.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-text-primary border-t-2 border-b-2 border-t-transparent border-b-transparent" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProgressIndicator;