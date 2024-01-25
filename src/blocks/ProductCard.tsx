import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg'
import Button from 'components/Button'
import { Link } from 'react-router-dom'
import {
	Desc,
	DiscountPrice,
	Image,
	LikeWrapper,
	PriceWrapper,
	RegularPrice,
	RegularPriceWithDiscount,
	Title,
	Wrapper,
} from './styled'

interface I_ProductDetails {
	id: number
	slug?: string
	imgSrc: string
	price: number
	priceDiscounted?: number
	title: string
	desc: string
}

const ProductCard: React.FC<I_ProductDetails> = ({
	id,
	slug,
	imgSrc,
	price,
	priceDiscounted,
	title,
	desc,
}) => {
	return (
		<Wrapper>
			<LikeWrapper>{true ? <HeartEmpty /> : 1}</LikeWrapper>
			<Image src={imgSrc} />
			<PriceWrapper>
				{priceDiscounted ? (
					<>
						<DiscountPrice>{priceDiscounted} P</DiscountPrice>
						<RegularPriceWithDiscount>{price} P</RegularPriceWithDiscount>
					</>
				) : (
					<RegularPrice>{price} P</RegularPrice>
				)}
			</PriceWrapper>
			<Title className='h4'>
				<Link to={`/product/${id || slug}`}>{title}</Link>
			</Title>
			<Desc>{desc}</Desc>
			<Button>Buy</Button>
		</Wrapper>
	)
}

export default ProductCard
