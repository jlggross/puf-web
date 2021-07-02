import styled from 'styled-components'

import { theme } from '~/components/Theme/styled'

export const Input = styled('input')`
	background: transparent;
	border-width: 1px;
	border-style: solid;
	border-color: #fff;
	// short hand : border: 1px solid #fff;

	border-radius: 200px;
	color: ${theme.color('white')};
	padding: ${theme.space(2)}px ${theme.space(3)}px;
	font-size: inherit;
	outline: none;

	${({ disabled }) => disabled && 'opacity: 0.5;'}
`
