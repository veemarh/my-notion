import styles from '../assets/css/Page.module.css';
import SideEdgeMouseZone from '../components/sidebar/SideEdgeMouseZone.jsx';
import Workspace from '../components/workspace/Workspace.jsx';
import {SideMenubarContextProvider} from '../contexts/SideMenubarContext.jsx';
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

export default function PageScreen() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.pageOuter}>
                <div className={styles.pageInner}>
                    <div className={styles.cursorListener}>
                        <SideMenubarContextProvider>
                            <SideEdgeMouseZone pages={pages}/>
                            <Workspace pages={pages}/>
                        </SideMenubarContextProvider>
                    </div>
                </div>
            </div>
        </DndProvider>
    )
}

const pages = [{
    name: 'Здесь будут',
    href: '/'
}, {
    name: 'Находиться',
    href: '/'
}, {
    name: 'Хлебные крошки',
    href: '/'
}]
