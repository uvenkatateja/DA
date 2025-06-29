import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ROICalculator = () => {
  const [inputs, setInputs] = useState({
    companySize: 100,
    currentDataTime: 20,
    revenueTarget: 1000000,
    dataQualityIssues: 15
  });
  
  const [results, setResults] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const companySizeOptions = [
    { value: 50, label: '1-50 employees', multiplier: 1 },
    { value: 100, label: '51-200 employees', multiplier: 1.2 },
    { value: 500, label: '201-1000 employees', multiplier: 1.5 },
    { value: 1000, label: '1000+ employees', multiplier: 2 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const sizeMultiplier = companySizeOptions.find(opt => opt.value === inputs.companySize)?.multiplier || 1;
      
      // Time savings calculation
      const currentWeeklyHours = inputs.currentDataTime;
      const newWeeklyHours = Math.max(2, currentWeeklyHours * 0.1); // 90% reduction
      const timeSavingsPerWeek = currentWeeklyHours - newWeeklyHours;
      const annualTimeSavings = timeSavingsPerWeek * 52;
      
      // Cost savings (assuming $75/hour average)
      const hourlyCost = 75;
      const annualCostSavings = annualTimeSavings * hourlyCost * sizeMultiplier;
      
      // Revenue impact
      const dataQualityImprovement = (100 - inputs.dataQualityIssues) / 100;
      const revenueIncrease = inputs.revenueTarget * 0.25 * dataQualityImprovement * sizeMultiplier;
      
      // Platform cost (estimated)
      const annualPlatformCost = Math.min(50000, inputs.companySize * 100);
      
      // Total ROI
      const totalBenefits = annualCostSavings + revenueIncrease;
      const netBenefit = totalBenefits - annualPlatformCost;
      const roiPercentage = ((netBenefit / annualPlatformCost) * 100);
      
      setResults({
        timeSavingsPerWeek,
        annualTimeSavings,
        annualCostSavings,
        revenueIncrease,
        totalBenefits,
        annualPlatformCost,
        netBenefit,
        roiPercentage,
        paybackMonths: Math.ceil((annualPlatformCost / (totalBenefits / 12)))
      });
      
      setIsCalculating(false);
    }, 2000);
  };

  useEffect(() => {
    if (Object.values(inputs).every(val => val > 0)) {
      const timer = setTimeout(calculateROI, 500);
      return () => clearTimeout(timer);
    }
  }, [inputs]);

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(Math.round(num));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Calculate Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              ROI Potential
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how much Data Alchemist can save your company in the first year
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Tell us about your company
            </h3>
            
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Company Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {companySizeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleInputChange('companySize', option.value)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        inputs.companySize === option.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700' :'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Data Processing Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Weekly hours spent on data tasks: {inputs.currentDataTime}h
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={inputs.currentDataTime}
                  onChange={(e) => handleInputChange('currentDataTime', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5h</span>
                  <span>80h</span>
                </div>
              </div>

              {/* Annual Revenue Target */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Annual Revenue Target: {formatCurrency(inputs.revenueTarget)}
                </label>
                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="100000"
                  value={inputs.revenueTarget}
                  onChange={(e) => handleInputChange('revenueTarget', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$100K</span>
                  <span>$50M</span>
                </div>
              </div>

              {/* Data Quality Issues */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Current data quality issues: {inputs.dataQualityIssues}%
                </label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  value={inputs.dataQualityIssues}
                  onChange={(e) => handleInputChange('dataQualityIssues', parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Your ROI Projection
            </h3>

            {isCalculating ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                  <Icon name="Calculator" size={32} color="white" />
                </div>
                <p className="text-lg font-medium text-gray-700">
                  Calculating your ROI...
                </p>
              </div>
            ) : results ? (
              <div className="space-y-6">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {Math.round(results.roiPercentage)}%
                    </div>
                    <div className="text-sm text-gray-600">Annual ROI</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {results.paybackMonths}
                    </div>
                    <div className="text-sm text-gray-600">Months to payback</div>
                  </div>
                </div>

                {/* Financial Benefits */}
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Annual Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time savings</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(results.annualCostSavings)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Revenue increase</span>
                      <span className="font-semibold text-green-600">
                        {formatCurrency(results.revenueIncrease)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-semibold text-gray-900">Total Benefits</span>
                      <span className="font-bold text-green-600">
                        {formatCurrency(results.totalBenefits)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform cost</span>
                      <span className="text-red-600">
                        -{formatCurrency(results.annualPlatformCost)}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="font-semibold text-gray-900">Net Benefit</span>
                      <span className="font-bold text-blue-600">
                        {formatCurrency(results.netBenefit)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Time Savings */}
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Time Savings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Weekly hours saved</span>
                      <span className="font-semibold text-blue-600">
                        {formatNumber(results.timeSavingsPerWeek)}h
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Annual hours saved</span>
                      <span className="font-semibold text-blue-600">
                        {formatNumber(results.annualTimeSavings)}h
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="primary"
                  fullWidth
                  size="lg"
                  onClick={() => document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-semibold"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Start Your Free Trial
                </Button>

                <button
                  onClick={() => setShowBreakdown(!showBreakdown)}
                  className="w-full text-center text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {showBreakdown ? 'Hide' : 'Show'} detailed breakdown
                </button>

                {showBreakdown && (
                  <div className="bg-white rounded-lg p-6 text-sm">
                    <h5 className="font-semibold text-gray-900 mb-3">Calculation Details</h5>
                    <div className="space-y-2 text-gray-600">
                      <p>• Time savings: 90% reduction in manual data work</p>
                      <p>• Revenue impact: 25% increase from better insights</p>
                      <p>• Cost per hour: $75 (industry average)</p>
                      <p>• Data quality improvement: {100 - inputs.dataQualityIssues}%</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <Icon name="Calculator" size={48} className="text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">
                  Adjust the inputs to see your ROI calculation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;