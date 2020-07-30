import React from 'react'
import {
    StyledNavigation as Navigation,
    StyledLink as Link,
    StyledHeader as Header
} from './styled'

export default () => (
    <Navigation>
        <Header>Simple Contact Form</Header>
        <div>
            <Link to='/'>Form</Link>
            <Link to='about'>About</Link>
        </div>
    </Navigation>
)
