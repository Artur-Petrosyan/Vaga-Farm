import Products from '../Products/Products'
import styles from './Footer.module.scss'
import H3 from '../H3/H3'
import P from "../P/P"
import call from './assets/icons/call.svg'
import email from './assets/icons/email.svg'
import location from './assets/icons/location.svg'
import instagram from './assets/icons/instagram.svg'
import facebook from './assets/icons/facebook.svg'
import twitter from './assets/icons/twitter.svg'
import footerLogo from './assets/icons/footerLogo.svg'
import { productNames } from '../../utils/productsNames'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const getProducts = () => {
        setData(productNames)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo} onClick={() => navigate('/')}>
                        <img src={footerLogo} alt="logo" />
                    </div>
                    <div className={styles.product}>
                        <Products productsNames={data} />
                    </div>
                    <div className={styles.call} onClick={() => navigate('/callback')}>
                        <div className={styles.h3}>
                            <H3>ԿԱՊ ՄԵԶ ՀԵՏ</H3>
                        </div>
                        <div>
                            <img src={call} alt="phone" />
                            <P variant={'footer_p'}>
                                Զանգահարեք մեզ: +374 90 000 000
                            </P>
                        </div>
                        <div>
                            <img src={email} alt="phone" />
                            <P variant={'footer_p'}>
                                Էլ հասցե: @mail.ru
                            </P>
                        </div>
                        <div>
                            <img src={location} alt="phone" />
                            <P variant={'footer_p'}>
                                Երևան
                            </P>
                        </div>
                    </div>
                    <div className={styles.socialNetworks}>
                        <div className={styles.H3}>
                            <H3>ՓՆՏՐԵՔ ՄԵԶ։</H3>
                        </div>
                       <div className={styles.social_icons}>
                       <div><img src={instagram} alt="instagram" /></div>
                        <div><img src={twitter} alt="twitter" /></div>
                        <div><img src={facebook} alt="facebook" /></div>
                       </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;