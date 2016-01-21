class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return "Hi, I'm " + this.firstName + " " + this.lastName;
    }
}
