'use strict';

define(['eventedcache'], function(eventedcache) {

    describe('EventCache', function(){

        var  ec;

        beforeEach(function()
        {   ec = new eventedcache();
        })

        it('EventedCache should be a valid EventedCache Object', function()
        {
            expect(ec==null).toBe(false);
        });

    });


});

