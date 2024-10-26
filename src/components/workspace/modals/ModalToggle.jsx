import {useState} from 'react';
import {createPortal} from 'react-dom';
import styles from '../../../assets/css/Contents.module.css';
import EditMenu from './EditMenu.jsx';

export default function withToggleAndModal(WrappedComponent) {
    return function ToggleAndModal(props) {
        const [isHovered, setHovered] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const [itemType, setItemType] = useState(props.type);
        const [itemContent, setItemContent] = useState(props.content);
        const isEmpty = itemContent === "<br>" || itemContent === "";

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
                        {isHovered && (
                            <div className={styles.toggleWrapper}>
                                <button className={styles.toggle}
                                        onClick={() => setShowModal(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
                                        <circle cx="5" cy="12" r="2"/>
                                        <circle cx="12" cy="12" r="2"/>
                                        <circle cx="19" cy="12" r="2"/>
                                    </svg>
                                </button>
                            </div>
                        )}
                        <WrappedComponent type={itemType}
                                          content={itemContent}
                                          setContent={setItemContent}/>
                    </div>
                </div>
                {showModal && createPortal(
                    <div className={styles.modal} onClick={handleModalClose}>
                            <EditMenu setItemType={setItemType} onClose={handleModalClose}/>
                    </div>,
                    document.getElementById("portal")
                )}
            </>
        );
    };
}
