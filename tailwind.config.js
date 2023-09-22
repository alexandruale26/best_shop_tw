/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#08A6E4",
        primaryRed: "#FB3B64",
        primaryGreen: "#55DFB4",
        primaryGrey: "#F7F7F7",
        secondary: "#00f6ff",
        dimWhite: "#A5A5A5",
        dimWhite2: "#707070",
        borderGrey: "#E8E9ED",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        navLink: "inset 0 -4px #08A6E4",
        imgShaddowEffect: "0px -50px 50px rgba(0, 0, 0, 0.1)",
        buttonShadow: "0 10px 15px -3px #08A6E444",
        cardShadow: "5px 10px 27px #08A6E422",
        footerShadow: "0 -10px 30px -3px rgba(0, 0, 0, 0.1), 0 -4px 10px -4px rgba(0, 0, 0, 0.1)",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  safelist: [
    "bg-primaryRed",
    "bg-primaryBlue",
    "bg-primaryGreen",
    "border-primaryRed",
    "border-primaryBlue",
    "border-primaryGreen",
    "text-primaryRed",
    "text-primaryBlue",
    "text-primaryGreen",
  ],
};
