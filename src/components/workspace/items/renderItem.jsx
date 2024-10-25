import styles from '../../../assets/css/Contents.module.css';
import {HeaderItem, LinkItem, SubHeaderItem, SubSubHeaderItem, TextItem} from './Items.jsx';

export const renderItem = (itemType, itemContent, setItemContent) => {
    // const onContentChange = useCallback(evt => {
    // 	const sanitizeConf = {
    // 		allowedTags: ["b", "i", "a", "p"],
    // 		allowedAttributes: { a: ["href"] }
    // 	};
    //
    // 	setItemContent(sanitizeHtml(evt.currentTarget.innerHTML, sanitizeConf))
    // }, [setItemContent])

    const commonProps = {
        html: itemContent,
        className: styles[`${itemType}Item`],
        onChange: (evt) => setItemContent(evt.target.value),
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
