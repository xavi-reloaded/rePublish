/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/28/13
 * Time: 4:15 PM
 * To change this template use File | Settings | File Templates.
 */

(function (exports) {

    var bookDefaultCallback = function (book) {
        var $ = require('jquery');
        var PageHandler = require('pagehandler');


        var te = document.getElementById('book_title');
        te.textContent = book.title;

        var ae = document.getElementById('author_heading');
        ae.textContent = book.author;

        var lc = document.getElementById('leftcontent'),
            rc = document.getElementById('rightcontent'),
            ln = document.getElementsByClassName('left pagenum')[0],
            rn = document.getElementsByClassName('right pagenum')[0];


        if (window.orientation == 0 || window.orientation == 180) {
            pages = [lc];
        } else {
            pages = [lc, rc];
        }

        var pageHandler = new PageHandler(book, [lc], [ln, rn]);



        var contents = document.getElementById('contents');


        for (var i = 0, l = book.toc.length; i < l; i++) {

            // Sometimes navpoints aren't all covered, or they are done so in weird ways.
            // try to be liberal about things.
            if (book.toc[i] === undefined) continue;

            var chapter = document.createElement('a');
            var secName = book.toc[i].fileName;
            chapter.setAttribute('href', '#section=' + secName);
            chapter.textContent = book.toc[i].title;
            chapter.onclick = function (secName) {
                return function () {
                    pageHandler.goToSection(secName);
                    pageHandler.display();
                    contents.style.display = 'none';
                }
            }(secName);
            contents.appendChild(chapter);

        }

        pageHandler.display();

//    swipe(null, pageHandler);

//    function handleArrowKeys(evt) {
//        evt = (evt) ? evt : ((window.event) ? event : null);
//        if (evt) {
//            switch (evt.keyCode) {
//                case 37:
//                    pageHandler.prevPage();
//                    break;
//                case 39:
//                    pageHandler.nextPage();
//                    break;
//                case 67:
//                    document.getElementById('contents').style.display = 'block';
//                    break;
//            }
//        }
//    }
//
//    document.onkeyup = handleArrowKeys;
//
//    // Set up an orientation handler
//    window.onorientationchange = function () {
//        if (window.orientation == 0 || window.orientation == 180) {
//            pageHandler.setPages([lc]);
//        } else {
//            pageHandler.setPages([lc,rc]);
//        }
//        pageHandler.display();
//    }

    };

    // Expose the class either via AMD or the global object
    if (typeof define === 'function') {
        define(function () {
            return bookDefaultCallback;
        });
    }
    else {
        exports.bookDefaultCallback = bookDefaultCallback;
    }


}(this));
