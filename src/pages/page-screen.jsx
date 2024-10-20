import styles from '../assets/css/Page.module.css';
import SideEdgeMouseZone from '../components/sidebar/SideEdgeMouseZone.jsx';
import Workspace from '../components/workspace/Workspace.jsx';
import {SideMenubarContextProvider} from '../contexts/SideMenubarContext.jsx';

export default function PageScreen() {
    return (
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
