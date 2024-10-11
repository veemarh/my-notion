import styles from '../../assets/css/Sidebar.module.css';

export default function SideMenubarInner({isFixed, isPreviewed, children}) {
    const sideMenubarInnerClass = isPreviewed || isFixed
        ? isFixed
            ? styles.sideMenubarInnerFixed
            : styles.sideMenubarInnerVisible
        : styles.sideMenubarInner;

    return (
        <div className={sideMenubarInnerClass}>
            {children}
        </div>
    );
};
