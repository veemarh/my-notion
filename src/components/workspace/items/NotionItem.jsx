import RenderedItem from './RenderedItem.jsx';
import withToggleAndModal from '../modals/ModalToggle.jsx';

function NotionItem({type, content, setContent}) {
    return (
        <RenderedItem itemType={type}
                      itemContent={content}
                      setItemContent={setContent}/>
    )
}

const EnhancedNotionItem = withToggleAndModal(NotionItem);

export default EnhancedNotionItem;
