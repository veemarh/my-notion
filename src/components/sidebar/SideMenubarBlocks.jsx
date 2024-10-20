import {useContext} from 'react'
import styles from '../../assets/css/SidebarBlocks.module.css'
import BarToggle from './BarToggle.jsx';
import {SideMenubarContext} from '../../contexts/SideMenubarContext';
import SideMenubarItems from './SideMenubarItems.jsx';
import Scroller from '../scroller/Scroller.jsx';
import {PAGES, SETTINGS} from "../../../consts/pages.jsx";

export default function SideMenubarBlocks({username}) {
    const {isFixed} = useContext(SideMenubarContext);

    return (
        <>
            <div className={styles.outside}>
                <div className={styles.itemOuterOutside}>
                    <div className={styles.itemInner}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-3.061-12.674l-3.83,10.5c-.471,1.327-1.692,2.19-3.109,2.19s-2.639-.863-3.112-2.198l-3.827-10.492c-.189-.519.078-1.093.597-1.282.518-.187,1.092.078,1.282.597l3.83,10.5c.289.813,1.015.876,1.23.876s.941-.062,1.228-.868l3.833-10.508c.189-.519.764-.784,1.282-.597.519.189.786.764.597,1.282Z"/>
                            </svg>
                        </div>
                        <div className={styles.nameOuter}>
                            <div className={styles.nameInner}>{username}</div>
                        </div>
                    </div>
                    {isFixed && <BarToggle/>}
                </div>
            </div>
            <hr className={styles.divider}/>

            <Scroller>
                <SideMenubarItems items={PAGES}/>
                <SideMenubarItems items={SETTINGS}/>
            </Scroller>

            <hr className={styles.divider}/>
            <div className={styles.outside}>
                <div className={styles.itemOuterOutside}>
                    <div className={styles.itemInner}>
                        <div className={styles.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    d="M17.106,8.336c.558,.445,1.226,.668,1.894,.668s1.336-.223,1.893-.667c1.201-.957,3.107-3.198,3.107-5.137,0-1.765-1.346-3.2-3-3.2-.752,0-1.461,.311-2,.806-.539-.495-1.248-.806-2-.806-1.654,0-3,1.436-3,3.2,0,1.938,1.906,4.18,3.106,5.136Zm-.106-6.336c.554,0,1,.547,1,1,0,.553,.447,1,1,1s1-.447,1-1c0-.453,.446-1,1-1s1,.538,1,1.2c0,.972-1.242,2.688-2.354,3.573-.381,.303-.911,.304-1.292,0-1.111-.885-2.354-2.601-2.354-3.572,0-.662,.448-1.2,1-1.2Zm7,9v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V8C0,5.243,2.243,3,5,3h6c.552,0,1,.447,1,1s-.448,1-1,1H5c-1.148,0-2.135,.655-2.639,1.604l7.517,7.517c1.134,1.133,3.11,1.133,4.243,0l3.172-3.172c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414l-3.172,3.172c-.943,.944-2.199,1.465-3.535,1.465s-2.591-.521-3.536-1.465L2,9.071v9.929c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V11c0-.553,.447-1,1-1s1,.447,1,1Z"/>
                            </svg>
                        </div>
                        <div className={styles.nameOuter}>
                            <div className={styles.nameInner}>Say &#34;Hello!&#34;</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
