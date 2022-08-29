const calcTotalPrice = (booksInfo) => {
    if (booksInfo === undefined) {
        console.log(booksInfo)
        return 0;

    } else if (booksInfo.length === 0) {
        return 0;
    } else {
        return booksInfo.map(item=>item.price ).reduce((acc, booksInfo) => { return Number(acc) + Number(booksInfo.slice(1)); }, 0);

    }
}


export default calcTotalPrice;