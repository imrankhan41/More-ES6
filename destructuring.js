const fish = {Id : 58, name: "king hilsha",price:9000,phone: "01678598458", address:"chandpur", dress:"silver"}
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.Id;
const {phone,price,Id,address,dress} = fish;
console.log(phone,price,Id,address,dress);

const company = {name:"GP", 
CEO:{Id:1,name: "Ajmol", food:"fuchka"},
web:{work:"website-development",employee:22, framework:"react",tech:{
    first:"HTML",second:"css",third:"js"
}
}
};
console.log(company.web.tech.third)
// const work = company.web.work;
// const framework = company.wed.framework;

const{work,framework}= company.web;
const {food} = company.CEO;
const{first,second}= company.web.tech;
console.log(work,framework,food,first,second);
