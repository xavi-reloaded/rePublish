/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/23/13
 * Time: 12:56 PM
 * To change this template use File | Settings | File Templates.
 */



define(['jquery','dummy1','dummy2','zipclass','dummy3','events','pagehandler','section','hyphenator'], function($,d1,d2,zip,d3,events,p,s,h)
{
    describe('___||||> just checking', function()
    {
        it('jquery works', function()
        {
            var el = $('<div>require.js up and running</div>');
            expect(el.text()).toEqual('require.js up and running');
        });

        it(' .: DUMMY 1 :.', function()
        {
            var d = new d1();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: DUMMY 2 :.', function()
        {
            var d = new d2();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: DUMMY 3 :.', function()
        {
            var d = new d3();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: ZIP :.', function()
        {
            var d = new zip();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it(' .: EVENTS :. ', function()
        {
            var d = new events();
            expect(d.getListeners()).toEqual([]);
        });

        it(' .: PAGE HANDLER :. ', function()
        {
            var d = new p({contents:{}},[].push(0));
            expect(d.sections).toEqual([]);
        });

        it(' .: SECTION :. ', function()
        {
            var contentCallback = function(a,b){
                console.log('a = ' + a);
                console.log('b = ' + b);
            };

            var d = new s(contentCallback);
            expect(d.currPage).toEqual(0);
        });

        it(' .: HYPHENATOR :. ', function()
        {
            var hyphenator = new h();
            expect(hyphenator.version).toEqual('2.4.0');
        });

    });
});

