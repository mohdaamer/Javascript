// Creating an object
let usefullmethod = {
    sayHi(){
        console.log("Hi...");
    },
    sayBye(){
        console.log("Bye...");
    }
}
class user {
    constructor(){
        this.name = "Aamer"
    }
}
Object.assign(user.prototype, usefullmethod)
let usr1 = new user();
console.log(usr1.sayHi());