import { useCallback, useRef, useState } from 'react'
import { UserAvatar, WrapperDropDownMenu, MenuContent } from './styled'
import { useOnClickOutside } from 'hooks'

export const DropDownMenu = () => {
	const [isMenuVisible, setIsMenuVisible] = useState(false)
	const MenuContentRef = useRef(null)

	const toggleMenuVisible = useCallback(() => {
		setIsMenuVisible(isMenuVisible => !isMenuVisible)
	}, [])

	useOnClickOutside(MenuContentRef, toggleMenuVisible)

	return (
		<WrapperDropDownMenu>
			<UserAvatar onClick={toggleMenuVisible} />
			{isMenuVisible ? (
				<MenuContent ref={MenuContentRef}>
					<div>
						<strong>"nameFirst nameLast"</strong>
					</div>
					<hr />
					<div>Заказы</div>
					<div>Возвраты</div>
					<div>Избранное</div>
					<div>Справка</div>
					<div>Поддержка</div>
					<div>Настройки</div>
					<hr />
					<div>Выйти</div>
				</MenuContent>
			) : (
				<></>
			)}
		</WrapperDropDownMenu>
	)
}
