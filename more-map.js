/* const freiends = ["tom hanks", "Tom vai","Tom Imran","Tom jarry"];
const friendsLnegth =[];
for(const friend of freiends){
    const result = friend.length;
    friendsLnegth.push(result);
}
console.log(friendsLnegth); */

const friends =["tom hanks", "Tom vai","Tom Imran","Tom jarry"];

const fLength = friends.map(friend => friend.length);
// console.log(fLength)
const products= [
    {name:"samsung phone", price:10000, color:"white"},
    {name:"smart watch", price:500,color:"black"},
    {name:"water-bottle", price:20, color:"white"},
    {name:"sticky notes", price:50, color:"red"}
]

const productNames = products.map(product =>product.name);
const productPrices = products.map(product=>product.price);

// products.map(product =>console.log(product))
products.forEach(product =>console.log(product))
console.log(productPrices);