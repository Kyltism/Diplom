import "./Tabs.css";
import { getBook } from "../../BookPage/Fetch";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


interface BookExp {
    authors: string;
    publisher: string;
    desc: string;
}


const Tabs = () => {
    const [data, setData] = useState<BookExp>();
    const { isbn13 } = useParams();

    useEffect(() => {
        (
            async () => {
                const data = await getBook(isbn13);
                setData(data);
            }
        )();
    }, []);

    const tabDesc = useRef<HTMLDivElement>(null);
    const tabAuth = useRef<HTMLDivElement>(null);
    const tabReviews = useRef<HTMLDivElement>(null);


    const onClickDesc = () => {
        if (tabDesc.current && tabAuth.current && tabReviews.current) {
            if (tabDesc.current.classList.contains('open')) {
                tabReviews.current.classList.remove('open');
                tabAuth.current.classList.remove('open');

            } else {
                tabDesc.current.classList.add('open');
            }
        }
    }

    const onClickAuth = () => {
        if (tabDesc.current && tabAuth.current && tabReviews.current) {
            if (tabAuth.current.classList.contains('open')) {
                tabReviews.current.classList.remove('open');
                tabDesc.current.classList.remove('open');

            } else {
                tabAuth.current.classList.add('open');
            }
        }
    }

    const onClickReviews = () => {
        if (tabDesc.current && tabAuth.current && tabReviews.current) {
            if (tabReviews.current.classList.contains('open')) {
                tabAuth.current.classList.remove('open');
                tabDesc.current.classList.remove('open');

            } else {
                tabReviews.current.classList.add('open');
            }
        }
    }



    return (
        <div className="wrapperTabs">
            <div className="tabs">
                <div className="tab" onClick={onClickDesc}>Description</div>
                <div className="tab" onClick={onClickAuth}>Authors</div>
                <div className="tab" onClick={onClickReviews}>Reviews</div>
            </div>
            <div ref={tabDesc} className="desc open">
                <p> {data?.desc}</p>
            </div>
            <div ref={tabAuth} className="auth open">
                <p >{data?.authors}</p>
            </div>
            <div ref={tabReviews} className="revie open">
                <p >{data?.publisher}</p>
            </div>
            <hr />
        </div>

    );
}


export default Tabs;