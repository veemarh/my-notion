async function getClipboardData(e) {
    e.preventDefault();
    const content = (e.clipboardData || window.clipboardData).getData('text/html');
    if (!content) return;

    const fragment = document.createDocumentFragment();
    fragment.textContent = content;

    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(content));
    selection.collapseToEnd();
}
