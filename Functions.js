function addNumbers(num1, num2) {
    return num1 + num2;
}

// let newNumber = addNumbers(12, 19);
// console.log(newNumber);

function sayHello(name) {
    console.log("Hello " + name);
};
// sayHello("Luke");

function multiplyByTwo(num) {
    return addNumbers(num, num);
}

// console.log(multiplyByTwo(10));


function getMe(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        getFullName: function () {
            return `${this.firstName} ${this.lastName}`;
        }
    }
}

// let someoneElse = getMe("Luke", "Parker");
// console.log(someoneElse.getFullName())

let people = [
    {
        name: "Luke",
        age: 12,
        pets: [
            {
                species: "Dog",
                name: "Rex"
            }
        ]
    },{
        name: "Dave",
        age: 17
    },{
        name: "Jim",
        age: 19
    },{
        name: "Bob",
        age: 22
    },
]

people[0].pets = [
    {
        type: "Dog",
        name: "Rex"
    },{
        type: "Cat",
        name: "TC"
    }
]

for(let i = 0; i < people[0].pets.length; i++) {
    console.log(people[0].pets[i]);
}

function agePerson(person) {
    person.age++;
}

console.log(people);

for (let i = 0; i < people.length; i++) {
    let person = people[i];
    agePerson(person);
}

console.log(people);