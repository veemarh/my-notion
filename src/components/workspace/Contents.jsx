import styles from '../../assets/css/Page.module.css';
import {Link} from 'react-router-dom';
import NotionItem from './items/NotionItem.jsx';
import {useEffect, useRef, useState} from 'react';
import {
    addBlockAfter,
    addBlockBetween,
    deleteBlock,
    focusOnBlock,
    updateContent,
    updateType
} from './utils/items/itemsUtils.js';
import {getClipboardData} from './utils/paste/pasteUtils.js';

export default function Contents() {
    const [items, setItems] = useState(ITEMS);
    const [focusedItemIndex, setFocusedItemIndex] = useState({index: null, caretPosition: false});
    const containerRef = useRef(null);

    useEffect(() => {
        if (focusedItemIndex.index !== null) {
            focusOnBlock(items, focusedItemIndex.index, focusedItemIndex.caretPosition);
            setFocusedItemIndex({index: null, caretPosition: false});
        }
    }, [items, focusedItemIndex]);

    const notionItems = items.map((item) => (
        <NotionItem key={item.id} id={`notion-item-${item.id}`}
                    type={item.type} content={item.content}
                    setType={(newType) => updateType(setItems, item.id, newType)}
                    setContent={(newContent) => updateContent(setItems, item.id, newContent)}
                    onDelete={() => deleteBlock(setItems, setFocusedItemIndex, item.id)}
                    onEnter={(content) => addBlockBetween(setItems, setFocusedItemIndex, item.id, content)}
                    onPaste={(evt) => getClipboardData(evt, setItems, setFocusedItemIndex, item.id)}/>
    ));

    return (
        <div ref={containerRef}
             className={styles.container}
             onClick={(evt) => addBlockAfter(evt, containerRef, items, setItems, setFocusedItemIndex)}>
            {notionItems}
            {/*<Link to="/register">register</Link>*/}
            {/*<Link to="/login">login</Link>*/}
            {/*<Link to="*">404</Link>*/}
        </div>
    )
};

const ITEMS = [
    {id: 1, type: "header", content: "Header"},
    {id: 2, type: "text", content: "Ganymede, Marc-Antoine Barrois."},
    {id: 3, type: "subHeader", content: "Sub header"},
    {id: 4, type: "text", content: "Группа: древесные пряные. Сезонность: круглый год."},
    {id: 5, type: "subSubHeader", content: "Sub sub header"},
    {
        id: 6,
        type: "quote",
        content: "Нанесение: Я бы посоветовала нанести сначала намазом (раскрутить флакончик, мазнуть трубочкой по " +
            "запястью). Нельзя подносить к носу сразу после нанесения - может отключить в носу рецепторы на минут " +
            "15-20. Довольно холодный, сосредоточенный, минеральный. В мире парфюмерии я бы сказала, что это Комета. " +
            "Сосредоточенная, холодная, целеустремленная, с огромным красивым хвостом-шлейфом аромата. " +
            "Аромат не всегда нравится с первой пробы из-за синтетичности и подчеркнуто стерильной " +
            "искусственности. Он таким задумывался. К нему нужно немного привыкнуть и дать несколько шансов, " +
            "чтобы не ошибиться."
    },
    {id: 7, type: "callout", content: "callout"},
];
