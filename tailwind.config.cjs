const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		spacing: {
			768: '768px'
		},
		screens: {
			xs: { min: '0px', max: '640px' },
			sm: { min: '640px', max: '767px' },
			md: { min: '768px', max: '1023px' },
			lg: { min: '1024px', max: '1279px' },
			xl: { min: '1280px', max: '1535px' },
			'2xl': { min: '1536px' }
		},
		extend: {
			screens: {
				print: { raw: 'print' }
			}
		}
	},
	plugins: []
};

module.exports = config;
