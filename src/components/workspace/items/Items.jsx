import ContentEditable from 'react-contenteditable';

export function TextItem({html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="div"
            placeholder="Write something there..."
            onKeyDown={onKeyDown}
        />
    );
}

export function HeaderItem({html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="h2"
            placeholder="Heading 1"
            onKeyDown={onKeyDown}
        />
    );
}

export function SubHeaderItem({html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="h3"
            placeholder="Heading 2"
            onKeyDown={onKeyDown}
        />
    );
}

export function SubSubHeaderItem({html, className, onChange, onKeyDown}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="h4"
            placeholder="Heading 3"
            onKeyDown={onKeyDown}
        />
    );
}
