import * as React from 'react'
import { useState } from 'react'
import { Theme } from '~/components/'
// import { Signup } from './Signup'
import { Login } from './Login'

const Dashboard = () => <div>Estou Logado!</div>

export const App = () => {
	const [state, setState] = useState(false)

	return (
		<Theme>
			{state?.user ? <Dashboard /> : <Login onSuccess={setState} />}
		</Theme>
	)
}
