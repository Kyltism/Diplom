
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../MainPage/Header/Header";
import Footer from "../MainPage/Footer/Footer";
import './BookCard.css'

import Arrow from "../BtnArrow/BtnArrow";






interface IBookCard {
    title: string;
    authors: string;
    amount: number;
    price: string;
    image: string;

}


const BookCard = ({ title, authors, amount, price, image }: IBookCard) => {


    return (
        <div className="oneCard">
            <img src={image} alt="" className="imgCard"/>
            <div className="desc">
                <p className="title">{title}</p>
                <p className="authors">{authors}</p>
            </div>
            <p className="price">{price}</p>
        </div>

    )

}

export default BookCard;

