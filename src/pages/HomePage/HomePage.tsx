import { PageWrapper } from 'App.styled'
import { Helmet } from 'react-helmet-async'

const HomePage: React.FC = () => {
	return (
		<>
			<PageWrapper>
				<Helmet>
					<title>Главная страница</title>
				</Helmet>
				<h1>HomePage</h1>
			</PageWrapper>
		</>
	)
}

export default HomePage
