import { getBook } from "./Fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import './BookPage.css'
import Rating from './Rating/Rating';
import AddToCart from "./AddToCart/AddToCart";
import Arrow from "../BtnArrow/BtnArrow";
import Tabs from '../BookPage/Tabs/Tabs'






interface BookExp {
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  desc: string;
  price: string;
  image: string;
  rating: string;
}


const BookPage = () => {
  const [data, setData] = useState<BookExp>();
  const { isbn13 } = useParams();

  useEffect(() => {
    (
      async () => {
        const data = await getBook(isbn13);
        setData(data);
      }
    )();
  }, []);


  const onAdd = () => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      let newCart = JSON.parse(cart);
      const index = newCart.findIndex((book: any) => book.isbn13 == data?.isbn13);
      if (index == -1) {
        newCart.push({ isbn13, amount: 1 });

      } else {
        newCart.splice(index, 1, { isbn13, amount: newCart[index].amount + 1 });
      }
      localStorage.setItem("cart", JSON.stringify(newCart));



    } else {
      data && localStorage.setItem("cart", JSON.stringify([{ isbn13, amount: 1 }]));
    }

  }


  return (
    <div>
      <div key={data?.isbn13} className='wrapper'>
        <Header />
        <Arrow />

        <p key={data?.title} className='titleBook'>{data?.title}</p>
        <div className="inform">
          <img src={data?.image} alt="" key={data?.image} className='img_Card' />
          <div className="preview">
            <div className="price_rating">
              <p className="pricing">{data?.price}</p>
              <span className="rating">{data && <Rating rating={+(data.rating)} />}</span>
            </div>
            <div className="about">
              <p className="characteristic">Authors</p><span className="interprit">{data?.authors}</span>
            </div>
            <div className="about">
              <p className="characteristic">Publisher</p><span className="interprit">{data?.publisher}</span>
            </div>
            <div className="about">
              <p className="characteristic">Year</p><span className="interprit">{data?.year}</span>
            </div>
            <div className="about">
              <p className="characteristic">Pages</p><span className="interprit">{data?.pages}</span>
            </div>
            <AddToCart handleAddToCart={onAdd} />
          </div>
        </div>
        <Tabs />
        
        <div></div>
        <button id=""></button>

      </div>

      <Footer />
    </div>

  )

}

export default BookPage;

