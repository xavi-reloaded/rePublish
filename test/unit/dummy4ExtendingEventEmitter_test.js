/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/27/13
 * Time: 2:42 PM
 * To change this template use File | Settings | File Templates.
 */


define(['dummy4'], function(d4)
{
    describe('Dummy extending EventEmitter  ', function()
    {
        it('dummy4 works', function()
        {
            var d = new d4();
            expect(d==null).toEqual(false);
        });

        it('Method() from concrete class', function()
        {
            var d = new d4();
            expect(d.giveMeSomeSugar()).toEqual('Hello, pinkainen');
        });

        it('Inherited_Method() from concrete class', function()
        {
            var d = new d4();
            var counter = 0;
            d.addListener('someevent',function(){counter++;});
            d.emit('someevent');
            d.emit('someevent');
            expect(counter).toEqual(2);
        });


    });

});