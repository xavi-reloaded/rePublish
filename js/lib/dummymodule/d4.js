/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/24/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */



(function (exports) {
    'use strict';

    var EventEmitter = require( "events" );

    function d4() {
        EventEmitter.call(this);
        return (this);
    }

    d4.prototype = Object.create( EventEmitter.prototype );

    var proto = d4.prototype,
        nativeIndexOf = Array.prototype.indexOf ? true : false;


    proto.giveMeSomeSugar =  function() {
        return 'Hello, pinkainen';
    }

    if (typeof define === 'function') {
        define( 'dummy4', [], function () { return d4; } );
    }
    else {
        exports.d4 = d4;
    }

}(this) );


