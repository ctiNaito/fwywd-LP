/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js.ts,jsx,tsx}",],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'main':'#007979',
      'accent':'#f2c94c',
      'main_text':'#384459',
      'background':'#f1f7f8',
      'sub_text':'#06bbbc',
    },
  },
  plugins: [],
}
