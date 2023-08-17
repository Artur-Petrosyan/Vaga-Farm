import P from "./P.module.scss"
const P = ({children}) => {
return (
    <p className={styles.p}>{children}</p>
)
}

export default P;