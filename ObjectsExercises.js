// 1 Create an object called me with 2 properties: name and age. Set the name and age equal to your name and age
let me = {
    name: "Luke",
    age: 23,
};

// 2 Use the increment operator to increase your age
console.log(me.age);
me.age++;
console.log(me.age);

// 3 Add another property called hobbies and set the value to be an array of strings that represent some of your hobbies, make sure the array has at least 3 values
me.hobbies = [
    "Skydiving",
    "Coding",
    "Eating",
    "Exercise"
];

// 4 Add another property called Pets which should be an array of objects that represent your pets (make some up if you don't have any). Each pet should have 3 properties: name, age and species.
me.pets = [
    {
        name: "Rex",
        age: 6,
        species: "Dog"
    },{
        name: "Felix",
        age: 3,
        species: "Cat"
    }
];

for (let i = 0; i < me.pets.length; i++) {
    let pet = me.pets[i];
    console.log(`My ${pet.species} is ${pet.age} years old. Their name is ${pet.name}.`);
}

// 5 Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. Eg. "My hobbies are painting, drawing and exercising", "My hobbies are painting, drawing, exercising and skydiving"

let hobbies = "My hobbies are ";
for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += hobby;
    if(i == me.hobbies.length - 2) {
        // For the second last element
        hobbies += " and ";
    } else if (i == me.hobbies.length - 1){
        // For the last element
        hobbies += ".";
    } else {
        // For all the other elements
        hobbies += ", ";
    }
}

console.log(hobbies);
// My hobbies are SkydivingCodingEatingExcersise
// My hobbies are Skydiving, Coding, Eating and Excersise