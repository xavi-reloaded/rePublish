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

require(['require', '../../js/lib/EventEmitter/EventEmitter.js'], function (require)
{
    eee = new (require('../../js/lib/EventEmitter/EventEmitter.js')).EventEmitter();
});

define(['jquery'], function(EventEmitter) {

    describe('EventEmitter demonstration ::>', function(){

        var  ee,eventCounter;


//        eventCounter = -1;
//        ee = new eventemitter();
//        ee.once("event", callback);

        it('EventEmitter should be a valid EventEmitter Object', function()
        {

            console.log(EventEmitter+' ');
            expect(EventEmitter.addListener()==null).toBe(false);
        });

        it('__InstanceOF:: EventEmitter should return a valid emitter object', function()
        {
//            var ee = new EventEmitter();
            eee.once("event", callback);
//            var ee = require("EventEmitter").EventEmitter();
            console.log(eee+' ');


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

