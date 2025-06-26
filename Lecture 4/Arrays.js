//  Create Array

 let heroes = [ "ironman", "hulk", "thor", "batman" ];

 for (let i=0; i<5 ; i++)
 {
    console.log(heroes[i]);
 }

 console.log(heroes);

 console.log("Array length is : ", heroes.length);

 // Looping over an Array

 for (let i=0; i<heroes.length ; i++)
 {
    console.log(heroes[i]);
 }


 // Question

 let prices = [250, 645, 300, 900, 50];

 let sum = 0;
 
 for (let i=0; i<prices.length ; i++)
 {
    sum += prices[i];
 }

 console.log("Average is : ",( sum / prices.length) );

 let new_prices = [];

 const discountPercentage = 10;


 for (let i = 0; i < prices.length; i++) {
  new_prices[i] = prices[i] - (prices[i] * (discountPercentage / 100));
}

console.log("New prices after discount: ", new_prices);

//  Array Methods

let car = [45,74,96,14,23,4578];

for (let i=0; i<car.length ; i++)
 {
    console.log(car[i]);
 }

 car.push(65234178);

 console.log(car);

 car.pop();
 console.log(car);

 //  toString( ) : converts array to string

 //  Concat( ) : joins multiple arrays & returns result


 //  Unshift( ) : add to start


 //  shift( ) : delete from start & return

 // Practice

 let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

 console.log("Original Array:", companies);

 companies.shift();
console.log("After removing the first company:", companies);

const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) { 
  companies.splice(uberIndex, 1, "Ola");
}

companies.push("Amazon");
console.log("After adding Amazon at the end:", companies);


 