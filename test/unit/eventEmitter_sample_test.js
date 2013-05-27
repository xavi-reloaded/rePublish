'use strict';


//define(['EventEmitter'], function(EventEmitter) {
//
//    describe('EventEmitter well catched ::>', function(){
//
//        it('I can invoke EventEmitter through requirejs', function()
//        {
//            expect(EventEmitter==null).toBe(false);
//        });
//
//    });
//});

var eee;

//require(['require', '../../js/lib/EventEmitter/EventEmitter.js'], function (require)
//{
//    eee = new (require('../../js/lib/EventEmitter/EventEmitter.js')).EventEmitter();
//});

define(['eventemitter'], function(EventEmitter) {

    describe('EventEmitter demonstration ::>', function(){

        var  eventCounter,ee;

        beforeEach(function()
        {   ee = new EventEmitter();
            ee.addListener("event",callback);
            eventCounter = 0;
        })

        it('EventEmitter should be a valid EventEmitter Object', function()
        {
            expect(ee==null).toBe(false);
        });

        it('emit() event called once should exec callback once', function()
        {
            ee.emit("event");
            expect(eventCounter).toBe(1);
        });

        it('removeListener() should deactivate event emit', function()
        {
            ee.removeListener("event",callback);
            ee.emit("event");
            expect(eventCounter).toBe(0);
        });

        it('( emit() * 3 )  should emit 3 events and keep values', function()
        {
            ee.emit("event");
            ee.emit("event");
            ee.emit("event");
            expect(eventCounter).toBe(3);
        });

        function callback() {
            eventCounter++;
            console.log('Callback has been called '+eventCounter+' times');
        }
    });


});

