/*require('[src/person.js]', function(person){
    describe('Person ', function(){
        it('Should say hi with proposed first name and last name', function() {
            var person = new person();
            expect(true).toEqual(true);
        });
    });
});
*/

require(["/base/src/person.js"], function () {
    describe('Person ', function(){
        it('Should say hi with proposed first name and last name', function() {
            let person = new Person("John", "Doe");
            let salut = person.sayHi();
            expect(salut).toEqual("Hi, I'm John Doe");
        });
    });
});


/*define(['person'], function(Person) {
    describe('Person ', function(){
        it('Should say hi with proposed first name and last name', function() {
            //var person = new Person();
            expect(true).toEqual(true);
        });
    });
});
*/
