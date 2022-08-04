import './Home.css'
import Preloader from './Preloader/Preloader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Subscribe from './Subscribe/Subscribe';


// import TodoApp from './Components/Pagination/Pagination';

// import BookPage from './BookPage/BookPage';
import BookCards from './Books/BookCards';


function Home() {
    return (
        <>
            <Preloader></Preloader>
            <div className="wrapper">
                <Header />
                {/* <Books /> */}
                <BookCards />
                {/* <TodoApp></TodoApp> */}
                <Subscribe />
                <Footer />
            </div>
        </>
    );
}

export default Home;