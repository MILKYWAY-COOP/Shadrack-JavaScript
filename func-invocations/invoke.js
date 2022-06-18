//invoking a function as a function
function myFunction (a, b) {
    return a * b;
}
console.log(myFunction(10, 2)); //returns 20

//myFunction() and window.myFunction is the same function
function myFunction (a, b) {
    return a * b;
}
console.log(window.myFunction(10, 2)); //returns 20

//This example returns the window object as the value of this
let x = myFunction1();
function myFunction1 () {
    return this;
}
console.log(x);


//this example creates an object, and a method(fullName)
const myObject = {
    firstName: "Shadrack",
    secondName:"Kevin",
    fullName: function () {
        return this.firstName + " " + this.secondName; 
        /*The thing called this, is the object that owns the JavaScript code. 
        In this case the value of this is myObject*/
    }
}
console.log(myObject.fullName());


//changing the fullname method to return the value of this:
const myObject1 = {
    firstName1: "Shadrack",
    secondName1:"Kevin",
    fullName1: function () {
        return this;
    }
}
console.log(myObject1.fullName1())


//this is a function constructor
function myFunction2 (arg1, arg2) {
    this.firstName2 = arg1;
    this.lastName2 = arg2;
}
//this creates a new object
const myObj = new myFunction2('Shadrack', 'Kevin');
//this will return Shadrack
console.log(myObj.firstName2);