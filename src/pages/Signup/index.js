import * as React from 'react'
import styled from 'styled-components'

import { Field } from '~/components/'

const Main = styled('main')`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
`

const Form = styled('form')``

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
