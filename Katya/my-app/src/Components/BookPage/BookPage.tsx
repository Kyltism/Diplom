import { getBook } from "./Fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import './BookPage.css'



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
      <Header/>
      <div key={data?.isbn13}>
        <p key={data?.title} className='titleBook'>{data?.title}</p>
        <img src={data?.image} alt="" key={data?.image} />

        <p>{data?.subtitle}</p>
        <p>{data?.price}</p>
        <div>{data?.desc}</div>
        <button id=""></button>
      </div>
      <Footer />
    </div>

  )

}

export default BookPage;

