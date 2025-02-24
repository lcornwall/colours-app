import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'loading-doodles': "url('/loadingDoodles.PNG')",
        'character-doodles': "url('/characterBackground.PNG')",
        'smiley-doodles': "url('/smiles.PNG')",
      },
    },
  },
  plugins: [],
};

export default config;
