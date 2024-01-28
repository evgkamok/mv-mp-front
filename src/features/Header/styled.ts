import styled from 'styled-components'

import colors from 'const/color'
import { HEADER_HEIGHT, HEADER_MIN_HEIGHT, Z_INDEX_LEVEL_2 } from 'const/index'

export const Wrapper = styled.div`
	padding: 10px 20px;
	height: ${HEADER_HEIGHT}px;
	min-height: ${HEADER_MIN_HEIGHT}px;
	display: flex;
	align-items: center;
	transition: margin 0.2s ease-out;
	z-index: ${Z_INDEX_LEVEL_2};
	background-color: #fff;
	/* border-radius: 6px; */
`

export const LeftSide = styled.div`
	display: flex;
	margin-right: 20px;
	flex-shrink: 0;

	> button {
		height: 44px;
	}
`

export const Logo = styled.img`
	width: 130px;
	height: 44px;
	margin-right: 20px;
`

export const Burger = styled.div`
	width: 20px;
	height: 20px;
	padding: 4px 0;
	margin-right: 10px;

	div {
		/* position: relative; */
		display: block;
		width: 18px;
		height: 2px;
		margin: 0 1px;
		background-color: #fff;
	}

	div:not(:first-child) {
		margin-top: 3px;
	}
`

export const SearchWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	border: 2px solid ${colors.primary};
	border-radius: 4px;

	> input {
		width: 100%;
	}

	> svg {
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
`

export const RightSide = styled.div`
	display: flex;
`
