
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



function App() {
  return (
    <>
    <Preloader></Preloader>
      <div className="wrapper">
        <Header />
        
        <Books />
        {/* <TodoApp></TodoApp> */}
        <Subscribe />
        
        <Footer />
        
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/'>

            
          </Route>
        </Routes>

      </BrowserRouter>
      
    </>
  );
}

export default App;
