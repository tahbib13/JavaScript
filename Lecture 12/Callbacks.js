//  A callback is a function passed as an argument to another function
/* Basically callback use for asynchronization, for example IN case of instagram we have to first Login , 
which need user name first time, so user enter name then gothrough database and find the name , 
their take searching time, then they ask password if correct Login 
succcesfull,other wise wrong input. Here we have to use settimeout function */

function sum(a,b){
    console.log("SUM is : ",a+b);
}

function calculator(a,b,sumcallbacks){
    sumcallbacks(a,b);

}

calculator(5,9,sum);


//callback hell resolve by promises
//Promise chaining also suitable method for solving callback hell

//Asyn wait is the suitable for resolving callback hell and which is understandable for developpers.