
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


const BookCard = ({title, authors, amount, price, image}: IBookCard) => {
   

    return (
        <div> hello
            {/* <div key={data?.isbn13} className='wrapper'>
                <Header />
                <Arrow />

                <p key={data?.title} className='titleBook'>{data?.title}</p>
                <div className="inform">
                    <img src={data?.image} alt="" key={data?.image} />
                    <div className="preview">
                        <div className="price_rating">
                            <p>{data?.price}</p>
                            <span className="rating">{data && <Rating rating={+(data.rating)} />}</span>
                        </div>
                        <div className="about">
                            <p>Authors</p><span>{data?.authors}</span>
                        </div>
                        <div className="about">
                            <p>Publisher</p><span>{data?.publisher}</span>
                        </div>
                        <div className="about">
                            <p>Year</p><span>{data?.year}</span>
                        </div>
                        <div className="about">
                            <p>Pages</p><span>{data?.pages}</span>
                        </div>
                        <AddToCart handleAddToCart={onAdd} />
                    </div>
                </div>
                <p>{data?.subtitle}</p>
                <div>{data?.desc}</div>
                <button id=""></button>
            </div>

            <Footer /> */}
        </div>

    )

}

export default BookCard;

