/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440px",
      },
      // ## Colors
      colors: {
        // ### Primary
        clGrayishBlue: "hsl(237, 18%, 59%)",
        clSoftRed: "hsl(345, 95%, 68%)",
        // ### Neutral
        clWhite: "hsl(0, 0%, 100%)",
        clDarkDesaturatedBlue: "hsl(236, 21%, 26%)",
        clVerydarkBlue: "hsl(235, 16%, 14%)",
        clVerydarkBlue_2: "hsl(234, 17%, 12%)",
      },
    },
    plugins: [],
  },
}
