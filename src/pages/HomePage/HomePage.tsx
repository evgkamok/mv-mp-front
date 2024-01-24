import { PageWrapper } from 'App.styled'
import ProductCard from 'blocks/ProductCard'
import { dummyProducts } from 'pages/dummyProducts'
import { Helmet } from 'react-helmet-async'
import { ProductGroup, ProductGroupContainer } from './styled'

const HomePage: React.FC = () => {
	return (
		<>
			<PageWrapper>
				<Helmet>
					<title>Главная - Marketplace</title>
				</Helmet>

				<ProductGroup>
					<h2>Рекомендуемые товары</h2>
					<ProductGroupContainer>
						{dummyProducts.map(dataCard => {
							return (
								<ProductCard
									{...dataCard}
									key={dataCard.id}
									// isLiked={idsInFavorites.includes(p.id)
								/>
							)
						})}
					</ProductGroupContainer>
				</ProductGroup>
			</PageWrapper>
		</>
	)
}

export default HomePage
