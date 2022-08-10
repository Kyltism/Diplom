import { getBook } from "./Fetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


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
      <div key={data?.isbn13}>
        <img src={data?.image} alt="" key={data?.image} />
        <p key={data?.title}>{data?.title}</p>
        <p>{data?.subtitle}</p>
        <p>{data?.price}</p>
        <div>{data?.desc}</div>
      </div>

    </div>

  )

}

export default BookPage;

