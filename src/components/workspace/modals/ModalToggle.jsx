import {useRef, useState} from 'react';
import styles from '../../../assets/css/Contents.module.css';
import {CSSTransition} from 'react-transition-group';
import Modal from './Modal.jsx';

export default function withToggleAndModal(WrappedComponent) {
    return function ToggleAndModal(props) {
        const [isHovered, setHovered] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const [itemType, setItemType] = useState(props.type);
        const [itemContent, setItemContent] = useState(props.content);
        const isEmpty = itemContent === "<br>" || itemContent === "";
        const modalRef = useRef(null);
        const toggleRef = useRef(null);

        const handleModalClose = () => {
            setHovered(false);
            setShowModal(false);
        }
        return (
            <>
                <div className={`${styles.blockWrapper} ${styles[itemType] || styles.common}`}
                     onMouseEnter={() => setHovered(true)}
                     onMouseLeave={() => setHovered(false)}>
                    <div className={styles.flexWrapper} data-empty={isEmpty}>
                        <CSSTransition
                            nodeRef={toggleRef}
                            in={isHovered}
                            timeout={200}
                            classNames={{
                                enter: styles.toggleEnter,
                                enterActive: styles.toggleEnterActive,
                                exit: styles.toggleExit,
                                exitActive: styles.toggleExitActive,
                            }}
                            unmountOnExit
                        >
                            <div ref={toggleRef} className={styles.toggleWrapper}>
                                <button className={styles.toggle}
                                        onClick={() => setShowModal(true)}>
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
                        </CSSTransition>
                        <WrappedComponent type={itemType}
                                          content={itemContent}
                                          setContent={setItemContent}/>
                    </div>
                </div>
                <CSSTransition
                    nodeRef={modalRef}
                    in={showModal}
                    timeout={200}
                    classNames={{
                        enter: styles.modalEnter,
                        enterActive: styles.modalEnterActive,
                        exit: styles.modalExit,
                        exitActive: styles.modalExitActive,
                    }}
                    unmountOnExit
                >
                    <Modal ref={modalRef} onClick={handleModalClose} setItemType={setItemType}/>
                </CSSTransition>
            </>
        );
    };
}
