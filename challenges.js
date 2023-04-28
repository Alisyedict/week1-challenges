//console.log ("Hello World")
//
//____________________1____________________________
//let favouriteDrinks  = ["DrPepper","Crystal Clear","Peppermint Tea","Cherry Cola","Red Bull"
//];
//favouriteDrinks.splice(1, 2);
//console.log(favouriteDrinks);




//____________________2____________________________
//let randomnum = Math.floor((Math.random() * 80) + 1);
//console.log(randomnum);



//____________________3____________________________

//let min = 1;
//let max = 6;
//let roll = Math.floor(Math.random() * (max - min + 1)) + min; 
//console.log (`YOU ROLLED A ${roll}`);

//____________________4____________________________

 // let password = "password";
 // if (password.length < 6) {
  //  console.log ("Password too short")
//}  else {
  //  console.log (`Password length is ${password.length}. Thanks!!!`);
//}

//____________________5____________________________

//let bool1 = "true"; 
//let bool2 = "false";

//if (bool1 !== bool2) {
 //   console.log (false);
    
//}
// else { 

//console.log (false);
//}

//____________________6____________________________     

// let num = 15; 

// if (num % 3 === 0 && num % 5 === 0 ) {
// console.log ("fizzbuzz");
// }
// else if (num % 3 ===0 )
// {
// console.log("fizz");
// } else if (num % 5 === 0) {
// console.log("buzz");
// } else {
// console.log ("num");
// }


//____________________7____________________________ 



let num1 = 2; 
let num2 = Math.ceil(Math.random() * 10) + 1; 

let count = 0; 

while (num1 !== num2) {
  console.log(`Not the same. Random number generated: ${num2}`);
  num2 = Math.ceil(Math.random() * 10) + 1;
  count++;
}

console.log(`Match found after ${count} cycles`);
