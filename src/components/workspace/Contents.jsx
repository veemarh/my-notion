import styles from '../../assets/css/Page.module.css';
import {Link} from 'react-router-dom';
import NotionItem from './items/NotionItem.jsx';
import {useEffect, useRef, useState} from 'react';

document.body.createTextRange = undefined;
export default function Contents() {
    const [items, setItems] = useState(ITEMS);
    const [focusedItemIndex, setFocusedItemIndex] = useState(null);
    const containerRef = useRef(null);

    const addBlockAfter = (evt) => {
        if (items.length === 0) {
            setItems([{id: Date.now(), type: "text", content: ""}]);
            setFocusedItemIndex(items.length);
            return;
        }
        const container = containerRef.current;
        const lastItem = items[items.length - 1];

        if (lastItem?.type === "text" &&
            lastItem?.content === "") {
            return;
        }
        const containerBottom = container.children[items.length - 1].getBoundingClientRect().bottom;
        const clickY = evt.clientY;

        if (clickY > containerBottom) {
            const newItem = {id: Date.now(), type: "text", content: ""};
            setItems([...items, newItem]);
            setFocusedItemIndex(items.length);
        }
    };

    const addBlockBetween = (id) => {
        setItems(prevItems => {
            const index = prevItems.findIndex(item => item.id === id);
            const updatedItems = [
                ...prevItems.slice(0, index + 1),
                {id: Date.now(), type: "text", content: ""},
                ...prevItems.slice(index + 1),
            ];
            setFocusedItemIndex(index + 1);
            return updatedItems;
        });
    };

    const updateType = (id, newType) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? {...item, type: newType} : item
            )
        );
    };

    const updateContent = (id, newContent) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? {...item, content: newContent} : item
            )
        );
    };

    const deleteBlock = (id) => {
        setItems(prevItems => {
            const index = prevItems.findIndex(item => item.id === id);
            if (index === -1) return prevItems;

            const newFocusIndex = index > 0 ? index - 1 : index;
            setFocusedItemIndex(newFocusIndex < prevItems.length - 1 ? newFocusIndex : null);

            return prevItems.filter(item => item.id !== id);
        });
    };

    useEffect(() => {
        const focusOnNthBlock = (index) => {
            if (index >= 0 && index < items.length) {
                const targetId = `notion-item-${items[index].id}`;
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.focus();

                    let range, selection;
                    if (document.createRange) {
                        range = document.createRange();
                        range.selectNodeContents(targetElement);
                        range.collapse(false);
                        selection = window.getSelection();
                        selection.removeAllRanges();
                        selection.addRange(range);
                    } else if (document.selection) {
                        range = document.body.createTextRange();
                        range.moveToElementText(targetElement);
                        range.collapse(false);
                        range.select();
                    }
                }
            }
        };

        if (focusedItemIndex !== null) {
            focusOnNthBlock(focusedItemIndex);
            setFocusedItemIndex(null);
        }
    }, [items, focusedItemIndex]);


    const notionItems = items.map((item) => (
        <NotionItem key={item.id} id={`notion-item-${item.id}`}
                    type={item.type} content={item.content}
                    setType={(newType) => updateType(item.id, newType)}
                    setContent={(newContent) => updateContent(item.id, newContent)}
                    onDelete={() => deleteBlock(item.id)}
                    onEnter={() => addBlockBetween(item.id)}/>
    ));

    return (
        <div ref={containerRef} className={styles.container} onClick={addBlockAfter}>
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
        type: "text",
        content: "Нанесение: Я бы посоветовала нанести сначала намазом (раскрутить флакончик, мазнуть трубочкой по " +
            "запястью). Нельзя подносить к носу сразу после нанесения - может отключить в носу рецепторы на минут " +
            "15-20. Довольно холодный, сосредоточенный, минеральный. В мире парфюмерии я бы сказала, что это Комета. " +
            "Сосредоточенная, холодная, целеустремленная, с огромным красивым хвостом-шлейфом аромата. " +
            "Аромат не всегда нравится с первой пробы из-за синтетичности и подчеркнуто стерильной " +
            "искусственности. Он таким задумывался. К нему нужно немного привыкнуть и дать несколько шансов, " +
            "чтобы не ошибиться."
    },
];
