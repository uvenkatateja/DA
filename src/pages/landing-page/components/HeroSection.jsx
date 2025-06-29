import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [companiesCount, setCompaniesCount] = useState(2500);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Animate counter on load
    const interval = setInterval(() => {
      setCompaniesCount(prev => {
        if (prev < 2500) {
          return prev + 50;
        }
        clearInterval(interval);
        return 2500;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleTrialClick = () => {
    const element = document.getElementById('trial-signup');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    setIsVideoPlaying(true);
  };

  const enterpriseLogos = [
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=120&h=60&fit=crop&crop=center" },
    { name: "Salesforce", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&crop=center" },
    { name: "Adobe", logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=60&fit=crop&crop=center" },
    { name: "IBM", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center" },
    { name: "Oracle", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "SAP", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop&crop=center" }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                {companiesCount.toLocaleString()}+ companies transformed their data
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Gold
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              The only platform that automatically transforms scattered business data into predictive insights - 
              <span className="font-semibold text-gray-900"> increase revenue 25% in 90 days.</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                onClick={handleTrialClick}
                className="font-semibold text-lg px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDemoClick}
                className="font-semibold text-lg px-8 py-4"
                iconName="Play"
                iconPosition="left"
              >
                Watch Live Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-500" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-blue-500" />
                <span>5-min Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size={16} className="text-orange-500" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {!isVideoPlaying ? (
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                {/* Dashboard Preview */}
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
                    <div className="flex items-center space-x-2 text-green-600">
                      <Icon name="TrendingUp" size={16} />
                      <span className="text-sm font-medium">+25.3%</span>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-orange-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="BarChart3" size={48} className="text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Interactive Data Visualization</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">$2.4M</div>
                      <div className="text-xs text-gray-600">Revenue</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                      <div className="text-xs text-gray-600">Accuracy</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">47h</div>
                      <div className="text-xs text-gray-600">Saved</div>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <button
                  onClick={handleDemoClick}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-2xl group"
                >
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Play" size={24} color="white" />
                  </div>
                </button>
              </div>
            ) : (
              <div className="relative bg-black rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Demo Video Playing...</p>
                    <p className="text-sm opacity-75 mt-2">Interactive demo would load here</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-all"
                >
                  <Icon name="X" size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Enterprise Logos */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-8">
            Trusted by industry leaders worldwide
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {enterpriseLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12 w-24 grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;