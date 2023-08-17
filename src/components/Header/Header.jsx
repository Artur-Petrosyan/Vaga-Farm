import Logo from '../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import NavBar from './Navigation/Navigation';
import styles from './Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/home' className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </NavLink>
            <NavBar />
        </header>
    )
}

export default Header;