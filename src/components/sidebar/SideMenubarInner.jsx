import styles from '../../assets/css/Sidebar.module.css';

export default function SideMenubarInner({isFixed, isPreviewed, children}) {
    const sideMenubarInnerClass = isPreviewed || isFixed
        ? isFixed
            ? styles.innerFixed
            : styles.innerVisible
        : styles.inner;

    return (
        <div className={sideMenubarInnerClass}>
            {children}
        </div>
    );
};
