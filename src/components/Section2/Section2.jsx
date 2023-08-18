import Card from "../Card/Card";
import styles from './Section2.module.scss'
import H1 from "../H1/H1";
import { getItems } from '../../utils/storeItems'
import { useEffect, useState } from "react";
import Button from "../Button/Button";
const Section2 = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        setData(getItems())
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
                    <Card data={data} />
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