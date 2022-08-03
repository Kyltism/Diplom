import './BookPage.css'

// fetch('https://api.itbook.store/1.0/books/9781484206485')
//     .then((Response) => {
//         return Response.json()
//     }) 

//     .then((BookPage) => {
//         console.log(BookPage)
//         Object.keys(BookPage).forEach(page => {
//             let content = document.getElementById('content');

//             const img = document.createElement('img');
//             img.className = 'cover';
//             img.innerHTML = page.img;
//             content.append(img);

//             const divAbout = document.createElement('div');
//             divAbout.className = 'aboutBook';
//             content.append(divAbout);


//         });
//     });



    let BookPage = () => {
        return (
            <div id='content'></div>
        )
    }

    export default BookPage;