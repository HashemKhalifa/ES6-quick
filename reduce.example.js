var myColors = [
    { color: 'red' },
    { color: 'green' },
    { color: 'blue' }
]

myColors.reduce(function(accumulator, myColors) {

    accumulator.push(myColors.color);
    return accumulator;

}, []); // first argument will be this empty array
// second arguemnt will be the object in the array
// third arguemnt will be array that we want to make reduce for it