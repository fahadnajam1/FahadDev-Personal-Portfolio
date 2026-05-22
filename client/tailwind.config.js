/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D4AA",
        background: {
          DEFAULT: "#0A0F1E",
          secondary: "#0D1B2A"
        },
        text: {
          primary: "#E8F4F1",
          secondary: "#8FA8A3"
        },
        card: "rgba(255, 255, 255, 0.05)"
      },
      fontFamily: {
        heading: ["Sora", "Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 212, 170, 0.5)",
        "glow-hover": "0 0 30px rgba(0, 212, 170, 0.8)",
      }
    },
  },
  plugins: [],
}
