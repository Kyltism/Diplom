import { useEffect, useState } from "react";
import './Books.css'

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
        <div>
            {item?.books.length && (
                <div>
                    {item.books.map((i: IBooks) => (
                        <img src={i.image} alt={i.image} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookCards;