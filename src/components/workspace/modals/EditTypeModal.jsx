import styled from 'styled-components';

const StyledMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    min-width: fit-content;
    padding: 0.5em;
    box-shadow: rgba(15, 15, 15, 0.05) 0 0 0 1px, rgba(15, 15, 15, 0.1) 0 3px 6px, rgba(15, 15, 15, 0.2) 0 9px 24px, rgba(0, 0, 0, 0.024) -1px 0 0 0 inset;
    border-radius: 1em;
    pointer-events: none;
    background-color: white;
`

const StyledList = styled.ul`
    display: flex;
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

export default function EditTypeModal({setType, onClose}) {
    const handleClick = (evt) => {
        setType(evt.currentTarget.dataset.itemType);
        onClose(evt);
    }
    return (
        <StyledMenu tabIndex="-1">
            <StyledList>
                <EditTypeItem type="text" onClick={handleClick}/>
                <EditTypeItem type="header" onClick={handleClick}/>
                <EditTypeItem type="subHeader" onClick={handleClick}/>
                <EditTypeItem type="subSubHeader" onClick={handleClick}/>
                <EditTypeItem type="quote" onClick={handleClick}/>
                <EditTypeItem type="callout" onClick={handleClick}/>
            </StyledList>
            <StyledButton onClick={onClose}>Close</StyledButton>
        </StyledMenu>
    )
}

function EditTypeItem({type, onClick}) {
    return (
        <StyledItem data-item-type={type} tabIndex="-1" onClick={onClick}>{type}</StyledItem>
    )
}
