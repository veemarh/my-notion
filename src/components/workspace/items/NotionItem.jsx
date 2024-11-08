import RenderedItem from './RenderedItem.jsx';
import withToggleAndModal from '../modals/ModalToggle.jsx';

function NotionItem({id, type, content, setType, setContent, onBackspace, onDelete, onEnter,onArrowClick, onPaste}) {
    return (
        <RenderedItem id={id}
                      type={type}
                      content={content}
                      setType={setType}
                      setContent={setContent}
                      onBackspace={onBackspace}
                      onDelete={onDelete}
                      onEnter={onEnter}
                      onArrowClick={onArrowClick}
                      onPaste={onPaste}/>
    )
}

const EnhancedNotionItem = withToggleAndModal(NotionItem);

export default EnhancedNotionItem;
