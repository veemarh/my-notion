import styled from 'styled-components';

export function OverflowBlock({children}) {
    return (
        <OverflowWrapper>
            <OverflowText>
                {children}
            </OverflowText>
        </OverflowWrapper>
    )
}

export function OverflowWrapper({children, className}) {
    return (
        <StyledOverflowOuter className={className}>{children}</StyledOverflowOuter>
    )
}

export function OverflowText({children, className}) {
    return (
        <StyledOverflowInner className={className}>{children}</StyledOverflowInner>
    )
}

const StyledOverflowOuter = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: center;
    min-width: 0;
`

const StyledOverflowInner = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
