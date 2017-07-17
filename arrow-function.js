const add = (a, b) => a + b; // single javascript expression.we dont need to use { } 
const add2 = a => a; // without () when we have only single arg
const add3 = () => 5; // u should use () if u don't have any args
//** dont use ; after function body!

console.log(add2(2))
console.log(add3())
console.log(add(1, 2));

const numbers = [1, 2, 3, 4, 5];

numbers.map(number => 3 * number);
console.log(numbers.map(number => 3 * number))

/*numbers.map(function(number){
    console.log( 3 * number);
    return 3 * number;
})*/

const team = {
    members: ['Hashem', 'Ahmed'],
    teamName: 'Basket ball',
    teamSummary: function() {
        return this.members.map(function(member) {
            return `${member} is on team ${this.teamName} `;
        });
    }
};

console.log(team.teamSummary());