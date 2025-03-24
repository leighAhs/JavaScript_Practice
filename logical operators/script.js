// let age = 18;
// let experience = 0;
// let language = "C#";

// alert(age >= 18 && experience > 1); // true

// alert(age >= 18 && experience > 3); // false

// if(age >= 18 && experience > 1 && language === "C#"){
//     alert("Your are Qualified")
// }else{
//     alert("You are Not Qualified")
// }


// let hasDegree = true;
// let experience = 3;

// alert(hasDegree || experience > 2); // true

// alert(hasDegree || experience > 4) // true

// let hasDegree = true;
// let experience = 3;

// alert(!hasDegree);

// alert(!(experience > 1));

// let isTall = true;

// if(isTall){
//     alert("Wow Tall");
// }else{
//     alert("Small");
// }

// let age = 18;
// let experience = 3;
	
// if(age >= 18){

//     if(experience > 1){
// 	    console.log("You're Hired");
// 	}else{
// 		console.log("You don't have experience.");
// 	}

// }else{
// 	console.log("You are Minor");
// }

let age = 18;
let isRegister = true;

if(isRegister){
    if(age >= 18){
        console.log("Valid Voter");
    } else {
        console.log("Invalid Voter");
    }
}else{
    if(age >= 18){
        console.log("Register First");
    }else{
        console.log("Non Voter");
    }
}