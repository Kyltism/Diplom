import { Link } from 'react-router-dom';
import '../burger/Burger.css'
import { useRef } from "react";

function Burger() {

    const burgerTab = useRef<HTMLDivElement>(null);
    const burgerTab2 = useRef<HTMLDivElement>(null);


    const onClickBurger = () => {
        if (burgerTab.current && burgerTab2.current) {
            if (burgerTab.current.classList.contains('open-menu')) {
                burgerTab.current.classList.remove('open-menu');
                burgerTab2.current.classList.remove('open-menu');
            } else {
                burgerTab.current.classList.add('open-menu');
                burgerTab2.current.classList.add('open-menu');

            }
        }
    }

    // $(function () {
    //     $('.menu-burger__header').on('click', function () {
    //         $('.menu-burger__header').toggleClass('open-menu');
    //         $('.header__nav').toggleClass('open-menu');
    //         $('body').toggleClass('fixed-page');
    //     });
    // });
    return (

        <>
            <div className="container header__container" onClick={onClickBurger}>
                <div className="menu-burger__header" ref={burgerTab} >
                    <span></span>
                </div>
                <nav className="header__nav" ref={burgerTab2}>
                    <ul className="menu header__menu">
                        <li><Link to='/registration' className="menu__item">REGISTRATION</Link></li>
                        <li><Link to='/shoppingCart' className="menu__item">CART</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Burger;