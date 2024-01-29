import colors from 'const/color'
import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	padding: 10px;

	svg {
		pointer-events: none;
	}
`

export const LikeWrapper = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	top: 5px;
	right: 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Image = styled.img`
	margin-bottom: 10px;
	width: 100%;
	height: 165px;
	border-radius: 5px;
	object-fit: scale-down;
`

export const PriceWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	margin-bottom: 10px;
`

export const RegularPrice = styled.div`
	font-size: 18px;
	font-weight: 700;
	margin-right: 10px;
	color: ${colors.primary};
`

export const RegularPriceWithDiscount = styled.div`
	text-decoration: line-through;
	font-size: 15px;
	color: #999;
`

export const DiscountPrice = styled.div`
	font-size: 18px;
	font-weight: 700;
	margin-right: 10px;
	color: ${colors.primary};
`

export const Title = styled.h3`
	margin-bottom: 5px;
	color: ${colors.primary};
`

export const Desc = styled.div`
	margin-bottom: 10px;
`

export const ButtonsWrapper = styled.div`
	display: flex;
	flex-direction: column;

	* + * {
		margin-top: 10px;
	}
`
