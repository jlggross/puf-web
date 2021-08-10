// styled-components helpers

const addIfExists = (prop, value) => (prop ? value : '')

const th = (prop) => (value) => (props) => props.theme[prop][value] || value

export const theme = {
	space: th('spaces'),
	size: th('fontSizes'),
	color: th('colors'),
}

export const flexbox = (props) => {
	const direction =
		typeof props.flexbox === Boolean ? props.flexDirection : props.flexbox

	const justifyContent = props.justifyContent || (props.center && 'center')
	const alignItems = props.alignItems || (props.center && 'center')

	return `
    ${addIfExists(props.flex, `flex: ${props.flex};`)}
    ${addIfExists(props.flexbox, 'display: flex;')}
    ${addIfExists(direction, `flex-direction: ${direction};`)}
    ${addIfExists(justifyContent, `justify-content: ${justifyContent};`)}
    ${addIfExists(alignItems, `align-items: ${alignItems};`)}
  `
}

export const background = (props) =>
	addIfExists(props.bg, `background: ${props.theme.colors[props.bg]};`)

export const font = (props) => {
	const color = addIfExists(
		props.color,
		`color: ${props.theme.colors[props.color] || props.color};`
	)

	const size = addIfExists(
		Object.prototype.hasOwnProperty.call(props, 'fontSize'),
		`font-size: ${props.theme.fontSizes[props.fontSize]}px;`
	)

	return `
    ${addIfExists(color, color)}
    ${addIfExists(size, size)}
    ${addIfExists(props.textAlign, `text-align: ${props.textAlign};`)}
    ${addIfExists(props.fontWeight, `font-weight: ${props.fontWeight};`)}
  `
}

export const margin = (props) => {
	const mb = props.mb ?? props.my ?? props.m ?? ''
	const mt = props.mt ?? props.my ?? props.m ?? ''
	const ml = props.ml ?? props.mx ?? props.m ?? ''
	const mr = props.mr ?? props.mx ?? props.m ?? ''

	return `
    ${mb !== '' ? `margin-bottom: ${props.theme.spaces[mb]}px;` : ''}
    ${mt !== '' ? `margin-top: ${props.theme.spaces[mt]}px;` : ''}
    ${ml !== '' ? `margin-left: ${props.theme.spaces[ml]}px;` : ''}
    ${mr !== '' ? `margin-right: ${props.theme.spaces[mr]}px;` : ''}
  `
}

export const padding = (props) => {
	const pb = props.pb ?? props.py ?? props.p ?? ''
	const pt = props.pt ?? props.py ?? props.p ?? ''
	const pl = props.pl ?? props.px ?? props.p ?? ''
	const pr = props.pr ?? props.px ?? props.p ?? ''

	return `
    ${pb !== '' ? `padding-bottom: ${props.theme.spaces[pb]}px;` : ''}
    ${pt !== '' ? `padding-top: ${props.theme.spaces[pt]}px;` : ''}
    ${pl !== '' ? `padding-left: ${props.theme.spaces[pl]}px;` : ''}
    ${pr !== '' ? `padding-right: ${props.theme.spaces[pr]}px;` : ''}
  `
}
