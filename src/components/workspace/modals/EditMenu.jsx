import styles from '../../../assets/css/Contents.module.css';

export default function EditMenu({setItemType}) {
    const handleClick = (evt) => {
        setItemType(evt.currentTarget.dataset.itemType);
    }
    return (
        <div className={styles.editMenu} tabIndex="-1">
            <ul>
                <EditMenuItem type="text" onClick={handleClick}/>
                <EditMenuItem type="header" onClick={handleClick}/>
                <EditMenuItem type="subHeader" onClick={handleClick}/>
                <EditMenuItem type="subSubHeader" onClick={handleClick}/>
                <EditMenuItem type="link" onClick={handleClick}/>
            </ul>
        </div>
    )
}

function EditMenuItem({type, onClick}) {
    return (
        <li className={styles.editMenuItem} data-item-type={type} tabIndex="-1" onClick={onClick}>{type}</li>
    )
}
