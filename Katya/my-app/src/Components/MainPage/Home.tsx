import './Home.css'
import Preloader from './Preloader/Preloader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Subscribe from './Subscribe/Subscribe';


// import TodoApp from './Components/Pagination/Pagination';

// import BookPage from './BookPage/BookPage';
import BookCards from './Books/BookCards';
// import BookPage from '../BookPage/BookPage';

function Home() {
    return (
        <>
            <Preloader></Preloader>
            <div className="wrapper">
                <Header />
                <div className='presentation'></div>
                {/* <Books /> */}
                <BookCards />
                {/* <TodoApp></TodoApp> */}
                <Subscribe />
                <Footer />
                {/* <BookPage/> */}
            </div>
        </>
    );
}

export default Home;