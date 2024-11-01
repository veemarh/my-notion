import ContentEditable from 'react-contenteditable';

export function EditableItem({id, html, className, onChange, onKeyDown, tagName, placeholder}) {
    return (
        <ContentEditable
            id={id}
            html={html}
            className={className}
            onChange={onChange}
            tagName={tagName}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
        />
    );
}
