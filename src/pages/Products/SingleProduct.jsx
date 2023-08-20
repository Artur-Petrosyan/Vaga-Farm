import { useParams } from "react-router-dom"
import { allStoreItems } from "../../utils/allStoreItems"
import H1 from '../../components/H1/H1'
const SingleProduct = () => {
  const params = useParams()
  const singleItem = allStoreItems().filter((item) => Number(params.id) === item.id)
  console.log(singleItem);
  return (
    <div>
      {singleItem.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.image} alt="img" />
            </div>
            <div>
              <H1>{item.text}</H1>

            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SingleProduct;