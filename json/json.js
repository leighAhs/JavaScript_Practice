// let person = {
//     firstName:"Juan",
//     lastName:"Cruz",
//     age:20,
//     bloodType:"O",
//     sex:'M'
// };

// console.log(person);

// let person = {
//     firsName: "Juan",
//     lastName: "Cruz",
//     age: 22,
//     hobbies: ["coding", "eating", "sleeping"],
//     pets:{
//         1:{
//             name:"shadow",
//             type:"Dog",
//             breed:"Aspin"
//         },
//         2:{
//             name:"Mocha",
//             type:"Cat",
//             breed:"Siamese"
//         }
//     }
// };

// console.log(person); 

// let person = {
//     firstName: "Juan",
//     lastName: "Cruz",
//     age: 22
// };

// console.log(`${person.firstName} ${person.lastName}`);

// let person = {
//     firsName: "Juan",
//     lastName: "Cruz",
//     age: 22,
//     hobbies: ["coding", "eating", "sleeping"]
// };

// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);

// let person = {
//     firstName: "Juan",
//     lastName: "Cruz",
//     age: 22,
//     hobbies: ["playing", "cooking", "coding"]
// };
// console.log(person);

// //Update Existing "key|value"
// person["firstName"] = "John";
// console.log(person);

// //Create New "key|value"
// person["middleInitial"] = "F";
// console.log(person);

// console.log(person);

// //Update Existing "key|value"
// person.firstName = "John";
// console.log(person);

// //Create New "key|value"
// person.middleInitial = "F";
// console.log(person);

// person.hobbies[0] = "sleeping";
// console.log(person);

// let person = {
//     firsName: "Juan",
//     lastName: "Cruz",
//     age: 22,
//     hobbies: ["coding", "eating", "sleeping"],
//     pets:{
//         1:{
//             name:"shadow",
//             type:"Dog",
//             breed:"Aspin"
//         },
//         2:{
//             name:"Mocha",
//             type:"Cat",
//             breed:"Siamese"
//         }
//     }
// };
// console.log(person);

// let strPerson = JSON.stringify(person);
// console.log(strPerson);

// let strPerson = `{"firstNmae":"Juan","lastName":"Cruz","age":"20","bloodType":"O"}`;

// let person = JSON.parse(strPerson);
// console.log(person);

// let people = [
//     {
//         firstName: "Juan",
//         lastName: "Cruz",
//         age: 22
//     },
//     {
//         firstName: "Juan",
//         lastName: "Cruz",
//         age: 21
//     },
//     {
//         firstName: "Juan",
//         lastName: "Cruz",
//         age: 20
//     },
// ];
// console.log(people[0].firstName);

// let people = [
//     {
//         firstName: "Juan",
//         lastName: "Cruz",
//         age: 22
//     },
//     {
//         firstName: "Juan",
//         lastName: "Cruz",
//         age: 21
//     },
//     {
//         firstName: "Juan",
//         lastName: "Cruz",
//         age: 20
//     },
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(`First Name: ${people[i].firstName}`);
//     console.log(`Last Name: ${people[i].lastName}`);
//     console.log(`Age: ${people[i].age}`);
//     console.log('');
// }

// let person = {
//     firstName: "Juan",
//     lastName: "Cruz",
//     age: 22
// }

// for (let k in person) {
//     console.log(`${k}: ${person[k]}`);
// }

// let person = {
//     firstName: "Juan",
//     lastName: "Cruz",
//     age: 22
// }

//  let keys = Object.keys(person);
//  console.log(keys); 

//  for(let i = 0; i < keys.length; i++){
//     console.log(person[keys[i]]);
//  }

// let size = Object.keys(person).length;
// console.log(size);

let grades = {
    prelim: 95,
    midterm: 97,
    preFinals: 92,
    finals: 94 
}

let average = 0 + grades.finals;

for(let i in grades){
    console.log(`${i}: ${grades[i]}`);
    average += grades[i];
}
let gwa = average / (Object.keys(grades).length+1);
console.log(`GWA: ${gwa}`);