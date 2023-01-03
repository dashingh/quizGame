/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#DF6C4F',
        'green': '#49c5b6',
        'yellow': '#FFD56F',
        'orangeyellow': '#FFB26B',
        
      },
    }
  },
  plugins: [],
}
