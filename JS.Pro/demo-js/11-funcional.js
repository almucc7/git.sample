function foo(a, b, ...rest) {

    console.log(a, b, rest.length);    
}


const foo2 = function (a, b, ...rest) {

    console.log(a, b, rest.length);    
}

console.log(foo, foo2);