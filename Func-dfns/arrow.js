//ES5 normal function
var x1 = function(x, y) {
    return x * y;
}
document.getElementById("demo1").innerHTML = x1(6, 5);

//an arrow function
const x = (x, y) => x * y;
document.getElementById("demo").innerHTML = x(5, 6);

const y = (a, b) =>{return a * b};
document.getElementById("demo2").innerHTML = y(6, 5);