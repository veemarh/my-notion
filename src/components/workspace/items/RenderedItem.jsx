import styles from '../../../assets/css/Contents.module.css';
import {EditableItem} from './Items.jsx';
import {useCallback} from 'react';
import sanitizeHtml from 'sanitize-html';
import {isCaretAtEnd, getSelectionEnd, getSelectionStart, setSelectionRange} from '../utils/selection/selectionUtils.js';

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
        onChange: (evt) => {
            setContent(evt.target.value);
            onContentChange(evt);
        },
        onKeyDown: onKeyDownHandler,
    };

    const typeSettings = {
        text: {tagName: "div", placeholder: "Write something there...", className: styles.itemInner},
        header: {tagName: "h2", placeholder: "Heading 1", className: styles.itemInner},
        subHeader: {tagName: "h3", placeholder: "Heading 2", className: styles.itemInner},
        subSubHeader: {tagName: "h4", placeholder: "Heading 3", className: styles.itemInner},
        quote: {tagName: "div", placeholder: "Empty quote", className: styles.quoteInner},
        callout: {tagName: "div", placeholder: "Empty callout", className: styles.itemInner}
    };

    const {tagName, placeholder, className} = typeSettings[type] || {};

    return (
        <EditableItem
            {...commonProps}
            type={type}
            tagName={tagName}
            placeholder={placeholder}
            className={className}
        />
    );
};
