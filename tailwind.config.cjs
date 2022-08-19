/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave1': "url('src/assets/wave1.jpg')",
        'wave2': "url('src/assets/wave2.jpg')",
        'blue1': "url('src/assets/blue1.jpg')",
        'gray1': "url('src/assets/gray1.jpg')",
        'sea1': "url('src/assets/sea1.jpg')",
        'sea2': "url('src/assets/sea2.jpg')",
        'sea3': "url('src/assets/sea3.jpg')",
        'sky1': "url('src/assets/sky1.jpg')",
        'sky2': "url('src/assets/sky2.jpg')",
        'sky3': "url('src/assets/sky3.jpg')",
        'sky4': "url('src/assets/sky4.jpg')",
        'sky5': "url('src/assets/sky5.jpg')",
        'cloud1': "url('src/assets/cloud1.jpg')",
        'cloud2': "url('src/assets/cloud2.png')",
        'vivi1': "url('src/assets/vivi1.png')",
      }
    },
  },
  plugins: [],
}