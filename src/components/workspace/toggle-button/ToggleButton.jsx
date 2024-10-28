import styles from '../../../assets/css/Contents.module.css';
import {forwardRef} from 'react';
import withTransition from '../transition/withTransition.jsx';

const ToggleButton = forwardRef(({onClick}, ref) => {
    return (
        <div ref={ref} className={styles.toggleWrapper}>
            <button className={styles.toggle}
                    onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle cx="8" cy="2" r="2"/>
                    <circle cx="8" cy="12" r="2"/>
                    <circle cx="8" cy="22" r="2"/>
                    <circle cx="16" cy="2" r="2"/>
                    <circle cx="16" cy="12" r="2"/>
                    <circle cx="16" cy="22" r="2"/>
                </svg>
            </button>
        </div>
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
