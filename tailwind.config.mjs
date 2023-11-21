/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ccff33',
				secondary: '#000',
				dark: '#000',
				light: '#000'
			},
      backgroundColor: {
        primary: '#ccff33',
        dark: '#1b1b1b'
      }
		},
		fontFamily: {
			'sans': 'system-ui'
		}
	},
	plugins: [],
}
