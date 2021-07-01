const baseColors = {
	black: '#000000',
	red: '#FF647C',
	green: '#0BD9B3',
	blue: '#487FD9',
	yellow: '#EBC455',
}

const brandColors = {
	raisinBlack: '#16171C',
	caribbeanGreen: baseColors.green,
}

const colors = {
	...baseColors,
	...brandColors,
}

const fontSizes = {
	small: '0.8rem',
	medium: '1rem',
	large: '2rem',
}

export const definitions = {
	colors,
	fontSizes,
}
