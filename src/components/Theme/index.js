import { definitions } from './definitions'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'

export const Theme = ({ children }) => (
	<ThemeProvider theme={definitions}>{children}</ThemeProvider>
)
