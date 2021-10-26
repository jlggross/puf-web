import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'

import { Box, Field, Button, font, margin } from '~/components/'

const Link = styled('a')`
	text-decoration: none;
	${font}
	${margin}
`

const validationSchema = yup.object().shape({
	username: yup
		.string()
		.required('Informe o seu e-mail')
		.email('E-mail inválido'),
	password: yup.string().required('Digite uma senha'), // add password validation for at least 6 characters
})

/*
	axios
		.get('http://localhost:9901/users')
		.then((response) => console.log(response.data))
  */

export const Form = ({ onSubmit }) => {
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
		validationSchema: validationSchema,
		initialValues: {
			username: '',
			password: '',
		},
	})

	return (
		<form onSubmit={handleSubmit}>
			<Field
				type="text"
				name="username"
				label="E-mail"
				value={values.username}
				error={touched.username && errors.username}
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

			<Box flexbox="column" center>
				<Button type="submit" loading={isSubmitting} m={1}>
					Entrar
				</Button>

				<Box m={1} fontSize={1} color="gray">
					Não possui cadastro?{' '}
					<Link href="#" color="gray" fontWeight="bold">
						Cadastre-se!
					</Link>
				</Box>
			</Box>
		</form>
	)
}
