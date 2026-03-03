/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                obsidian: '#050505',
                neonCyan: '#00f2fe',
                electricBlue: '#4facfe'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                glow: {
                    '0%': { boxShadow: '0 0 5px #00f2fe' },
                    '100%': { boxShadow: '0 0 20px #00f2fe, 0 0 30px #4facfe' },
                }
            }
        },
    },
    plugins: [],
}
