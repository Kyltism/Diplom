
import './App.css';
import Preloader from './Components/Preloader/Preloader';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Subscribe from './Components/Subscribe';
import Books from './Components/books/Books';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import TodoApp from './Components/Pagination/Pagination';

import BookPage from './Components/bookPage/BookPage';
import Aaaa from './Components/books/ghghgh';



function App() {
  return (
    <>

      <Aaaa></Aaaa>
      <BrowserRouter>
        <Preloader></Preloader>

        <div className="wrapper">
          <Header />
          <Books />
          {/* <TodoApp></TodoApp> */}
          <Subscribe />
          <Footer />

        </div>

        <Routes>


          <Route path='/9781484206485' element={<BookPage />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
