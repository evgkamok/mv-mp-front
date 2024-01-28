import styled from 'styled-components'
import colors from 'const/color'

interface I_ButtonProps {
	block?: boolean
	disabled?: boolean
	children?: React.ReactNode
	type?: 'primary' | 'secondary' | 'danger' | 'ghost'
	onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button = styled(
	({
		block = false,
		disabled = false,
		children,
		type = 'primary',
		onClick = () => {},
		...props
	}: I_ButtonProps) => {
		return (
			<button type='button' {...props} onClick={!disabled ? onClick : () => {}}>
				{children}
			</button>
		)
	}
)`
	user-select: none;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	display: inline-flex;
	align-items: center;
	justify-content: ${({ block }) => (block ? 'center' : 'initial')};
	width: ${({ block }) => (block ? '100%' : 'fit-content')};
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.36px;
	border: 1px solid
		${({ type }) => (type === 'ghost' ? colors.primary : 'transparent')};
	background-color: ${({ type, disabled }) => {
		if (disabled) return 'c2c2c2'
		switch (type) {
			case 'primary':
				return colors.primary
			case 'secondary':
				return colors.secondary
			case 'danger':
				return colors.danger
			case 'ghost':
				return colors.ghost
			default:
				return colors.primary
		}
	}};
	color: ${({ type }) => {
		switch (type) {
			case 'primary':
				return '#fff'
			case 'secondary':
				return '#fff'
			case 'ghost':
				return colors.primary
			default:
				return '#fff'
		}
	}};
`

export default Button
