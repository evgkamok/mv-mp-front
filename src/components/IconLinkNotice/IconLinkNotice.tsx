import styled from 'styled-components'
import { Bell, Heart, Package, ShoppingCart } from 'lucide-react'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import colors from 'const/color'

interface IconLinkNoticeProp
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	type: 'package' | 'hearth' | 'bell' | 'cart'
	count: number
}

const IconLinkNotice = styled(
	({ type, count, ...props }: IconLinkNoticeProp) => {
		let icon = <></>
		switch (type) {
			case 'package':
				icon = <Package />
				break
			case 'hearth':
				icon = <Heart />
				break
			case 'bell':
				icon = <Bell />
				break
			case 'cart':
				icon = <ShoppingCart />
				break
			default:
				break
		}
		return (
			<div {...props}>
				<Link to='/'>{icon}</Link>
			</div>
		)
	}
)`
	cursor: pointer;
	width: 20px;
	height: 20px;
	margin-right: 20px;
	position: relative;

	&:after {
		content: ${({ count }) => (count ? '"' + count + '"' : '')};
		background-color: ${colors.danger};
		color: #fff;
		border-radius: 50%;
		position: absolute;
		top: -8px;
		right: -13px;
		width: 18px;
		height: 18px;
		font-size: 12px;
		font-weight: 700;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

export default IconLinkNotice
