import './pagination.css';
import { Link } from 'react-router-dom';


export default function Pagination() {
    return (
        <div className='center'>
            <div className='pagination'>
                <Link to='/'>
                    &laquo;
                </Link>
                <Link to='/books'>
                    1
                </Link>
                <Link to='/books'>
                    2
                </Link>
                <Link to='/books'>
                    3
                </Link>
                <Link to='/books'>
                    4
                </Link>
                <Link to='/books'>
                    5
                </Link>
                <Link to='/'>
                    &raquo;
                </Link>
            </div>
        </div>
    )
}

























// import React, {useState, useEffect} from "react"

// const Pagination = () =>{
//     const [books, setBooks] = useState([])
//     const [loading, setLoading] = useState(false)
//     const [currentPage, setCurrentPage] = useState(1)
//     const [BooksPerPage] = useState(10)

//     useEffect(()=> {
//         const getBooks = async () =>{
//             setLoading(true)
//         const res = await fetch('https://api.itbook.store/1.0/books/9781484206485')
//         console.log(res)
//         }

//         getBooks()
//     }, [])


//     return (

//     )
// }
// export default Pagination