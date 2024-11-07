import {setSelectionRange} from '../selection/selectionUtils.js';

export const addBlockAfter = (evt, containerRef, prevItems) => {
    if (prevItems.length === 0) {
        return [[{id: crypto.randomUUID(), type: "text", content: ""}], prevItems.length, "start"];
    }

    const container = containerRef.current;
    const lastItemIndex = prevItems.length - 1;
    const containerBottom = container.children[lastItemIndex].getBoundingClientRect().bottom;
    const clickY = evt.clientY;

    if (clickY > containerBottom) {
        if (prevItems[lastItemIndex]?.type === "text" &&
            prevItems[lastItemIndex]?.content === "") {
            return ([prevItems, lastItemIndex, "end"]);
        }
        const updatedItems = [...prevItems, {id: crypto.randomUUID(), type: "text", content: ""}];
        return ([updatedItems, prevItems.length, "start"]);
    }
    return [prevItems, null, null];
};

export const addBlockBetween = (prevItems, id, content) => {
    const index = prevItems.findIndex(item => item.id === id);
    const updatedItems = [
        ...prevItems.slice(0, index + 1),
        {id: crypto.randomUUID(), type: "text", content: content || ""},
        ...prevItems.slice(index + 1),
    ];
    return [updatedItems, index + 1, "start"];
};

export const updateType = (prevItems, id, newType) => {
    return prevItems.map(item =>
        item.id === id ? {...item, type: newType} : item
    );
};

export const updateContent = (prevItems, id, newContent) => {
    return prevItems.map(item =>
        item.id === id ? {...item, content: newContent} : item
    );
};

export const deleteBlock = (prevItems, id, content) => {
    const index = prevItems.findIndex(item => item.id === id);
    if (index === -1 || index === 0 && content) {
        return [prevItems, 0, "start"];
    }

    const tempFocusIndex = index > 0 ? index - 1 : index;
    const [updatedIndex, updatedCaretPosition] = tempFocusIndex < prevItems.length - 1
        ? index === 0
            ? [tempFocusIndex, "start"]
            : [tempFocusIndex, prevItems[tempFocusIndex].content.length]
        : [null, "end"];

    const updatedItems = prevItems
        .filter(item => item.id !== id)
        .map(item => item.id === prevItems[tempFocusIndex].id
            ? content
                ? {...item, content: prevItems[tempFocusIndex].content + content}
                : item
            : item
        );
    return [updatedItems, updatedIndex, updatedCaretPosition];
};

document.body.createTextRange = undefined;
export const focusOnBlock = (items, index, position = "end") => {
    if (index >= 0 && index < items.length) {
        const targetId = `notion-item-${items[index].id}`;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.focus();

            let range, selection;
            if (document.createRange) {
                range = document.createRange();
                if (position === "end") {
                    range.selectNodeContents(targetElement);
                    range.collapse(false);
                } else if (position === "start") {
                    range.selectNodeContents(targetElement);
                    range.collapse(true);
                } else {
                    requestAnimationFrame(() => {
                        setSelectionRange(targetElement, parseInt(position), parseInt(position));
                    });
                }
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            } else if (document.selection) {
                range = document.body.createTextRange();
                range.moveToElementText(targetElement);
                range.collapse(false);
                range.select();
            }
        }
    }
};
