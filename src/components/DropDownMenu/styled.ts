import { Z_INDEX_LEVEL_1 } from './../../const/index'
import { styled } from 'styled-components'

export const WrapperDropDownMenu = styled.div`
	position: relative;
`

export const UserAvatar = styled.div`
	width: 45px;
	height: 45px;
	cursor: pointer;
	border-radius: 50%;
	background-color: blue;
`

export const MenuContent = styled.div`
	background-color: #fff;
	padding: 20px;
	position: absolute;
	top: calc(100% + 10px);
	right: 0px;
	z-index: ${Z_INDEX_LEVEL_1};

	> div {
		margin: 10px 10px;
		cursor: pointer;
	}

	> div :first-child {
		cursor: default;
	}
`
