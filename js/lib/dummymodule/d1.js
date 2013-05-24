/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/24/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */



(function () {
    'use strict';

    var d1 = (function () {
        function d1() {
            this.greeting="pinkainen";
        }

        d1.prototype.giveMeSomeSugar = function () {
            return "Hello, " + this.greeting;
        };
        return d1;
    })();


    if ( typeof define === "function") {
        define( 'dummy1', [], function () { return d1; } );
    }

}() );


