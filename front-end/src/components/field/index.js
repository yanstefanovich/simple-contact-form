import React from 'react'

import { StyledLabel as Label, StyledInputWrapper as Wrapper } from '../'
import { StyledInput as Input } from './styled'

export default ({ label, name, onChange, value }) => (
    <Wrapper>
        {!!name && <Label for={name}>{label}:</Label>}
        <Input
            id={name}
            name={name}
            onChange={onChange}
            type='text'
            value={value}
        />
    </Wrapper>
)
