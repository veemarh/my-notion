import {forwardRef} from 'react';
import {CSSTransition} from 'react-transition-group';

const withTransition = (WrappedComponent, classNames, timeout = 200) => {
    const TransitionComponent = forwardRef(({in: inProp, ...props}, ref) => (
        <CSSTransition
            nodeRef={ref}
            in={inProp}
            timeout={timeout}
            classNames={classNames}
            unmountOnExit
        >
            <WrappedComponent ref={ref} {...props} />
        </CSSTransition>
    ));
    TransitionComponent.displayName = `WithTransition(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return TransitionComponent;
};

export default withTransition;
