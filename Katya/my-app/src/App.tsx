import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/MainPage/Home';
import BookPage from './Components/BookPage/BookPage';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:isbn13' element={<BookPage />}></Route>
          <Route path='/shoppingCart' element={<ShoppingCart/>}></Route>
        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
