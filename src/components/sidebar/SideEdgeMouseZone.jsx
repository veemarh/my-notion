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
        handleMouseEnter,
        handleMouseZoneLeave,
        zoneRef,
        menuRef
    } = useContext(SideMenubarContext);
    const sideEdgeMouseZoneClass = isFixed
        ? styles.sideEdgeMouseZoneFixed
        : styles.sideEdgeMouseZone;

    return (
        <div ref={zoneRef}
             className={sideEdgeMouseZoneClass}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseZoneLeave}
        >
            <SideMenubar isFixed={isFixed}>
                <div className={styles.fontStyles}>
                    <div className={styles.sideMenubarForDnD}>
                        <SideMenubarInner isFixed={isFixed}
                                          isPreviewed={isPreviewed}
                        >
                            <div className={styles.sideMenubarInnerStyle}/>
                            <div className={styles.sideMenubarContent}>
                                <SideMenubarBlocks username={"Veta"}>Content</SideMenubarBlocks>
                            </div>
                            <div className={styles.sideMenubarDnDBorder} ref={menuRef}>
                                <div className={styles.sideMenubarDnDBorderHear}/>
                            </div>
                        </SideMenubarInner>
                    </div>
                </div>
            </SideMenubar>
        </div>
    )
};
