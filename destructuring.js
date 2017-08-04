var expense = {
    type: 'Work',
    amount: '90'
};

//var type = expense.type;
//var amount = expense.amount;

// ES6

//const { type } = expense;
//const { amount } = expense;
const { type, amount } = expense;


// Another example.

var userInfo = {
    firstName: 'Hashem',
    lastName: 'Khalifa',
    age: 28
}

var userGraduate = {
    university: 'university of sharjah',
    graduated: '2011'
}

// var userSummary = function(user) {
//     return `Welcome ${user.firstName} ${user.lastName} ${user.age}`;
// }

// destructuring 
var userSummary = function({ firstName, lastName, age }, { university, graduated }) {
    return `Welcome ${firstName} ${lastName} ${age}` + ` your ${university} from ${graduated}`;
}

userSummary(userInfo, userGraduate)