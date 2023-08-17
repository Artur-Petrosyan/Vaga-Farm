import styles from './Button.module.scss'

const Button = ({children,variant,...rest}) => {
return (
    <button {...rest} className={styles[variant]}>{children}</button>
)
}

export default Button;