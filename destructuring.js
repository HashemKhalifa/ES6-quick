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
type;
amount;


// Another example.

var userInfo = {
    firstName: 'Hashem',
    lastName: 'Khalifa',
    age: 28
}

var userGraduate = {
    university: 'university of sharjah',
    graduated: 2011
}

// var userSummary = function(user) {
//     return `Welcome ${user.firstName} ${user.lastName} ${user.age}`;
// }

// destructuring 
var userSummary = function({ firstName, lastName, age }, { university, graduated }) {

    return `Welcome ${firstName} ${lastName} ${age}` + ` your ${university} gruaduated ${graduated}`;
}

userSummary(userInfo, userGraduate);
console.log(userSummary(userInfo, userGraduate));

// another example pull off arrays

const companies = [
        'Tajawal',
        'Itworx',
        'Arrow Electronics',
        'Google'
    ]
    //const firstCompany = companies[0];
const [name, name2, ...all] = companies;
name;
name2;
all;


// Mixing destructuring with array and object

const allUsers = [
    { nameUser: 'Hashem Khalifa', age: 28, company: 'Tajawal' },
    { nameUser: 'Mohamed Meabed', age: 33, company: 'Tajawal' },
    { nameUser: 'Kamran Ahmed', age: 27, company: 'Tajawal' }
];

const [{ nameUser }] = allUsers;
console.log(nameUser);

// Mixing destructuring array in object

const Hashem = {
    company: ['Tajawal', 'Itworx', 'Arrow']
}

const { company: [company, company2, company3] } = Hashem;


// Real example you can use destructuring as the following example as long as u declair it as object you will not care about order.

function signUp({ username, password, company, email, birthDate }) {

}

const userSignUp = {
    username: 'username',
    password: 'password',
    email: 'email@example.com',
    birthDate: '08/08/1988',
    company: 'Tajawal'
};

signUp(userSignUp);


// Real example with arrays passing x and y.

const points = [
    [3, 4],
    [19, 2],
    [6, 7]
];

points.map(([x, y]) => {
    return { x, y };

});