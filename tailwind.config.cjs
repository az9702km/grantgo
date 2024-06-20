/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        nosans: ["Sora", "sans-serif"]
      },
      colors: {
        primary: "#050F43",
        secondary: "#E53D47",
      },
      container: {
        center: true,
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1296px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
