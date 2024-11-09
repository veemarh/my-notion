import {ClickableMenuItem, Menu, MenuItemContainer} from './styled-menu';

export default function EditTypeModal({setType, onClose}) {
    const handleClick = (evt) => {
        setType(evt.currentTarget.dataset.itemType);
        onClose(evt);
    }
    return (
        <Menu width="max-content">
            <MenuItemContainer>
                    <ClickableMenuItem data-item-type="text" tabIndex="-1"
                                       onClick={handleClick}>Text</ClickableMenuItem>
                    <ClickableMenuItem data-item-type="header" tabIndex="-1"
                                       onClick={handleClick}>Heading 1</ClickableMenuItem>
                    <ClickableMenuItem data-item-type="subHeader" tabIndex="-1"
                                       onClick={handleClick}>Heading 2</ClickableMenuItem>
                    <ClickableMenuItem data-item-type="subSubHeader" tabIndex="-1"
                                       onClick={handleClick}>Heading 3</ClickableMenuItem>
                    <ClickableMenuItem data-item-type="quote" tabIndex="-1"
                                       onClick={handleClick}>Quote</ClickableMenuItem>
                    <ClickableMenuItem data-item-type="callout" tabIndex="-1"
                                       onClick={handleClick}>Callout</ClickableMenuItem>
                {/*<StyledButton onClick={onClose}>Close</StyledButton>*/}
            </MenuItemContainer>
        </Menu>
    )
}
