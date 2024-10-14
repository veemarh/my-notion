import {useContext} from 'react'
import styles from '../../assets/css/SidebarBlocks.module.css'
import BarToggle from './BarToggle.jsx';
import {SideMenubarContext} from '../../contexts/SideMenubarContext';
import SideMenubarItems from './SideMenubarItems.jsx';
import Scroller from '../scroller/Scroller.jsx';
import {DraggableTypes} from '../Draggable/DraggableTypes.js';

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
                <SideMenubarItems list={PAGES} type={DraggableTypes.PAGE}/>
                <SideMenubarItems list={SETTINGS} type={DraggableTypes.SETTINGS}/>
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

const PAGES = [{
    id: 0,
    name: "The very first and very long page",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"/>
    </svg>,
    href: "/"
}, {
    id: 1,
    name: "Page 2",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"/>
    </svg>,
    href: "/"
}, {
    id: 2,
    name: "Page 3",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"/>
    </svg>,
    href: "/"
}, {
    id: 3,
    name: "Page 4",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="m17 14a1 1 0 0 1 -1 1h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-4 3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2zm9-6.515v8.515a5.006 5.006 0 0 1 -5 5h-10a5.006 5.006 0 0 1 -5-5v-14a5.006 5.006 0 0 1 5-5h4.515a6.958 6.958 0 0 1 4.95 2.05l3.484 3.486a6.951 6.951 0 0 1 2.051 4.949zm-6.949-7.021a5.01 5.01 0 0 0 -1.051-.78v4.316a1 1 0 0 0 1 1h4.316a4.983 4.983 0 0 0 -.781-1.05zm4.949 7.021c0-.165-.032-.323-.047-.485h-4.953a3 3 0 0 1 -3-3v-4.953c-.162-.015-.321-.047-.485-.047h-4.515a3 3 0 0 0 -3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"/>
    </svg>,
    href: "/"
}];

const SETTINGS = [{
    id: 0,
    name: "Settings",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z"/>
        <path
            d="M21.294,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,1,0-3-5.2l-.445.257A8.977,8.977,0,0,0,15,3.513V3A3,3,0,0,0,9,3v.513A8.977,8.977,0,0,0,6.152,5.159L5.705,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29l-.444.256a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,9,20.487V21a3,3,0,0,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,0,1-1,1.733l-1.086-.628a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,0,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,7.006,16.9a1,1,0,0,0-1.215-.165l-1.084.627a1,1,0,1,1-1-1.732l1.084-.626a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75A1,1,0,0,0,4.79,8.992L3.706,8.366a1,1,0,0,1,1-1.733l1.086.628A1,1,0,0,0,7.006,7.1a6.984,6.984,0,0,1,3.243-1.875A1,1,0,0,0,11,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,16.994,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732l-1.084.626A1,1,0,0,0,18.746,10.125Z"/>
    </svg>,
    href: "/"
}, {
    id: 1,
    name: "Trash",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"/>
        <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"/>
        <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"/>
    </svg>,
    href: "/"
}, {
    id: 2,
    name: "Help",
    icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/>
        <path
            d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/>
        <rect x="11" y="17" width="2" height="2" rx="1"/>
    </svg>,
    href: "/"
}];
