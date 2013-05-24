/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/24/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */



(function (exports) {
    'use strict';

    function d3() {}

    var proto = d3.prototype,
        nativeIndexOf = Array.prototype.indexOf ? true : false;

    proto.giveMeSomeSugar =  function() {
        return 'Hello, pinkainen';
    }

    if (typeof define === 'function') {
        define( 'dummy3', [], function () { return d3; } );
    }
    else {
        exports.d3 = d3;
    }

}(this) );


