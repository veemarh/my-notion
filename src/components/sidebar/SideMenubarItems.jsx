import {useState} from 'react';
import styles from '../../assets/css/SidebarBlocks.module.css';
import SideMenubarOneItem from './SideMenubarOneItem.jsx';
import {MAX_PAGES, MORE_PAGE} from "../../../consts/pages.jsx";

export default function SideMenubarItems({items}) {
    const [showAll, setShowAll] = useState(false);

    const blockItems = items
        .slice(0, showAll ? items.length : MAX_PAGES)
        .map(item => <SideMenubarOneItem key={`sidebar-${item.id}`} item={item}/>)

    return (
        <div className={styles.list}>
            {blockItems}
            {items.length > MAX_PAGES && (
                <SideMenubarOneItem key={`sidebar-${MORE_PAGE.id}`}
                                    item={MORE_PAGE}
                                    onClick={() => setShowAll(!showAll)}/>
            )}
        </div>
    )
}
