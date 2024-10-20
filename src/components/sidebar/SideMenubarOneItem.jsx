import styles from '../../assets/css/SidebarBlocks.module.css';

export default function SideMenubarOneItem({item, onClick}) {
    return (
        <div className={styles.itemOuter} onClick={onClick}>
            <div className={styles.itemInner}>
                <div className={styles.icon}>
                    {item.icon}
                </div>
                <div className={styles.nameOuter}>
                    <div className={styles.nameInner}>{item.title}</div>
                </div>
            </div>
        </div>
    )
}
