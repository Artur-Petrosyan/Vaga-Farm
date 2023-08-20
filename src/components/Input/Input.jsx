import styles from "./Input.module.scss"

const Input = ({ type, placeholder, value, ...rest }) => {
    return (
        <input
            className={styles.input}
            type={type}
            value={value}
            placeholder={placeholder}
            {...rest}
        />
    )
}

export default Input