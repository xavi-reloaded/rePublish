/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/23/13
 * Time: 12:56 PM
 * To change this template use File | Settings | File Templates.
 */



define(['jquery','dummy1','dummy2','events','zip','dummy3'], function($,d1,d2,events,zip,d3) {
    describe('___||||> just checking', function() {
        it('jquery works', function() {
            var el = $('<div>require.js up and running</div>');
            expect(el.text()).toEqual('require.js up and running');
        });

        it(' .: DUMMY 1 :.', function() {
            var d = new d1();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: DUMMY 2 :.', function() {
            var d = new d2();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: DUMMY 3 :.', function() {
            var d = new d3();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: ZIP :.', function() {
            console.log(zip+' => ');
            var d = new zip();
            expect(d.giveMeSomeSugar).toEqual('Hello, pinkainen');
        });

        it(' .: EVENTS :.', function() {
            console.log(events+' => ');
            var d = new (events).EventEmitter();
            expect(d.getListeners()).toEqual('Hello, pinkainen');
        });

    });
});

