(function (exports) {

    'use strict';

    function zip() {}

    var proto = zip.prototype,
        nativeIndexOf = Array.prototype.indexOf ? true : false;

    proto.giveMeSomeSugar =  function() {
        return 'Hello, pinkainen';
    }


    if (typeof define === 'function') {
        define( 'zip', [], function () { return zip; } );
    }
    else {
        exports.zip = zip   ;
    }

}(this));


/* Low-rent random-access IO */
var IOBuffer = function (str) {
    this.pos = 0;

    this.length = str.length;

    this.read = function (bytes) {
        var chars = str.substr(this.pos, bytes);
        this.pos += bytes;
        return chars;
    }
    this.readByte = this.read;

    this.eof = function () {
        return (this.pos >= this.length);
    }

    this.seek = function (newPos) {
        this.pos = newPos;
    }

    this.lastIndexOf = function (matchStr) {
        return str.lastIndexOf(matchStr);
    }
};




/* unpack, like the perl/ruby/python/php method.
 VERY primitive implementation, just what I need for ZIP. */
String.prototype.unpack = function(unpack_cmd) {
    var cmds = unpack_cmd.split('');
    var l = cmds.length;

    var pos = 0;
    var ppos = 0;

    var out = [];

    var i = 0;
    while (i < l) {
        switch (cmds[i++]) {
            case "V":
                // Unsigned long (32-bit), little endian.
                var v =( (this.charCodeAt(pos++) & 0xFF)        |
                    ((this.charCodeAt(pos++) & 0xFF) <<  8) |
                    ((this.charCodeAt(pos++) & 0xFF) << 16) |
                    ((this.charCodeAt(pos++) & 0xFF) << 24) );
                if (v < 0) v += 4294967296;
                out.push(v);
                break;
            case "v":
                // Unsigned short (16-bit), little endian.
                out.push( (this.charCodeAt(pos++) & 0xFF) |
                    ((this.charCodeAt(pos++) & 0xFF) << 8));
                break;
            case "C":
                out.push(this.charCodeAt(pos++));
                break;
            case 'c':
                // Signed char (8-bit)
                var char = this.charCodeAt(pos++);
                out.push(-1 * (char & 128) + (char & 127));
                break;
        }
    }

    return out;
};
