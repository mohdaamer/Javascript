// A closure gives you access to an outer function scope from an inner function 

function init(){
    let name = "mozilla"
    function displayname(){
        console.log(name);
    }
    displayname();
}
init();