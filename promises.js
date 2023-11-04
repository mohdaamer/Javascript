// var ans = new Promise((res,rej)=>{
//     if(true){ 
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans.then(function(){
//     console.log("Resolve Hogaya");
// })
// .catch(function(){
//     console.log("Reject Hogaya");
// })

// var ans1 = new Promise((res,rej)=>{
//     var n = Math.floor(Math.random() * 10);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans1.then(function(){
//     console.log("Below");
// })
// .catch(function(){
//     console.log("Above");
// })

// var ans = new Promise(function(res, rej){
//     return res("Gate khol miyan")
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("Khana khale miyan")
//     })
// })

// p2.then(function(data){
//     console.log(data);
// })

// Code Aur Chai
// const promise1 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         console.log("Promise started");
//     }, 3000);
//     res()
// })

// promise1.then(()=>{
//     console.log("Promise consumed")
// })

// resolve ke andar data bhi bhejsakte

// const promise2 = new Promise((res,rej)=>{
//     setTimeout(() => {
//         res({username:'mohdaamer', email:'mdaamer456@gmail.com'})
//     }, 2000);
//     setTimeout(() => {
//         rej({firstname:'mohammad aamer', lastname:'aamer mohammad'})
//     }, 4000);
// })

// promise2.then((user)=>{
//     console.log(user);
// })

// const promise3 = new Promise((res,rej)=>{
//     let error = true
//     setTimeout(() => {
//         if(error == true){
//             res({username:'mohd', password:'456'})
//         } else {
//             rej('Something went wrong')
//         }
//     }, 1000);
// })

// promise3.then((user)=>{
//     console.log('Your username and password is : ', user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=> console.log('promise is either resolved or rejected'))


// Promises ko then catch ke bina bhi use kar sakte that is async await 
// const promise4 = new Promise((res,rej)=>{
//     let error = false
//     if(error == true){
//         res({username:'aamer', password:'123'})
//     } else {
//         rej('Something went wrong')
//     }
// })

// async function Promiseconsume(){
//     try {
//         await promise4
//     } catch (error) {
//         console.log(error);
//     }
// }

// Promiseconsume()

// Implementation example
// async function getallusers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console(data)
//     } catch (error) {
//         console.log('something went wrong');
//     }
// }

// getallusers()

// .then or .catch se
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=> console.log(data)).catch((error)=>console.log(error))