import {useRef, useState} from 'react';
import styles from '../../../assets/css/Contents.module.css';
import ModalWithTransition from './Modal.jsx';
import ToggleButtonWithTransition from '../toggle-button/ToggleButton.jsx';
import EditTypeModal from './EditTypeModal.jsx';
import {useModal} from '../../../hooks/useModal.jsx';

export default function withToggleAndModal(WrappedComponent) {
    return function ToggleAndModal(props) {
        const [isHovered, setHovered] = useState(false);
        const isEmpty = props.content === "<br>" || props.content === "";
        const toggleRef = useRef(null);
        const {isModalVisible, modalPosition, modalRef, openModal, closeModal} = useModal();

        const handleModalClose = (evt) => {
            closeModal(evt, () => setHovered(false));
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
                            onClick={openModal}
                        />
                        <WrappedComponent {...props}/>
                    </div>
                </div>
                <ModalWithTransition
                    ref={modalRef}
                    in={isModalVisible}
                    modal={<EditTypeModal setType={props.setType} onClose={handleModalClose}/>}
                    onClose={handleModalClose}
                    position={modalPosition}
                />
            </>
        );
    };
}
