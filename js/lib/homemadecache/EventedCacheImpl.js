/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/27/13
 * Time: 11:48 AM
 * To change this template use File | Settings | File Templates.
 */

var EventedCache = require( "eventedcache" );

(function (exports) {

    function cache() {
        // Call the super constructor.
        EventedCache.call( this );
        this.init();
        return (this);
    }

    cache.prototype = Object.create( EventedCache.prototype );

// The evented cache allows us to keep track of the mutations that
// get applied to the cache. This includes SET, REMOVE, and CLEAR.

    cache.prototype.init = function ()
    {

        //Bind to the set event.
        this.on(
            "set",
            function( name, value ){
                // Log the set.
                console.log( "SET >> " + name + " : " + value );
            }
        );

        // Bind the remove event.
        this.on(
            "remove",
            function( name, value ){
                // Log the remove.
                console.log( "REMOVE >> " + name );
            }
        );

        // Bind the clear event.
        this.on(
            "clear",
            function( itemCount ){
                // Log the clear.
                console.log( "CLEAR >> " + itemCount + " items" );
            }
        );

    }

    if (typeof define === 'function') {
        define(function () {
            return cache;
        });
    }

})(this);