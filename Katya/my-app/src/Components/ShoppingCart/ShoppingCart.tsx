import { useEffect, useState } from 'react';
import './ShoppingCart.css';
import Header from '../MainPage/Header/Header';
import Footer from '../MainPage/Footer/Footer';
import Arrow from '../BtnArrow/BtnArrow';
import { getBook } from '../BookPage/Fetch';
import BookCard from '../BookCard/BookCard';
import calcTotalPrice from '../BookPage/totalPrice/TotalPrice'
// import { useParams } from "react-router-dom";

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
  amount: number;
}

export default function ShoppingCart() {

  const [booksInfo, setBooksInfo] = useState<BookExp[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");

    if (cart) {
      const newCart = JSON.parse(cart);
      const books: BookExp[] = [];
      (async () => {

        for (const book of newCart) {
          const data = await getBook(book.isbn13);
          books.push({ amount: book.amount, ...data });
        }
        await setBooksInfo(books);
      })();
    }
  }, []);

  return (
    <div className='wrapper'>
      <div className='ShoppingCart'>
        <Header />
        <div>
          <Arrow />
          <p className='yourCart'>Your cart</p>
          {booksInfo.length ? booksInfo.map((book: any) => (
            <BookCard
              {...book}
            >

            </BookCard>
          )) : (<p>Empty cart</p>)}
          <div className='blockTotal'>
            <div className='totalPrice'>
              <span className='total'>TOTAL:</span><span className='priceT'>{calcTotalPrice(booksInfo)}</span>
            </div>
            <button className="checkOut"> CHECK OUT</button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}


