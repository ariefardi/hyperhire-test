import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mobile: { max: "799px" }, // Mobile: anything under 800px
        medium: { max: "1600px" },
        desktop: "800px", // Desktop: 800px and above
      },
      backgroundImage: {
        "linear-primary": "linear-gradient(90deg, #FF4E83 0%, #FFBB54 100%)",
      },
      textColor: {
        "linear-primary": "transparent",
      },
      backgroundClip: {
        text: "text",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        36: "36px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-gradient": {
          backgroundImage: "linear-gradient(90deg, #FF4E83 0%, #FFBB54 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".text-gradient-2": {
          backgroundImage: "linear-gradient(90deg, #FF7E7E 0%, #F05F82 100%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ".border-linear-primary": {
          borderImage: "linear-gradient(90deg, #FF4E83 0%, #FFBB54 100%) 1",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
