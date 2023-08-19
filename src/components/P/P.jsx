import styles from "./P.module.scss"
const P = ({children,variant}) => {
    return (
    <p className={styles[variant]}>{children}</p>
)
}

export default P;