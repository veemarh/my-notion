import styles from '../../../assets/css/Contents.module.css';
import {HeaderItem, SubHeaderItem, SubSubHeaderItem, TextItem} from './Items.jsx';
import {useCallback} from 'react';
import sanitizeHtml from 'sanitize-html';

export default function RenderedItem({id, type, content, setContent, onDelete, onEnter}) {
    const onContentChange = useCallback(evt => {
        const sanitizeConf = {
            allowedTags: ["b", "i", "u", "s", "del", "a", "p", "ul", "ol", "li", "h2", "h3", "h4"],
            allowedAttributes: {a: ["href"]}
        };

        setContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [setContent])

    function getTextLength(elem) {
        let range = elem.ownerDocument.createRange();
        range.selectNodeContents(elem);

        return range.toString().length;
    }

    function getCaretOffset(elem) {
        let sel = elem.ownerDocument.defaultView.getSelection();
        if (sel.rangeCount === 0) return 0;

        let range = elem.ownerDocument.defaultView.getSelection().getRangeAt(0);
        let preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(elem);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        return preCaretRange.toString().length;
    }

    function isCaretAtEnd(elem) {
        if (elem.ownerDocument.activeElement !== elem) return false;
        if (elem.ownerDocument.defaultView.getSelection().getRangeAt(0).toString().length > 0) return false;

        return getCaretOffset(elem) === getTextLength(elem);
    }

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
