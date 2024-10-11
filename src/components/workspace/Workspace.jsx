import {useContext} from 'react';
import styles from '../../assets/css/Page.module.css';
import NavLinks from '../header/NavLinks.jsx';
import BarToggle from '../sidebar/BarToggle.jsx';
import {SideMenubarContext} from '../../contexts/SideMenubarContext';
import {Link} from 'react-router-dom';

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
                    <div className={styles.mainContentInner}>
                        <Link to="/login">login</Link>
                        <Link to="*">404</Link>
                    </div>
                </div>
            </main>
        </div>
    );
};
