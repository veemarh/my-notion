import ContentEditable from 'react-contenteditable';

export function TextItem({html, className, onChange}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="div"
            placeholder="Write something there..."
        />
    );
}

export function HeaderItem({html, className, onChange}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="h2"
            placeholder="Heading 1"
        />
    );
}

export function SubHeaderItem({html, className, onChange}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="h3"
            placeholder="Heading 2"
        />
    );
}

export function SubSubHeaderItem({html, className, onChange}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="h4"
            placeholder="Heading 3"
        />
    );
}

export function LinkItem({html, className, onChange}) {
    return (
        <ContentEditable
            html={html}
            className={className}
            onChange={onChange}
            tagName="a"
            placeholder="Type your link there..."
        />
    );
}
