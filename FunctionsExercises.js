// 1 Create a function that takes 2 arguments that are numbers and returns the sum of those numbers

    /*unction addNumbers(num1, num2){
        return num1 + num2}

        let someonesNumber = addNumbers(5,6);
        console.log(someonesNumber); */


// 2 Create a function that takes 2 arguments that are numbers and returns the largest of those numbers
    
/* function largestNumber(num1, num2){

    if (num1 > num2) {
    return num1; 
} 
    return num2;

}

let myLargestNumber = largestNumber (6, 7);

console.log(largestNumber);

*/

// 3 Create a function that takes 1 argument that is an array and prints each of the elements in that array to the console


// 4 Create a function that takes 2 arguments, name and age, and returns an object with properties name and age set to the values passed in

 
function peopleProperties (name, age) {

    return { name : "name",
             age :  age
        
    }
}
    let person = peopleProperties("liz", 25);
    console.log(Liz);



// 5 Create a function that takes 1 argument that is an array of objects representing people. Each object should have a property name which should be a string and a property age which should be a number. The function should return the name of the oldest person.

let people = [ { 
             name : "Liz",
             age : 25 
},              

             { name: "Junior",
               age : 20
},
             {name: "Siobhan",
                 age : 12
                }
]
          function getOldest (array) {}