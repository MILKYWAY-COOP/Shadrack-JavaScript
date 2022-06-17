//default parameters
function myFunction(x, y) {
    if (y === undefined) {
        y = 2;
    }
return y * x;
}
console.log(myFunction(4));


//function for finding  the largest number ina list
function findMax() {
    let max = -Infinity;
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log(findMax(4, 5, 6, 45));
document.write(findMax(4, 5, 7, 9));


//function for finding the smallest number in a list
function findMin() {
    let min = Infinity;
    for (let i = 0; i < arguments.length; i++){
        if(arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}
console.log(findMin(4, 5, 7, 9));


//function to sum all the input values
function sumAll () {
    let sum = 0
    for (i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(sumAll(1, 34, 78, 123, 500));