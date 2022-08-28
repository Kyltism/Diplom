import './Header.css';
import Search from '../Search/Search';
import Burger from './burger/Burger';
import { Link } from 'react-router-dom';



export default function Header() {
    return (
        <header>
            <div className='nav'>
                <Link to='/'>
                    <span className='logo'>BOOKSTORE</span>
                </Link>
                <Search />
                <ul className='nav'>
                    <Link to='/registration'>
                        <li><img className="header-image" src="user.png" alt='' /></li>
                    </Link>
                    <Link to='/shoppingCart'>
                        <li><img className="header-image" src="shopping-bag.png" alt='' /></li>
                    </Link>
                    {/* <li><img className="header-image" src="Vector.png" alt='' /></li> */}
                </ul>
                <Burger />
            </div>
            <hr></hr>

        </header>
    )
}
