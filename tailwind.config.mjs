/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#0F45FB',
				secondary: '#000',
				dark: '#000',
				light: '#000'
			}
		},
		fontFamily: {
			'sans': 'system-ui'
		}
	},
	plugins: [],
}
