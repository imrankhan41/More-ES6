//declare variable based on the name of object property

const myObject = {x:10, y:20, z:30, a:40, b:50, c:60};
const {x,y,z}=myObject;
console.log(x,y,z);
//declare variable based on the name of array
const [first,second]=["imran","khan"];
console.log(first,second);


const [choice1,choice2]=[100,200,232]
console.log(choice1,choice2);
const {sky,color,money}={sky:"blue",color:"white", soil:"matti",money:"1000"}
console.log(sky,color,money);
const company = {name:"GP", 
CEO:{Id:1,name: "Ajmol", food:"fuchka"},
web:{work:"website-development",employee:22, framework:"react",tech:{
    first:"HTML",second:"css",third:"js"
}
}
};
console.log(company.web.tech.third)
console.log(company?.web?.backend?.tech?.third)