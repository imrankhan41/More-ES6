const numbers = [,2,3,4,5,6,7,89,5,59,98,55,666,41,6,5,185,85,65,45];
const bigNumbers = numbers.filter(number => number>30);
const smallNumbers = numbers.filter(number => number <30)
// console.log(bigNumbers);
// console.log(smallNumbers);
const products= [
    {name:"samsung phone", price:10000, color:"white"},
    {name:"smart watch", price:500,color:"black"},
    {name:"water-bottle", price:20, color:"white"},
    {name:"sticky notes", price:50, color:"red"}
]
const expensive = products.filter(product => product.price>100);
const expensiveColor = products.filter(product => product.color =="black");

const whiteItem = products.find(product => product.color =="white")
console.log(expensiveColor)
console.log(whiteItem)
