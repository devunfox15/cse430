class Person {
    fullName: string;
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleName + " " + lastName;
    }
}

interface User {
    firstName: string;
    middleName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return person.fullName;
}

// Create a new Person object
let username = new Person("Devun", "Fox", "Durst");

// Query the placeholder element
const placeholderName = document.querySelector('.placeholderName') as HTMLElement | null;

// If the element exists, set its text content to the full name
if (placeholderName) {
    placeholderName.textContent = greeter(username);
}