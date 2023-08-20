import { children } from "react"
import styles from './H3.module.scss'
const H3 = ({ children }) => {
    return (
        <h3 className={styles.h3}> {children}</h3>
    )
}

export default H3