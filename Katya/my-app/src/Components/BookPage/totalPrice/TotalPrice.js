
// const calcTotalPrice = (booksInfo) => {
//   if(booksInfo === undefined) {
//   return 0 ;
//  }else if (booksInfo.length === 0) {
//   return 0;
//   }else {
//     booksInfo.reduce((acc, item) => (acc += item.price.slice(1)), 0);

//   }
//  }

// //  console.log(calculatePrice(orders));

// //  export default calculatePrice;
// //  const calcTotalPrice = (booksInfo) => booksInfo.reduce((acc, item) => (acc += item.price.split('').slice(1).join('')), 0);

//  export default calcTotalPrice;

//  console.log(calculatePrice(orders));

//  export default calculatePrice;
//  const calcTotalPrice = (booksInfo) => booksInfo.reduce((acc, item) => (acc += item.price.split('').slice(1).join('')), 0);
export const calcTotalPrice = (booksInfo) => booksInfo.reduce((acc, booksInfo) => (acc += booksInfo.price.slice(1)), 0);

export default calcTotalPrice;