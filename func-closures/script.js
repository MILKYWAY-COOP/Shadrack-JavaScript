//Ex 1 A function can access all variables defined inside the function
myFunction();

function myFunction() {
    let a = 4;
    console.log(a * a);
}

// Ex 2 a function can also acces variables defined outside the function.
let b = 5;
myCalc();
function myCalc() {
    console.log(b * b);
}

//variables created without a declaration keyword are always global variables even if 
//they are created inside a function
myCalcu()
console.log(x * x);

function myCalcu() {
    x = 6;
}

//initiate counter
let counter = 0;
//function to increment counter
function add() {
    counter += 1;
} 
//call add() 4 times
add();
add();
add();
add();
//the counter is now 4
console.log("The counter is: " + counter);

//initiate counter
let counter2 = 0;
//function to increment counter
function add2() {
    let counter2 = 0;
    counter2 += 1;
} 
//call add2() 4 times
add2();
add2();
add2();
add2();
//the result is not 4 because you mix up the global and local counter
console.log("The counter2 is: " + counter2);


//function to increment counter
function add3() {
    let counter3 = 0;
    counter3 += 9;
    return counter3;
}
//trying to increment the counter
function myFunc() {
    document.querySelector('.x').innerHTML = add3();
}


//in this example, the inner function plus() has access to the counter 
//variables in the parent function
console.log(add4());
function add4() {
    let counter4 =0;
    function plus() {counter4 += 10;}
    plus();
    return counter4;
}

//JavaScript closure
const add5 = (function () {
    let count = 0;
    return function () {count += 1; return count}
})(); //self-invoking

function myFunct() {
    document.querySelector('.demo').innerHTML = add5();
}