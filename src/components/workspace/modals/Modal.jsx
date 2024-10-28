import {createPortal} from 'react-dom';
import {forwardRef} from 'react';
import styled from 'styled-components';
import styles from '../../../assets/css/Transition.module.css';
import withTransition from '../transition/withTransition.jsx';

// Потом можно пересмотреть использование onClose
// и в целом функции бэкдропа
const Modal = forwardRef(({modal, onClose}, ref) => {
    return (
        <>
            {createPortal(
                <StyledBackdrop ref={ref} onClick={onClose}>
                    {modal}
                </StyledBackdrop>,
                document.getElementById("portal")
            )}
        </>
    )
});
Modal.displayName = "Modal";

const ModalWithTransition = withTransition(Modal, {
    displayName: "Modal",
    enter: styles.modalEnter,
    enterActive: styles.modalEnterActive,
    exit: styles.modalExit,
    exitActive: styles.modalExitActive,
});

export default ModalWithTransition;

const StyledBackdrop = styled.div`
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
