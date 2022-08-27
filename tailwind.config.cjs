/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "rc-red": {
          1: "#FFF8F6",
          2: "#FFDDD8",
          3: "#FF4647",
          4: "#E0002B",
          5: "#830014",
          6: "#530003",
        },
        "rc-chartreuse": {
          1: "#E5FFC3",
          2: "#98FB00",
          3: "#5C9B00",
          4: "#497C00",
          5: "#264500",
          6: "#182600",
        },
        "rc-powder": {
          1: "#DAFAFF",
          2: "#8DF0FF",
          3: "#0098A9",
          4: "#007987",
          5: "#004048",
          6: "#002227",
        },
        "rc-violet": {
          1: "#F7F1FF",
          2: "#E8DAFF",
          3: "#9B70FF",
          4: "#794AFF",
          5: "#2D0FBF",
          6: "#0B0074",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
