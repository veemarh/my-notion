import styles from '../../../assets/css/Contents.module.css';
import {renderItem} from './renderItem.jsx';
import {useState} from 'react';

export default function NotionItem({type, content}) {
    const [itemType, setItemType] = useState(type);
    const [itemContent, setItemContent] = useState(content);

    return (
        <div className={`${styles.blockWrapper} ${styles[itemType]}`}>
            <div className={styles.flexWrapper}>
                {renderItem(itemType, itemContent, setItemContent)}
            </div>
        </div>
    )
}
