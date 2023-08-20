import Input from '../Input/Input'
import Button from '../Button/Button'
import { useState } from 'react'
import styles from "./Form.module.scss"
import H1 from '../H1/H1'
const Form = ({ h1 }) => {
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
        setUser({ name: '', email: '', message: '' })
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
            />
            <Input
                type={'email'}
                placeholder={'Էլ․հասցե'}
                name={'email'}
                onChange={onChange}
            />
            <div className={styles.text_area}>
                <Input
                    type={'text-area'}
                    placeholder={'Հաղորդագրություն'}
                    name={'message'}
                    onChange={onChange}
                />
            </div>
            <Button variant={'primary'}
                onClick={onClick}
            >
                ՈՒՂԱՐԿԵԼ
            </Button>
        </form>
    )
}
export default Form;