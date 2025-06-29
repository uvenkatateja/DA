import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 'automated',
      icon: 'Zap',
      title: 'Automated Insights',
      description: 'AI-powered analysis that works 24/7 to surface hidden patterns and opportunities in your data',
      features: [
        'Smart anomaly detection',
        'Predictive trend analysis',
        'Automated report generation',
        'Real-time alerts'
      ],
      demo: {
        title: 'Live Demo: Anomaly Detection',
        content: 'Detecting unusual sales patterns...',
        metrics: [
          { label: 'Anomalies Found', value: '3', trend: 'up' },
          { label: 'Confidence', value: '94%', trend: 'neutral' },
          { label: 'Impact', value: 'High', trend: 'up' }
        ]
      },
      color: 'blue'
    },
    {
      id: 'realtime',
      icon: 'Activity',
      title: 'Real-Time Analytics',
      description: 'Monitor your business performance with live dashboards that update as your data changes',
      features: [
        'Live data streaming',
        'Interactive dashboards',
        'Custom KPI tracking',
        'Mobile notifications'
      ],
      demo: {
        title: 'Live Demo: Real-Time Dashboard',
        content: 'Streaming live data updates...',
        metrics: [
          { label: 'Revenue Today', value: '$47.2K', trend: 'up' },
          { label: 'Active Users', value: '1,247', trend: 'up' },
          { label: 'Conversion', value: '3.2%', trend: 'down' }
        ]
      },
      color: 'green'
    },
    {
      id: 'predictive',
      icon: 'TrendingUp',
      title: 'Predictive Intelligence',
      description: 'Forecast future trends and make proactive decisions with advanced machine learning models',
      features: [
        'Revenue forecasting',
        'Customer behavior prediction',
        'Market trend analysis',
        'Risk assessment'
      ],
      demo: {
        title: 'Live Demo: Revenue Forecast',
        content: 'Generating 90-day forecast...',
        metrics: [
          { label: 'Q4 Forecast', value: '$2.4M', trend: 'up' },
          { label: 'Accuracy', value: '89%', trend: 'neutral' },
          { label: 'Growth Rate', value: '+15%', trend: 'up' }
        ]
      },
      color: 'orange'
    }
  ];

  const getColorClasses = (color, type = 'bg') => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        bgLight: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        textDark: 'text-blue-900'
      },
      green: {
        bg: 'bg-green-500',
        bgLight: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-600',
        textDark: 'text-green-900'
      },
      orange: {
        bg: 'bg-orange-500',
        bgLight: 'bg-orange-50',
        border: 'border-orange-200',
        text: 'text-orange-600',
        textDark: 'text-orange-900'
      }
    };
    return colorMap[color][type] || '';
  };

  const renderMicroDemo = (benefit) => {
    return (
      <div className={`p-4 ${getColorClasses(benefit.color, 'bgLight')} rounded-lg border ${getColorClasses(benefit.color, 'border')}`}>
        <h5 className={`font-semibold ${getColorClasses(benefit.color, 'textDark')} mb-3 text-sm`}>
          {benefit.demo.title}
        </h5>
        <div className="space-y-2">
          {benefit.demo.metrics.map((metric, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-xs text-gray-600">{metric.label}</span>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-semibold ${getColorClasses(benefit.color, 'text')}`}>
                  {metric.value}
                </span>
                {metric.trend !== 'neutral' && (
                  <Icon 
                    name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                    size={12} 
                    className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center space-x-2">
          <div className={`w-2 h-2 ${getColorClasses(benefit.color, 'bg')} rounded-full animate-pulse`} />
          <span className="text-xs text-gray-500">{benefit.demo.content}</span>
        </div>
      </div>
    );
  };

  return (
    <section id="benefits-showcase" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why 2,500+ Companies Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Data Alchemist
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven analytics that transforms your business operations
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-8 transition-all duration-300 cursor-pointer ${
                hoveredBenefit === benefit.id ? 'transform -translate-y-2 shadow-2xl' : ''
              }`}
              onMouseEnter={() => setHoveredBenefit(benefit.id)}
              onMouseLeave={() => setHoveredBenefit(null)}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${getColorClasses(benefit.color, 'bg')} rounded-xl flex items-center justify-center mb-6`}>
                <Icon name={benefit.icon} size={32} color="white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {benefit.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {benefit.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className={getColorClasses(benefit.color, 'text')} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Micro Demo */}
              {hoveredBenefit === benefit.id && (
                <div className="transform transition-all duration-300 animate-in slide-in-from-bottom-4">
                  {renderMicroDemo(benefit)}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Value Proposition Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Revenue Increase</div>
              <div className="text-sm text-gray-600">Average improvement within 90 days</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">40%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
              <div className="text-sm text-gray-600">Operational efficiency gains</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">5 min</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Setup Time</div>
              <div className="text-sm text-gray-600">From signup to first insights</div>
            </div>
          </div>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            See It In Action
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <button
                key={benefit.id}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  hoveredBenefit === benefit.id
                    ? `${getColorClasses(benefit.color, 'border')} bg-white shadow-lg`
                    : 'border-gray-200 bg-white bg-opacity-50 hover:bg-white hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-8 h-8 ${getColorClasses(benefit.color, 'bg')} rounded-lg flex items-center justify-center`}>
                    <Icon name={benefit.icon} size={16} color="white" />
                  </div>
                  <span className="font-semibold text-gray-900">{benefit.title}</span>
                </div>
                <p className="text-sm text-gray-600">
                  Hover to see live demo
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;