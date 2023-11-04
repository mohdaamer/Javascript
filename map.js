// Agar values mein kuch add karna hai toh map use kar sakte filter kaam nai karta
let num = [1,2,3,4,5,6,7,8,9,10]
let result = num.map((item)=>item + 10)
console.log(result);

// Chaining
let num1 = [1,2,3,4,5,6,7,8,9,10]
let result1 = num.map((num)=>num*10).map((num)=>num+1).filter((item)=>item>40)
console.log(result1);