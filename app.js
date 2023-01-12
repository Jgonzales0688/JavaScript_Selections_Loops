console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++){
    if (i % 2 != 0){
        console.log(i);
    }
    else {
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <=100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("Fizz Buzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(i);
    } 
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let num = 1
console.log("**Ex 2 as while loop**")
while (num <= 99){
    if (num % 3 === 0 && num % 5 === 0){
        console.log("Fizz Buzz");
    }
    else if (num % 3 === 0){
        console.log("Fizz");
    }
    else if (num % 5 === 0){
        console.log("Buzz")
    }
    else {
        console.log(num);
    } 
    num++
}
console.log("**Ex 1 as Do/While loop**")
let number = 1
do{
    if (number % 2 != 0){
        console.log(number);
    }
        number++
}
while (number <= 100)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);
let found = false; 

for(let i = 0; i <= n; i++){

    if (i === value){
        console.log("Found Value!")
        found = true;
        break;
    }
    else {
        found = false;
    }
}
if (found === false){
    console.log("Did not find value")
}


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= end ; i++){
    if (i % fizzDivisor === 0 && i % buzzDivisor === 0){
        console.log("Fizz Buzz");
    }
    else if (i % fizzDivisor === 0){
        console.log("Fizz");
    }
    else if (i % buzzDivisor === 0){
        console.log("Buzz")
    }
    else {
        console.log(i);
    }
} 
