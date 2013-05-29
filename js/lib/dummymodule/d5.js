/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/24/13
 * Time: 12:19 PM
 * To change this template use File | Settings | File Templates.
 */



(function (exports) {
    'use strict';

    function d5() {
        this.somefunction = somefunction;
    }

    var proto = d5.prototype,
        nativeIndexOf = Array.prototype.indexOf ? true : false;



    var somevar = 'foo',
        somefunction = function(){
            return 'some function return'
        },
        somemodule = (function(){
            console.log('from somemodule:'+somevar);
        }()) ;



    proto.giveMeSomeSugar =  function() {
        return 'Hello, pinkainen';
    }

    if (typeof define === 'function') {
        define( 'dummy5', [], function () { return d5; } );
    }
    else {
        exports.d5 = d5;
    }

}(this) );


