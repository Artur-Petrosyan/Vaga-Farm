import Card from '../../components/Card/Card'

import { useEffect, useState } from "react"

import { partners } from "../../utils/partners"


import styles from "./Partners.module.scss"

const Partners = () => {
    const [data, setData] = useState([])
    const getPartners = () => {
        setData(partners)
    }
    useEffect(() => {
        getPartners()
    }, [])
    console.log(data);
    return (
        <section>
            <div className="container">
                <div className={styles.content}>
                        {data.map((item) => {
                            return (
                                <Card key={item.id} partners={item} />
                            )
                        })}

                </div>
            </div>
        </section>
    )
}

export default Partners;