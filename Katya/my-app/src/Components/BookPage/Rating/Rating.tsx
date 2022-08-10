import React from "react";
import './Rating.css'

interface IRating {
    rating: number;
}

const Rating = ({rating} : IRating) => {
    return (
        <>{[...Array(rating)].map((x, i) =>
            <img src="/starBlack.png" alt="" key={i} className = 'ratingImg'/>
        )}
            {[...Array(5 - rating)].map((x, i) =>
                <img src="/starWhite.png" alt="" key={i} className = 'ratingImg'/>
            )}


        </>
    )
}

export default Rating;