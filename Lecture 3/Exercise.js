// Print all even numbers from 0 to 100.

let evenNumbers = ""; // Initialize an empty string to store the numbers

for (let i = 0; i < 100; i++) {
  if (i % 2 === 0) {
    // Add the even number and a space to the string
    evenNumbers += i + " ";
  }
}


console.log(evenNumbers.trim()); 

// Q2

let gameNO = 45;

let user_NUM = prompt("Enter the guess number : ");

while(user_NUM != gameNO){

    user_NUM = prompt("You Entered the wrong number, Guess Again : ");

}
console.log("Congratulation, you entered the right number");