import React from 'react'

import { StyledLabel as Label, StyledInputWrapper as Wrapper } from '../'
import { StyledTextArea as TextArea } from './styled'

export default ({ label, name, onChange, value }) => (
    <Wrapper>
        {!!name && <Label for={name}>{label}:</Label>}
        <TextArea
            id={name}
            name={name}
            onChange={onChange}
            rows={8}
            value={value}
        />
    </Wrapper>
)
