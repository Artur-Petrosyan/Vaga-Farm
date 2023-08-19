import styles from "./Card.module.scss"
import P from '../P/P'
import Button from '../Button/Button'
import { memo } from "react";
const Card = memo(({
    id,
    image, text,
    arrowTopImg,
    arrowLeftRight,
    sizes,
    layers,
    pcs,
    partners
}) => {
    return (
        image && text && arrowLeftRight && arrowTopImg && sizes && layers && pcs
            ?
            <div className={styles.card} >
                <img src={image} alt="img" className={styles.card_img} />
                <div className={styles.card_name}>
                    <P variant={'bold'} >
                        {text}
                    </P>
                </div>
                <div className={styles.characteristic}>
                    <div className={styles.sizes}>
                        <div className={styles.height}>
                            <img src={arrowTopImg} alt="" />
                            <P variant={'card'}>
                                {sizes.height}
                            </P>
                        </div>
                        <div className={styles.width}>
                            <img src={arrowLeftRight} alt="" />
                            <P variant={'card'}>
                                {sizes.width}
                            </P>
                        </div>
                    </div>
                    <div className={styles.layer}>
                        <img src={layers.img} alt="layers" />
                        <P variant={'default'}>
                            {layers.text}
                        </P>
                    </div>
                    <div className={styles.pcs}>
                        <img src={pcs.img} alt="pcs" />
                        <P variant={'default'}>
                            {pcs.text}
                        </P>
                    </div>
                </div>

                <div className={styles.card_button}>
                    <Button variant={'secondary'}>
                        ՏԵՍՆԵԼ ԱվԵԼԻՆ
                    </Button>
                </div>
            </div> :

            <div className={styles.card}>
                <img src={partners.image} alt={partners.name} />
            </div>
    )
}


)

export default Card;