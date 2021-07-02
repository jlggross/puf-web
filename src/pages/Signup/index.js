import * as React from 'react'
import { useState } from 'react'

import { Box, Field, Button } from '~/components/'

export const Signup = () => {
	const [values, setValues] = useState({})

	const onChange = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	const onSubmit = (event) => {
		event.preventDefault()
		console.log(values, event)
	}

	return (
		<Box flex={1} flexbox="column" center>
			<Box style={{ width: 380 }}>
				<form onSubmit={onSubmit}>
					<Field
						type="text"
						name="name"
						label="Nome"
						mb={3}
						onChange={onChange}
					/>
					<Field
						type="text"
						name="email"
						label="E-mail"
						mb={3}
						onChange={onChange}
					/>
					<Field
						type="password"
						name="password"
						label="Senha"
						mb={3}
						onChange={onChange}
					/>

					<Box flexbox center>
						<Button onClick={onSubmit}>Registrar</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}
