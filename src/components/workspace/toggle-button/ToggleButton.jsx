import styles from '../../../assets/css/Transition.module.css';
import {forwardRef} from 'react';
import withTransition from '../utils/hoc/withTransition.jsx';
import styled from 'styled-components';

const ToggleButton = forwardRef(({onClick}, ref) => {
    return (
        <StyledWrapper ref={ref}>
            <StyledButton onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="8" cy="2" r="2"/>
                    <circle cx="8" cy="12" r="2"/>
                    <circle cx="8" cy="22" r="2"/>
                    <circle cx="16" cy="2" r="2"/>
                    <circle cx="16" cy="12" r="2"/>
                    <circle cx="16" cy="22" r="2"/>
                </svg>
            </StyledButton>
        </StyledWrapper>
    )
});
ToggleButton.displayName = "ToggleButton";

const ToggleButtonWithTransition = withTransition(ToggleButton, {
    displayName: "ToggleButton",
    enter: styles.toggleEnter,
    enterActive: styles.toggleEnterActive,
    exit: styles.toggleExit,
    exitActive: styles.toggleExitActive,
});

export default ToggleButtonWithTransition;

const StyledWrapper = styled.div`
    position: relative;
    width: 0;
    height: 1.5em;
    margin: 0.25rem 0;
`

const StyledButton = styled.button`
    background-color: rgb(0, 0, 0, 0);
    position: absolute;
    width: 1em;
    height: 2em;
    margin-right: 0.25em;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    border-radius: 0.25em;
    cursor: pointer;
    opacity: 0.3;
    transition: background-color 0.2s;

    &:hover {
        background-color: #d8d6d2;
    }
`
