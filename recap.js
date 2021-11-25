//1.let & cinstant 
const hubby ="omar sunny";
;let mobileBrand = "okapia";
mobileBrand = "samsung";
mobileBrand = "redmi";
//2.default parameter

function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const bigNumber = maxNumber();
console.log(bigNumber);
//3.template literal
const myNotes = `
i am majnu of ${hubby}. i dont have a lili. i have a ${mobileBrand}`

//4.arrow function

const square = x => x*x ;
console.log(square(8));
