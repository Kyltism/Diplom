import { useEffect, useState } from 'react';
import './ShoppingCart.css';
import Header from '../MainPage/Header/Header';
import Footer from '../MainPage/Footer/Footer';
import Arrow from '../BtnArrow/BtnArrow';
import { getBook } from '../BookPage/Fetch';
import BookCard from '../BookCard/BookCard';

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
      newCart.forEach((book:any) => {
        (
          async () => {
            const data = await getBook(book.isbn13);
            setBooksInfo((prevState) => ([{amount: book.amount, ...data}, ...prevState]));
          }
        )();
      });
    }

  }, []);

  useEffect(() => {
    console.log(booksInfo);
  }, [booksInfo]);  // потом удалить

  return (
    <div className='wrapper'>
      <div className='ShoppingCart'>
        <Header />
        <div>
          <Arrow />
          <p>Your cart</p>
          {booksInfo.length ? booksInfo.map((book: any)=> (
            <BookCard
              {...book}
            />
          )) : (<p>Empty cart</p>)}
          
        </div>
        <Footer />
      </div>
    </div>
  )
}


