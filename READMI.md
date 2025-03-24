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
Some useful string methods include:

- `toUpperCase()` - Converts string to uppercase.
- `toLowerCase()` - Converts string to lowercase.
- `trim()` - Removes extra spaces at the start and end.
- `replace()` - Replaces the first matching word.
- `replaceAll()` - Replaces all matching words.
- `slice()` - Extracts a part of a string.

## String Template Literals
Use backticks `` ` `` to create string literals.
```javascript
let name = "Leigh";
console.log(`Hi, ${name}`);
```

## Arrays
An array is a variable that can store multiple values.

```javascript
let names = ["Leigh", "Ahsley", "Villanueva", "Gadoc"];
let numbers = [3, 6.5, 9.35, 12.75, 7, 2];
let mixed = ["Leigh", 99, "David", true, 3.99];
let empty = [];
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
- `&&` AND
- `||` OR
- `!` NOT

### Example
```javascript
let age = 18;
let experience = 3;
console.log(age >= 18 && experience > 1); // true
```

## Nested Conditional Statements
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
A `switch` statement can replace multiple `if-else` conditions. It checks a value against multiple cases.

```java
String fruit = "apple";
switch (fruit) {
  case "apple":
    System.out.println("You selected Apple");
    break;
  case "banana":
    System.out.println("You selected Banana");
    break;
  default:
    System.out.println("Invalid selection");
}
