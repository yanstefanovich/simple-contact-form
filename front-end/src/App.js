import React from 'react'
import { Router, Link } from '@reach/router'

export default () => (
    <div>
        <nav>
            <h1>Simple Contact Form</h1>
            <Link to='/'>Form</Link>
            <Link to='about'>About</Link>
        </nav>
    </div>
)
