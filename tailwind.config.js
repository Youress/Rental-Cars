/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primebrand: "rgba(255,95,0,1)", // Replace 'customColor' with your desired color name
        primebrandfocus: "rgb(255, 85, 0)", // Replace 'customColor' with your desired color name
        primegray: "rgba(89,89,89,1)", // Replace 'customColor' with your desired color name
        sectiongray: "rgb(242, 242, 242)", // Replace 'customColor' with your desired color name
      },
      gridTemplateColumns: {
        auto1fr: "1fr auto",
        twosec: "250px 1fr ",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif", "RobotoAria"],
      },
      screens: {
        "2xlx": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xlx: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgx: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdx: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smx: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
