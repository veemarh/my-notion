function getTextLength(elem) {
    let range = elem.ownerDocument.createRange();
    range.selectNodeContents(elem);

    return range.toString().length;
}

export function getCaretOffset(elem) {
    let sel = elem.ownerDocument.defaultView.getSelection();
    if (sel.rangeCount === 0) return 0;

    let range = elem.ownerDocument.defaultView.getSelection().getRangeAt(0);
    let preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(elem);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    return preCaretRange.toString().length;
}

export function isCaretAtEnd(elem) {
    if (elem.ownerDocument.activeElement !== elem) return false;
    if (elem.ownerDocument.defaultView.getSelection().getRangeAt(0).toString().length > 0) return false;

    return getCaretOffset(elem) === getTextLength(elem);
}

export function isCaretAtStart(elem) {
    if (elem.ownerDocument.activeElement !== elem) return false;
    if (elem.ownerDocument.defaultView.getSelection().getRangeAt(0).toString().length > 0) return false;

    return getCaretOffset(elem) === 0;
}

export function getSelectionStart(contenteditable) {
    const selection = window.getSelection();
    const c = compareCaretPositions(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    return c < 0 ? getTextOffset(contenteditable, selection.anchorNode, selection.anchorOffset) : getTextOffset(contenteditable, selection.focusNode, selection.focusOffset);
}

export function getSelectionEnd(contenteditable) {
    const selection = window.getSelection();
    const c = compareCaretPositions(selection.anchorNode, selection.anchorOffset, selection.focusNode, selection.focusOffset);
    return c < 0 ? getTextOffset(contenteditable, selection.focusNode, selection.focusOffset) : getTextOffset(contenteditable, selection.anchorNode, selection.anchorOffset);
}

export function setSelectionRange(contenteditable, start, end) {
    const selection = window.getSelection();
    const s = getCaretPosition(contenteditable, start);
    const e = getCaretPosition(contenteditable, end);
    selection.setBaseAndExtent(s.node, s.offset, e.node, e.offset);
}

function getCaretPosition(contenteditable, textPosition) {
    let textOffset = 0;
    let lastNode = null;
    let lastOffset = 0;
    for (const p of positions(contenteditable)) {
        if (p.text.length > textPosition - textOffset) {
            return {node: p.node, offset: p.node.nodeType === Node.TEXT_NODE ? textPosition - textOffset : p.offset};
        }
        textOffset += p.text.length;
        lastNode = p.node;
        lastOffset = p.node.nodeType === Node.TEXT_NODE ? p.text.length : p.offset;
    }
    return {node: lastNode, offset: lastOffset};
}

function getTextOffset(contenteditable, selectionNode, selectionOffset) {
    let textOffset = 0;
    for (const p of positions(contenteditable)) {
        if (selectionNode.nodeType !== Node.TEXT_NODE && selectionNode === p.node && selectionOffset === p.offset) {
            return textOffset;
        }
        if (selectionNode.nodeType === Node.TEXT_NODE && selectionNode === p.node) {
            return textOffset + selectionOffset;
        }
        textOffset += p.text.length;
    }
    return compareCaretPositions(selectionNode, selectionOffset, contenteditable, 0) < 0 ? 0 : textOffset;
}

function* positions(node, isLineStart = true) {
    console.assert(node.nodeType === Node.ELEMENT_NODE);
    let child = node.firstChild;
    let offset = 0;
    yield {node: node, offset: offset, text: stringifyElementStart(node, isLineStart)};
    while (child != null) {
        if (child.nodeType === Node.TEXT_NODE) {
            yield {node: child, offset: 0 / 0, text: child.data};
            isLineStart = false;
        } else {
            isLineStart = yield* positions(child, isLineStart);
        }
        child = child.nextSibling;
        offset += 1;
        yield {node: node, offset: offset, text: ''};
    }
    return isLineStart;
}

function stringifyElementStart(node, isLineStart) {
    // if (node.tagName.toLowerCase() === 'br') {
    //     return '\n';
    // }
    if (node.tagName.toLowerCase() === 'div') {
        if (!isLineStart) {
            return '\n';
        }
    }
    return '';
}

function compareCaretPositions(node1, offset1, node2, offset2) {
    if (node1 === node2) {
        return offset1 - offset2;
    }
    const c = node1.compareDocumentPosition(node2);
    if ((c & Node.DOCUMENT_POSITION_CONTAINED_BY) !== 0) {
        return isAfter(node1, offset1, node2) ? +1 : -1;
    } else if ((c & Node.DOCUMENT_POSITION_CONTAINS) !== 0) {
        return isAfter(node2, offset2, node1) ? -1 : +1;
    } else if ((c & Node.DOCUMENT_POSITION_FOLLOWING) !== 0) {
        return -1;
    } else if ((c & Node.DOCUMENT_POSITION_PRECEDING) !== 0) {
        return +1;
    }
}

function isAfter(container, offset, node) {
    let c = node;
    while (c.parentNode !== container) {
        c = c.parentNode;
    }
    let i = offset;
    while (c != null && i > 0) {
        c = c.previousSibling;
        i -= 1;
    }
    return i > 0;
}
