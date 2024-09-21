var Person = /** @class */ (function () {
    function Person(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
    return Person;
}());
function greeter(person) {
    return person.fullName;
}
// Create a new Person object
var username = new Person("Devun", "Fox", "Durst");
// Query the placeholder element
var placeholderName = document.querySelector('.placeholderName');
// If the element exists, set its text content to the full name
if (placeholderName) {
    placeholderName.textContent = greeter(username);
}
