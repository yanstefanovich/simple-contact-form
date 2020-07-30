import styled from 'styled-components'

export default styled.button`
    background: black;
    border: none;
    color: white;
    font-family: Lato;
    font-size: 1.25rem;
    opacity: 1;
    padding: 0.75rem 1.25rem;
    transform: scale(1);

    &:hover {
        background: white;
        border: 1px solid black;
        color: black;
    }

    &:active {
        transform: scale(0.9);
    }

    &:disabled {
        background: darkgrey;
        border: none;
        color: white;
        opacity: 0.7;
    }
`
