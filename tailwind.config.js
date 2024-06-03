module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        mono: ['Space Mono', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
