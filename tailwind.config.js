/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				accent: colors.red,
			},
			fontFamily: {
				body: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
