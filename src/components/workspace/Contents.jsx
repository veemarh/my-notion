import styles from '../../assets/css/Page.module.css';
import {Link} from 'react-router-dom';
import NotionItem from './items/NotionItem.jsx';
import {useRef, useState} from 'react';

export default function Contents() {
    const [items, setItems] = useState(ITEMS);
    const containerRef = useRef(null);

    const addNewBlock = (evt) => {
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
        }
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
        setItems(prevItems => prevItems.filter(item => item.id !== id));
    };


    const notionItems = items.map((item) => (
        <NotionItem key={item.id} type={item.type} content={item.content}
                    setType={(newType) => updateType(item.id, newType)}
                    setContent={(newContent) => updateContent(item.id, newContent)}
                    onDelete={() => deleteBlock(item.id)}/>
    ));

    return (
        <div ref={containerRef} className={styles.container} onClick={addNewBlock}>
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
