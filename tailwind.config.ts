import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "galaxy-1": "url('/static/galaxy1.png')",
        "galaxy-2": "url('/static/galaxy2.png')",
        "galaxy-3": "url('/static/galaxy3.png')",
      },
    },
  },
  plugins: [],
};
export default config;
