// classes and interfaces play well together in TypeScript
class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}


// Added a string type annotation to our 'person' function

interface Person { // describes objects that have a firstName and lastName field
  firstName: string;
  lastName: string;
} // the two types are compatible if their internal structure is compatible

function greeter(person : Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

// var user = [0, 1, 2]; *running code this way gives us an error when compiling*

// var user = { firstName: "Jane", lastName: "User" }; // using an interface

// var user = "Jane User"; // regular usage w/o interface

document.body.innerHTML = greeter(user);