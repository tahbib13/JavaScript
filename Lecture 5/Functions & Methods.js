function myfunction(){
    console.log("Hello, my name is Mohammad Tahbib Ullah");
    console.log("Welcome to Javascript.");
}

myfunction();

function sum(a ,b){
    let sum = 0;
    sum = a + b;
    console.log("SUM is : ", sum);
}

sum(20, 28);
sum(95, 28);

// return

function sub(a ,b){
    let sub01 = 0;
    sub01 = a - b;
    return sub01;
}

let val = sub(90, 28);

console.log("SUB is : ", val);

// vowel counts

 function vowelCounts(str){
    let count = 0;

    for(let i = 0; i< str.length ; i++){
        if(str[i] == 'A' || str[i] == 'a' || str[i] == 'E' || str[i] == 'e' || 
           str[i] == 'I' || str[i] == 'i' || str[i] == 'O' || str[i] == 'o' ||
           str[i] == 'U' || str[i] == 'u'){
            count++;
           }
    }

    console.log("Number of vowels in the string : ",count);
 }

 vowelCounts("Hello");
 vowelCounts("My NAme is kuddus uDDin");

 // forEach Loop in Arrays

 // In js function have pass through another function, similar to how the variable pass through the function.

 function name(){
    console.log("Hello World Mominul");
 }

 function name_02(name){
    return name;
 }
 console.log(name());

 // Map -> Creates a new array with the results of some operation. The value its callback returns are used to form new array

 // Filter ->  Creates a new array of elements that give true for a condition/filter.


 //  Reduce ->  Performs some operations & reduces the array to a single value. It returns that single value.

 

