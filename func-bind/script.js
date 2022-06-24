//the member object borrows the fullName method from person
const person = {
    firstName: "Wajackoya",
    lastName: "The fifth",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "The fifth",
    lastName: "Wajackoya"
}
let fullName = person.fullName.bind(member);
console.log(fullName());


/*the being object has a display method. in the display method,
this refers to the being object.*/
const being = {
    firstName: "The fifth",
    lastName: "President",
    display: function () {
        let x = console.log(this.firstName + " " + this.lastName);
    }
}
being.display();

/*This example will try and display a person name after 3 seconds,
but it will display undefined instead*/
const being2 = {
    firstName: "Moses",
    lastName: "Hannanaiah",
    display: function () {
        let x = console.log(this.firstName + " " + this.lastName);
    }
}
setTimeout(being2.display, 3000);


//in this example bind() is used to bind person.display.bind
const being3 = {
    firstName: "Shadrack",
    lastName: "kevinnnn",
    display: function () {
        let x = console.log(this.firstName + " " + this.lastName);
    }
}
let display = being3.display.bind(being3);
setTimeout(display, 5000)
