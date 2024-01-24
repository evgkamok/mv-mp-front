import styled from 'styled-components'

import colors from 'const/color'
import { HEADER_HEIGHT, Z_INDEX_LEVEL_2 } from 'const/index'

export const Wrapper = styled.div`
	padding: 10px 20px;
	height: ${HEADER_HEIGHT}px;
	display: flex;
	align-items: center;
	transition: margin 0.2s ease-out;
	z-index: ${Z_INDEX_LEVEL_2};
	background-color: ${colors.primary};
	color: #ffff;
`
