/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primario: "#1E1E1E",
        secundario: "#4F46E5",
        terciario: "#EAEAEA",
        quaternario: "#6495ED",
        quintenario: "#111344",
      },
    },
  },
  plugins: [],
};
