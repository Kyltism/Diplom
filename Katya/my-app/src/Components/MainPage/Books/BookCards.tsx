import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Books.css';

interface IBooks {
    image: string;
    isbn13: string;
    price: string;
    subtitle: string;
    title: string;
    url: string;
}

interface IData {
    error: string;
    total: string;
    page: string;
    books: IBooks[];
}

const BookCards = () => {
    const [item, setUsers] = useState<IData>();
    const fetchData = () => {
        fetch("https://api.itbook.store/1.0/search/mongodb")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>
                {item?.books.length && (
                    <div id="BookCards">
                        {item.books.map((i: IBooks) => (
                            <div key={i.isbn13} className='containerCards'>
                                <Link to={i.isbn13}>
                                    <img src={i.image} alt={i.image} key={i.image} className='cardImg' />
                                    <p key={i.title} className='nameProduct'>{i.title}</p>
                                    <p key={i.subtitle} className='subtitle'>{i.subtitle}</p>
                                    <p key={i.price} className='price'>{i.price}</p>
                                </Link>
                            </div>
                        ))}

                    </div>
                )}
            </div>
        </>
    );
};

export default BookCards;