// import { getData } from "../MainPage/Books/utils";
// import { useEffect, useState } from "react";

// interface DataType {
//     isbn13: string;
// }

// const Aaa = () =>{

// const [data, setData] = useState<DataType[]>([]);

// useEffect(() => {
//     (async () => {
//         try {
//             const data = await getData();
//             setData(data.books)
//         } catch (error) {
//             console.log(error)
//         }
//     })();
// }, []);

// }

export const getBook = async () => {
    
    
    
    const response = await fetch(`https://api.itbook.store/1.0/search/9781617291609`);
    const data = await response.json();
    return data;

}