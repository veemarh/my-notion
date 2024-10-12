import styles from '../../assets/css/Scroller.module.css'

function Scroller({children}) {
    return (
        <div className={styles.scroller}>   {/* need scroller provider */}
            <div className={styles.inner}>
                <div className={styles.flex}>
                    {children}
                </div>
            </div>
            <div className={styles.sticky}/>
        </div>
    )
}

export default Scroller;
