//returns the number of arguments received
function myFunction (a, b) {
    return arguments.length;
}
document.getElementById("demo").innerHTML = myFunction(8, 5);


//returns the function as a string
function myFunction1(a, b) {
    return a * b;
}
let text = myFunction1.toString();
document.getElementById("demo2").innerHTML = text;


