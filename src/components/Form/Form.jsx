import Input from '../Input/Input'
import Button from '../Button/Button'
import H1 from '../H1/H1'

import { useState } from 'react'

import styles from "./Form.module.scss"

const Form = ({ h1, toggleModal }) => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        message: '',
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onClick = (e) => {
        e.stopPropagation()
        toggleModal()
        setUser({ name: '', email: '', message: '' })
        // ---axios.post
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <H1>
                {h1}
            </H1>
            <Input
                type={'text'}
                placeholder={'Անուն'}
                name={'name'}
                onChange={onChange}
                value={user.name}
            />
            <Input
                type={'email'}
                placeholder={'Էլ․հասցե'}
                name={'email'}
                value={user.email}

                onChange={onChange}
            />
            <div className={styles.text_area}>
                <Input
                    type={'text-area'}
                    placeholder={'Հաղորդագրություն'}
                    name={'message'}
                    onChange={onChange}
                    value={user.message}

                />
            </div>
            <Button variant={'primary'}
                onClick={onClick}
                disabled={!user.name || !user.email}
            >
                ՈՒՂԱՐԿԵԼ
            </Button>
        </form >
    )
}
export default Form;