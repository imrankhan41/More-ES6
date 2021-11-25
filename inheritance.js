class TeamMember{
    nameOfPerson;
    designation = "support web dev";
    addressOfPerson;
    constructor (name,address){
        this.nameOfPerson=name;
        this.addressOfPerson=address;
    }
}



class Support extends TeamMember{
    // nameOfPerson;
    // designation = "support web dev";
    // addressOfPerson;
    // constructor (name,address){
    //     this.nameOfPerson=name;
    //     this.addressOfPerson=address;
    // }

    groupSession;
    constructor(name,address,time){
        super(name,address);
        this.groupSession = time;
    }
    startSession(){
        console.log(this.nameOfPerson,"start a session");
    }
}
const aamir = new Support("Amir khan","Bangldesh",20);
console.log(aamir);
aamir.startSession()

class StudentCare extends TeamMember{
    // nameOfPerson;
    // designation = "support web dev";
    // addressOfPerson;
    // constructor (name,address){
    //     this.nameOfPerson=name;
    //     this.addressOfPerson=address;
    // }
    buildARoutine(student){
        console.log(this.nameOfPerson,"Build a routine for",student);
    }
}
const salman = new StudentCare("salmankhan","Dhaka");
console.log(salman);
salman.buildARoutine("liza");

class NeptuneApp extends TeamMember{
    // nameOfPerson;
    // designation = "support web dev";
    // addressOfPerson;
    // constructor (name,address){
    //     this.nameOfPerson=name;
    //     this.addressOfPerson=address;
    // }
    editor;
    constructor(name,address,editor){
        super(name,address);
        this.editor = editor;
    }
    releaseApp(version){
        console.log(this.nameOfPerson,"has realsease apps",version)
    }
}
const app = new NeptuneApp("jankar","USA","mahbub");
console.log(app);
app.releaseApp("2.00")