import P from '../P/P'
import Map from "../Map/Map"
import Form from "../Form/Form"

import eclipse from './assets/icons/ellipse.svg'

import { Context } from '../../App'
import { useContext } from "react"

import { section5P } from "../../utils/text"

import styles from "./Section5.module.scss"

const Section5 = ({ }) => {
    const { toggleModal } = useContext(Context)
    return (
        <section className="container">
            <div className={styles.content}>
                <div className={styles.left_part}>
                    <div className={styles.section_text}>
                        <P variant={'default'}>
                            {section5P}
                        </P>
                    </div>
                    <div className={styles.map}>
                        <img src={eclipse} alt="eclipse" />
                        <Map />
                    </div>
                </div>
                <div className={styles.right_part}>
                    <Form h1={'ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ'} toggleModal={toggleModal} />
                </div>
            </div>
        </section>
    )
}

export default Section5