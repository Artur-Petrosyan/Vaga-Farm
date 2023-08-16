import Logo from '../../assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';
import NavBar from './Navigation/Navigation';
import styles from './Header.module.scss'
const Header = () => {
return (
    <div>
        <img src={Logo} alt="Logo" />
        <NavBar />
    </div>
)
}

export default Header