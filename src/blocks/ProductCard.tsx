import { ReactComponent as HeartEmpty } from 'img/heart-empty.svg'
import I_ProductDetails from 'pages/types'
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

const ProductCard: React.FC<I_ProductDetails> = ({
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
			<Title className='h4'>{title}</Title>
			<Desc>{desc}</Desc>
			<button>Buy</button>
		</Wrapper>
	)
}

export default ProductCard
