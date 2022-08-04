import './Books.css';
import func from './ghghgh'
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


let Books = () => {
    const [data, setData] = useState([]);
    async function getData() {
        const response = await fetch('https://api.itbook.store/1.0/search/mongodb');
        const bookCard = await response.json();
        console.log("bookCard",  bookCard.books)
        await setData(bookCard.books);
      //  return bookCard;
    }
    
    

//    useEffect(() => getData(), []);
    return (

        <div id="BookCards">
            <Link to={'/9781484206485'}>
            <p>fjhhghjg</p>
            {data.forEach(item => {
                return <span>{item.title}</span>
            })}
            </Link>
            
             </div>

    )
}

export default Books;
