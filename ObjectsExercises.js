// 1 Create an object called me with 2 properties: name and age. Set the name and age equal to your name and age
let me = {
            name: "Liz",
            age: 25,
            
    
        };
    console.log(me);
// 2 Use the increment operator to increase your age
console.log(me.age);
me.age++;
console.log(me.age);
// 3 Add another property called hobbies and set the value to be an array of strings that represent some of your hobbies, make sure the array has at least 3 values
me.hobbies = [  

    "Reading",
    "vlogging",
    "netflix"

];

// 4 Add another property called Pets which should be an array of objects that represent your pets (make some up if you don't have any). Each pet should have 3 properties: name, age and species.
me.pets = [{
            name: "Pinky",
            age: 2,
            type: "Dog", },

            {name: "Roxy",
            age: 1,
            type: "Fish", },

            {name: "Lola",
            age: 5,
            type: "Cat",
         }];
         console.log(me);
// 5 Use string concatenation to print out a list of your hobbies in a sentence. This code should work even if you add more elements to the list. Eg. "My hobbies are painting, drawing and exercising", "My hobbies are painting, drawing, exercising and skydiving"
