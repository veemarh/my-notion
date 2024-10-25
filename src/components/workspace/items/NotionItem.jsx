import styles from '../../../assets/css/Contents.module.css';
import RenderedItem from './RenderedItem.jsx';
import {useState} from 'react';
import EditMenu from '../modals/EditMenu.jsx';

export default function NotionItem({type, content}) {
    const [itemType, setItemType] = useState(type);
    const [itemContent, setItemContent] = useState(content);
    const isEmpty = itemContent === "<br>" || itemContent === "";

    return (
        <div className={`${styles.blockWrapper} ${styles[itemType] || styles.common}`}>
            <div className={styles.flexWrapper} data-empty={isEmpty}>
                <RenderedItem itemType={itemType} itemContent={itemContent} setItemContent={setItemContent}/>
            </div>
            <EditMenu setItemType={setItemType}/>
        </div>
    )
}
