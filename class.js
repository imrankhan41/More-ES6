
class Support extends TeamMember{
    nameOfPerson;
    designation = "support web development";
    addressOfPerson;
    constructor(name,address){
        this.nameOfPerson = name;
        this.addressOfPerson=address;
    }
    groupSupportTime;
    constructor(name,address,time){
        super(name,address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.nameOfPerson,"starts a session");
    }
}
const aamir = new Support("Amir khan","Bangladesh",10.00);
const salman = new Support("Salman Khan","Dubai",11.00);
console.log(aamir);
aamir.startSession()

