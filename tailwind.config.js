module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customeBG: "#373653",
        customeYellow: "#f0ce64",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
      display: ["group-hover"],
      translate: ["group-hover"],
      opacity: ["group-hover"],
    },
  },
  plugins: [],
};
