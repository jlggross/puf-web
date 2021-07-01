import * as React from 'react'
import styled from 'styled-components'

import {
	theme,
	background,
	padding,
	margin,
	flexbox,
} from '~/components/Theme/styled'

const Label = styled('label')`
	padding: ${theme.space(2)}px ${theme.space(3)}px;
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

const Form = styled('form')``

const Box = styled('div')`
	${background}
	${padding}
	${margin}
  ${flexbox}
`

const Field = ({ type, name, label, ...props }) => (
	<Box {...props} flexbox="column">
		<Label htmlFor={name}>{label}</Label>
		<Input type={type} name={name} id={name} />
	</Box>
)

export const Signup = () => {
	return (
		<Main>
			<Form>
				<Field type="text" name="name" label="Nome" />
				<Field type="text" name="email" label="E-mail" />
			</Form>
		</Main>
	)
}
