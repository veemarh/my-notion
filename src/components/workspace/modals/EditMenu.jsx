import styled from 'styled-components';

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-width: 200px;
    padding: 0.5em;
    box-shadow: rgba(15, 15, 15, 0.05) 0 0 0 1px, rgba(15, 15, 15, 0.1) 0 3px 6px, rgba(15, 15, 15, 0.2) 0 9px 24px, rgba(0, 0, 0, 0.024) -1px 0 0 0 inset;
    border-radius: 1em;
    pointer-events: none;
    background-color: white;
    transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1px;
    pointer-events: auto;
    cursor: pointer;
`

const StyledItem = styled.li`
    padding: 0.25em 0.5em;
    border-radius: 0.5em;
    transition: background-color 0.2s;

    &:hover {
        background-color: #eaeae9;
    }
`

const StyledButton = styled.button`
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: #eaeae9;
    color: #5e5c57;
    pointer-events: auto;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
        background-color: #d8d6d2;
        color: black;
    }
`

export default function EditMenu({setItemType, onClose}) {
    const handleClick = (evt) => {
        setItemType(evt.currentTarget.dataset.itemType);
    }
    return (
        <StyledMenu tabIndex="-1">
            <StyledList>
                <EditMenuItem type="text" onClick={handleClick}/>
                <EditMenuItem type="header" onClick={handleClick}/>
                <EditMenuItem type="subHeader" onClick={handleClick}/>
                <EditMenuItem type="subSubHeader" onClick={handleClick}/>
            </StyledList>
            <StyledButton onClick={onClose}>Close</StyledButton>
        </StyledMenu>

    )
}

function EditMenuItem({type, onClick}) {
    return (
        <StyledItem data-item-type={type} tabIndex="-1" onClick={onClick}>{type}</StyledItem>
    )
}
