let bookCard = [];
fetch('https://62bd8868c5ad14c110c0fc2a.mockapi.io/Books')
    .then((Response) => {
        return Response.json()
    })

    .then((bookCard) => {
        bookCard.forEach(item => {

            let container1 = document.getElementById('smt')
            const div1 = document.createElement('div');
            div1.className = 'containerCards'


            const img = document.createElement('img');
            img.className = 'cardImg';
            img.src = item.img;
            div1.append(img);

            const name = document.createElement('p');
            name.className = 'nameProduct';
            name.innerHTML = item.name;
            div1.append(name)

            container1.append(div1);

        })

    });

let Books = () => {




    return (
        <div>
            <div id="smt"> </div>
        </div>
    )
}

export default Books;