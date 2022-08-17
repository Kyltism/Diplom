import "./AddToCart.css";
import { Link } from 'react-router-dom';

interface IAddToCart {
    handleAddToCart: () => void;
}

const AddToCart = ({ handleAddToCart }: IAddToCart) => {
    return (

        <button className="AddToCart" onClick={handleAddToCart}> ADD TO CART</button>

    );
}


export default AddToCart;