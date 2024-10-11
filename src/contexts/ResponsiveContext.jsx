import {createContext, useContext} from 'react';
import {useMediaQuery} from 'react-responsive';

export const ResponsiveContext = createContext(undefined);

export const ResponsiveContextProvider = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 1224});
    const isMobile = useMediaQuery({maxWidth: 786});
    const isTablet = !isDesktop && !isMobile;

    return (
        <ResponsiveContext.Provider value={{isDesktop, isMobile, isTablet}}>
            {children}
        </ResponsiveContext.Provider>
    );
};

export const useResponsiveContext = () => useContext(ResponsiveContext);