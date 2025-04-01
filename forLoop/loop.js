// for(let i = 0; i < 5; i++){
//     console.log("hello");
// }

// let people = ["Juan", "Pedro", "Jasper", "Jose"];

// for(let i = people.length-1;i >= 0; i--){
//   console.log(people[i]);
// }
// let people = ["Juan", "Pedro", "Jasper", "Jose"];

// for (let i = 0; i < people.length; i++) {

//   console.log(people[i]);

//   if (i === 1) {
//     break;
//   }
// }

// let people = ["Juan", "Pedro", "Jasper", "Jose"];

// for (let i in people) {
//   console.log(people[i]);
// }

// let people = ["Juan", "Pedro", "Jasper", "Jose"];

// for (let person of people) {
//   console.log(person);
// }

// let people = ["Juan", "Pedro", "Jasper", "Jose"];

// for (let i in people) {
//   console.log(`${parseInt(i) + 1}. ${people[i]}`);
// }

// let i = 1;
// for (let person of people) {
//   console.log(`${i}. ${person}`);
//   i++;
// }

// Challenge 

let names = ["Juan", "Pedro", "Jasper", "Jose"];
let search = "juan";

for (let i in names) {
  if (search.toLowerCase() === names[i].toLowerCase()) {
    console.log(`Found ${names[i]}`);
    break;
  } else {
    console.log("Not Found");
  }
}