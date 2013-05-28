'use strict';

define(['pagehandler','jquery'], function(pagehandler,$) {

    function getFakeBook() {
        return {
            contents:{
                0:{}
            }
        };
    }
    function getDisplayElements() {
        var el=[].push(0);
        return el;
    }


    describe('PageHandler', function(){

        var  ph;

        beforeEach(function()
        {
            var book = getFakeBook();
            var displayElements = getDisplayElements();
            ph = new pagehandler(book, displayElements);
        })

        it('PageHandler should be a valid PageHandler Object', function()
        {
            expect(ph==null).toBe(false);
        });

    });


});

