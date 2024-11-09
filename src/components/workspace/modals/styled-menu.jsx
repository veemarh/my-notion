import styled from 'styled-components';
import {OverflowBlock} from "../text-overflow/OverflowBlock.jsx";

const StyledMenu = styled.div`
    position: relative;
    width: ${props => props.$width || '256px'};
    max-width: calc(100vw - 2rem);
    box-shadow: rgba(15, 15, 15, 0.05) 0 0 0 1px, rgba(15, 15, 15, 0.1) 0 3px 6px, rgba(15, 15, 15, 0.2) 0 9px 24px, rgba(0, 0, 0, 0.024) -1px 0 0 0 inset;
    border-radius: 1em;
    background-color: white;
    overflow: hidden;
`

const StyledMenuBlock = styled.div`
    display: flex;
    flex-direction: ${props => props.$flexDirection || 'row'};
    flex-wrap: wrap;
    gap: 1px;
    padding: 0.5em;
`

const StyledItem = styled.div`
    padding: 0.25em 0.5em;
    border-radius: 0.5em;
    transition: background-color 0.2s;
    user-select: none;
    cursor: pointer;

    &:hover {
        background-color: #eaeae9;
    }
`

const StyledItemFlexInner = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 1.5rem;
    font-size: 12px;
    user-select: none;
    pointer-events: none;
`

const StyledDivider = styled.hr`
    margin: 0 1em;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    border-width: 0;
    border-style: solid;
    border-color: rgba(15, 15, 15, 0.05);
    border-bottom-width: thin;
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

export function ClickableMenuItem(props) {
    return (
        <StyledItem {...props} onClick={props.onClick}>
            <StyledItemFlexInner>
                <OverflowBlock>{props.children}</OverflowBlock>
            </StyledItemFlexInner>
        </StyledItem>
    )
}

export function MenuDivider() {
    return <StyledDivider/>
}

export function Menu({children, width}) {
    return (
        <StyledMenu $width={width}>{children}</StyledMenu>
    )
}

export function MenuItemContainer({children, flexDirection}) {
    return (
        <StyledMenuBlock $flexDirection={flexDirection}>{children}</StyledMenuBlock>
    )
}
