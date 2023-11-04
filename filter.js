const coding = [1,2,3,4,5,6,7,8,9,10]
const result = coding.filter((item) => item>4)
console.log(result)

// Another way 
const result1 = coding.filter((item) => {
    return item>5
})
console.log(result1);

// Example

const bgmi = [
    {gun: "m416", type: "assualt", ammo:"5mm", crated:2000},
    {gun: "akm", type: "assualt", ammo:"7mm", created:2003},
    {gun: "awm", type: "sniper", ammo:"magmum", created:2004},
    {gun: "ump" , type: "assualt", ammo:"45mm", created:2013},
    {gun: "p18c", type: "pistol", ammo:"9mm", created:2016},
    {gun:"scarl", type:"assualt", ammo:"5mm", created:2022}
]

// Agar type:"assualt" obj chahte toh 
const user = bgmi.filter((item)=> item.type == 'assualt')
console.log(user);

// 5mm ammo wala obj chahte toh
const user1 = bgmi.filter((item1)=>item1.ammo == '5mm')
console.log(user1);

// aise obj chahte jo 2004 mein ya 2004 ke baad create hue toh
const user2 = bgmi.filter((item2)=> item2.created >= 2004)
console.log(user2);

// multiple conditions pass karna hai toh 
const user3 = bgmi.filter((item3)=>item3.type == 'assualt' && item3.ammo == '5mm')
console.log(user3)