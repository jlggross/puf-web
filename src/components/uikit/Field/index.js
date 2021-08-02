import * as React from 'react'
import styled from 'styled-components'

import { Box } from '~/components/uikit/Box'
import { Input } from '~/components/uikit/Input'
import { Label } from '~/components/uikit/Label'
import { theme } from '~/components/Theme'

const ErrorMessage = styled(Box)`
	color: ${theme.color('red')};
	padding: ${theme.space(1)}px ${theme.space(3)}px;
	font-size: ${theme.size(2)}px;
`

export const Field = ({
	type,
	name,
	label,
	value,
	error,
	disabled,
	onChange,
	...props
}) => (
	<Box {...props} flexbox="column">
		<Label htmlFor={name}>{label}</Label>
		<Input
			type={type}
			name={name}
			id={name}
			value={value}
			disabled={disabled}
			onChange={onChange}
			hasError={!!error}
		/>
		{error && <ErrorMessage>{error}</ErrorMessage>}
	</Box>
)
