console.log("Mohammad Tahbib Ullah");
console.log("I am from North South University");

// Variables in JS

age = 24;
console.log(age);

console.log("Tahbib Age is ",age);

x = null;
console.log(x);

y = undefined;
console.log(y);

// JS is dynamically typed

// let : Variable cannot be re-declared but can be updated. A block scope variable. 
//  var : Variable can be re-declared & updated. A global scope variable. 
// const : Variable cannot be re-declared or updated. A block scope variable. 

let lastName = "Johnson";
console.log(lastName);

// Modern day let should be used

// After 2015 js have ES6, so let and const came in this year

let ID = 205;
console.log(ID);

// In console typeof ID, you can saw the data type

//object is collection of values
const student ={
    Fullname : "Mohammad Tahbib Ullah",
    Age : 29,
    CGPA : 7.86,
    pass : true

};
console.log(student);

console.log(student.Age);

// let values can be updated ,but const can't be updataed


// Practice Question

const product ={
    Title : "Ball Pen",
    Ratting : 4,
    Price : 147,
    deal_on : true

};

console.log(product);

//Q2

const profile ={
    Name : "Mohammad Tahbib Ullah",
    Posts : 195,
    Followers : 5000,
    Following : 41,
    Email : "tahbibullah@gmail.com",
    Heading : "To educated someone is the highest Privilege"
};

console.log(profile);