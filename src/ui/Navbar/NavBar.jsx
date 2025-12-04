 
import style from './NavBar.module.css'
import { Link } from 'react-router';


export default function NavBar() {
    return (
        <nav className={style['navBar-style']}>
            <ul>
                <li>
                    <Link to="/">Accueil🏠 </Link>
                </li>
                <li>
                    <Link to="/destination">Destination✈️ </Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}