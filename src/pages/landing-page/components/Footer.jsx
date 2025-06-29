import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#benefits-showcase' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Demo', href: '#demo' },
        { label: 'Integrations', href: '#' },
        { label: 'API Documentation', href: '#' },
        { label: 'Changelog', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'For Startups', href: '#' },
        { label: 'For Enterprise', href: '#' },
        { label: 'For Marketing Teams', href: '#' },
        { label: 'For Sales Teams', href: '#' },
        { label: 'For Operations', href: '#' },
        { label: 'Use Cases', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Documentation', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Webinars', href: '#' },
        { label: 'Case Studies', href: '#testimonials' },
        { label: 'ROI Calculator', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' },
        { label: 'Partners', href: '#' },
        { label: 'Contact', href: '#trial-signup' },
        { label: 'Security', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', href: '#' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#' },
    { name: 'GitHub', icon: 'Github', href: '#' },
    { name: 'YouTube', icon: 'Youtube', href: '#' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path 
                      d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 17L12 22L22 17" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M2 12L12 17L22 12" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold">Data Alchemist</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transform your scattered business data into predictive insights and automated intelligence. 
                Join 2,500+ companies already using Data Alchemist to drive revenue growth and operational efficiency.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-gray-400" />
                  <span className="text-gray-300">hello@dataalchemist.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-gray-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} className="text-gray-400" />
                  <span className="text-gray-300">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors"
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm">
                Get the latest insights on data analytics and business intelligence delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Security & Compliance Badges */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-green-400" />
              <span className="text-sm text-gray-300">SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={20} className="text-blue-400" />
              <span className="text-sm text-gray-300">GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-orange-400" />
              <span className="text-sm text-gray-300">ISO 27001</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircle" size={20} className="text-purple-400" />
              <span className="text-sm text-gray-300">99.9% Uptime SLA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Data Alchemist. All rights reserved.</span>
              <button className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-orange-400 transition-colors">
                Terms of Service
              </button>
              <button className="hover:text-orange-400 transition-colors">
                Cookie Policy
              </button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with</span>
              <Icon name="Heart" size={16} className="text-red-500" />
              <span>in San Francisco</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;