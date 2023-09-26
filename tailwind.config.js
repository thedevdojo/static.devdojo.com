/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 25s linear infinite',
                marquee2: 'marquee2 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': {
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        transform: 'translateX(100%)'
                    },
                },
                marquee2: {
                    '0%': {
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
            },
            'screens' : {
              'h-mini': { 'raw': '(max-height: 720px)' },
              'h-small': { 'raw': '(max-height: 825px)' },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}