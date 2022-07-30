import './Books.css';

// let bookCard = [];
fetch('https://62bd8868c5ad14c110c0fc2a.mockapi.io/Books')
    .then((Response) => {
        return Response.json()
    })

    .then((bookCard) => {
        bookCard.forEach(item => {

            let container1 = document.getElementById('BookCards')
            const div1 = document.createElement('div');
            div1.className = 'containerCards'


            const img = document.createElement('img');
            img.className = 'cardImg';
            img.src = item.img;
            div1.append(img);

            const name = document.createElement('p');
            name.className = 'nameProduct';
            name.innerHTML = item.name;
            div1.append(name);

            const author = document.createElement('p');
            author.className = 'author';
            author.innerHTML = item.author;
            div1.append(author);

            const price = document.createElement('p');
            price.className = 'price';
            price.innerHTML = item.price;
            div1.append(price);

            container1.append(div1);

            

        })

    });

    let cont = document.getElementsByClassName('containerCards');

    // console.log(Books);
    let bookCard = [];
    bookCard.push(cont);
    console.log(bookCard)

let Books = () => {




    return (
        
            <div id="BookCards"> </div>
        
    )
}

export default Books;
