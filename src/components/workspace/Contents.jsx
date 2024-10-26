import styles from '../../assets/css/Page.module.css';
import {Link} from 'react-router-dom';
import NotionItem from './items/NotionItem.jsx';

export default function Contents() {
    const items = [
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

    const notionItems = items.map((item) => (
        <NotionItem key={item.id} type={item.type} content={item.content}/>
    ));

    return (
        <div className={styles.container}>
            {notionItems}
            <Link to="/register">register</Link>
            <Link to="/login">login</Link>
            <Link to="*">404</Link>
        </div>
    )
};
