import styled from 'styled-components';
import {OverflowText, OverflowWrapper} from '../workspace/text-overflow/OverflowBlock.jsx';


const NavLink = styled(OverflowText)`
    max-width: 160px;
    padding: 2px 0.5em;
    color: black;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.6;
    }
`

const Span = styled.span`
    margin: 0 2px;
`

export default function NavLinks({pages}) {
    const links = pages.reduce((acc, page, index) => {
        acc.push(
            // переделать ключ
            <NavLink key={page.name} href={page.href}>
                {page.name}
            </NavLink>
        );
        if (index < pages.length - 1) {
            acc.push(<Span key={index}>/</Span>);
        }

        return acc;
    }, []);

    return (
        <OverflowWrapper>{links}</OverflowWrapper>
    )
}
