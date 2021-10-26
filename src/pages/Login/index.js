import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import { Logo, Box, font } from '~/components/'

import { Form } from './Form'
import { ReactComponent as Ilustra } from './ilustra.svg'

const Title = styled('h2')`
	${font}
`

const CenteredBox = ({ children, ...props }) => (
	<Box {...props} flex={1} flexbox="column" center>
		<Box style={{ width: 445 }}>{children}</Box>
	</Box>
)

export const Login = ({ onSuccess }) => {
	const onSubmit = async (values) => {
		try {
			const res = await axios.get('http://localhost:9901/login', {
				auth: values,
			})

			console.log(res.data)
			onSuccess(res.data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Box flex={1} flexbox>
			<CenteredBox bg="black">
				<Logo p={6} flexbox center />
				<Ilustra />
			</CenteredBox>
			<CenteredBox>
				<Title textAlign="center">Login</Title>
				<Form onSubmit={onSubmit} />
			</CenteredBox>
		</Box>
	)
}
