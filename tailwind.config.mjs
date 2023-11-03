/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"Poppins": ['Poppins','system-ui'],
				"Montserrat": ['Montserrat','system-ui'],
				"Roboto": ['Roboto','system-ui'],
				"Inter": ['Inter','system-ui'],
				"Gabarito": ['Gabarito','system-ui'],
			},
			colors: {
				"primario": "#151735",
				"secundario": "#2a5c8b",
				"terceario": "#4276a8",
				"cuarto": "#e32265",
			}
		},
	},
	plugins: [],
}
