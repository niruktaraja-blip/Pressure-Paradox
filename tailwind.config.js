export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1E3A8A',
        skySoft: '#5B8DEF',
        purpleSoft: '#8B5CF6',
        surface: '#F8FAFC',
        card: '#FFFFFF',
        text: '#0F172A',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
};
