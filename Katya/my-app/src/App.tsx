
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import TodoApp from './Components/Pagination/Pagination';

import Home from './Components/MainPage/Home';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
