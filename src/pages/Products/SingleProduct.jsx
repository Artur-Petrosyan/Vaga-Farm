import { useParams } from "react-router-dom"
import { allStoreItems } from "../../utils/allStoreItems"
import styles from "./SingleProduct.module.scss"
import H1 from '../../components/H1/H1'
import P from "../../components/P/P"
const SingleProduct = () => {
  const params = useParams()
  const singleItem = allStoreItems().filter((item) => Number(params.id) === item.id)
  return (
    <div className="container">
      {singleItem.map((item) => {
        return (
          <div key={item.id} className={styles.content}>
            <div className={styles.singleImg}>
              <img src={item.image} alt="img" />
            </div>
            <div className={styles.characteristics}>
            <div>
              <H1>{item.text}</H1>
            </div>
            <div className={styles.sizes}>
              <div className={styles.height}>
                <img src={item.arrowTopImg} alt="" />
                <P variant={'card'}>{item.sizes.height}</P>
              </div>
              <div className={styles.width}>
                <img src={item.arrowLeftRight} alt="" />
                <P variant={'card'}>{item.sizes.width}</P>
              </div>
            </div>
            <div>
              {item.description}
            </div>
            </div>
          
          </div>
        )
      })}
    </div>
  )
}

export default SingleProduct;