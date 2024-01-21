/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFF",
      black: "#000",
      grey: "#0000008a",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {},
  plugins: [require("daisyui")],
  daisyui: {
    //If it's true, all themes will be included. If it's false, only light and dark themes will be available.
    //If it's an array, only themes in the array will be included and the first theme will be the default theme.
    themes: [
      {
        buttertheme: {
          primary: "#426B1F",

          secondary: "#1F426B",

          accent: "#6B1F42",

          neutral: "#141414",

          "base-100": "#fffcff",

          info: "#0094d7",

          success: "#00d073",

          warning: "#df7700",

          error: "#f30035",

          "base-100": "#F7F9F3",
        },
      },
      "night",
      "cupcake",
      "cyberpunk",
    ],
    //themes: false,
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
