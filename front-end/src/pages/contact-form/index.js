import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Button, Field, Form, TextArea } from '../../components'

const EMAIL = 'Email'
const MESSAGE = 'Message'
const NAME = 'Name'

export default () => {
    const [error, setError] = useState('')
    const [touched, setTouched] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [toast, setToast] = useState('')

    const clear = () => {
        setError('')
        setTouched('')
        setName('')
        setEmail('')
        setMessage('')
    }

    const validate = () => {
        if (touched.name && name.length > 36)
            return 'Name cannot exceed 36 characters'
        if (touched.email && email.length > 72)
            return 'Email cannot exceed 72 characters'
        if (
            touched.email &&
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                email
            )
        )
            return 'Invalid email address'
        if (touched.message && message.length > 500)
            return 'Message cannot exceed 500 characters'
    }

    const onChange = (e) => {
        switch (e.target.name) {
            case NAME: {
                setName(e.target.value.replace(/[^a-zA-Z]/, ''))
                if (!touched.name)
                    setTouched({
                        ...touched,
                        name: true
                    })
                break
            }

            case EMAIL: {
                setEmail(e.target.value)
                if (!touched.email)
                    setTouched({
                        ...touched,
                        email: true
                    })
                break
            }

            case MESSAGE: {
                setMessage(e.target.value)
                if (!touched.message)
                    setTouched({
                        ...touched,
                        message: true
                    })
                break
            }

            default:
                break
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post(
            'https://01lb03wtyi.execute-api.us-east-1.amazonaws.com/Prod/contact/',
            {
                email,
                message,
                name
            }
        )
        if (res.status == 200) {
            setToast('Success, your message was sent!')
            clear()
        } else {
            setToast('Error sending message. Please try again later.')
        }
    }

    useEffect(() => {
        if (toast) setToast('')
        setError(validate())
    }, [email, message, name])

    return (
        <Form onSubmit={onSubmit}>
            <Field onChange={onChange} value={name} name={NAME} label={NAME} />
            <Field
                onChange={onChange}
                value={email}
                name={EMAIL}
                label={EMAIL}
            />
            <TextArea
                onChange={onChange}
                value={message}
                name={MESSAGE}
                label={MESSAGE}
            />
            <Button disabled={!!error} type='submit'>
                Send
            </Button>
            {error && <p>*{error}</p>}
            {toast && <p>{toast}</p>}
        </Form>
    )
}
