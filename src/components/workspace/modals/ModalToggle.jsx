import {useRef, useState} from 'react';
import styles from '../../../assets/css/Contents.module.css';
import ModalWithTransition from './Modal.jsx';
import ToggleButtonWithTransition from '../toggle-button/ToggleButton.jsx';
import EditTypeModal from './EditTypeModal.jsx';

export default function withToggleAndModal(WrappedComponent) {
    return function ToggleAndModal(props) {
        const [isHovered, setHovered] = useState(false);
        const [showModal, setShowModal] = useState(false);
        const [modalPosition, setModalPosition] = useState(null);
        const isEmpty = props.content === "<br>" || props.content === "";
        const modalRef = useRef(null);
        const toggleRef = useRef(null);

        const handleModalClose = (evt) => {
            if (evt.currentTarget === evt.target) {
                setHovered(false);
                setShowModal(false);
            }
        }
        const handleModalOpen = (evt) => {
            const rect = evt.currentTarget.getBoundingClientRect();
            setModalPosition({
                top: rect.y,
                left: rect.x,
                height: rect.height,
                width: rect.width,
            });
            setShowModal(true);
        }
        return (
            <>
                <div className={`${styles.blockWrapper} ${styles[props.type] || styles.common}`}
                     onMouseEnter={() => setHovered(true)}
                     onMouseLeave={() => setHovered(false)}>
                    <div className={styles.flexWrapper} data-empty={isEmpty}>
                        <ToggleButtonWithTransition
                            ref={toggleRef}
                            in={isHovered}
                            onClick={handleModalOpen}
                        />
                        <WrappedComponent {...props}/>
                    </div>
                </div>
                <ModalWithTransition
                    ref={modalRef}
                    in={showModal}
                    modal={<EditTypeModal setType={props.setType} onClose={handleModalClose}/>}
                    onClose={handleModalClose}
                    position={modalPosition}
                />
            </>
        );
    };
}
