import styles from "./Card.module.scss"
import P from '../P/P'
import Button from '../Button/Button'
const Card = ({ data }) => {
    console.log("WORKED");
    return (
                data.map((item) => {
                    return (
                        <div className={styles.card} key={item.id}>
                            <img src={item.image} alt="img" />
                            <P variant={'bold'}>
                                {item.text}
                            </P>
                            <div className={styles.characteristic}>
                                <div className={styles.sizes}>
                                    <div>
                                        <img src={item.arrowTopImg} alt="" />
                                        <P variant={'card'}>
                                            {item.sizes.height}
                                        </P>
                                    </div>
                                    <div>
                                        <img src={item.arrowLeftRight} alt="" />
                                        <P variant={'card'}>
                                            {item.sizes.width}
                                        </P>
                                    </div>
                                </div>
                                <div className={styles.layer}>
                                    <div>
                                        <img src={item.layers.img} alt="layers" />
                                        <P variant={'default'}>
                                            {item.layers.text}
                                        </P>
                                    </div>
                                </div>
                                <div className={styles.pcs}>
                                    <div>
                                        <img src={item.pcs.img} alt="pcs" />
                                        <P variant={'default'}>
                                            {item.pcs.text}
                                        </P>
                                    </div>
                                </div>
                            </div>

                            <Button variant={'secondary'}>
                                ՏԵՍՆԵԼ ԱվԵԼԻՆ
                            </Button>
                        </div>
                    )

                })
         
    )

}

export default Card;