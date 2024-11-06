import {createPortal} from 'react-dom';
import {forwardRef} from 'react';
import styled from 'styled-components';
import styles from '../../../assets/css/Transition.module.css';
import withTransition from '../utils/hoc/withTransition.jsx';

const Modal = forwardRef(({modal, onClose, position}, ref) => {
    const modalPositionStyles = {
        top: position?.top ?? 0,
        left: position?.left ?? 0,
        height: position.height ?? 0,
        width: position?.width ?? 0,
        position: 'fixed',
        pointerEvents: 'none',
    };

    return (
        <>
            {createPortal(
                <StyledBackdrop ref={ref} onClick={onClose}>
                    <div style={modalPositionStyles}>
                        <StyledModalPositionPointer $position={position}>
                            <StyledModalDynamicBlock $position={position}>
                                {modal}
                            </StyledModalDynamicBlock>
                        </StyledModalPositionPointer>
                    </div>
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
    overflow: hidden;
`

const StyledModalPositionPointer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${props => props.$position?.left > 300 ? 'flex-end' : 'flex-start'};
`

const StyledModalDynamicBlock = styled.div`
    position: relative;
    transform: ${props => props.$position?.left < 300
            ? props.$position?.top < 100
                    ? 'translateY(75%)'
                    : 'translateY(-75%)'
            : 'translateX(-15px)'};
    pointer-events: auto;
`
