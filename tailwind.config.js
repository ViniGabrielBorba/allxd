/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#7B61FF',
        textMain: '#1C1C1C',
        textSecondary: '#555',
        bgLight: '#F7F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

