import './ShoppingCart.css';
import Header from '../MainPage/Header/Header';
import Footer from '../MainPage/Footer/Footer';
import Arrow from '../BtnArrow/BtnArrow';

export default function ShoppingCart() {
  return (
    <div className='wrapper'>
      <div className='ShoppingCart'>
        <Header />
        <div>
          <Arrow />
        </div>
        <Footer />
      </div>
    </div>
  )
}


