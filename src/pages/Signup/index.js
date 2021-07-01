import * as React from 'react'
import styled from 'styled-components'

import { theme } from '~/components/Theme/styled'

const Label = styled('label')`
	padding: ${theme.space(2)}px;
`

const Input = styled('input')`
	background: transparent;
	border-width: 1px;
	border-style: solid;
	border-color: #fff;
	// short hand : border: 1px solid #fff;

	border-radius: 200px;
	color: ${theme.color('white')};
	padding: ${theme.space(2)}px ${theme.space(1)}px;
	font-size: inherit;
`

const Main = styled('main')`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`

const Form = styled('form')`
	display: flex;
	flex-direction: column;
`

export const Signup = () => {
	return (
		<Main>
			<Form>
				<Label htmlFor="name">Email</Label>
				<Input type="text" name="name" id="name" />
			</Form>
		</Main>
	)
}
