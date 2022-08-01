import './Books.css';

// let bookCard = [];
fetch('https://api.itbook.store/1.0/search/mongodb')
    .then((Response) => {
        return Response.json()
    })
              
    .then((bookCard) => {
        console.log(bookCard)
        bookCard.books.forEach(item => {

            let container1 = document.getElementById('BookCards')
            const div1 = document.createElement('div');
            div1.className = 'containerCards'


            const img = document.createElement('img');
            img.className = 'cardImg';
            img.src = item.image;
            div1.append(img);

            const name = document.createElement('p');
            name.className = 'nameProduct';
            name.innerHTML = item.title;
            div1.append(name);

            const subtitle = document.createElement('p');
            subtitle.className = 'author';
            subtitle.innerHTML = item.subtitle;
            div1.append(subtitle);

            const price = document.createElement('p');
            price.className = 'price';
            price.innerHTML = item.price;
            div1.append(price);

            container1.append(div1);

            // let bookCard = [];
            // bookCard.push(cont);
            // console.log(bookCard)

        })

    });
    

// let cont = document.getElementsByClassName('containerCards');

// console.log(Books);


let Books = () => {




    return (

        <div id="BookCards"> </div>

    )
}

export default Books;
