import styles from '../../assets/css/SidebarBlocks.module.css';
import SideMenubarOneItem from './SideMenubarOneItem.jsx';
import {useCallback, useState} from 'react';
import update from 'immutability-helper'

export default function SideMenubarItems({list, type}) {
    const [items, setItems] = useState(list);

    const moveItem = useCallback((dragIndex, hoverIndex) => {
        setItems((prevItems) =>
            update(prevItems, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevItems[dragIndex]],
                ],
            }),
        )
    }, [])

    const renderItem = useCallback((item, index) => {
        return (
            <SideMenubarOneItem key={`sidebar-${item.id}`} item={item} index={index} type={type} moveItem={moveItem}/>
        )
    }, [moveItem, type])

    const blockItems = items.map((item, i) => renderItem(item, i))
    return (
        <div className={styles.list}>
            {blockItems}
        </div>
    )
}
