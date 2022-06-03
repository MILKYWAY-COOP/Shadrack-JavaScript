//W3 schools
let x = myFunction(4, 5);


function myFunction (p1, p2){
    return p1 * p2;                //the function returns the product of p1 and p2
}


//Coding made simple with MOsh Hamedani
function greet () {
    console.log('Hi there!');
}
greet();   //calling the function



//our functions can have inputs; let say we wanna display Hi there Jonh 
//this function is performing a task
function greet(name, lastName) {               //name is a 'parameter,
    console.log('Hi there ' + name + ' ' + lastName);
}
greet('John', 'Smith');                        //'john' is an argument
greet('Sheddiey', 'G');   
greet('Doctor', 'Kevin');

//calculating a value
function square(number){
    return number * number;
}

let number = square(500007);
console.log(number);
console.log(square(6));