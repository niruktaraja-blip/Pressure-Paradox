export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#8B5CF6',
        skySoft: '#5B8DEF',
        purpleSoft: '#8B5CF6',
        accent: '#A78BFA',
        surface: '#081B3A',
        surfaceSoft: '#0F2040',
        card: '#0B1B3E',
        text: '#F8FAFC',
        muted: '#CBD5E1',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.2)',
        glow: '0 0 80px rgba(139, 92, 246, 0.18)',
      },
    },
  },
  plugins: [],
};
