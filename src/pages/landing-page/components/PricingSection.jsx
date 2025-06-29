import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for small teams getting started with data analytics',
      monthlyPrice: 99,
      annualPrice: 79,
      popular: false,
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Email support',
        '10GB data storage',
        'Standard integrations',
        'Basic reporting',
        'Data export (CSV)',
        'Mobile app access'
      ],
      limitations: [
        'No custom dashboards',
        'No API access',
        'No advanced analytics'
      ],
      cta: 'Start Free Trial',
      trialDays: 14
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Advanced analytics for growing businesses',
      monthlyPrice: 299,
      annualPrice: 239,
      popular: true,
      features: [
        'Up to 25 data sources',
        'Advanced analytics & AI insights',
        'Priority support + phone',
        '100GB data storage',
        'All integrations included',
        'Custom dashboards',
        'Automated reporting',
        'API access',
        'Predictive analytics',
        'Real-time alerts',
        'Data export (all formats)',
        'Team collaboration tools'
      ],
      limitations: [],
      cta: 'Start Free Trial',
      trialDays: 21,
      savings: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for large organizations',
      monthlyPrice: 799,
      annualPrice: 639,
      popular: false,
      features: [
        'Unlimited data sources',
        'Full AI & ML capabilities',
        'Dedicated success manager',
        'Unlimited data storage',
        'Custom integrations',
        'White-label options',
        'Advanced security controls',
        'SLA guarantees',
        'Custom training',
        'On-premise deployment',
        'Advanced compliance',
        'Priority feature requests'
      ],
      limitations: [],
      cta: 'Contact Sales',
      trialDays: 30,
      customPricing: false
    }
  ];

  const urgencyData = {
    spotsRemaining: 47,
    totalSpots: 100,
    expiresIn: '48 hours'
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(price);
  };

  const calculateSavings = (monthly, annual) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - (annual * 12);
    const percentage = Math.round((savings / monthlyCost) * 100);
    return { amount: savings, percentage };
  };

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
    // Scroll to trial signup
    document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business. All plans include our core analytics platform.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly' ?'bg-white text-gray-900 shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all relative ${
                billingCycle === 'annual' ?'bg-white text-gray-900 shadow-sm' :'text-gray-600 hover:text-gray-900'
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-4 mb-8 text-white text-center">
          <div className="flex items-center justify-center space-x-4">
            <Icon name="Clock" size={20} />
            <span className="font-semibold">
              Limited Beta Access: Only {urgencyData.spotsRemaining} of {urgencyData.totalSpots} spots remaining
            </span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
              Expires in {urgencyData.expiresIn}
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const savings = calculateSavings(plan.monthlyPrice, plan.annualPrice);
            
            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? 'border-blue-500 transform scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {plan.description}
                    </p>
                    
                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">
                        {formatPrice(price)}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /month
                      </span>
                      {billingCycle === 'annual' && (
                        <div className="text-sm text-green-600 font-medium mt-1">
                          Save {formatPrice(savings.amount)}/year ({savings.percentage}% off)
                        </div>
                      )}
                    </div>

                    {/* Trial Info */}
                    <div className="text-sm text-gray-500">
                      {plan.trialDays}-day free trial • No credit card required
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Icon name="Check" size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.limitations.length > 0 && (
                      <div className="mt-4">
                        <h5 className="font-medium text-gray-700 mb-2 text-sm">Not included:</h5>
                        <ul className="space-y-1">
                          {plan.limitations.map((limitation, index) => (
                            <li key={index} className="flex items-start space-x-3">
                              <Icon name="X" size={14} className="text-gray-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-500">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <Button
                    variant={plan.popular ? "primary" : "outline"}
                    fullWidth
                    size="lg"
                    onClick={() => handlePlanSelect(plan.id)}
                    className="font-semibold"
                    iconName={plan.id === 'enterprise' ? 'Phone' : 'ArrowRight'}
                    iconPosition="right"
                  >
                    {plan.cta}
                  </Button>

                  {/* Additional Info */}
                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      {plan.id === 'enterprise' ?'Custom pricing available for 1000+ employees' :'Cancel anytime • No setup fees'
                      }
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Feature Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.id} className="text-center py-3 px-4 font-semibold text-gray-900">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { feature: 'Data Sources', values: ['5', '25', 'Unlimited'] },
                  { feature: 'Storage', values: ['10GB', '100GB', 'Unlimited'] },
                  { feature: 'API Access', values: [false, true, true] },
                  { feature: 'Custom Dashboards', values: [false, true, true] },
                  { feature: 'Predictive Analytics', values: [false, true, true] },
                  { feature: 'White-label', values: [false, false, true] },
                  { feature: 'Dedicated Support', values: [false, false, true] }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                    {row.values.map((value, valueIndex) => (
                      <td key={valueIndex} className="py-3 px-4 text-center">
                        {typeof value === 'boolean' ? (
                          <Icon 
                            name={value ? "Check" : "X"} 
                            size={16} 
                            className={value ? "text-green-500" : "text-gray-300"} 
                          />
                        ) : (
                          <span className="text-gray-700">{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have questions about our pricing?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View FAQ
            </button>
            <span className="text-gray-300">•</span>
            <button
              onClick={() => document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Contact Sales
            </button>
            <span className="text-gray-300">•</span>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;