import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navigationItems = [
    { 
      label: 'Platform', 
      anchor: '#solution', 
      section: 'solution-overview',
      description: 'See how we transform your data'
    },
    { 
      label: 'Benefits', 
      anchor: '#benefits', 
      section: 'benefits-showcase',
      description: 'Discover your ROI potential'
    },
    { 
      label: 'Customers', 
      anchor: '#testimonials', 
      section: 'testimonials',
      description: 'Read success stories'
    },
    { 
      label: 'Pricing', 
      anchor: '#pricing', 
      section: 'pricing',
      description: 'View pricing options'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.section);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor) => {
    const targetId = anchor.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleTrialClick = () => {
    const element = document.getElementById('trial-signup');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-glass shadow-elevation' 
          : 'bg-background'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path 
                    d="M12 2L2 7L12 12L22 7L12 2Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 17L12 22L22 17" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M2 12L12 17L22 12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-text-primary font-inter">
                Data Alchemist
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.anchor)}
                className={`text-base font-medium transition-smooth hover:text-accent ${
                  activeSection === item.section 
                    ? 'text-accent' :'text-text-primary'
                }`}
                title={item.description}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#demo')}
              className="text-base font-medium text-text-primary hover:text-accent transition-smooth"
            >
              Demo
            </button>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="primary"
              onClick={handleTrialClick}
              className="font-semibold"
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="primary"
              size="sm"
              onClick={handleTrialClick}
              className="font-semibold"
            >
              Trial
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-text-primary hover:text-accent transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-elevation">
            <div className="px-6 py-4 space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.anchor)}
                  className={`block w-full text-left text-base font-medium py-2 transition-smooth hover:text-accent ${
                    activeSection === item.section 
                      ? 'text-accent' :'text-text-primary'
                  }`}
                >
                  <div>
                    <div>{item.label}</div>
                    <div className="text-sm text-text-secondary mt-1">
                      {item.description}
                    </div>
                  </div>
                </button>
              ))}
              <button
                onClick={() => handleNavClick('#demo')}
                className="block w-full text-left text-base font-medium py-2 text-text-primary hover:text-accent transition-smooth"
              >
                <div>
                  <div>Demo</div>
                  <div className="text-sm text-text-secondary mt-1">
                    See interactive demo
                  </div>
                </div>
              </button>
              <div className="pt-4 border-t border-border">
                <Button
                  variant="primary"
                  onClick={handleTrialClick}
                  fullWidth
                  className="font-semibold"
                >
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;