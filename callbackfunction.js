function sayhello(){
    console.log("Hello");
}
function add(num1 , num2 , callback){
    console.log(num1 + num2);
    callback();
}
// sayhello ko brackets nai lagana hai
add(10,20,sayhello)