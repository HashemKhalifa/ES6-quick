const add = (a, b) => a + b; // single javascript expression.we dont need to use { } 
const add2 = a => a; // without () when we have only single arg
const add3 = () => 5; // u should use () if u don't have any args


console.log(add2(2))
console.log(add3())
console.log(add(1, 2));