let book = {
    name:"advance js",
    page:200,
    price:150
}
let{name,page,price} = book;

// Agar variable ka naam chanege karna hai toh 

let{name:naam , page:papers, price:paisa} = book;
console.log(naam);

// nested object
let book2 = {
    name2:"react",
    page2:200,
    price2:500,

    publication : {
        pub_name:"techbot",
        year:2023
    }
}
let{name2:naam2,page2:papers2,price2:paisa2, publication : {pub_name:publishname, year:saal}} = book2;
console.log(saal);