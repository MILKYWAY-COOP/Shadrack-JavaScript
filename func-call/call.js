//this example calls the fullName method of person, using it on person2
const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName ;
    }
}
const person1 = {
    firstName: "Shadrack",
    lastName: "Kevin"
}
const person2 = {
    firstName: "Janice",
    lastName: "Kevin"
}
console.log(person.fullName.call(person2));


//The call() method with arguments
const being = {
    fullName: function(city, country)  {
        return this.firstName + " " + this.lastName + ":from " + city + ", " + country;
    }
}
const being1 = {
    firstName: "Shadrack",
    lastName: "Kevin"
}
const being2 = {
    firstName: "Angela",
    lastName: "Kevin"
}
console.log(being.fullName.call(being2, "Nakuru", "Kenya"));