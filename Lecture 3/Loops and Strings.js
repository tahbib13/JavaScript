// Loops in JS

// for Loop
 for (let i = 1; i <= 5; i++) {
 console.log("Mohammad Tahbib Ullah");
 }

 for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0, 1, 2, 3, 4
}

// 1. Get the value of 'n' from the user
// const userInput = prompt("Enter a positive integer (n):");
// const n = parseInt(userInput); // Convert the input string to an integer

//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i; // This is shorthand for: sum = sum + i;
//   }

  // Display the result
//   alert(`The sum of numbers from 1 to ${n} is: ${sum}`);

// while Loop

let count = 0;
while (count < 3) {
  console.log("While loop iteration: " + count); // Outputs 0, 1, 2
  count++; // Important: increment to avoid an infinite loop
}


// do...while Loop

let j = 0;
do {
  console.log("Do...while loop iteration: " + j); // Outputs 0
  j++;
} while (j < 7);

// for...of Loop

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

let greeting = "Hello";
for (let char of greeting) {
  console.log(char);
 
}

//  for-in Loop

const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
  
}