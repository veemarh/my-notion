import ContentEditable from 'react-contenteditable';

export function EditableItemInner({id, html, className, onChange, onKeyDown, tagName, placeholder}) {
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

export function EditableItem({id, type, html, className, onChange, onKeyDown, tagName, placeholder}) {
    const contentProps = {id, html, className, onChange, onKeyDown, tagName, placeholder};

    switch (type) {
        case "quote":
            return (
                <blockquote style={{padding: '0.25rem', width: '100%'}}>
                    <div style={{padding: '0 1rem', boxShadow: '2px 0 0 0 currentColor inset'}}>
                        <EditableItemInner {...contentProps} />
                    </div>
                </blockquote>
            );
        case "callout":
            return (
                <div style={{
                    display: 'flex',
                    width: '100%',
                    borderRadius: '0.25rem',
                    backgroundColor: 'rgba(216,214,210,0.3)',
                    padding: '0.75rem 1rem',
                }}>
                    <div style={{
                        flexShrink: '0',
                        flexGrow: '0',
                        display: 'flex',
                        width: '1rem',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginRight: '1rem',
                        marginTop: '0.5rem'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z"/>
                        </svg>
                    </div>
                    {/*когда я захочу делать блоки в блоках*/}
                    {/*добавить minHeight: '32px', marginTop: '2px'*/}
                    <div style={{display: 'flex', flexDirection: 'column', minWidth: 0, width: '100%'}}>
                        <EditableItemInner {...contentProps} />
                    </div>
                </div>
            );
        default:
            return <EditableItemInner {...contentProps} />;
    }
}
