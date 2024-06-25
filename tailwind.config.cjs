/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        nosans: ["Sora", "sans-serif"],
      },
      colors: {
        primary: "#050F43",
        secondary: "#E53D47",
      },
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1296px",
          "2xl": "1536px",
        },
      },
      listStyleImage: {
        checkmark: `url("data:image/svg+xml,%3Csvg width='16' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.7071 8.70711C19.0976 8.31658 19.0976 7.68342 18.7071 7.29289C18.3166 6.90237 17.6834 6.90237 17.2929 7.29289L10 14.5858L6.70711 11.2929C6.31658 10.9024 5.68342 10.9024 5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071L9.29289 16.7071C9.68342 17.0976 10.3166 17.0976 10.7071 16.7071L18.7071 8.70711Z' fill='%23373F69'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
