const add = (a, b) => {
    return a + b;
}
// default export 
// export default add;


const multi = (a, b) => {
    return a * b;
}

// const cos = [
//         {id:1, name:'alta',price:55},
//         {id:2, name:'meril',price:55},
//         {id:3, name:'powder',price:55},
//         {id:4, name:'lipgel',price:55},
//         {id:5, name:'mirror',price:55},
// ]
//     const itemTotal= cos.reduce((previous, current)=> previous+current.price,0)

const getTotalPrice = product => {
    console.log(product);
    const itemTotal = product.reduce((previous, current) => previous + current.age, 0)
    return itemTotal
}
export { add, multi, getTotalPrice as total }
