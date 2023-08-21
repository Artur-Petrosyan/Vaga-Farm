import NavBar from './Navigation/Navigation';

import Logo from '../../assets/icons/logo.svg';

import { NavLink } from 'react-router-dom';

import styles from './Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/' className={styles.logo}>
                <img src={Logo} alt="Logo" />
            </NavLink>
            <NavBar />
        </header>
    )
}

export default Header;