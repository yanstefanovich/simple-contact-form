import React from 'react'
import { Router } from '@reach/router'

import { Navigation } from './components'
import { ContactForm } from './pages'

export default () => (
    <div>
        <Navigation />
        <Router>
            <ContactForm path='/' />
        </Router>
    </div>
)
