
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Subscribe from './Components/Subscribe';
import Books from './Components/books/Books';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Books/>
      <Subscribe/>
      <Footer />
    </div>
  );
}

export default App;
