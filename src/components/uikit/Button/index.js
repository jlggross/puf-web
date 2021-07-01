import styled from 'styled-components'

import { theme } from '~/components/Theme/styled'

export const Button = styled('button')`
	background: ${theme.color('white')};
	border: none;
	border-radius: 200px;
	color: ${theme.color('black')};
	padding: ${theme.space(2)}px ${theme.space(8)}px;
	font-size: inherit;
	outline: none;
`
