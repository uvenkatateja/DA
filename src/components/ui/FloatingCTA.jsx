import React, { useState, useEffect } from 'react';
import Button from './Button';
import Icon from '../AppIcon';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return;

      const scrollTop = window.pageYOffset;
      const heroElement = document.getElementById('hero');
      const trialElement = document.getElementById('trial-signup');
      
      if (heroElement && trialElement) {
        const heroRect = heroElement.getBoundingClientRect();
        const trialRect = trialElement.getBoundingClientRect();
        
        // Show after hero section is scrolled past
        const showCondition = heroRect.bottom < 0;
        // Hide when trial section is visible
        const hideCondition = trialRect.top < window.innerHeight;
        
        setIsVisible(showCondition && !hideCondition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

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
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <div className={`transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="bg-background border border-border rounded-lg shadow-elevation p-4 max-w-xs">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="font-semibold text-text-primary text-sm">
                  Ready to transform your data?
                </h4>
                <p className="text-text-secondary text-xs mt-1">
                  Join 2,500+ companies already using Data Alchemist
                </p>
              </div>
              <button
                onClick={handleDismiss}
                className="text-text-secondary hover:text-text-primary transition-smooth ml-2"
                aria-label="Dismiss"
              >
                <Icon name="X" size={16} />
              </button>
            </div>
            <Button
              variant="primary"
              onClick={handleTrialClick}
              fullWidth
              size="sm"
              className="font-semibold"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        <div className={`transform transition-all duration-300 ${
          isVisible ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <div className="bg-background border-t border-border p-4 shadow-elevation">
            <div className="flex items-center justify-between">
              <div className="flex-1 mr-4">
                <p className="font-semibold text-text-primary text-sm">
                  Start your free trial today
                </p>
                <p className="text-text-secondary text-xs">
                  No credit card required
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleDismiss}
                  className="text-text-secondary hover:text-text-primary transition-smooth p-1"
                  aria-label="Dismiss"
                >
                  <Icon name="X" size={20} />
                </button>
                <Button
                  variant="primary"
                  onClick={handleTrialClick}
                  size="sm"
                  className="font-semibold"
                >
                  Start Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;