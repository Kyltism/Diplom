import { useRef } from "react";
import './BookCard.css'

interface IBookCard {
    title: string;
    authors: string;
    amount: number;
    price: string;
    image: string;
}


const BookCard = ({ title, authors, amount, price, image }: IBookCard) => {

    const Cancle = useRef<HTMLDivElement>(null);


    const onClickCancle = () => {

        const cart = localStorage.getItem("cart");
        if (cart && Cancle.current) {
            let deleteCart = JSON.parse(cart);
            const index = deleteCart.findIndex((book: any) => book.amount == amount);
            if (deleteCart.length == 1 && Cancle.current.classList.contains('oneCard')) {
                localStorage.removeItem('cart');
                Cancle.current.remove()

            } else {
                deleteCart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(deleteCart));
                Cancle.current.remove()


            }

        }

    }

    return (
        <div className="oneCard" ref={Cancle}>
            <img src={image} alt="" className="imgCard" />
            <div className="desc">
                <p className="title">{title}</p>
                <p className="authors">{authors}</p>
            </div>
            <p className="price">{price}</p>
            <button className="deleteBut" onClick={onClickCancle}>✖</button>

        </div>

    )

}


export default BookCard;

