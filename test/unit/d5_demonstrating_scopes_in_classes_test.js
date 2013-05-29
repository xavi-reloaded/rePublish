'use strict';

define(['dummy5'], function(d5) {

    describe('Dummy 5 Demonstrating scopes', function(){

        var sut;

        beforeEach(function()
        {
            sut = new d5();
        })

        it('class is alive should get class by require[]', function()
        {
            expect(sut==null).toBe(false);
        });

        it('standart method on class call', function(){
           expect(sut.giveMeSomeSugar()).toBe('Hello, pinkainen');
        });

        it('function inside the module but out of the class definition shoud not crash', function()
        {
            expect(sut.somefunction()).toBe('some function return');
        })


    });


});

