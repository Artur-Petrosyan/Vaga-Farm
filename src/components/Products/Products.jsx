import H3 from '../H3/H3'
import styles from './Products.module.scss'
const Products = ({ productsNames }) => {
    return (
        <div className={styles.content}>
            <H3>ԱՐՏԱԴՐԱՆՔ</H3>
            <ul className={styles.ul}>
                {productsNames.map((item) => {
                    return (<li key={item.id} className={styles.li}>{item.name}</li>)
                })}
            </ul>
        </div>
    )
}
export default Products;