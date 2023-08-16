import styles from './Navigation.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='nav'>
            <NavLink to='main'>ԳԼԽԱՎՈՐ</NavLink>
            <NavLink to='about'>ՄԵՐ ՄԱՍԻՆ</NavLink>
            <NavLink to='products'>ԱՐՏԱԴՐԱՆՔ</NavLink>
            <NavLink to='services'>ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ</NavLink>
            <NavLink to='partners'>ԳՈՐԾԸՆԿԵՐՆԵՐ</NavLink>
            <NavLink to='callback'>ՀԵՏԱԴԱՐՁ ԿԱՊ</NavLink>
        </nav>
    )
}

export default NavBar;