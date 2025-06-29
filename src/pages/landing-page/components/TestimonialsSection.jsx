import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "VP of Analytics",
      company: "TechFlow Solutions",
      companySize: "500+ employees",
      industry: "SaaS",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      linkedinVerified: true,
      quote: `Data Alchemist transformed our decision-making process completely. We went from waiting weeks for reports to getting real-time insights that helped us increase our revenue by 34% in just 6 months.`,
      metrics: {
        revenueIncrease: "34%",
        timeSaved: "25 hours/week",
        roi: "450%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      hasVideo: true,
      beforeAfter: {
        before: "Manual reporting took our team 3-4 days every week",
        after: "Now we get automated insights in real-time"
      }
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Chief Data Officer",
      company: "RetailMax Corp",
      companySize: "1000+ employees",
      industry: "Retail",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      linkedinVerified: true,
      quote: `The predictive analytics capabilities are game-changing. We can now forecast demand with 95% accuracy and optimize our inventory accordingly. This saved us $2.1M in the first year alone.`,
      metrics: {
        costSavings: "$2.1M",
        accuracy: "95%",
        efficiency: "60%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      hasVideo: true,
      beforeAfter: {
        before: "Inventory management was reactive and costly",
        after: "Predictive insights drive proactive decisions"
      }
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Director of Operations",
      company: "FinanceFirst Bank",
      companySize: "2000+ employees",
      industry: "Financial Services",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      linkedinVerified: true,
      quote: `Security and compliance were our biggest concerns, but Data Alchemist exceeded all our requirements. The platform helped us identify risk patterns we never saw before, preventing potential losses of $5M+.`,
      metrics: {
        riskReduction: "78%",
        complianceScore: "100%",
        lossesAvoided: "$5M+"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      hasVideo: false,
      beforeAfter: {
        before: "Risk assessment was manual and time-consuming",
        after: "Automated risk detection with real-time alerts"
      }
    }
  ];

  const recentSignups = [
    { company: "TechStart Inc.", time: "2 minutes ago", employees: "150" },
    { company: "Global Dynamics", time: "5 minutes ago", employees: "800" },
    { company: "Innovation Labs", time: "8 minutes ago", employees: "300" },
    { company: "DataCorp Solutions", time: "12 minutes ago", employees: "600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const handleVideoPlay = (testimonialId) => {
    setPlayingVideo(testimonialId);
    setIsPlaying(true);
  };

  const handleVideoClose = () => {
    setPlayingVideo(null);
    setIsPlaying(false);
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how companies like yours are transforming their data operations
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Testimonial */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Testimonial Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={currentTestimonialData.avatar}
                      alt={currentTestimonialData.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {currentTestimonialData.linkedinVerified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} color="white" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {currentTestimonialData.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {currentTestimonialData.title}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {currentTestimonialData.company} • {currentTestimonialData.companySize}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {currentTestimonialData.industry}
                  </span>
                  {currentTestimonialData.linkedinVerified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      LinkedIn Verified
                    </span>
                  )}
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                "{currentTestimonialData.quote}"
              </blockquote>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(currentTestimonialData.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{value}</div>
                    <div className="text-xs text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Video/Before-After */}
              {currentTestimonialData.hasVideo ? (
                <div className="relative">
                  {playingVideo === currentTestimonialData.id ? (
                    <div className="relative bg-black rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                          <p className="text-lg">Video Testimonial Playing...</p>
                          <p className="text-sm opacity-75 mt-2">
                            {currentTestimonialData.name} shares their success story
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={handleVideoClose}
                        className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-75 transition-all"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="relative rounded-lg overflow-hidden cursor-pointer group">
                      <img
                        src={currentTestimonialData.videoThumbnail}
                        alt="Video testimonial"
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                        <button
                          onClick={() => handleVideoPlay(currentTestimonialData.id)}
                          className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                        >
                          <Icon name="Play" size={24} className="text-blue-600 ml-1" />
                        </button>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white bg-opacity-90 rounded-lg p-3">
                          <p className="text-sm font-medium text-gray-900">
                            Watch {currentTestimonialData.name}'s success story
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Before & After</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="X" size={16} className="text-red-500 mt-1" />
                      <div>
                        <p className="font-medium text-red-900 text-sm">Before</p>
                        <p className="text-red-700 text-sm">{currentTestimonialData.beforeAfter.before}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Check" size={16} className="text-green-500 mt-1" />
                      <div>
                        <p className="font-medium text-green-900 text-sm">After</p>
                        <p className="text-green-700 text-sm">{currentTestimonialData.beforeAfter.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Signups */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2" />
                Recent Enterprise Signups
              </h3>
              <div className="space-y-3">
                {recentSignups.map((signup, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div>
                      <p className="font-medium text-gray-900">{signup.company}</p>
                      <p className="text-gray-500 text-xs">{signup.employees} employees</p>
                    </div>
                    <span className="text-gray-400 text-xs">{signup.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Security & Compliance</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Icon name="Shield" size={24} className="text-green-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">SOC 2</p>
                  <p className="text-xs text-gray-600">Certified</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Icon name="Lock" size={24} className="text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">GDPR</p>
                  <p className="text-xs text-gray-600">Compliant</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Icon name="Award" size={24} className="text-orange-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">ISO 27001</p>
                  <p className="text-xs text-gray-600">Certified</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <Icon name="CheckCircle" size={24} className="text-purple-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-900">99.9%</p>
                  <p className="text-xs text-gray-600">Uptime</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="font-bold mb-4">Platform Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-100">Companies served</span>
                  <span className="font-bold">2,500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Data processed</span>
                  <span className="font-bold">50TB+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Average ROI</span>
                  <span className="font-bold">340%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Customer satisfaction</span>
                  <span className="font-bold">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;