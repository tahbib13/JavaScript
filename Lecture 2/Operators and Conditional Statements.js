// Operators in JS

// a+b , here a and b are operands, "+" is operator.

//  Arithmetic Operators

let a = 5;
let b = 6;

console.log("SUM is : ",a+b);
console.log("SUB is : ",a-b);
console.log("MULT is : ",a*b);
console.log("DIV is : ",a/b);
console.log("MODULUS is : ",a%b);
console.log("EXP is : ",a**b);


// Unary Operators

c = 6;
d = 9;
d++;
console.log("D = ",d);

// Assignment Operators

// =, +=, -=, *=, %=, **=
c += 7;

console.log("C = ",c);

// Comparison Operators

let E = 74;
let F = 59;

console.log(E == F);
console.log(E > F);
console.log(E < F);
console.log(E != F);

//  >, >=, <, <=

// Logical Operators

//  Logical AND &&
//  Logical OR ||
//  Logical NOT !

// Condition statements

let marks = 74;

if(marks <= 60){
    console.log("GRADE is D");
}
else if(marks <= 70){
    console.log("GRADE is C");
}
else if(marks <= 80){
    console.log("GRADE is B");
}
else{
    console.log("GRADE is A");
}

let number = 28;

if(number % 2 == 0)
{
    console.log("EVEN NUMBER");
}

else{
    console.log("ODD NUMBER");
}


//  Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is a multiple of 5 or not. 

// Get user input
let userInput = prompt("Enter a number:");

// Convert the input string to a number
let number02 = parseFloat(userInput);

// Check if the input is a valid number
if (isNaN(number02)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  // Check if the number is a multiple of 5
  if (number02 % 5 === 0) {
    alert("The number " + number02 + " is a multiple of 5.");
  } else {
    alert("The number " + number02 + " is NOT a multiple of 5.");
  }
}