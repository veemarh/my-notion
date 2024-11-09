import {ClickableMenuItem, Menu, MenuDivider, MenuItemContainer} from './styled-menu.jsx';

export default function EditUserSettingsModal({onClose}) {
    return (
        <Menu width={"256px"}>
            <MenuItemContainer flexDirection="column">
                <ClickableMenuItem>Heading</ClickableMenuItem>
                <ClickableMenuItem>Info</ClickableMenuItem>
            </MenuItemContainer>
            <MenuDivider/>
            <MenuItemContainer>
                <ClickableMenuItem>Settings</ClickableMenuItem>
                <ClickableMenuItem onClick={onClose}>Log out</ClickableMenuItem>
            </MenuItemContainer>
        </Menu>
    )
}
