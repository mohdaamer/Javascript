let person1 = {
    firstname:"Aamer",
    lastname:"Mohd",
    age:23,

    fullname: function(){
        console.log(this.lastname + " " + this.firstname);
    }
}

person1.fullname();