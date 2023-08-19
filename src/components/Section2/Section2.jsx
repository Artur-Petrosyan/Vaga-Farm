import Card from "../Card/Card";
import styles from './Section2.module.scss'
import H1 from "../H1/H1";
import { getItems } from '../../utils/storeproducts'
import { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
const Section2 = () => {
    const [data, setData] = useState([])
    const [state, setState] = useState(false)
    const products = useCallback(() => { return getItems() }, [])
    useEffect(() => {
        setData(products())
    }, [])

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.sectionTop}>
                    <H1>
                        ԱՐՏԱԴՐԱՆՔ
                    </H1>
                </div>
                <div className={styles.cards}>
                    {data.map((item) =>
                        <Card
                            key={item.id}
                            id={item.id}    
                            image={item.image}
                            text={item.text}
                            arrowLeftRight={item.arrowLeftRight}
                            arrowTopImg={item.arrowTopImg}
                            sizes={item.sizes}
                            layers={item.layers}
                            pcs={item.pcs}
                        />
                    )}
                </div>
                <div className={styles.button}>
                    <Button variant={"primary"}>
                        ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
                    </Button>
                </div>

            </div>
        </section>
    )

}

export default Section2;