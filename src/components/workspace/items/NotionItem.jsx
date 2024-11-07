import RenderedItem from './RenderedItem.jsx';
import withToggleAndModal from '../modals/ModalToggle.jsx';

function NotionItem({id, type, content, setType, setContent, onBackspace, onDelete, onEnter, onPaste}) {
    return (
        <RenderedItem id={id}
                      type={type}
                      content={content}
                      setType={setType}
                      setContent={setContent}
                      onBackspace={onBackspace}
                      onDelete={onDelete}
                      onEnter={onEnter}
                      onPaste={onPaste}/>
    )
}

const EnhancedNotionItem = withToggleAndModal(NotionItem);

export default EnhancedNotionItem;
