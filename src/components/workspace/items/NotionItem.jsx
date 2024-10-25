import styles from '../../../assets/css/Contents.module.css';
import {renderItem} from './renderItem.jsx';
import {useState} from 'react';

export default function NotionItem({type, content}) {
    const [itemType, setItemType] = useState(type);
    const [itemContent, setItemContent] = useState(content);
    const isEmpty = itemContent === "<br>" || itemContent === "";

    return (
        <div className={`${styles.blockWrapper} ${styles[itemType] || styles.common}`}>
            <div className={styles.flexWrapper} data-empty={isEmpty}>
                {renderItem(itemType, itemContent, setItemContent)}
            </div>
        </div>
    )
}
