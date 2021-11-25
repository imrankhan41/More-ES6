// const numbers = [4,6,8,10];
// const newNumbers = [];
// for (const number of numbers){
//     const result = number * 2;
//     newNumbers.push(result);
// }
// console.log(newNumbers);


// const numbers = [4,6,8,10];
// const newNumbers = [];
// function doubleIt(number){
//     return number*2;
// }
// for (const number of numbers){
//     const result = doubleIt(number);
//     newNumbers.push(result);
// }
// console.log(newNumbers);


const numbers = [4,6,8,10];
const newNumbers = [];
const doubleIt = number =>number*2;
for (const number of numbers){
    const result = doubleIt(number);
    newNumbers.push(result);
}
// console.log(newNumbers);

/* total work : 1.loop declare through each element;
               2. call function using element
               3. push value to new Array; */

// const output = numbers.map(number=>number*2)
// console.log(output);

// const output = numbers.map(doubleIt);
// console.log(output);

