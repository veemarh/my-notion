import styles from '../../assets/css/Sidebar.module.css';

export default function SideMenubar({isFixed, children}) {
    const sideMenubarClass = isFixed
        ? styles.sideMenubarFixed
        : styles.sideMenubar;

    return (
        <nav className={sideMenubarClass}>
            {children}
        </nav>
    );
};
