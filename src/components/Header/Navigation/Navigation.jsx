import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';
import armeniaFlag from '../../../assets/icons/armenia.svg'
import usFlag from '../../../assets/icons/united-states.png'
import { useState } from 'react';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)
const NavBar = () => {
    const [open, setOpen] = useState(false)
    const [language,setLanguage] = useState('armenian')
    const handleOpen = () => {
        setOpen(!open)
    }
    const isActive = ({ isActive }) => {
        return isActive ? styles.active : styles.default
    }
    const changeLanguage = () => {
        setLanguage('english')
    }
    return (
        <nav className='navbar'>
            <NavLink to='/' className={isActive}>ԳԼԽԱՎՈՐ</NavLink>
            <NavLink to='about' className={isActive}>ՄԵՐ ՄԱՍԻՆ</NavLink>
            <NavLink to='products' className={isActive}>ԱՐՏԱԴՐԱՆՔ</NavLink>
            <NavLink to='services' className={isActive}>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>
            <NavLink to='partners' className={isActive}>ԳՈՐԾԸՆԿԵՐՆԵՐ</NavLink>
            <NavLink to='callback' className={isActive}>ՀԵՏԱԴԱՐՁ ԿԱՊ</NavLink>
            <div className={styles.flags} onClick={handleOpen}>
                {
                    open ?
                        <div className={styles.menu}>
                                    <img src={armeniaFlag} alt="armeniaFlag" />
                            <div className={styles.dropDown}>
                                <div onClick={changeLanguage}>
                                    <img src={usFlag} alt="armeniaFlag" />
                                </div>
                            </div>
                        </div>
                        : <div className={styles.close}>
                            <img src={armeniaFlag} alt="armeniaFlag" />
                        </div>
                }
            </div>
        </nav>
    )
}

export default NavBar;