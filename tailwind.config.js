/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primebrand: "rgba(255,95,0,1)", // Replace 'customColor' with your desired color name
        secondary: "rgb(244, 244, 249)", // Replace 'customColor' with your desired color name
        primegray: "rgba(89,89,89,1)", // Replace 'customColor' with your desired color name
        sectiongray: "rgb(242, 242, 242)", // Replace 'customColor' with your desired color name
      },
      boxShadow: {
        'box': 'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
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
        mds: { max: "425px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
};
