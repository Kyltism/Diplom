import './listBooks.css'
import Header from '../MainPage/Header/Header';
import BookCards from '../MainPage/Books/BookCards';
import Pagination from '../pagination/pagination';
import Subscribe from '../MainPage/Subscribe/Subscribe';
import Footer from '../MainPage/Footer/Footer';

function ListBooks() {
    return (
        <>
            
            <div className="wrapper">
                <Header />
                <BookCards />
               
                
                <Pagination/>
                <Subscribe />
              
                <Footer />
                
            </div>
        </>
    );
}

export default ListBooks;