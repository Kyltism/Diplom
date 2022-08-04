import { useEffect, useState } from "react";

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

const Aaaa = () => {
    const [item, setUsers] = useState<IData>();
    const fetchData = () => {
        fetch("https://api.itbook.store/1.0/search/mongodb")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    };
    useEffect(() => {
        fetchData();
    }, []);
    console.log(item);
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

export default Aaaa;