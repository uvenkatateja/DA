import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How quickly can I get started with Data Alchemist?',
      answer: `You can be up and running in under 5 minutes. Our setup process is designed to be intuitive:\n\n1. Sign up for your free trial (no credit card required)\n2. Connect your first data source using our one-click integrations\n3. Our AI automatically analyzes your data and generates initial insights\n4. Start exploring your personalized dashboard\n\nMost customers see their first valuable insights within the first hour of setup.`,
      tags: ['setup', 'onboarding', 'quick start']
    },
    {
      id: 2,
      category: 'Security & Compliance',
      question: 'Is my data secure with Data Alchemist?',
      answer: `Absolutely. Security is our top priority:\n\n• SOC 2 Type II certified\n• GDPR and CCPA compliant\n• ISO 27001 certified\n• End-to-end encryption (AES-256)\n• Regular security audits by third-party firms\n• Data residency options available\n• Role-based access controls\n• Single Sign-On (SSO) support\n\nYour data is encrypted both in transit and at rest, and we never share your data with third parties.`,
      tags: ['security', 'compliance', 'encryption', 'gdpr']
    },
    {
      id: 3,
      category: 'Pricing & Billing',
      question: 'What happens after my free trial ends?',
      answer: `Your free trial gives you full access to explore Data Alchemist:\n\n• No credit card required to start\n• Full feature access during trial period\n• Personal onboarding session included\n• Trial can be extended for enterprise evaluations\n\nAfter your trial:\n• Choose a plan that fits your needs\n• Seamless transition with no data loss\n• 30-day money-back guarantee\n• Cancel anytime with no penalties\n\nWe'll send you reminders before your trial expires, so you're never surprised.`,
      tags: ['trial', 'billing', 'pricing', 'cancel']
    },
    {
      id: 4,
      category: 'Integrations',
      question: 'Which data sources and tools does Data Alchemist integrate with?',
      answer: `We support 200+ integrations out of the box:\n\n**Databases:** MySQL, PostgreSQL, MongoDB, SQL Server, Oracle\n**Cloud Platforms:** AWS, Google Cloud, Azure, Snowflake\n**Business Tools:** Salesforce, HubSpot, Shopify, QuickBooks\n**Marketing:** Google Analytics, Facebook Ads, Mailchimp\n**File Formats:** Excel, CSV, JSON, XML, Parquet\n\nDon't see your tool? We offer:\n• Custom API integrations\n• Webhook support\n• CSV/Excel upload for any data\n• REST API for custom connections`,
      tags: ['integrations', 'data sources', 'api', 'connections']
    },
    {
      id: 5,
      category: 'Features',question: 'What makes Data Alchemist different from other analytics platforms?',
      answer: `Data Alchemist is built for business users, not just data scientists:\n\n**AI-First Approach:**\n• Automatic insight generation\n• Natural language queries\n• Predictive analytics without coding\n\n**Business-Focused:**\n• Pre-built industry templates\n• ROI-focused metrics\n• Executive-ready reports\n\n**No Technical Skills Required:**\n• Drag-and-drop dashboard builder\n• Plain English explanations\n• Automated data cleaning\n\n**Speed & Efficiency:**\n• Real-time processing\n• 5-minute setup\n• Instant insights`,
      tags: ['features', 'ai', 'difference', 'benefits']
    },
    {
      id: 6,
      category: 'Support',question: 'What kind of support do you provide?',
      answer: `We provide comprehensive support to ensure your success:\n\n**All Plans Include:**\n• 24/7 email support\n• Extensive knowledge base\n• Video tutorials and webinars\n• Community forum access\n\n**Professional & Enterprise:**\n• Priority phone support\n• Live chat during business hours\n• Dedicated customer success manager (Enterprise)\n• Custom training sessions\n• Implementation assistance\n\n**Response Times:**\n• Starter: 24 hours\n• Professional: 4 hours\n• Enterprise: 1 hour (with SLA)`,
      tags: ['support', 'help', 'training', 'sla']
    },
    {
      id: 7,
      category: 'Technical',question: 'Can Data Alchemist handle large datasets?',
      answer: `Yes, Data Alchemist is built to scale:\n\n**Performance:**\n• Processes millions of rows in seconds\n• Distributed computing architecture\n• Automatic query optimization\n• Smart data sampling for large datasets\n\n**Storage:**\n• Unlimited data storage (Enterprise)\n• Compressed storage to reduce costs\n• Data archiving options\n• Real-time and batch processing\n\n**Scalability:**\n• Auto-scaling infrastructure\n• 99.9% uptime SLA\n• Global CDN for fast access\n• Load balancing across regions`,
      tags: ['performance', 'scale', 'big data', 'technical']
    },
    {
      id: 8,
      category: 'Migration',question: 'How do I migrate from my current analytics solution?',answer: `We make migration simple and risk-free:\n\n**Migration Process:**\n1. Free migration assessment\n2. Data mapping and validation\n3. Parallel running period\n4. Gradual transition with training\n5. Full cutover when you're ready\n\n**What We Migrate:**\n• Historical data\n• Existing reports and dashboards\n• User accounts and permissions\n• Custom calculations and metrics\n\n**Migration Support:**\n• Dedicated migration specialist\n• Zero downtime migration\n• Data validation and testing\n• Post-migration optimization`,
      tags: ['migration', 'transition', 'data transfer', 'switch']
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const filteredFAQs = faqs.filter(faq => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const handleFAQToggle = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const formatAnswer = (answer) => {
    return answer.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <h4 key={index} className="font-semibold text-gray-900 mt-3 mb-1">
            {line.replace(/\*\*/g, '')}
          </h4>
        );
      } else if (line.startsWith('•')) {
        return (
          <li key={index} className="ml-4 text-gray-700">
            {line.substring(1).trim()}
          </li>
        );
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return (
          <p key={index} className="text-gray-700 mb-2">
            {line}
          </p>
        );
      }
    });
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about Data Alchemist
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon name="Search" size={20} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search FAQ... (e.g., 'security', 'pricing', 'setup')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <Icon name="X" size={20} className="text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSearchQuery('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !searchQuery
                ? 'bg-blue-500 text-white' :'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSearchQuery(category.toLowerCase())}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                searchQuery.toLowerCase() === category.toLowerCase()
                  ? 'bg-blue-500 text-white' :'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => handleFAQToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {faq.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    className="text-gray-400 flex-shrink-0 ml-4"
                  />
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="pt-4">
                      {formatAnswer(faq.answer)}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      {faq.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded cursor-pointer hover:bg-gray-200 transition-colors"
                          onClick={() => setSearchQuery(tag)}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No FAQs found
              </h3>
              <p className="text-gray-600 mb-4">
                Try a different search term or browse all categories
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you get the most out of Data Alchemist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('trial-signup')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Contact Support
            </button>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;