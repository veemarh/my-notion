import {useContext} from 'react';
import styles from '../../assets/css/Sidebar.module.css';
import SideMenubar from './SideMenubar.jsx';
import SideMenubarInner from './SideMenubarInner.jsx';
import SideMenubarBlocks from './SideMenubarBlocks.jsx';
import {SideMenubarContext} from '../../contexts/SideMenubarContext';

export default function SideEdgeMouseZone() {
    const {
        isFixed,
        isPreviewed,
        handleMouseZoneEnter,
        handleMouseZoneLeave: handleMouseZoneLeave,
        zoneRef,
        menuRef
    } = useContext(SideMenubarContext);
    const mouseZoneClass = isFixed
        ? styles.mouseZoneFixed
        : styles.mouseZone;

    return (
        <div ref={zoneRef}
             className={mouseZoneClass}
             onMouseEnter={handleMouseZoneEnter}
             onMouseLeave={handleMouseZoneLeave}
        >
            <SideMenubar isFixed={isFixed}>
                <div className={styles.fonts}>
                    <div className={styles.forDnD}>
                        <SideMenubarInner isFixed={isFixed}
                                          isPreviewed={isPreviewed}
                        >
                            <div className={styles.style}/>
                            <div className={styles.content}>
                                <SideMenubarBlocks username={"Veta"}>Content</SideMenubarBlocks>
                            </div>
                            <div className={styles.borderDnD} ref={menuRef}>
                                <div className={styles.hearDnD}/>
                            </div>
                        </SideMenubarInner>
                    </div>
                </div>
            </SideMenubar>
        </div>
    )
};
