import * as React from 'react'
import styled from 'styled-components'

import { Box, Field } from '~/components/'

const Main = styled(Box)`
	justify-content: center;
	align-items: center;
	flex: 1;
`
export const Signup = () => {
	return (
		<Main as="main" flexbox="column">
			<Field type="text" name="name" label="Nome" mb={3} />
			<Field type="text" name="email" label="E-mail" />
		</Main>
	)
}
