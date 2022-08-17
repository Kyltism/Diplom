import "./BtnArrow.css";
import { Link } from 'react-router-dom';

const Arrow = () => {
    return (
        <form>

            <button className="arrow">
                <Link to='/BookStore'>
                    <img src="Icon-Arrow-Left.png"></img>
                </Link>
            </button>

        </form >

    );
}


export default Arrow;

