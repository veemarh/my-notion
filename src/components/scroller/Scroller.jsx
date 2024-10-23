import styles from '../../assets/css/Scroller.module.css'

function Scroller({workspace, children}) {
    return (
        <div className={workspace ? `${styles.workspaceScroller}` : `${styles.scroller}`}>
            {workspace
                ? children
                : <div className={styles.inner}>
                    <div className={styles.flex}>
                        {children}
                    </div>
                </div>
            }
            <div className={styles.sticky}/>
        </div>
    )
}

export default Scroller;
