import styles from "./Input.module.scss"

const Input = ({type,placeholder,...rest}) => {
    return (
        <input className={styles.input} type={type} placeholder={placeholder} {...rest} value={name}/>
    )
}

export default Input