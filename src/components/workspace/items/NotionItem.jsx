import RenderedItem from './RenderedItem.jsx';
import withToggleAndModal from '../modals/ModalToggle.jsx';

function NotionItem({type, content, setType, setContent, onDelete}) {
    return (
        <RenderedItem type={type}
                      content={content}
                      setType={setType}
                      setContent={setContent}
                      onDelete={onDelete}/>
    )
}

const EnhancedNotionItem = withToggleAndModal(NotionItem);

export default EnhancedNotionItem;
