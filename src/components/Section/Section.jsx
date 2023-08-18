import styles from "./Section.module.scss"
import H1 from '../H1/H1'
import P from '../P/P'
import Button from '../Button/Button'

const Section = ({ h1, p, button, img ,eclipse}) => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left_part}>
                    <H1>
                        {h1}
                    </H1>
                    <P>
                        {p}
                    </P>
                    <Button variant={'primary'}>
                        {button}
                    </Button>
                </div>
                <div className={styles.right_part}>
                    <img src={img} alt="fabrikaImg" />
                </div>
                <div className={styles.eclipse}>
                    <img src={eclipse} alt="eclipse" />
                </div>
            </div>
        </section>
    )
}

export default Section;