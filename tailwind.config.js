/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1E3A8A', // blue-800
        'primary-foreground': '#FFFFFF', // white
        
        // Secondary Colors
        'secondary': '#3B82F6', // blue-500
        'secondary-foreground': '#FFFFFF', // white
        
        // Accent Colors
        'accent': '#F97316', // orange-500
        'accent-foreground': '#FFFFFF', // white
        
        // Background Colors
        'background': '#FFFFFF', // white
        'surface': '#F8FAFC', // slate-50
        
        // Text Colors
        'text-primary': '#1F2937', // gray-800
        'text-secondary': '#6B7280', // gray-500
        
        // Status Colors
        'success': '#10B981', // emerald-500
        'success-foreground': '#FFFFFF', // white
        'warning': '#F59E0B', // amber-500
        'warning-foreground': '#FFFFFF', // white
        'error': '#EF4444', // red-500
        'error-foreground': '#FFFFFF', // white
        
        // Border Colors
        'border': '#E5E7EB', // gray-200
        'border-active': '#F97316', // orange-500
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      boxShadow: {
        'elevation': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'ease-in-out',
      },
      backdropBlur: {
        'glass': '8px',
      },
      zIndex: {
        '30': '30',
        '40': '40',
        '50': '50',
        '55': '55',
        '60': '60',
      },
      spacing: {
        '18': '4.5rem',
        '80': '20rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}