import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DemoSection = () => {
  const [selectedDemo, setSelectedDemo] = useState('dashboard');
  const [isPlaying, setIsPlaying] = useState(false);

  const demoOptions = [
    {
      id: 'dashboard',
      title: 'Interactive Dashboard',
      description: 'See how our AI creates beautiful dashboards automatically',
      icon: 'BarChart3',
      duration: '2 min'
    },
    {
      id: 'insights',
      title: 'AI Insights Generation',
      description: 'Watch AI discover patterns and generate actionable insights',
      icon: 'Zap',
      duration: '3 min'
    },
    {
      id: 'predictions',
      title: 'Predictive Analytics',
      description: 'Experience future forecasting with machine learning',
      icon: 'TrendingUp',
      duration: '4 min'
    },
    {
      id: 'integration',
      title: 'Data Integration',
      description: 'Connect multiple data sources in seconds',
      icon: 'Link',
      duration: '2 min'
    }
  ];

  const demoContent = {
    dashboard: {
      title: 'Real-Time Analytics Dashboard',
      features: [
        'Drag-and-drop dashboard builder',
        'Real-time data updates',
        'Custom KPI tracking',
        'Mobile-responsive design'
      ],
      mockData: {
        revenue: '$2.4M',
        growth: '+25.3%',
        users: '12,847',
        conversion: '3.2%'
      }
    },
    insights: {
      title: 'AI-Powered Insight Discovery',
      features: [
        'Automatic anomaly detection',
        'Pattern recognition',
        'Natural language explanations',
        'Actionable recommendations'
      ],
      mockData: {
        anomalies: '3 detected',
        confidence: '94%',
        impact: 'High',
        recommendations: '5 actions'
      }
    },
    predictions: {
      title: 'Predictive Analytics Engine',
      features: [
        'Revenue forecasting',
        'Customer behavior prediction',
        'Market trend analysis',
        'Risk assessment'
      ],
      mockData: {
        forecast: '$3.1M',
        accuracy: '89%',
        trend: 'Upward',
        confidence: '92%'
      }
    },
    integration: {
      title: 'Seamless Data Integration',
      features: [
        'One-click connections',
        'Real-time sync',
        'Data validation',
        'Error handling'
      ],
      mockData: {
        sources: '12 connected',
        sync: 'Real-time',
        status: 'Healthy',
        latency: '< 1s'
      }
    }
  };

  const handleDemoPlay = () => {
    setIsPlaying(true);
    // Simulate demo playing
    setTimeout(() => {
      setIsPlaying(false);
    }, 5000);
  };

  const currentDemo = demoContent[selectedDemo];

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Data Alchemist in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Action
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the power of AI-driven analytics with our interactive demo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Demo Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Choose Your Demo</h3>
            <div className="space-y-4">
              {demoOptions.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                    selectedDemo === demo.id
                      ? 'border-orange-500 bg-orange-500 bg-opacity-10' :'border-gray-600 bg-gray-800 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedDemo === demo.id ? 'bg-orange-500' : 'bg-gray-700'
                    }`}>
                      <Icon name={demo.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white">{demo.title}</h4>
                        <span className="text-xs text-gray-400">{demo.duration}</span>
                      </div>
                      <p className="text-sm text-gray-300">{demo.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <h4 className="font-bold text-white mb-2">Ready to try it yourself?</h4>
              <p className="text-orange-100 text-sm mb-4">
                Start your free trial and experience these features with your own data
              </p>
              <Button
                variant="secondary"
                fullWidth
                onClick={() => document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          {/* Demo Display */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Demo Header */}
              <div className="bg-gray-700 px-6 py-4 border-b border-gray-600">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {currentDemo.title}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Demo Content */}
              <div className="p-6">
                {!isPlaying ? (
                  <div className="space-y-6">
                    {/* Mock Interface */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {Object.entries(currentDemo.mockData).map(([key, value]) => (
                        <div key={key} className="bg-gray-700 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-orange-400 mb-1">
                            {value}
                          </div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Area */}
                    <div className="bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center relative">
                      <div className="text-center">
                        <Icon name="Play" size={48} className="text-orange-400 mx-auto mb-4" />
                        <h4 className="text-lg font-semibold text-white mb-2">
                          Interactive Demo Ready
                        </h4>
                        <p className="text-gray-400 mb-4">
                          Click play to see {currentDemo.title.toLowerCase()} in action
                        </p>
                        <Button
                          variant="primary"
                          onClick={handleDemoPlay}
                          className="bg-orange-500 hover:bg-orange-600"
                          iconName="Play"
                          iconPosition="left"
                        >
                          Play Demo
                        </Button>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentDemo.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <Icon name="Check" size={16} className="text-green-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-96 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Icon name="Zap" size={32} color="white" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        Demo Running...
                      </h4>
                      <p className="text-gray-400">
                        Showing {currentDemo.title.toLowerCase()}
                      </p>
                      <div className="mt-4 w-64 bg-gray-700 rounded-full h-2 mx-auto">
                        <div className="bg-orange-500 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Demo Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {demoOptions.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    selectedDemo === demo.id ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Data?
            </h3>
            <p className="text-orange-100 mb-6 text-lg">
              Join 2,500+ companies already using Data Alchemist to drive growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-orange-600 hover:bg-gray-100 font-semibold"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600 font-semibold"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="text-orange-200 text-sm mt-4">
              No credit card required • 5-minute setup • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;