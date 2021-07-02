import withTwind from "@twind/wmr";
import * as colors from 'twind/colors'
import App from "./App";


const { hydrate, prerender } = withTwind({
	props: {
		className: true,
	},
	preflight: true, // do not include base style reset (default: use tailwind preflight)
	hash: true, // hash all generated class names (default: false)
	theme: {
		fontFamily: {
			sans: ['Jost', 'sans-serif'],
			serif: ['serif'],
		},
		colors: { ...colors, brutal_pink: '#E9005D' },
	}, // define custom theme values (default: tailwind theme)
	darkMode: 'class',
}, (data) => <App {...data} />);

hydrate(<App />);

export { prerender };
