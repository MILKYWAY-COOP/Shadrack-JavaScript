//The fullName method of person is apllied on person1
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + 
        country;
    }
}

const person1 = {
    firstName: "Shadrack",
    lastName: "Kevin"
}
console.log(person.fullName.apply(person1, ['Nakuru', 'Kenya']));


//returns the highest number in a list of number arguments
console.log(Math.max(1, 3, 7, 9));

//returns the highest number in an array of numbers
console.log(Math.max.apply(null, [23, 1 , 500, 1313]));//will return 1313
console.log(Math.max.apply(Math, [23, 1 , 500, 1313]));//will also return 1313
console.log(Math.max.apply(" ", [23, 1 , 500, 1313]));//will also return 1313
console.log(Math.max.apply(0, [23, 1 , 500, 1313]));//will also return 1313