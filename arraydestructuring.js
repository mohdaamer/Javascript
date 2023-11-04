let array1 = ["Tech Bot", 2.6, 268];
let[channelname, subscribers, videos] = array1;

console.log(channelname);
console.log(subscribers);
console.log(videos);

// How this works in nested array 

let nestedarray = ["JS","React", "Angular",["Html", "css", "Tailwindcss"]];
let[language, library, framework,[weblanguage, style, styleframework]] = nestedarray;

console.log(styleframework);

// Implementation 

function book(){
    // do something
    return ["Advance JS", 250];
}
let[bookname, price] = book();
console.log(bookname);