class emp{
    constructor(n){
        this.name = n;
    }
    msg(){
        console.log("Parent message called");
    }
}
class manager extends emp{
    // Name apan employee mein banaye manager mein nahi banaye phir bhi hum emoloyee ki property manager mein use kar sakte with the help of inheritance
    constructor(p,n){
        super(p);
        this.department = n;
    }
    msg(){
        console.log("Child Message Called");
    }
    info(){
        super.msg();
        this.msg();
        // manager class consist name property of emp class so we can access easily using this keyword
        console.log(`${this.name} is manager of department ${this.department}`)
    }
}

let manager1 = new manager("Aamer", "Web Development");
let manager2 = new manager("jaber", "Only faizan and rahmath I am nothing for him");
console.log(manager1);

manager1.info();
manager2.info();