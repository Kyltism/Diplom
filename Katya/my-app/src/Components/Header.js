
import React from 'react'
import Search from './Search'

export default function Header() {
    return (
        <header>
            <div className='nav'>
                <span className='logo'>BOOKSTORE</span>
                <Search />
                <ul className='nav'>
                    <li><img className="header-image" src="user.png" /></li>
                    <li><img className="header-image" src="shopping-bag.png" /></li>
                    <li><img className="header-image" src="Vector.png" /></li>
                </ul>
            </div>
            <hr></hr>
            <div className='presentation'></div>
        </header>
    )
}
