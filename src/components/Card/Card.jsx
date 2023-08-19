import styles from "./Card.module.scss"
import P from '../P/P'
import Button from '../Button/Button'
const Card = ({ data }) => {
    console.log("WORKED");
    return (
        data.map((item) => {
            return (
                <div className={styles.card} key={item.id}>
                    <img src={item.image} alt="img" className={styles.card_img} />
                   <div className={styles.card_name}>
                   <P variant={'bold'} >
                        {item.text}
                    </P>
                   </div>
                    <div className={styles.characteristic}>
                        <div className={styles.sizes}>
                            <div className={styles.height}>
                                <img src={item.arrowTopImg} alt="" />
                                <P variant={'card'}>
                                    {item.sizes.height}
                                </P>
                            </div>
                            <div className={styles.width}>
                                <img src={item.arrowLeftRight} alt="" />
                                <P variant={'card'}>
                                    {item.sizes.width}
                                </P>
                            </div>
                        </div>
                        <div className={styles.layer}>
                            <img src={item.layers.img} alt="layers" />
                            <P variant={'default'}>
                                {item.layers.text}
                            </P>
                        </div>
                        <div className={styles.pcs}>
                            <img src={item.pcs.img} alt="pcs" />
                            <P variant={'default'}>
                                {item.pcs.text}
                            </P>
                        </div>
                    </div>

                    <div className={styles.card_button}>
                        <Button variant={'secondary'}>
                            ՏԵՍՆԵԼ ԱվԵԼԻՆ
                        </Button>
                    </div>
                </div>
            )

        })

    )

}

export default Card;