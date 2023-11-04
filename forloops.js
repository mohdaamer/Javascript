// // for(start; end; change){ Code }
// for(var i=25; i<51; i++){
//     console.log(i);
// }

// // Functions
// function abcd(a){
//     console.log(a+2);
// }
// abcd(13);

// // Arrays 
// var arr = [1,2,3,4,5,6,7];
// arr.push(8);
// console.log(arr);

// Var function Scoped
// function abcd(){
//     for(var i=0; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// abcd();

// Let braces scoped 
// function abcd(){
//     for(let i=0; i<12; i++){
//         console.log(i);
//     }
// }

// abcd();

// Spread Operator
// var a = [1,2,3,4,5];
// var b = [...a]; // Copy kara by using spread operator
// b.pop();;

// console.log(a);
// console.log(b);

// Truthy and falsy
// if(null,undefined,NaN,0,false){ //condition false hogayi yeh saare values rehne ki wajah se
//     console.log("hey");
// }
// else{
//     console.log("Hello");
// }

// Foreach 
// var a = [1,2,3,4,5,6,7,8,9,10];
// a.forEach(function(val){
//     console.log(val+2);
// });

// // Printing elements of array using foreach loop
// var b = [1,2,3,4,5,6,7,8,9,10];
// b.forEach(function(val){
//     console.log(val);
// });

// Forin Loop
// var obj = {name:"aamer", age:24, class:"Graduated", city:"Hyderabad"};
// for(var key in obj){
//     console.log(key, obj[key]);
// }

// SetTimeout 
// setTimeout(function(){
//     console.log("2 Sec Baad Chala");
// }, 2000);

// First Class Funtions
// var abcd = function(a){
//     console.log(a+2);
// }
// abcd(12);

// Arrow Functions
// const sayHello = (name)=>{
//     console.log("Hello Patthe Kaise ho sab log " + name);
// }
// sayHello("Tech bot");
