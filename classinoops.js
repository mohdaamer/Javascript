class person{
    // Class mein 3 methods rehte Constructor, Prototype, Static method
    constructor(name,a){
        this.firstname = name;
        this.age = a;
    }
    sayhi(){
        console.log("Hi...");
    }
    static hello(){
        console.log("Hello...");
    }
}

let person1 = new person("Aamer", 23);
console.log(person1);

// Prototype method mein Object ke naam se call karo
person1.sayhi();

// Static method mein Class ke naam se call karna padta 
person.hello();
