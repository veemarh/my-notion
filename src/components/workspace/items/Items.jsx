import ContentEditable from 'react-contenteditable';
import {useEffect, useRef} from 'react';

export function TextItem({html, className, onChange}) {
    const ref = useRef(null);
    const isEmpty = html === "<br>" || html === "";
    useEffect(() => {
        if (ref.current) {
            ref.current.setAttribute("data-empty", isEmpty);
        }
    }, [isEmpty, html]);

    return (
        <ContentEditable
            innerRef={ref}
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
        />
    );
}
