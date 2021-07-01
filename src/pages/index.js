import * as React from 'react'
import styled from 'styled-components'
import { Theme } from './../components/Theme'
import { background, color, fontSize } from './../components/Theme/styled'

const BaseButton = ({ className, children }) => (
	<div className={className}>{children}</div>
)

const BaseBox = ({ className, children }) => (
	<div className={className}>{children}</div>
)

const Button = styled(BaseButton)`
	${background}
	${color}
  ${fontSize}
`

const Box = styled(BaseBox)`
	${background}
	${color}
  ${fontSize}
`

export const App = () => (
	<Theme>
		<Button bg="green" color="red" fontSize="large">
			Button
		</Button>
		<Box bg="red" color="blue" fontSize="large">
			Box
		</Box>
	</Theme>
)
