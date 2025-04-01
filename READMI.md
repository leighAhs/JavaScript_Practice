# JavaScript Basics

## What is JavaScript?
JavaScript is a programming language for websites. It can manipulate both HTML and CSS.

- It can perform logical checks, calculations, modify existing HTML & CSS codes, and more.
- It is the most popular programming language as of the moment.

## Text Editor
Any software used to edit text. Other text editors are especially made for coding that incorporate colored text for a certain language like JavaScript. They may also be called an Integrated Development Environment (IDE).

## `<script>` Tag
The `<script>` tag allows us to write JavaScript code inside of our HTML file.

```html
<script>
  console.log("Hello World");
</script>
```

## `console.log()`
This code displays a log in the developer console of browsers.

```javascript
console.log("Hello World");
console.log("Hi");
```

## `document.getElementById()`
This code retrieves an element from HTML using its ID and lets us manipulate its properties/attributes.

```javascript
document.getElementByID("someid");
```

## Developer Tools
Developer tools are useful for debugging JavaScript codes and also viewing our output using `console.log()`.

## External JavaScript
```html
<html>
  <script src="script.js"></script>
</html>
```

## Variables
Variables are temporary containers that can hold different types of data such as text, numbers, collections, objects, etc.

- Variables can be named for easy read/write access by the programmer. This is called an **identifier**.

### Identifiers
- Must be **unique**
- Are **case-sensitive**
- **Reserved keywords** are **not allowed** as identifiers
- Must start with a **letter**, `$`, or `_`
- Cannot contain **special characters**

## 4 Ways of Declaring Variables
1. **Automatically**
2. **Using var**
3. **Using let**
4. **Using const**

### Automatically
Automatic variables declare themselves.
```javascript
x = 5;
y = 12.5;
z = "Hello World";
```

### `let`
- Uses the `let` keyword, it cannot be redeclared.
- Preferred by default when declaring variables.

### `const`
- Uses the `const` keyword, it cannot be redeclared.
- Variables declared with `const` cannot be reassigned/changed.

### `var`
- Uses the `var` keyword, it **can be redeclared**.
- Should only be used when supporting older browsers.

## Data Types
Data types define the type of data a variable holds:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Object
7. BigInt
8. Symbol

### Declaring Data Types
```javascript
// String
let name = "Leigh";

// Number
let number = 5;

// Boolean
let isCoding = false;

// Undefined
let nickname;

// Null
let lastName = null;
```

## Concatenation
Joining two or more strings together:
```javascript
console.log("Hello" + " World");
console.log("Answer: " + 12);
console.log("PI: " + 3.14);
```
You can concatenate using variables:
```javascript
let name = "Leigh";
console.log("Hi, " + name);
```

## Strings
A **string** is a datatype that contains characters, words, or sentences surrounded by `""` or `''`.

### String Length
The `.length` property returns the number of characters in a string.
```javascript
let word1 = "Hello World";
console.log(word1.length); // Output: 11
```

### String Indices
Individual characters can be accessed using an **index**.
```javascript
let name = "Leigh";
// L e i g h
// 0 1 2 3 4
console.log(name[0]); // Output: L
```

## String Methods
These different methods can manipulate strings in different ways

- `toUpperCase()` - Converts string to uppercase.
- `toLowerCase()` - Converts string to lowercase.
- `trim()` - Removes extra spaces at the start and end.
- `trimEnd()` - Removes extra spaces at the end.
- `trimStart()` - Removes extra spaces at the start.
- `replace(from, to)` - Replaces the first matching word.
- `replaceAll()` - Replaces all matching words.
- `slice(start, end)` - Extracts a part of a string.

## String Template Literals
Use backticks `` ` `` to create string literals.
```javascript
let name = "Leigh";
console.log(`Hi, ${name}`);
```

## Arrays
A variable that can store multiple values. The values inside an array is called an element.

```javascript
// Array of Strings
let names = ["Leigh", "Ahsley", "Villanueva", "Gadoc"];

// Array of Numbers
	let number = [3, 6.5, 9.35, 12.75, 7, 2];

// Array of Mixed Datatypes
let mixed = ["Leigh", 99, "David", true, 3.99];

// Empty Array
let dummy = [];
```
### Array length
- We can use the legth property to get the length of an array.

```javascript
let names = ["Leigh", "Ahsley", "Villanueva", "Gadoc"];
console.log(names.legth);
//The length of this Array is 4
```

## Conditional Statements
Conditional statements execute actions depending on different conditions using **Comparison Operators** and **Logical Operators**.

### Comparison Operators
- `==` Equal
- `===` Equal Value and Type
- `!=` Not Equal
- `!==` Not Equal Value and Type
- `>` Greater Than
- `<` Less Than
- `>=` Greater Than or Equal To
- `<=` Less Than or Equal To

### Example
```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

## IF Statement
```javascript
let age = 18;
if (age >= 18) {
  console.log("Legal Age");
}
```

## ELSE Statement
```javascript
let age = 18;
if (age >= 18) {
  console.log("Legal Age");
} else {
  console.log("Minor Age");
}
```

## ELSE IF Statement
Uses the `else` Keyword and {} it is used in combinationwith the IF Keyword if you want additional specific conditions. You can add as many as you want.

```javascript
let age = 18;
if (age >= 18) {
  console.log("Legal Age");
} else if (age <= 0) {
  console.log("Invalid Age");
} else {
  console.log("Minor Age");
}
```

## Logical Operators
Used in combination with conditional statements to create more complex conditions.

It allows programmers to put 2 or more condtons in one expression.

- `&&` AND
- `||` OR
- `!` NOT

### AND Operator 
both CONDITIONS should be true

```javascript
let age = 18;
	let experience = 3;

	console.log(age >= 18 && experience > 1);
	//true

	console.log(age >= 18 && experience > 3);
	//false

```

### OR Operator 
either CONDITIONS should be true

```javascript
let hasDegree = true;
	let experience = 3;

	console.log(hasDegree || experience > 2);
	//true

	console.log(hasDegree || experience > 4);
	// true

```
### NOT Operator 
inverts the result of a CONDITION

```javascript
let hasDegree = true;
	let experience = 3;

	console.log(!hasDegree);
	//false

	console.log(!(experience > 1));
	//false

```

## Nested Conditional Statements
Uses the `else` Keyword and {} it is used in combinationwith the IF Keyword if you want additional specific conditions. You can add as many as you want.

```javascript
let age = 18;
let experience = 3;
if (age >= 18) {
  if (experience > 1) {
    console.log("You're Hired");
  } else {
    console.log("You don't have experience.");
  }
} else {
  console.log("You are Minor");
}
```

## SWITCH Statement
Are used to execute code depending on a case. It acts like conditional Statements but can only check equality.

```javascript
let difficuty = 1;

switch(difficulty){
  case 1:
    console.log("Easy");
    break;
  case 2:
    console.log("Normal");
    break;
  case 3:
    console.log("Hard");
    break;
}
```

## `default` Keyword
Default keyword used to handle all cases that weren't specified.

```javascript
let difficuty = 1;

switch(difficulty){
  case 1:
    console.log("Easy");
    break;
  case 2:
    console.log("Normal");
    break;
  case 3:
    console.log("Hard");
    break;
  default:
    cosnole.log("Invalid Difficulty");
    break; 
}
```

### Common Case
You can specify two or more cases in a code block.

```javascript
let num = 2;

switch(difficulty){
  case 2:
  case 4:
    console.log("Even");
    break;
  case 3:
  case 5:
    console.log("Odd");
    break;
  default:
    cosnole.log("Unknown");
    break; 
}
```

## While loop
 Is used to execute a block of code, while the condition is met/true

```javascript
let i = 0
while(i < 5){
  console.log("Hello");
  i++;
}
```

## Iterate Keyword
You can use the break keyword to break out of a loop earlier than expected.

```javascript
let people = ["Juan", "Jose", "Kyro", "Zian",];
let i = 0;

while(people[i]){
  console.log(people[i]);
  i++;

	if(i === 1){
	  break;
}
}
```
## Do While Loop 
Anyways runs the code before checking the condition.

```javascript
let i - 0;

do{
  console.log("Hello");
}while(i > 5);
```

## FOR Loop
Used to execute a block of code, while the condition is met/true.

```javascript
for(let i = 0; i < 5; i++){
	  console.log("Hello");
}
```

## ITERATE array 
You can use for loop to read through all the array elements.

```javascript
let people = ["Juan", "Pedro", "Jasper", "Jose"];

for(let i = 0;i < people.lenght; i++){
  console.log(people[i]);
}
```
## For Loop vs. While Loop
`for` loops are used when the number of the iterations are known. While loops are used when the number of iterations are unknown.

## Break Keyword
You can use the break keyword to break out of a loop earlier than expected.

```javascript
let people = ["Juan", "Pedro", "Jasper", "Jose"];

for(let i = 0;i < people.length; i++){
  console.log(people[i]);

  if(i === 1){
  break;
  }
}
```
## For/in Loop
Are used for iterating over JSONs or Arrays. It returns the key or index of each item.

```javascript
let people = ["Juan", "Pedro", "Jasper", "Jose"];

for(let i in people){
  console.log(people[i]);
}
```
## For/of Loop
Are used for iterating over Arrays. IT returns the value of each element.

```javascript
let people = ["Juan", "Pedro", "Jasper", "Jose"];

for(let person of people){
  console.log(person);
}
```