import H1 from "../H1/H1";
import Button from '../Button/Button'
import styles from './Section4.module.scss'
import { partners } from "../../utils/partners";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
const Section4 = () => {
    const [data, setData] = useState([])
    const getPartners = () => {
        return partners
    }
    useEffect(() => {
        setData(getPartners())
    }, [])
    return (
        <section className='container'>
            <div className={styles.content}>
                <div className={styles.section_top}>
                    <H1>
                        ԳՈՐԾԸՆԿԵՐՆԵՐ
                    </H1>
                </div>
                <div className={styles.card_content}>
                        {data.map((item) => <Card key={item.id} partners={item} />)}
                </div>
                <div className={styles.button}>
                    <Button variant={'primary'}>
                        ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ
                    </Button>
                </div>
            </div>
        </section>
    )
}
export default Section4;