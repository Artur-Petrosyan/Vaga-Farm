import styles from "./Section.module.scss"
import H1 from '../H1/H1'
import P from '../P/P'
import Button from '../Button/Button'
import classNames from "classnames/bind"
const cx = classNames.bind(styles)
const Section = ({ h1, p, button, img, eclipse, reverse, onClick }) => {
    return (
        <section className={styles.container}>
            <div className={cx('content', { reverse: reverse })} >
                <div className={styles.left_part}>
                    <H1>
                        {h1}
                    </H1>
                    <P variant={'default'}>
                        {p}
                    </P>
                    <Button variant={'primary'} onClick={onClick} >
                        {button}
                    </Button>
                </div>
                <div className={styles.right_part}>
                    <img src={img} alt="fabrikaImg" />
                    <div className={styles.eclipse}>
                        <img src={eclipse} alt="eclipse" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;