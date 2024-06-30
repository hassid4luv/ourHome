/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#d9d9d9",
        },
        darkslategray: "#333",
        mediumpurple: {
          "100": "#8489f9",
          "200": "rgba(132, 137, 249, 0.98)",
        },
        silver: "#bfbfbf",
        gray: {
          "100": "#948f8f",
          "200": "#7a7676",
        },
        cornflowerblue: "rgba(126, 135, 222, 0.65)",
        slateblue: "#2835ac",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "merriweather-sans": "'Merriweather Sans'",
        "fira-sans": "'Fira Sans'",
        "averia-serif-libre": "'Averia Serif Libre'",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "31xl": "50px",
        "81xl": "100px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "9xl": "28px",
      "3xl": "22px",
      "13xl": "32px",
      "7xl": "26px",
      "17xl": "36px",
      "10xl": "29px",
      "35xl": "54px",
      "29xl": "48px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      mq1500: {
        raw: "screen and (max-width: 1500px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
