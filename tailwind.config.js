/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#3498DB',
          700: '#2980B9',
        },
      },
      borderRadius: {
        'button': '0.375rem',
      }
    },
  },
  plugins: [],
  // This is important to ensure Tailwind classes work with Ant Design
  corePlugins: {
    preflight: false,
  },
  // Adicione estas configurações para lidar com caracteres especiais
  future: {
    respectDefaultRingColorOpacity: true,
  },
  experimental: {
    relaxedWhitespace: true,
  }
}