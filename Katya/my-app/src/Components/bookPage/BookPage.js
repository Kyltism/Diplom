import { Route } from 'react-router-dom';
import './BookPage.css'

fetch('https://api.itbook.store/1.0/books/9781484206485')
    .then((Response) => {
        return Response.json()
    })

    .then((BookPage) => {
        const content = document.getElementById('content');
        const img = document.createElement('img');
        img.src = BookPage.image;
        content.append(img)



    });




let BookPage = () => {
    return (
        // <Route path='9781484206485'>
        <div id='content'>ugyuhygyguyg</div>
        // </Route>
    )
}

export default BookPage;