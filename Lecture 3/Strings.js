 let str = "My Name is Shakib ALL HASAN";

 console.log(str);

 console.log("Length is : ",str.length);

  console.log(str[0]);
  console.log(str[1]);
  console.log(str[2]);

  // A way to have embedded expressions in strings

  let expression = `this is a template literal`;

  console.log(expression);

  console.log( str.toUpperCase( ));
  console.log( str.toLowerCase());
  console.log(str.trim());

  // Basic Usage (start and end):

  let str02 = "Hello, World!";
let result1 = str02.slice(0, 5); // Extracts characters from index 0 up to (but not including) index 5
console.log(result1); // Output: "Hello"

let result2 = str02.slice(7); // Extracts characters from index 7 to the end
console.log(result2); // Output: "World!"


// Join result2 and str02


console.log( str.concat(str02));

console.log(str02.replace( "World", "JOYNAL"));


//Practice Question

let userINPUT = prompt("Enter Your FULLNAME : ");

let output = "@" + userINPUT.toLowerCase() + userINPUT.length;

console.log(output);
