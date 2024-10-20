import styles from '../../assets/css/SidebarBlocks.module.css';
import SideMenubarOneItem from './SideMenubarOneItem.jsx';

export default function SideMenubarItems({items}) {
    const blockItems = items.map(item =>
        <SideMenubarOneItem key={`sidebar-${item.id}`} item={item}/>
    )
    return (
        <div className={styles.list}>
            {blockItems}
        </div>
    )
}
