export async function getClipboardData(evt, setItems, setFocusedItemIndex, id) {
    evt.preventDefault();
    const content = (evt.clipboardData || window.clipboardData).getData('text/html');
    if (!content) return;

    const parsedHTML = new DOMParser().parseFromString(content, "text/html").body;

    if (parsedHTML.children.length === 1) {
        const fragment = document.createDocumentFragment();
        const selection = window.getSelection();
        if (!selection.rangeCount) return;
        selection.deleteFromDocument();
        const singleNode = document.createTextNode(parsedHTML.children[0].textContent);
        fragment.appendChild(singleNode);
        selection.getRangeAt(0).insertNode(fragment);
        selection.collapseToEnd();
        return;
    }

    Array.from(parsedHTML.children).forEach((elem, i) => {
        let type;
        switch (elem.tagName) {
            case 'H1':
            case 'H2':
                type = "header";
                break;
            case 'H3':
                type = "subHeader";
                break;
            case 'H4':
                type = "subSubHeader";
                break;
            case 'P':
                type = "text";
                break;
            case 'BLOCKQUOTE':
                type = "quote";
                break;
            default:
                type = "text";
        }

        setItems(prevItems => {
            const index = prevItems.findIndex(item => item.id === id);
            const updatedIndex = [
                ...prevItems.slice(0, index + 1 + i),
                {id: crypto.randomUUID(), type: type, content: elem.textContent},
                ...prevItems.slice(index + 1 + i),
            ];
            if (i === parsedHTML.children.length - 1) {
                setFocusedItemIndex(index + 1 + i);
            }
            return updatedIndex;
        });
    });
}
