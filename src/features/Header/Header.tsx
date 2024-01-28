import { Link } from 'react-router-dom'
import {
	Burger,
	LeftSide,
	Logo,
	RightSide,
	SearchWrapper,
	Wrapper,
} from './styled'
import Button from 'components/Button'
import LogoImg from './img/logo.png'
import { Bell, Heart, Package, SearchIcon, ShoppingCart } from 'lucide-react'
import { selectIsLogged } from 'features/App/selectors'
import { useSelector } from 'react-redux'
import IconNotice from 'components/IconNotice'

const Header: React.FC = () => {
	const isLogged = useSelector(selectIsLogged)

	return (
		<Wrapper>
			<LeftSide>
				<Link to='/'>
					<Logo src={LogoImg} />
				</Link>
				<Button>
					<Burger>
						<div></div>
						<div></div>
						<div></div>
					</Burger>
					<span>Каталог</span>
				</Button>
			</LeftSide>

			<SearchWrapper>
				<input type='Please' />
				<SearchIcon color='#000' size={24} />
			</SearchWrapper>

			<RightSide>
				{isLogged ? (
					<>
						{/* <Package />
						<Heart />
						<Bell />
						<ShoppingCart /> */}
						<IconNotice type='package' />
						<IconNotice type='hearth' />
						<IconNotice type='bell' />
						<IconNotice type='cart' />
					</>
				) : (
					<div>NO Logged</div>
				)}
			</RightSide>
		</Wrapper>
	)
}

export default Header
