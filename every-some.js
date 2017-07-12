var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'HP', ram: 4 },
    { name: 'Acer', rame: 34 }
]

var allComputerCanRun = true;
var onlySomeComputerCanRun = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if (computer.ram < 16) {
        allComputerCanRun = false;
    } else {
        onlySomeComputerCanRun = true;
    }
}

allComputerCanRun;
onlySomeComputerCanRun;

/* Every */

computers.every(function(computer) {
    console.log(computer.ram > 16);
    return computer.ram > 16;
})

/* some */
computers.some(function(computer) {
    console.log(computer.ram > 16);
    //return computer.ram > 16;
})


var names = [
    "Hashem",
    "Mohamed",
    "Ahmed"
]
names.every(function(name) {
    console.log(name.length > 5)
    return name.length > 4
})

names.some(function(name) {
    console.log(name.length > 4)
    return name.length > 4
})