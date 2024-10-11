import {createContext, useState} from 'react';
import {useMenu} from '../hooks/useMenu';

export const SideMenubarContext = createContext(undefined);

export const SideMenubarContextProvider = ({children}) => {
    const [isFixed, setIsFixed] = useState(false);
    const [isPreviewed, setIsPreviewed] = useState(false);
    const sideMenubarHandlers = useMenu(isFixed, isPreviewed, setIsFixed, setIsPreviewed);

    return (
        <SideMenubarContext.Provider value={{isFixed, isPreviewed, ...sideMenubarHandlers}}>
            {children}
        </SideMenubarContext.Provider>
    );
};
