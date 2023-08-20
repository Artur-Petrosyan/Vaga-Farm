import H1 from "../../components/H1/H1"
import P from "../../components/P/P"
import { aboutPageTopText, aboutPageBottomText } from "../../utils/text";
import topImg from './assets/images/topImg.svg'
import bottomImg from './assets/images/bottomImg.svg'
import styles from "./About.module.scss"
const About = () => {
    return (
        <section className="container">
            <div className={styles.content}>
                <div className={styles.top}>
                    <H1>
                        ՄԵՐ ՄԱՍԻՆ
                    </H1>
                </div>
                <div className={styles.imgText}>
                    <div className={styles.topimg} >
                        <img src={topImg} alt="img" />
                    </div>
                    <div className={styles.topText} >
                        <P variant={'default'} >
                            {aboutPageTopText}
                        </P>
                    </div>
                </div>
                <div className={styles.imgText}>
                    <div className={styles.bottomText}>
                        <P variant={'default'} >
                            {aboutPageBottomText}
                        </P>
                    </div>
                    <div className={styles.bottomimg}>
                        <img src={bottomImg} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About