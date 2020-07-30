import styled from 'styled-components'

export const StyledTextArea = styled.textarea.attrs(
    ({ name, rows, columns }) => ({
        name,
        id: name,
        rows,
        columns
    })
)`
    display: block;
    font-family: Lato;
    font-size: 1.25rem;
    padding: 0.275rem;
    width: 100%;
`
