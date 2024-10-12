import {useContext} from 'react';
import styled from 'styled-components';
import {SideMenubarContext} from '../../contexts/SideMenubarContext';

const ToggleContainer = styled.div`
    position: relative;
    z-index: 30;
    align-content: center;
    width: 30px;
    height: 30px;
    border-radius: 0.5em;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`

const ToggleImage = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    margin: auto;
    pointer-events: none;
`

const ToggleHamburgerContainer = styled(ToggleImage)`
    padding: 0.5em;
    flex-direction: column;
    justify-content: space-around;
`

const ToggleHamburgerItem = styled.div`
    height: 1px;
    background-color: black;
`

function ToggleHamburger({isActive}) {
    return (
        <ToggleHamburgerContainer isActive={isActive}>
            <ToggleHamburgerItem/>
            <ToggleHamburgerItem/>
            <ToggleHamburgerItem/>
        </ToggleHamburgerContainer>
    )
}

const ToggleArrowContainer = styled(ToggleImage)`
    justify-content: center;

    & > div {
        align-content: center;
    }

    & > div > div {
        height: 1px;
        width: 0.5em;
        margin: 0.25em 0;
        background-color: black;
    }

    & > div > div:first-of-type {
        transform: rotate(45deg);
    }

    & > div > div:last-of-type {
        transform: rotate(-45deg);
    }
`

function ToggleArrow({isActive}) {
    return (
        <ToggleArrowContainer isActive={isActive}>
            <div>
                <div/>
                <div/>
            </div>
            <div>
                <div/>
                <div/>
            </div>
        </ToggleArrowContainer>
    )
}

const ToggleCrossContainer = styled(ToggleImage)`
    justify-content: center;
    align-items: center;
    padding: 0.5em;

    &::before, &::after {
        content: '';
        position: absolute;
        width: 1px;
        height: 16px;
        background-color: black;
    }

    &::before {
        transform: rotate(45deg);
    }

    &::after {
        transform: rotate(-45deg);
    }
`

function ToggleCross({isActive}) {
    return <ToggleCrossContainer isActive={isActive}/>;
}

export default function BarToggle() {
    const {
        isFixed,
        isPreviewed,
        toggleMenuFix,
        toggleRef
    } = useContext(SideMenubarContext);

    return (
        <ToggleContainer ref={toggleRef}
                         onClick={toggleMenuFix}
        >
            {isFixed ? <ToggleCross/> : isPreviewed ? <ToggleArrow/> : <ToggleHamburger/>}
        </ToggleContainer>
    )
};
