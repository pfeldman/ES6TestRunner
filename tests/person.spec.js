require(["/base/src/person.js"], function () {
    describe('Person ', function(){
        it('Should say hi with proposed first name and last name', function() {
            let person = new Person("John", "Doe");
            let salut = person.sayHi();
            expect(salut).toEqual("Hi, I'm John Doe");
        });
    });
});
