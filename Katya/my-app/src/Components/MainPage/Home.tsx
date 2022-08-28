import './Home.css'
import Preloader from './Preloader/Preloader';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Subscribe from './Subscribe/Subscribe';
import BookCards from './Books/BookCards';
import Pagination from '../pagination/pagination';

function Home() {
    return (
        <>
            <Preloader></Preloader>
            <div className="wrapper">
                <Header />
                <div className='presentation'></div>
                {/* <Books /> */}
                <BookCards />
                
                
                <Pagination/>
                <Subscribe />
              
                <Footer />
                {/* <BookPage/> */}
            </div>
        </>
    );
}

export default Home;