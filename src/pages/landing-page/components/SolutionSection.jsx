import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SolutionSection = () => {
  const [activeDemo, setActiveDemo] = useState('upload');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const demoSteps = [
    {
      id: 'upload',
      title: 'Upload Your Data',
      description: 'Drag & drop any file format - Excel, CSV, databases, APIs',
      icon: 'Upload'
    },
    {
      id: 'process',
      title: 'AI Processing',
      description: 'Our AI automatically cleans, connects, and analyzes your data',
      icon: 'Zap'
    },
    {
      id: 'insights',
      title: 'Instant Insights',
      description: 'Get actionable recommendations and predictive analytics',
      icon: 'TrendingUp'
    }
  ];

  const beforeAfterData = {
    before: {
      title: "Before Data Alchemist",
      metrics: [
        { label: "Data Processing Time", value: "3-5 days", color: "text-red-600" },
        { label: "Manual Work", value: "80%", color: "text-red-600" },
        { label: "Accuracy Rate", value: "65%", color: "text-red-600" },
        { label: "Insights Delay", value: "2 weeks", color: "text-red-600" }
      ],
      visual: "chaos"
    },
    after: {
      title: "After Data Alchemist",
      metrics: [
        { label: "Data Processing Time", value: "5 minutes", color: "text-green-600" },
        { label: "Manual Work", value: "5%", color: "text-green-600" },
        { label: "Accuracy Rate", value: "99%", color: "text-green-600" },
        { label: "Insights Delay", value: "Real-time", color: "text-green-600" }
      ],
      visual: "organized"
    }
  };

  const handleUploadDemo = () => {
    setActiveDemo('upload');
    setUploadProgress(0);
    setShowResults(false);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setActiveDemo('process');
            setTimeout(() => {
              setActiveDemo('insights');
              setShowResults(true);
            }, 2000);
          }, 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const renderVisual = (type) => {
    if (type === 'chaos') {
      return (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Icon name="AlertTriangle" size={16} className="text-red-500" />
              <div className="flex-1 h-2 bg-red-200 rounded animate-pulse" />
              <span className="text-xs text-red-600">Error</span>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="space-y-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={16} className="text-green-500" />
              <div className="flex-1 h-2 bg-green-200 rounded">
                <div className="h-full bg-green-500 rounded" style={{ width: '100%' }} />
              </div>
              <span className="text-xs text-green-600">✓</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <section id="solution-overview" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Transform Data Chaos Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Strategic Gold
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how Data Alchemist automatically transforms your scattered data into actionable insights in minutes, not weeks
          </p>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Interactive Demo: Upload Your Sample Data
          </h3>

          {/* Demo Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-4">
              {demoSteps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                    activeDemo === step.id ? 'bg-white shadow-lg' : 'bg-white bg-opacity-50'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activeDemo === step.id ? 'bg-orange-500' : 'bg-gray-300'
                    }`}>
                      <Icon 
                        name={step.icon} 
                        size={20} 
                        className={activeDemo === step.id ? 'text-white' : 'text-gray-600'}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-600">
                        {step.description}
                      </div>
                    </div>
                  </div>
                  {index < demoSteps.length - 1 && (
                    <Icon name="ArrowRight" size={20} className="text-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Demo Interface */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            {activeDemo === 'upload' && (
              <div className="text-center">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6 hover:border-orange-500 transition-colors">
                  <Icon name="Upload" size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-lg font-medium text-gray-900 mb-2">
                    Drop your files here or click to browse
                  </p>
                  <p className="text-sm text-gray-500">
                    Supports Excel, CSV, JSON, databases, and 50+ formats
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={handleUploadDemo}
                  className="font-semibold"
                  iconName="Upload"
                  iconPosition="left"
                >
                  Try Sample Upload
                </Button>
                {uploadProgress > 0 && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Uploading sample_data.xlsx</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeDemo === 'process' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                  <Icon name="Zap" size={32} color="white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  AI Processing Your Data
                </h4>
                <div className="space-y-3 max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="text-sm text-gray-600">Data cleaning and validation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-green-500" />
                    <span className="text-sm text-gray-600">Pattern recognition and analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-sm text-gray-600">Generating insights...</span>
                  </div>
                </div>
              </div>
            )}

            {activeDemo === 'insights' && showResults && (
              <div>
                <h4 className="text-xl font-semibold text-gray-900 text-center mb-6">
                  Your Instant Insights
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <Icon name="TrendingUp" size={24} className="text-green-600 mb-3" />
                    <h5 className="font-semibold text-gray-900 mb-2">Revenue Opportunity</h5>
                    <p className="text-2xl font-bold text-green-600 mb-2">+$2.4M</p>
                    <p className="text-sm text-gray-600">Projected annual increase based on data patterns</p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <Icon name="Target" size={24} className="text-blue-600 mb-3" />
                    <h5 className="font-semibold text-gray-900 mb-2">Efficiency Gain</h5>
                    <p className="text-2xl font-bold text-blue-600">47 hours</p>
                    <p className="text-sm text-gray-600">Weekly time savings from automation</p>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <Icon name="AlertTriangle" size={24} className="text-orange-600 mb-3" />
                    <h5 className="font-semibold text-gray-900 mb-2">Risk Alert</h5>
                    <p className="text-2xl font-bold text-orange-600">3 issues</p>
                    <p className="text-sm text-gray-600">Critical data quality problems detected</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(beforeAfterData).map(([key, data]) => (
            <div key={key} className={`p-8 rounded-2xl border-2 ${
              key === 'before' ? 'border-red-200 bg-red-50' : 'border-green-200 bg-green-50'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                key === 'before' ? 'text-red-900' : 'text-green-900'
              }`}>
                {data.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                {data.metrics.map((metric, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700 text-sm">{metric.label}</span>
                    <span className={`font-semibold ${metric.color}`}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-24">
                {renderVisual(data.visual)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-semibold text-lg px-8 py-4"
            iconName="ArrowRight"
            iconPosition="right"
          >
            Transform Your Data Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;