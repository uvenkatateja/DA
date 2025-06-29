import React from 'react';
import Header from '../../components/ui/Header';
import SectionProgressIndicator from '../../components/ui/SectionProgressIndicator';
import FloatingCTA from '../../components/ui/FloatingCTA';
import ExitIntentModal from '../../components/ui/ExitIntentModal';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import ROICalculator from './components/ROICalculator';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import DemoSection from './components/DemoSection';
import TrialSignupSection from './components/TrialSignupSection';
import Footer from './components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Progress Indicator */}
      <SectionProgressIndicator />
      
      {/* Floating CTA */}
      <FloatingCTA />
      
      {/* Exit Intent Modal */}
      <ExitIntentModal />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Problem Agitation */}
        <ProblemSection />
        
        {/* Solution Overview */}
        <SolutionSection />
        
        {/* Benefits Showcase */}
        <BenefitsSection />
        
        {/* ROI Calculator */}
        <ROICalculator />
        
        {/* Testimonials & Social Proof */}
        <TestimonialsSection />
        
        {/* Pricing */}
        <PricingSection />
        
        {/* FAQ */}
        <FAQSection />
        
        {/* Interactive Demo */}
        <DemoSection />
        
        {/* Trial Signup */}
        <TrialSignupSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;