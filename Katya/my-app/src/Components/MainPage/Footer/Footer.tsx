import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <hr></hr>
            <div className='footer'>
            <div> © {new Date().getFullYear()} BOOKSTORE</div>
            <div>All rights reserved</div>
            </div>
        </footer >
    )
}
