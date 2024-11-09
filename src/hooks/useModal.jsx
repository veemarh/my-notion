import {useCallback, useRef, useState} from 'react';

export function useModal() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState(null);
    const modalRef = useRef(null);

    const openModal = useCallback((evt) => {
        const rect = evt.currentTarget.getBoundingClientRect();
        setModalPosition({
            top: rect.y,
            left: rect.x,
            height: rect.height,
            width: rect.width,
        });
        setIsModalVisible(true);
    }, []);

    const closeModal = useCallback((evt, extraCloseLogic) => {
        if (evt.currentTarget === evt.target) {
            setIsModalVisible(false);
            if (extraCloseLogic) extraCloseLogic(evt);
        }
    }, []);

    return {
        isModalVisible,
        modalPosition,
        modalRef,
        openModal,
        closeModal,
    };
}
