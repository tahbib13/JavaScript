/* Asynchronous -> Due to synchronous programming, sometimes important 
instructions get blocked due to some previous instructions, which causes a delay in the UI.
 Asynchronous code execution allows to execute next instructions 
 immediately and doesn't block the flow*/


console.log("ONE");
console.log("TWO");
setTimeout( () => {
    console.log("Hi, Mohammad Tahbib Ullah")
}, 5000 //5s = 5000ms
);
console.log("Three");
console.log("FOUR");