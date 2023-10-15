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
				"primario": "#1A1A2E",
				"secundario": "#E94560",
				"terceario": "#0F3460",
			}
		},
	},
	plugins: [],
}
