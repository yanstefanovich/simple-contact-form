import styled from 'styled-components'

export default styled.label.attrs((props) => ({ for: props.for }))`
    display: block;
    font-family: Lato;
    font-size: 1.25rem;
    padding: 0 0 0.325rem 0;
`
