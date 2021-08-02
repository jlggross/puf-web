import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Box, Field, Button } from '~/components/'

export const Signup = () => {
	const [values, setValues] = useState({})
	const [loading, setLoading] = useState(false)

	const onChange = (event) => {
		setValues((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	const onSubmit = async (event) => {
		event.preventDefault()
		setLoading(true)

		try {
			const response = await axios.post('http://localhost:9901/users', values)
			console.log(response.data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	axios
		.get('http://localhost:9901/users')
		.then((response) => console.log(response.data))

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
						error={'Error'}
						disabled={loading}
					/>

					<Field
						type="text"
						name="email"
						label="E-mail"
						mb={3}
						onChange={onChange}
						error={'Error'}
						disabled={loading}
					/>

					<Field
						type="password"
						name="password"
						label="Senha"
						mb={3}
						onChange={onChange}
						error={'Error'}
						disabled={loading}
					/>

					<Box flexbox center>
						<Button type="submit" loading={loading}>
							Registrar
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}
