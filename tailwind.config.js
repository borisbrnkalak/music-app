const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: colors.white,
            black: colors.black,
            rose: colors.rose,
            pink: colors.pink,
            fuchsia: colors.fuchsia,
            purple: colors.purple,
            violet: colors.violet,
            indigo: colors.indigo,
            blue: colors.blue,
            sky: colors.sky,
            cyan: colors.cyan,
            teal: colors.teal,
            emerald: colors.emerald,
            green: colors.green,
            lime: colors.lime,
            yellow: colors.yellow,
            amber: colors.amber,
            orange: colors.orange,
            red: colors.red,
            stone: colors.stone,
            neutral: colors.neutral,
            gray: colors.gray,
            zinc: colors.zinc,
            slate: colors.slate,
        },
    },
    plugins: [],
};
