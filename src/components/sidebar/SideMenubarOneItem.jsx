import styles from '../../assets/css/SidebarBlocks.module.css';
import {OverflowBlock} from '../workspace/text-overflow/OverflowBlock.jsx';

export default function SideMenubarOneItem({item, onClick}) {
    return (
        <div className={styles.itemOuter} onClick={onClick}>
            <div className={styles.itemInner}>
                <div className={styles.icon}>
                    {item.icon}
                </div>
                <OverflowBlock>{item.title}</OverflowBlock>
            </div>
        </div>
    )
}
