'use strict';

define(['eventedcacheimpl'], function(cacheimpl) {

    describe('EventCache Implementation', function(){

        var  ec;

        beforeEach(function()
        {   ec = new cacheimpl();
        })

        it('Cache should be a valid Cache Object', function()
        {
            expect(ec==null).toBe(false);
        });

        it('Cache should inherits methods from parent class', function()
        {
            expect(ec.on()==null).toBe(false);
        });

        it('set() & get() should set a value on cache and get it ',function()
        {
            ec.set( "weke", 111 );
            var actual = ec.get( "weke" );
            expect(actual).toBe(111);
        })

        it('set() & get() should set a value on cache and get it implicitely ',function()
        {
            ec.set( "weke", 111 );
            var actual = ec.weke;
            expect(actual).toBe(111);
        })

        it('clear() should remove all data on cache ',function()
        {
            ec.set( "weke", 111 );
            ec.clear();
            var actual = ec.get( "weke" );
            expect(actual).toBe(null);
        })



    });


});



/*
 // Now, let's set a value.
 cache.set( "hitCount", 0 );

 // Once the cahce key is set, we can now access it either through
 // the get method:
 console.log( "hitCount: " + cache.get( "hitCount" ) );

 // ... or, we can access it through the implicit getter.
 console.log( "hitCount: " + cache.hitCount );

 // We can even SET a value using the implicit setter. An incrementor
 // actually uses both the implicit getter and setter.
 cache.hitCount++;

 // Use the assignment operator.
 cache.hitCount = 5;

 // Remove the hit count value. For this, we have to use the remove
 // method. This will also remove the implicit getter / setter.
 cache.remove( "hitCount" );


 // Set a couple of test values.
 cache.set( "Sarah", 1 );
 cache.set( "Joanna", 2 );
 cache.set( "Anna", 3 );
 cache.set( "Tricia", 4 );

 // Now, clear the cache.
 cache.clear();
    */