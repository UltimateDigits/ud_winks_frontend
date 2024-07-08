/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customStart: "#06061E",
        customStart1: "#009EE5",
        customEnd: "#2070F4",
        customEnd2: "#A36EFD",
        customBorder: '#2070F4',
        customGrayFill: "#1F2138",
        customGrayStroke: "#384160",
        customFontColor: "#D8E4FD",
        customButtonStroke: "#2070F4"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
