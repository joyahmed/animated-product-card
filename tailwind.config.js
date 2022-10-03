module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				xs: '500px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px'
			},
			backgroundImage: {
				'gradient-to-b':
					'linear-gradient(to bottom,rgba(20,17,73,.7) 0,rgba(20,17,73,.15) 15%,rgba(32,28,111,.35) 29%,rgba(20,17,73,.58) 44%,rgba(5,3,41,0.5) 68%, rgba(5,3,41,0.5) 100%);'
			},
			fontSize: {
				xs: '.75rem',
				sm: '.875rem',
				tiny: '.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.25rem',
				'2xl': '1.5rem',
				'3xl': '1.875rem',
				'4xl': '2.25rem',
				'5xl': '3rem',
				'6xl': '4rem',
				'7xl': '5rem'
			}
		}
	},

	plugins: []
};
