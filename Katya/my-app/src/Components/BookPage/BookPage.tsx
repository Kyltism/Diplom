import { getBook } from "./Fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import './BookPage.css'
import Rating from './Rating/Rating';



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

  return (
    <div>
      <div key={data?.isbn13} className='wrapper'>
        <Header />

        <p key={data?.title} className='titleBook'>{data?.title}</p>
        <div className="inform">
          <img src={data?.image} alt="" key={data?.image} />
          <div className="preview">
            <div className="price_rating">
              <p>{data?.price}</p>
              <span className="rating">{data && <Rating rating={+(data.rating)} />}</span>
            </div>
            <div className="about">
              <p>Authors</p><span>{data?.authors}</span>
            </div>
            <div className="about">
              <p>Publisher</p><span>{data?.publisher}</span>
            </div>
            <div className="about">
              <p>Year</p><span>{data?.year}</span>
            </div>
            <div className="about">
              <p>Pages</p><span>{data?.pages}</span>
            </div>
          </div>
        </div>
        <p>{data?.subtitle}</p>
        <div>{data?.desc}</div>
        <button id=""></button>
      </div>
      <Footer />
    </div>

  )

}

export default BookPage;

