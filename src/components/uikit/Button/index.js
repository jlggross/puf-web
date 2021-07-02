import * as React from 'react'
import styled from 'styled-components'

import { theme } from '~/components/Theme/styled'
import { Spinner } from '~/components/uikit/Spinner'

const StyledButton = styled('button')`
	background: ${theme.color('white')};
	border: none;
	border-radius: 200px;
	color: ${theme.color('black')};
	padding: ${theme.space(2)}px ${theme.space(8)}px;
	font-size: inherit;
	outline: none;

	${({ disabled }) => disabled && 'opacity: 0.5;'}
`

export const Button = ({ loading, children }) => (
	<StyledButton disabled={loading}>
		{loading ? <Spinner /> : children}
	</StyledButton>
)
