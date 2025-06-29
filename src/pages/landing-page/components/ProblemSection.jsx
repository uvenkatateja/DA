import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const problems = [
    {
      icon: "FileSpreadsheet",
      title: "Scattered Data Sources",
      description: "Your team wastes 40% of their time hunting for data across 15+ different systems",
      stat: "40% time wasted",
      visual: "spreadsheet"
    },
    {
      icon: "Clock",
      title: "Manual Reporting",
      description: "Reports take 3-5 days to compile, making insights outdated before decisions are made",
      stat: "3-5 days delay",
      visual: "clock"
    },
    {
      icon: "TrendingDown",
      title: "Missed Opportunities",
      description: "Companies lose $15M annually due to delayed insights and reactive decision-making",
      stat: "$15M lost yearly",
      visual: "trending"
    }
  ];

  const industryStats = [
    { label: "of executives", value: "73%", description: "struggle with data silos" },
    { label: "average delay", value: "2.5 weeks", description: "from data to decision" },
    { label: "revenue impact", value: "$2.1M", description: "lost per delayed quarter" },
    { label: "manual work", value: "60%", description: "of data tasks are repetitive" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('problem-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentProblem((prev) => (prev + 1) % problems.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible, problems.length]);

  const renderVisual = (type) => {
    switch (type) {
      case 'spreadsheet':
        return (
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`h-8 rounded ${
                  i % 3 === 0 ? 'bg-red-200' : i % 3 === 1 ? 'bg-yellow-200' : 'bg-gray-200'
                } animate-pulse`}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        );
      case 'clock':
        return (
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 border-4 border-gray-300 rounded-full" />
            <div className="absolute top-2 left-1/2 w-0.5 h-8 bg-red-500 origin-bottom transform -translate-x-0.5 animate-spin" style={{ animationDuration: '3s' }} />
            <div className="absolute top-6 left-1/2 w-0.5 h-6 bg-gray-700 origin-bottom transform -translate-x-0.5" />
          </div>
        );
      case 'trending':
        return (
          <div className="flex items-end space-x-2 h-16">
            {[40, 60, 35, 25, 15].map((height, i) => (
              <div
                key={i}
                className="bg-red-500 w-4 rounded-t transition-all duration-1000"
                style={{ 
                  height: `${height}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="problem-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Data is Costing You{' '}
            <span className="text-red-600">Millions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While your competitors gain insights in minutes, your team is still stuck in spreadsheet hell
          </p>
        </div>

        {/* Main Problem Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Problem Animation */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  currentProblem === 0 ? 'bg-red-100' : 
                  currentProblem === 1 ? 'bg-yellow-100' : 'bg-orange-100'
                }`}>
                  <Icon 
                    name={problems[currentProblem].icon} 
                    size={24} 
                    className={
                      currentProblem === 0 ? 'text-red-600' : 
                      currentProblem === 1 ? 'text-yellow-600' : 'text-orange-600'
                    }
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {problems[currentProblem].title}
                  </h3>
                  <div className={`text-sm font-medium ${
                    currentProblem === 0 ? 'text-red-600' : 
                    currentProblem === 1 ? 'text-yellow-600' : 'text-orange-600'
                  }`}>
                    {problems[currentProblem].stat}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                {problems[currentProblem].description}
              </p>

              <div className="h-24 flex items-center justify-center">
                {renderVisual(problems[currentProblem].visual)}
              </div>
            </div>

            {/* Problem Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {problems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProblem(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProblem ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Problem List */}
          <div className="space-y-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  index === currentProblem
                    ? 'border-orange-500 bg-orange-50' :'border-gray-200 bg-white hover:border-gray-300'
                }`}
                onClick={() => setCurrentProblem(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    index === currentProblem ? 'bg-orange-500' : 'bg-gray-100'
                  }`}>
                    <Icon 
                      name={problem.icon} 
                      size={20} 
                      className={index === currentProblem ? 'text-white' : 'text-gray-600'}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {problem.description}
                    </p>
                    <div className="mt-2 text-sm font-medium text-orange-600">
                      {problem.stat}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            The Hidden Cost of Data Chaos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Sound familiar? You're not alone.
          </p>
          <p className="text-xl font-semibold text-gray-900">
            But there's a better way...
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;