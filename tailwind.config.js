/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#DF6C4F',
        'green': '#49c576',
        'yellow': '#FFD56F',
        'orangeyellow': '#FFB26B',
        'primary': '#DEF2F1',
        'secondary': '#8cd1cd',
        
      },
    }
  },
  plugins: [],
}
