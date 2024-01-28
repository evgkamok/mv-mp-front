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
import IconLinkNotice from 'components/IconLinkNotice'
import LogoImg from './img/logo.png'
import { SearchIcon } from 'lucide-react'
import { selectIsLogged } from 'features/App/selectors'
import { useSelector } from 'react-redux'
import { paths } from 'routes/helpers'

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
						<IconLinkNotice type='package' count={5} />
						<IconLinkNotice type='hearth' count={5} />
						<IconLinkNotice type='bell' count={5} />
						<IconLinkNotice type='cart' count={5} />
					</>
				) : (
					<Link to={paths.login}>&nbsp;&nbsp;&nbsp;Войти</Link>
				)}
			</RightSide>
		</Wrapper>
	)
}

export default Header
