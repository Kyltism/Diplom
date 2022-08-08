import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Components/MainPage/Home';
import BookPage from './Components/BookPage/BookPage';
import { getData } from './Components/MainPage/Books/utils'
import { useEffect, useState } from "react";


interface DataType {
  isbn13: string;
}

function App() {
  // const [data, setData] = useState<DataType[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await getData();
  //       setData(data.books)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })();
  // }, []);
  // const aaa = data.map(item => { item.isbn13 });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/9781617291609' element={<BookPage />}></Route>
        </Routes>
      </BrowserRouter >

    </>
  );
}

export default App;
