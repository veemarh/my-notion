import {createPortal} from 'react-dom';
import EditMenu from './EditMenu.jsx';
import {forwardRef} from 'react';
import styled from 'styled-components';

const Modal = forwardRef(({onClick, setItemType}, ref) => {
    return (
        <>
            {createPortal(
                <StyledModal ref={ref} onClick={onClick}>
                    <EditMenu setItemType={setItemType} onClose={onClick}/>
                </StyledModal>,
                document.getElementById("portal")
            )}
        </>
    )
});
Modal.displayName = "Modal";

export default Modal;

const StyledModal = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`
