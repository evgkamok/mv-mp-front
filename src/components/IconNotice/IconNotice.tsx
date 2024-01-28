import styled from 'styled-components'
import { Bell, Heart, Package, ShoppingCart } from 'lucide-react'
import { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes } from 'react'

// interface IconNoticeProp {
// 	type: 'package' | 'hearth' | 'bell' | 'cart'
// 	onClick?: (e: React.MouseEvent<HTMLElement>) => void
// }

interface IconNoticeProp
	extends DetailedHTMLProps<HTMLAttributes<SVGElement>, SVGElement> {
	type: 'package' | 'hearth' | 'bell' | 'cart'
	// onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const IconNotice = styled(
	({ type, onClick, ...props }: IconNoticeProp): JSX.Element => {
		switch (type) {
			case 'package':
				return <Package {...props} />
			// case 'hearth':
			// 	return <Heart {...props} />
			// case 'bell':
			// 	return <Bell {...props} />
			// case 'cart':
			// 	return <ShoppingCart {...props} />
			default:
				if (!type) return <></>
				break
		}

		return <></>
	}
)`
	width: 150px;
	background-color: red;
`

export default IconNotice
