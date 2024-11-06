export const addBlockAfter = (evt, containerRef, items, setItems, setFocusedItemIndex) => {
    if (items.length === 0) {
        setItems([{id: crypto.randomUUID(), type: "text", content: ""}]);
        setFocusedItemIndex({index: items.length, caretPosition: true});
        return;
    }

    const container = containerRef.current;
    const lastItemIndex = items.length - 1;
    if (items[lastItemIndex]?.type === "text" &&
        items[lastItemIndex]?.content === "") {
        return;
    }
    const containerBottom = container.children[lastItemIndex].getBoundingClientRect().bottom;
    const clickY = evt.clientY;
    if (clickY > containerBottom) {
        const newItem = {id: crypto.randomUUID(), type: "text", content: ""};
        setItems([...items, newItem]);
        setFocusedItemIndex({index: items.length, caretPosition: true});
    }
};

export const addBlockBetween = (setItems, setFocusedItemIndex, id, content) => {
    setItems(prevItems => {
        const index = prevItems.findIndex(item => item.id === id);
        const updatedItems = [
            ...prevItems.slice(0, index + 1),
            {id: crypto.randomUUID(), type: "text", content: content || ""},
            ...prevItems.slice(index + 1),
        ];
        setFocusedItemIndex({index: index + 1, caretPosition: true});
        return updatedItems;
    });
};

export const updateType = (setItems, id, newType) => {
    setItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? {...item, type: newType} : item
        )
    );
};

export const updateContent = (setItems, id, newContent) => {
    setItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? {...item, content: newContent} : item
        )
    );
};

export const deleteBlock = (setItems, setFocusedItemIndex, id) => {
    setItems(prevItems => {
        const index = prevItems.findIndex(item => item.id === id);
        if (index === -1) return prevItems;

        const newFocusIndex = index > 0 ? index - 1 : index;
        setFocusedItemIndex(newFocusIndex < prevItems.length - 1
            ? {index: newFocusIndex, caretPosition: false}
            : {index: null, caretPosition: false});

        return prevItems.filter(item => item.id !== id);
    });
};

document.body.createTextRange = undefined;
export const focusOnBlock = (items, index, position = false) => {
    if (index >= 0 && index < items.length) {
        const targetId = `notion-item-${items[index].id}`;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.focus();

            let range, selection;
            if (document.createRange) {
                range = document.createRange();
                range.selectNodeContents(targetElement);
                range.collapse(position);
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
