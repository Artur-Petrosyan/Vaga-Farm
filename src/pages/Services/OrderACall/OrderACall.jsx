import { useState } from "react"
import Button from "../../../components/Button/Button"
import H1 from "../../../components/H1/H1"
import Input from "../../../components/Input/Input"
import styles from './orderACall.module.scss'
import close from '../../../components/Modal/assets/icons/close.svg'
import { Context } from "../../../App"
import { useContext } from "react"
const OrderACall = () => {
    const { toggleModal, toggleOrderACall } = useContext(Context)
    const [user, setUser] = useState({
        name: '',
        surName: '',
        phone: '',
        message: '',
    })
    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const onClick = (e) => {
        toggleModal()
        toggleOrderACall()
        e.stopPropagation()
        setUser({ name: '', surName: '', phone: '', message: '' })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // ---axios.post
    }
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <div className={styles.close} >
                        <img src={close} alt="close" onClick={toggleOrderACall}/>
                    </div>
                    <H1>
                    ՊԱՏՎԻՐԵԼ ԶԱՆԳ
                    </H1>
                    <div className={styles.nameSurName}>
                        <Input
                            type={'text'}
                            placeholder={'Անուն'}
                            name={'name'}
                            onChange={onChange}
                            value={user.name}
                        />
                        <Input
                            type={'text'}
                            placeholder={'Ազգանուն'}
                            name={'surName'}
                            value={user.surName}
                            onChange={onChange}
                        />
                    </div>
                    <div className={styles.messageTextArea}>
                        <div className={styles.phone}>
                            <Input
                                type={'text'}
                                placeholder={'Հեռախոսահամար'}
                                name={'phone'}
                                onChange={onChange}
                                value={user.phone}
                            />
                        </div>
                        <div className={styles.textArea}>
                            <Input
                                placeholder={'Ծառայության անվանումը'}
                                name={'message'}
                                onChange={onChange}
                                value={user.message}
                            />
                        </div>
                    </div>
                    <Button variant={'primary'}
                        onClick={onClick}
                        disabled={!user.name || !user.phone}
                    >
                        ՈՒՂԱՐԿԵԼ
                    </Button>
                </div>
            </div>

        </form >
    )
}

export default OrderACall 