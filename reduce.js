var numbers = [1, 2, 5, 10];
var sum = 0;

numbers.reduce(function(sum, number) {
    console.log(sum + number)
    return sum + number;
}, 0);
// 0 = inital value