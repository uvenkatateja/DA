import React, { useState, useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import Icon from '../AppIcon';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [engagementLevel, setEngagementLevel] = useState('low');
  const [timeOnPage, setTimeOnPage] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    company: ''
  });

  useEffect(() => {
    let startTime = Date.now();
    let scrollDepth = 0;
    let maxScrollDepth = 0;

    const updateEngagement = () => {
      const currentTime = Date.now();
      const timeSpent = (currentTime - startTime) / 1000; // seconds
      setTimeOnPage(timeSpent);

      // Calculate engagement level based on time and scroll depth
      if (timeSpent > 120 && maxScrollDepth > 50) {
        setEngagementLevel('high');
      } else if (timeSpent > 60 && maxScrollDepth > 25) {
        setEngagementLevel('medium');
      } else {
        setEngagementLevel('low');
      }
    };

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      scrollDepth = (scrollTop / docHeight) * 100;
      maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);
      updateEngagement();
    };

    const handleMouseLeave = (e) => {
      if (hasShown) return;
      
      // Desktop: mouse moving toward top of browser
      if (e.clientY <= 5 && timeOnPage > 30) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const handleTouchMove = (e) => {
      if (hasShown) return;
      
      // Mobile: rapid scroll to top indicating exit intent
      const touch = e.touches[0];
      if (touch && window.pageYOffset < 100 && timeOnPage > 30) {
        const scrollVelocity = Math.abs(window.pageYOffset - scrollDepth);
        if (scrollVelocity > 50) {
          setIsVisible(true);
          setHasShown(true);
        }
      }
    };

    // Add event listeners
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, timeOnPage]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Exit intent form submitted:', formData);
    setIsVisible(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getOfferContent = () => {
    switch (engagementLevel) {
      case 'high':
        return {
          title: "Wait! Let's schedule a personal demo",
          subtitle: "You seem interested in our platform. Get a customized demo with your data.",
          offer: "Free 1-on-1 consultation + Extended 30-day trial",
          cta: "Schedule Demo"
        };
      case 'medium':
        return {
          title: "Don't miss out on transforming your data",
          subtitle: "See what 2,500+ companies already know about Data Alchemist.",
          offer: "Extended 21-day free trial + ROI calculator",
          cta: "Get Extended Trial"
        };
      default:
        return {
          title: "Before you go...",
          subtitle: "Get our free ROI calculator to see your potential savings.",
          offer: "Free ROI assessment + 14-day trial",
          cta: "Get Free Assessment"
        };
    }
  };

  const content = getOfferContent();

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-lg shadow-elevation max-w-md w-full mx-4 transform transition-all duration-300 animate-in slide-in-from-bottom-4">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-smooth"
          aria-label="Close modal"
        >
          <Icon name="X" size={24} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={32} color="white" />
            </div>
            <h2 className="text-xl font-bold text-text-primary mb-2">
              {content.title}
            </h2>
            <p className="text-text-secondary">
              {content.subtitle}
            </p>
          </div>

          {/* Offer Highlight */}
          <div className="bg-surface border border-border rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Gift" size={16} color="white" />
              </div>
              <div>
                <p className="font-semibold text-text-primary text-sm">
                  Special Offer
                </p>
                <p className="text-text-secondary text-sm">
                  {content.offer}
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="email"
              placeholder="Enter your work email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <Input
              type="text"
              name="company"
              placeholder="Company name"
              value={formData.company}
              onChange={handleInputChange}
              required
            />
            
            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="font-semibold"
              iconName="ArrowRight"
              iconPosition="right"
            >
              {content.cta}
            </Button>
          </form>

          {/* Trust Indicators */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-center space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>Setup in 5 min</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="CreditCard" size={14} />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;