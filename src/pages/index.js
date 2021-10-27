import * as React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Theme } from '~/components/'

import { Signup } from './Signup'
import { Login } from './Login'

const Dashboard = ({ onLogout }) => {
	return (
		<div>
			Estou Logado!
			<button onClick={onLogout}>Sair</button>
		</div>
	)
}

const AuthRoutes = ({ setState }) => (
	<>
		<Route path="/" exact>
			<Login onSuccess={setState} />
		</Route>

		<Route path="/signup">
			<Signup />
		</Route>
	</>
)

const LoggedInRoutes = ({ logout }) => (
	<Route path="/">
		<Dashboard onLogout={logout} />
	</Route>
)

export const App = () => {
	const [state, setState] = useState(() => {
		const data = window.localStorage.getItem('auth')
		return data && JSON.parse(data)
	})

	const logout = () => setState(false)

	useEffect(() => {
		window.localStorage.setItem('auth', state && JSON.stringify(state))
	}, [state])

	return (
		<Theme>
			<Router>
				{state?.user ? (
					<LoggedInRoutes logout={logout} />
				) : (
					<AuthRoutes setState={setState} />
				)}
			</Router>
		</Theme>
	)
}
