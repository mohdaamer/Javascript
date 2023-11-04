function sum(...a){
    let result = 0;
    a.forEach(function(a){
        result += a;
    })
    console.log(result);
}

sum(1,2,3,4,5);