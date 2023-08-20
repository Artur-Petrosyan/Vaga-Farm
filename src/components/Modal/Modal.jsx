import H1 from "../H1/H1"
import P from "../P/P"
import sucsess from './assets/icons/sucsess.svg'
import close from './assets/icons/close.svg'
import styles from './Modal.module.scss'
const Modal = ({ toggleModal }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>

                <div onClick={toggleModal} className={styles.close}>
                    <img src={close} alt="X" />
                </div>
                <H1>
                    ՇՆՈՐՀԱԿԱԼՈՒԹՅՈՒՆ
                </H1>
                <P variant={'default'}>
                    ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿՊԱՏԱՍԽԱՆԻ ՁԵԶ ԷԼ․ՓՈՍՏԻ ՄԻՋՈՑՈՎ
                </P>
                <div>
                    <div>
                        <div>
                            <img src={sucsess} alt="sucsess" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;