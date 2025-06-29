import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const TrialSignupSection = () => {
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    phone: '',
    employees: '',
    role: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [urgencyTimer, setUrgencyTimer] = useState(48 * 60 * 60); // 48 hours in seconds
  const [spotsRemaining, setSpotsRemaining] = useState(47);

  const employeeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '201-1000', label: '201-1000 employees' },
    { value: '1000+', label: '1000+ employees' }
  ];

  const roleOptions = [
    { value: 'ceo', label: 'CEO/Founder' },
    { value: 'cto', label: 'CTO/VP Engineering' },
    { value: 'data', label: 'Data/Analytics Leader' },
    { value: 'marketing', label: 'Marketing Director' },
    { value: 'operations', label: 'Operations Manager' },
    { value: 'other', label: 'Other' }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simulate spots decreasing
  useEffect(() => {
    const spotsTimer = setInterval(() => {
      setSpotsRemaining(prev => {
        if (prev <= 30) return prev;
        return Math.max(30, prev - Math.floor(Math.random() * 2));
      });
    }, 30000); // Every 30 seconds

    return () => clearInterval(spotsTimer);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSpotsRemaining(prev => prev - 1);
    }, 2000);
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return formData.email && formData.company;
    }
    return formData.employees && formData.role;
  };

  if (isSuccess) {
    return (
      <section id="trial-signup" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={40} color="white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Data Alchemist!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your free trial is ready. Check your email for setup instructions.
            </p>
            
            {/* Success Metrics */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Icon name="Zap" size={24} className="text-green-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">5 Minutes</div>
                <div className="text-sm text-gray-600">To first insights</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Icon name="Shield" size={24} className="text-blue-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Enterprise Security</div>
                <div className="text-sm text-gray-600">SOC 2 & GDPR compliant</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <Icon name="Users" size={24} className="text-orange-600 mx-auto mb-2" />
                <div className="font-semibold text-gray-900">Expert Support</div>
                <div className="text-sm text-gray-600">Dedicated success team</div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="font-bold text-gray-900 mb-4">What happens next:</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <span className="text-gray-700">Check your email for login credentials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <span className="text-gray-700">Connect your first data source (takes 2 minutes)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <span className="text-gray-700">Get your first AI-generated insights</span>
                </div>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="mt-6 font-semibold"
              iconName="ExternalLink"
              iconPosition="right"
            >
              Access Your Dashboard
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="trial-signup" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-4 mb-8 text-white text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span className="font-semibold">Limited Beta Access Expires In:</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full font-mono">
                {formatTime(urgencyTimer)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={20} />
              <span>Only {spotsRemaining} spots remaining</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                  Free Trial
                </span>
              </h2>
              <p className="text-xl text-gray-600">
                Join 2,500+ companies transforming their data into strategic advantages
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center mb-8">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-3 ${
                currentStep >= 2 ? 'bg-blue-500' : 'bg-gray-200'
              }`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                2
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              {currentStep === 1 ? (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Basic Information
                  </h3>
                  
                  <Input
                    type="email"
                    placeholder="Work email address"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                  
                  <Input
                    type="text"
                    placeholder="Company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    required
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Phone number (optional)"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Company Details
                  </h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {employeeOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleInputChange('employees', option.value)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            formData.employees === option.value
                              ? 'border-blue-500 bg-blue-50 text-blue-700' :'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Role
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                      {roleOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleInputChange('role', option.value)}
                          className={`p-3 rounded-lg border text-left transition-all ${
                            formData.role === option.value
                              ? 'border-blue-500 bg-blue-50 text-blue-700' :'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Form Actions */}
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    iconName="ArrowLeft"
                    iconPosition="left"
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="primary"
                  onClick={handleNextStep}
                  disabled={!isStepValid() || isSubmitting}
                  loading={isSubmitting}
                  className={`font-semibold ${currentStep === 1 ? 'ml-auto' : ''}`}
                  iconName={currentStep === 2 ? "Check" : "ArrowRight"}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Creating Account...' : currentStep === 2 ? 'Start Free Trial' : 'Continue'}
                </Button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-500" />
                <span>SOC 2 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Lock" size={16} className="text-blue-500" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CreditCard" size={16} className="text-orange-500" />
                <span>No Credit Card Required</span>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              What You Get With Your Free Trial
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Full Platform Access
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Complete access to all features including AI insights, predictive analytics, and custom dashboards
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Personal Onboarding
                  </h4>
                  <p className="text-gray-600 text-sm">
                    One-on-one session with our data experts to help you get the most value from day one
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Database" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Connect Your Data
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Integrate with 200+ data sources including databases, cloud platforms, and business tools
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="HeadphonesIcon" size={20} color="white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Priority Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Direct access to our support team via email, chat, and phone during your trial
                  </p>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  "Setup was incredibly easy. We saw ROI within the first month."
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  - Sarah Chen, VP Analytics at TechFlow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialSignupSection;