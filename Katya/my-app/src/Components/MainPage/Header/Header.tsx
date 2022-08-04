import './Header.css'
import React from 'react'
import Search from '../Search/Search'

export default function Header() {
    return (
        <header>
            <div className='nav'>
                <span className='logo'>BOOKSTORE</span>
                <Search />
                <ul className='nav'>
                    <li><img className="header-image" src="user.png" alt=''/></li>
                    <li><img className="header-image" src="shopping-bag.png" alt='' /></li>
                    <li><img className="header-image" src="Vector.png" alt=''/></li>
                </ul>
            </div>
            <hr></hr>
            <div className='presentation'></div>
        </header>
    )
}
