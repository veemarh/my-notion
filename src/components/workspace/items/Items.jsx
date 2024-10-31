import ContentEditable from 'react-contenteditable';

export function TextItem({id, html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            id={id}
            html={html}
            className={className}
            onChange={onChange}
            tagName="div"
            placeholder="Write something there..."
            onKeyDown={onKeyDown}
        />
    );
}

export function HeaderItem({id, html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            id={id}
            html={html}
            className={className}
            onChange={onChange}
            tagName="h2"
            placeholder="Heading 1"
            onKeyDown={onKeyDown}
        />
    );
}

export function SubHeaderItem({id, html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            id={id}
            html={html}
            className={className}
            onChange={onChange}
            tagName="h3"
            placeholder="Heading 2"
            onKeyDown={onKeyDown}
        />
    );
}

export function SubSubHeaderItem({id, html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            id={id}
            html={html}
            className={className}
            onChange={onChange}
            tagName="h4"
            placeholder="Heading 3"
            onKeyDown={onKeyDown}
        />
    );
}
