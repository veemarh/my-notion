import {useContext} from 'react';
import styles from '../../assets/css/Page.module.css';
import NavLinks from '../header/NavLinks.jsx';
import BarToggle from '../sidebar/BarToggle.jsx';
import {SideMenubarContext} from '../../contexts/SideMenubarContext';
import Scroller from '../scroller/Scroller.jsx';
import Contents from './Contents.jsx';

export default function Workspace({pages}) {
    const {isFixed} = useContext(SideMenubarContext);

    return (
        <div className={styles.mainWorkspace}>
            <header className={styles.header}>
                {!isFixed && (
                    <div className={styles.navbarToggleSection}>
                        <BarToggle/>
                    </div>
                )}
                <div className={styles.navbarPathSection}>
                    <NavLinks pages={pages}/>
                </div>
                <div className={styles.navbarToolsSection}>
                    TODO
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.mainContent}>
                    <Scroller workspace={true}>
                        <div className={styles.textArea}>
                            <div className={styles.grid}>
                                <div className={styles.gridContentTitle}>
                                    <h1>Title</h1>
                                </div>
                                <div className={styles.gridContentMain}>
                                    <Contents/>
                                </div>
                            </div>
                        </div>
                    </Scroller>
                </div>
            </main>
        </div>
    )
};
