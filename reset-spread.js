//reset oporator
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
// ...numbers convert to array
// when we want to capture a list of argument.
addNumbers(1, 2, 3, 8, 6);


// spread operator. like concat
const color = ['Red', 'Green'];
const userColor = ['Yellow', 'blue'];
const morColors = ['maroon', 'White'];

['light blue', ...color, ...userColor, ...morColors];



function validateShopping(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }

    return items;
}

validateShopping('orange', 'greeen');


const MathLib = {
    calculateProduct(...rest) {
        return this.multiplying(...rest);
    },
    multiplying(a, b) {
        return a * b;
    }
}