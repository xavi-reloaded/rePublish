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

define(['events'], function(events) {

    describe('EventEmitter demonstration ::>', function(){

        var  eventCounter;

//        eventCounter = -1;
//        ee = new eventemitter();
//        ee.once("event", callback);

        console.log('_________________________________________________________________________________________________________________');
        console.log(events+' MIERDER');

        it('EventEmitter should be a valid EventEmitter Object', function()
        {
//            var EventEmitter = require('../../js/lib/EventEmitter/EventEmitter.js');
//            var ee = new EventEmitter();

            console.log(events+' ');

            var eee = new events.EventEmitter();
//            require("events").EventEmitter;

            expect(eee==null).toBe(false);

        });

//        it('event called once should exec callback once', function()
//        {
//            ee.emit("event");
//            expect(eventCounter).toBe(111);
//        });
//
//        it('removeListener() should deactivate event emit', function()
//        {
//            ee.removeListener("event", callback);
//            ee.emit("event");
//            expect(eventCounter).toBe(0);
//        });
//
//        it('removeAllListeners() should deactivate all event emit', function()
//        {
//            ee.removeAllListeners("event");
//            ee.emit("event");
//            expect(eventCounter).toBe(1);
//        });

        function callback() {
            eventCounter++;
            console.log('Callback has been called '+eventCounter+'times');
        }
    });


});

