import styled from 'styled-components';

const LinksContainer = styled.div`
    display: flex;
`

const NavLink = styled.a`
    padding: 0.5em;
    color: black;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.6;
    }
`

const Span = styled.span`
    padding: 0.5em;
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
        <LinksContainer>{links}</LinksContainer>
    )
}
