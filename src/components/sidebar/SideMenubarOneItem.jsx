import {useRef} from 'react';
import styles from '../../assets/css/SidebarBlocks.module.css';
import {useDrag, useDrop} from 'react-dnd';

export default function SideMenubarOneItem({item, index, type, moveItem}) {
    const ref = useRef(null);
    const [{isDragging}, dragRef] = useDrag({
        type: type,
        item: {index},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    })

    const [{handlerId}, dropRef] = useDrop({
        accept: type,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
                isActive: monitor.canDrop() && monitor.isOver(),
            }
        },

        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY =
                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })

    const dragDropRef = dragRef(dropRef(ref));

    const style = {
        opacity: isDragging ? 0.6 : 1,
        transition: '0.5s',
    };

    return (
        <div ref={dragDropRef} style={style} data-handler-id={handlerId}>
            <div className={styles.itemOuter}>
                <div className={styles.itemInner}>
                    <div className={styles.icon}>
                        {item.icon}
                    </div>
                    <div className={styles.nameOuter}>
                        <div className={styles.nameInner}>{item.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
