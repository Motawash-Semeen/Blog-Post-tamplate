/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                bg_main: 'rgb(15, 23, 42)',
            },

            screens: {
                'xsm': '405px',
            },
            fontFamily: {
                body: ['Noto Sans']
            },

        },
    },
    plugins: [],
}