import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': { max: "639px" },
      sm: '640px',
      'sm-max': { max: "767px" },
      'sm-lg': { min: '640px', max: '1023px' },
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px'
    },
    fontFamily: {
      dm_sans: 'var(--font-dm_sans)',
      poppins: 'var(--font-poppins)'
    },
    backgroundImage: {
      "home-desktop": 'url(/assets/image-home-desktop.png)',
      "home-mobile": 'url(/assets/image-home-mobile.png)',
      dividertOne: "linear-gradient(90deg, #12514A 0%, rgba(72, 123, 114, 0) 100%)",
      dividerTwo: "linear-gradient(270deg, #12514A 0%, rgba(72, 123, 114, 0) 100%)"
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#12514A',
        },
        backgroundImgColor: '#23BBAE',
        buttonColor: "#04897D",
        backgroundColor: {
          100: "#EFF6F6",
          300: "#CEDAD9"
        },
        titleColor: "#0F241D",
        fontColor: "#525A58",
      },
    },
  },
  plugins: [],
};
export default config;
