import styled from 'styled-components'
import { Link } from '@reach/router'

export const StyledNavigation = styled.nav`
    align-items: center;
    background: black;
    display: flex;
    justify-content: space-between;
    padding: 1rem 1.5rem;
`

export const StyledHeader = styled.h1`
    color: white;
    font-family: Lato;
    font-size: 3rem;
    font-weight 300;
    margin: 0;
    padding: 0;
`

export const StyledLink = styled(Link)`
    color: white;
    font-family: Lato;
    font-size: 1.25rem;
    font-weight 400;
    margin: 0;
    padding: 0 0.5rem;
    text-decoration: none;
    transform: scale(1);

    &:hover {
      text-decoration: underline;
    }

    &:active {
      text-decoration: none;
      transform: scale(0.9);
      transform-origin: top;
    }
`
