import styles from '../../../assets/css/Contents.module.css';
import {HeaderItem, LinkItem, SubHeaderItem, SubSubHeaderItem, TextItem} from './Items.jsx';
import {useCallback} from 'react';
import sanitizeHtml from 'sanitize-html';

export default function RenderedItem({itemType, itemContent, setItemContent}) {
    const onContentChange = useCallback(evt => {
        const sanitizeConf = {
            allowedTags: ["b", "i", "u", "s", "del", "a", "p", "ul", "ol", "li", "h2", "h3", "h4"],
            allowedAttributes: {a: ["href"]}
        };

        setItemContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    }, [setItemContent])

    const commonProps = {
        html: itemContent,
        className: styles[`${itemType}Item`],
        onChange: (evt) => setItemContent(evt.target.value),
        onBlur: onContentChange,
    };

    switch (itemType) {
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
        case 'link':
            return (
                <LinkItem {...commonProps}/>
            );
    }
};
