import styles from '../../assets/css/SidebarBlocks.module.css';

export default function SideMenubarOneItem({item}) {
    return (
        <div className={styles.blockItemOuter}>
            <div className={styles.blockItemInner}>
                <div className={styles.icon}>
                    {item.icon}
                </div>
                <div className={styles.nameOuter}>
                    <div className={styles.nameInner}>{item.name}</div>
                </div>
            </div>
        </div>
    )
}
