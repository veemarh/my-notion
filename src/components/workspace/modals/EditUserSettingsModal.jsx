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
`
export default function EditTypeModal() {
    return (
        <StyledMenu>Its User Settings Modal :)</StyledMenu>
    )
}
