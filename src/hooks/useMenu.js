import {useEffect, useRef, useState} from 'react';

export function useMenu(isFixed, isPreviewed, setIsFixed, setIsPreviewed) {
    const [isMouseLeaving, setIsMouseLeaving] = useState(false);
    const toggleRef = useRef(null);
    const zoneRef = useRef(null);
    const menuRef = useRef(null);

    const toggleMenuFix = () => {
        setIsPreviewed(isFixed);
        setIsFixed((prev) => !prev);
    };

    const handleMouseZoneEnter = () => {
        if (!isFixed && !isPreviewed) {
            setIsPreviewed(true);
        }
    };

    const handleMouseZoneLeave = (e) => {
        if (!isFixed &&
            e.relatedTarget !== toggleRef.current) {
            setIsMouseLeaving(true);
        }
    };

    const handleMouseMove = (e) => {
        if (isMouseLeaving) {
            const menuRect = menuRef.current.getBoundingClientRect();

            if (e.clientX > menuRect.right || e.clientY > menuRect.bottom + 50) {
                setIsPreviewed(false);
                setIsMouseLeaving(false);
            }
        }
    };

    useEffect(() => {
        if (isMouseLeaving) {
            document.addEventListener('mousemove', handleMouseMove);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove, isMouseLeaving]);

    return {
        toggleMenuFix,
        handleMouseZoneEnter,
        handleMouseZoneLeave,
        toggleRef,
        zoneRef,
        menuRef
    };
}
