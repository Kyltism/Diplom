import { getBook } from "./Fetch";
import { useEffect, useState } from "react";


interface BookExp{
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
  const [data, setData] = useState<BookExp[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getBook();
        setData(data.books)
      } catch(error){
        console.log(error)
      }
    })();
  }, []);

  return(
    <div>
        {data.map(item => (
            <div>
            <img src={item.image} alt="" />
            <p></p>
            </div>
        ))}
    </div>
  )
   
}

export default BookPage;

