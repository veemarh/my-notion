export const addBlockAfter = (evt, containerRef, items, setItems, setFocusedItemIndex) => {
    if (items.length === 0) {
        setItems([{id: Date.now(), type: "text", content: ""}]);
        setFocusedItemIndex(items.length);
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
        const newItem = {id: Date.now(), type: "text", content: ""};
        setItems([...items, newItem]);
        setFocusedItemIndex(items.length);
    }
};

export const addBlockBetween = (setItems, setFocusedItemIndex, id) => {
    setItems(prevItems => {
        const index = prevItems.findIndex(item => item.id === id);
        const updatedItems = [
            ...prevItems.slice(0, index + 1),
            {id: Date.now(), type: "text", content: ""},
            ...prevItems.slice(index + 1),
        ];
        setFocusedItemIndex(index + 1);
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
        setFocusedItemIndex(newFocusIndex < prevItems.length - 1 ? newFocusIndex : null);

        return prevItems.filter(item => item.id !== id);
    });
};

export const focusOnBlock = (items, index) => {
    if (index >= 0 && index < items.length) {
        const targetId = `notion-item-${items[index].id}`;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.focus();

            let range, selection;
            if (document.createRange) {
                range = document.createRange();
                range.selectNodeContents(targetElement);
                range.collapse(false);
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
