import * as React from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { useFormik } from 'formik'

import { Box, Field, Button } from '~/components/'

const schema = yup.object().shape({
	name: yup.string().required('Informe o seu nome'),
	email: yup.string().required('Informe o seu e-mail').email('E-mail inválido'),
	password: yup.string().required('Digite uma senha'), // add password validation for at least 6 characters
})

export const Signup = () => {
	const onSubmit = async () => {
		try {
			const response = await axios.post('http://localhost:9901/users', values)
			console.log(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	const {
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
		isSubmitting,
	} = useFormik({
		onSubmit,
		validationSchema: schema,
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
	})

	/*
	axios
		.get('http://localhost:9901/users')
		.then((response) => console.log(response.data))
  */

	return (
		<Box flex={1} flexbox="column" center>
			<Box style={{ width: 380 }}>
				<form onSubmit={handleSubmit}>
					<Field
						type="text"
						name="name"
						label="Nome"
						value={values.name}
						error={touched.name && errors.name}
						onChange={handleChange}
						onBlur={handleBlur}
						disabled={isSubmitting}
						mb={3}
					/>

					<Field
						type="text"
						name="email"
						label="E-mail"
						value={values.email}
						error={touched.email && errors.email}
						onChange={handleChange}
						onBlur={handleBlur}
						disabled={isSubmitting}
						mb={3}
					/>

					<Field
						type="password"
						name="password"
						label="Senha"
						value={values.password}
						error={touched.password && errors.password}
						onChange={handleChange}
						onBlur={handleBlur}
						disabled={isSubmitting}
						mb={3}
					/>

					<Box flexbox center>
						<Button type="submit" loading={isSubmitting}>
							Registrar
						</Button>
					</Box>
				</form>
			</Box>
		</Box>
	)
}
