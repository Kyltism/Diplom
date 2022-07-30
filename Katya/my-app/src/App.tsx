
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Subscribe from './Components/Subscribe';
import Books from './Components/books/Books';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import TodoApp from './Components/Pagination/Pagination';



function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        
        <Books />
        <Subscribe />
        <Footer />
      </div>

      <BrowserRouter>
        <Routes>
          <Route path='/'>

            
          </Route>
        </Routes>

      </BrowserRouter>
      <TodoApp></TodoApp>
    </>
  );
}

export default App;
