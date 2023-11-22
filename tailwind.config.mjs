/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#ccff33',
				secondary: '#000',
				dark: '#303030',
				light: '#000'
			}
		},
		fontFamily: {
			'sans': 'system-ui'
		},
    animation: {
      'bounce-hero': 'hero 3s ease-in-out infinite',
      'bounce-arrow-right': 'arrow-right 1s ease-in-out infinite',
      'bounce-arrow-bottom': 'arrow-bottom 1s ease-in-out infinite',
    },
    keyframes: {
      'hero': {
        '0%, 100%': {
          transform: 'translateY(-10px)',
        },
        '50%': {
          transform: 'translateY(0)',
        }
      },
      'arrow-right': {
        '0%, 100%': {
          transform: 'translateX(0)',
        },
        '50%': {
          transform: 'translateX(5px)',
        }
      },
      'arrow-bottom': {
        '0%, 100%': {
          transform: 'translateY(0) rotate(90deg)',
        },
        '50%': {
          transform: 'translateY(5px) rotate(90deg)',
        }
      },
    }
	},
	plugins: [],
}
