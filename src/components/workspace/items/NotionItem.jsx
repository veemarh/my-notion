import RenderedItem from './RenderedItem.jsx';
import withToggleAndModal from '../modals/ModalToggle.jsx';

function NotionItem({id, type, content, setType, setContent, onDelete, onEnter}) {
    return (
        <RenderedItem id={id}
                      type={type}
                      content={content}
                      setType={setType}
                      setContent={setContent}
                      onDelete={onDelete}
                      onEnter={onEnter}/>
    )
}

const EnhancedNotionItem = withToggleAndModal(NotionItem);

export default EnhancedNotionItem;
