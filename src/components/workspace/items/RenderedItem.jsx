import styles from '../../../assets/css/Contents.module.css';
import {HeaderItem, SubHeaderItem, SubSubHeaderItem, TextItem} from './Items.jsx';
import {useCallback} from 'react';
import sanitizeHtml from 'sanitize-html';
import {isCaretAtEnd, getSelectionEnd, getSelectionStart, setSelectionRange} from '../selection/Selection.js';

export default function RenderedItem({id, type, content, setContent, onDelete, onEnter}) {
    const onContentChange = useCallback(evt => {
        const prevSelection = {start: getSelectionStart(evt.currentTarget), end: getSelectionEnd(evt.currentTarget)};
        const sanitizeConf = {
            allowedTags: ["b", "i", "em", "strong", "u", "s", "a", "p", "ul", "ol", "li"],
            allowedAttributes: {a: ["href"]}
        };

        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf));
        requestAnimationFrame(() => {
            setSelectionRange(evt.currentTarget, prevSelection.start, prevSelection.end);
        });
    }, [setContent]);

    const onKeyDownHandler = (evt) => {
        if (evt.key === "Enter") {
            if (isCaretAtEnd(evt.target)) {
                evt.preventDefault();
                onEnter();
            }
        } else if (evt.key === "Backspace" && evt.currentTarget.textContent === "") {
            evt.preventDefault();
            onDelete();
        }
    };

    const commonProps = {
        id: id,
        html: content,
        className: styles.itemInner,
        onChange: (evt) => {
            setContent(evt.target.value);
            onContentChange(evt);
        },
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
