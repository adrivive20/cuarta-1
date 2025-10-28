import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream:  "#DCC9B0",
          caramel:"#A7805A",
          mocha:  "#81634A",
          sage:   "#AEA781",
          olive:  "#555842",
        },
      },
    },
  },
  plugins: [],
};

export default config;
