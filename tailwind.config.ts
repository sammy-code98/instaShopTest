import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "insta-primary": "#8A226F",
        "insta-red": "#FE2C55",
        "insta-black": "#000000E5",
        "insta-grey": "#00000099",
        "insta-secondary": "#FFEAFA",
      },
    },
  },
  plugins: [],
} satisfies Config;
