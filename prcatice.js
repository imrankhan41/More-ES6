//1. const ,let
const name = "amran";
let age = 14;
age =21;
//2.template string
const self = `this is ${name}`;
const imranSelf= {
    name:"imran",age:25,color:"black"
};
const templteDetails = `i am ${imranSelf.name}.i am ${imranSelf.age} years old.i am ${imranSelf.color}`;
// console.log(self);
// console.log(templteDetails);

//3.1 arrow function of one parameter

const output5 = num => num/5;
// console.log(output5(5))
//3.2 arrow function of two parameter
const output6 = (num1,num2)=>{
    const add = num1 + 2;
    const add1 = num2 + 2;
    const multiply = add1 * add;
    return multiply;
}

// console.log(output6(5,5));
//3.3 arrow function of three parameter
const output7 = (x,y,z)=>{
    const add2 =x*y*z;
    return add2
}
// console.log(output7(2,2,2));
//3.3 arrow function of two parameter
const output9 = (num11,num12)=>{
    const add2 = num11 + 2;
    const add3 = num12 + 2;
    const multiply1 = add2 * add3;
    return multiply1;
}
// console.log(output9(5,5))

//5.. array usimng map
const numbers = [1,2,3,4];
const double = numbers.map(number=>number*5);
// console.log(double);
//6..array using filter

const number = [10,11,12,13,1,4,5,6];
// const evenNumber = number.filter(num => !(num%2));
const evenNumber = number.filter(x => x % 2 === 0)
// console.log(evenNumber)

const numberss = [10,11,12,13,1,4,5,6];
// const oddNumber = numberss.filter(num => !(num%2));
const oddNumber = numberss.filter(y => y% 2 !== 0)
// console.log(oddNumber)

//7..array in object searching 500 taka 
const products= [
    {name:"samsung phone", price:10000, color:"white"},
    {name:"smart watch", price:5000,color:"black"},
    {name:"water-bottle", price:20, color:"white"},
    {name:"sticky notes", price:50, color:"red"}
]

const productPrice = products.find(product => product.price = 5000);
// console.log(productPrice);

//8.destructuring of object

const companys = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
const {food}=companys.ceo;
const {work, tech} =companys.web
// console.log(food);
// console.log(work, tech);

//9.array destructuring
const arr = ["a","b","c","d","e"];
const [first,second,third,three] = arr;
// console.log(three);

//10..addtion of three parameter
 function addtion (a,b,c=7){
     return a+b+c;
 }
//  console.log(addtion(1,2))

//11..array in object
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js',
            numbers1:[1,2,1,3,1,8,5,1,1]
        }
    },
};
const {numbers1} = company?.web?.tech?.numbers1;
console.log(numbers1)