/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/23/13
 * Time: 12:56 PM
 * To change this template use File | Settings | File Templates.
 */



define(['jquery'], function($) {
    describe('just checking', function() {
        it('works for app', function() {
            var el = $('<div>require.js up and running</div>');
            expect(el.text()).toEqual('require.js up and running');
        });

    });
});

