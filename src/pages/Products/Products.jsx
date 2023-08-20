import styles from './Products.module.scss'
import { categories, } from '../../utils/categories'
import { allStoreItems } from '../../utils/allStoreItems'
import { useEffect, useRef, useState } from 'react'
import Card from '../../components/Card/Card'
import FiltredProducts from './SingleProduct'
import { useNavigate } from 'react-router-dom'
const Products = () => {
    const [categoryName, setCategoryName] = useState('Բինտեր')
    const [storeItems, setStoreItems] = useState([])
    const filtredProduct = storeItems.filter((item) => item.name === categoryName)
    console.log(filtredProduct);
    const navigate = useNavigate()
    const isActive = ({ isActive }) => {
        return isActive ? styles.active : styles.default
    }
    const [category, setCategory] = useState([])
    const getStoreItems = () => {
        setStoreItems(allStoreItems)
    }
    const getCategories = () => {
        setCategory(categories)
    }
    useEffect(() => {
        getCategories()
        getStoreItems()
    }, [])
    return (
        <section>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.categories}>

                        <ul className={styles.ul} >
                            {category.map((item) => {
                                return (
                                    <li
                                        key={item.id}
                                        className={styles.li}
                                        onClick={(e) => setCategoryName(e.target.innerText)}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className={styles.store_cards}>
                            {filtredProduct.map((item) =>
                             <div onClick={() => navigate(`${item.id}`)}>
                                   <Card
                                    image={item.image}
                                    text={item.text}
                                    arrowTopImg={item.arrowTopImg}
                                    arrowLeftRight={item.arrowLeftRight}
                                    sizes={item.sizes}
                                    layers={item.layers}
                                    pcs={item.pcs}
                                    key={item.id}
                                /></div>)}
                             
                        </div>
                    </div>
                    <FiltredProducts />
                </div>
            </div>
        </section>
    )
}
export default Products