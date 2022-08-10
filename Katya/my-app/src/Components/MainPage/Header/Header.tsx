import './Header.css';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='nav'>
                <span className='logo'>BOOKSTORE</span>
                <Search />
                <ul className='nav'>
                    <li><img className="header-image" src="user.png" alt='' /></li>
                    <Link to='/shoppingCart'>
                        <li><img className="header-image" src="shopping-bag.png" alt='' /></li>
                    </Link>
                    <li><img className="header-image" src="Vector.png" alt='' /></li>
                </ul>
            </div>
            <hr></hr>

        </header>
    )
}
