/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/24/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */



(function () {
    'use strict';

    function d2() {}

    var proto = d2.prototype,
        nativeIndexOf = Array.prototype.indexOf ? true : false;

    proto.giveMeSomeSugar =  function() {
        return 'Hello, pinkainen';
    }

    if ( typeof define === "function") {
        define( 'dummy2', [], function () { return d2; } );
    }

}() );


