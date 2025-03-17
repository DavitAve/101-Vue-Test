module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        light: '#F1F0E9',
        secondary: '#41644A',
        primary: '#0D4715',
        orange: '#E9762B',
        khaki: '#A5B68D',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          sm: '100%',
          md: '960px',
          lg: '1080px',
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
};
