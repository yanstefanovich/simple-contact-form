import React from 'react'
import { Router } from '@reach/router'

import { Navigation } from './components'
import { About, ContactForm } from './pages'

export default () => (
    <div>
        <Navigation />
        <Router>
            <ContactForm path='/' />
            <About path='/about' />
        </Router>
    </div>
)
