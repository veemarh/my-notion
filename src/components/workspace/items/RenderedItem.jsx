import styles from '../../../assets/css/Contents.module.css';
import {HeaderItem, SubHeaderItem, SubSubHeaderItem, TextItem} from './Items.jsx';
import {useCallback} from 'react';
import sanitizeHtml from 'sanitize-html';

export default function RenderedItem({type, content, setContent, onDelete, onEnter}) {
    const onContentChange = useCallback(evt => {
        const sanitizeConf = {
            allowedTags: ["b", "i", "u", "s", "del", "a", "p", "ul", "ol", "li", "h2", "h3", "h4"],
            allowedAttributes: {a: ["href"]}
        };

        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [setContent])

    const onKeyDownHandler = (evt) => {
        if (evt.key === "Enter") {
            const selection = window.getSelection();
            const caretPosition = selection.anchorOffset;
            const contentLength = evt.target.textContent.length;
            if (caretPosition === contentLength) {
                evt.preventDefault();
                onEnter();
            }
        } else if (evt.key === "Backspace" && evt.currentTarget.textContent === "") {
            evt.preventDefault();
            onDelete();
        }
    };

    const commonProps = {
        html: content,
        className: styles.itemInner,
        onChange: (evt) => setContent(evt.target.value),
        onBlur: onContentChange,
        onKeyDown: onKeyDownHandler,
    };

    switch (type) {
        case 'header':
            return (
                <HeaderItem {...commonProps}/>
            );
        case 'subHeader':
            return (
                <SubHeaderItem {...commonProps}/>
            );
        case 'subSubHeader':
            return (
                <SubSubHeaderItem {...commonProps}/>
            );
        case 'text':
            return (
                <TextItem {...commonProps}/>
            );
    }
};
