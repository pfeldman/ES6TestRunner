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
            var person = new Person("Pablo", "Feldman");
            var salut = person.sayHi();
            expect(salut).toEqual("Hi, I'm Pablo Feldman");
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
