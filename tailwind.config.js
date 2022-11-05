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
    /*
      fontSize: {
      xs: ['12px', '18px'],
      sm: ['16px', '22px'],
      normal: ['20px', '26px'],
      lg: ['24px', '32px'],
      xl: ['32px', '40px'],
      xl2: ['40px', '48px'],
    },
    */
  },
  plugins: [],
}
