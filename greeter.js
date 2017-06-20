// classes and interfaces play well together in TypeScript
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
// var user = [0, 1, 2]; *running code this way gives us an error when compiling*
// var user = { firstName: "Jane", lastName: "User" }; // using an interface
// var user = "Jane User"; // regular usage w/o interface
document.body.innerHTML = greeter(user);
