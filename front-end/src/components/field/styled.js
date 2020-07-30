import styled from 'styled-components'

export const StyledInput = styled.input.attrs(({ name, type }) => ({
    name,
    id: name,
    type
}))`
    display: block;
    font-family: Lato;
    font-size: 1.25rem;
    padding: 0.275rem;
`
