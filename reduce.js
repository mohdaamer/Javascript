const shoppingcart = [
    {itemname:"js course", price:2999},
    {itemname:"py course", price:999},
    {itemname:"mobile course", price:5999},
    {itemname:"html course", price:500},
    {itemname:"css course", price:600},
    {itemname:"data science course", price:12999}
]

//Agar arrays ke andar kuch values hai ya objs ke andar kuch values hai unko add karna hai toh reduce use karo

const result = shoppingcart.reduce((acc,item)=> acc+item.price, 0)
console.log(result);