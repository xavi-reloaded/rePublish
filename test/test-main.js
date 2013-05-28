/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/23/13
 * Time: 12:30 PM
 * To change this template use File | Settings | File Templates.
 */
var tests = Object.keys(window.__karma__.files).filter(function (file) {
    return /test\.js$/.test(file);
});

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/',

    paths: {
        events:   '/base/js/lib/EventEmitter/EventEmitter',
        eventedcache:   '/base/js/lib/homemadecache/EventedCache',
        eventedcacheimpl:   '/base/js/lib/homemadecache/EventedCacheImpl',

        jquery:         '/base/js/lib/jquery/jquery',
        jqueryui:       '/base/js/lib/jquery/jquery-ui',
        dummy1:         '/base/js/lib/dummymodule/d1',
        dummy2:         '/base/js/lib/dummymodule/d2',
        dummy3:         '/base/js/lib/dummymodule/d3',
        dummy4:         '/base/js/lib/dummymodule/d4',
        zipclass:       '/base/js/zip',
        zipinflateclass:'/base/js/inflate',
        bookloader:     '/base/js/bookLoader',
        enrichedepub:   '/base/js/enrichedEpub',
        pagehandler:    'js/pageHandler'
    },

    shim: {
        bookloader: {
            deps: ['pagehandler','enrichedepub']
        },
        enrichedepub: {
            deps: ['zipclass']
        },
        zipclass: {
            deps: ['zipinflateclass']
        },
        eventedcache: {
            deps: ['events']
        },
        dummy4: {
            deps: ['events']
        },
        eventedcacheimpl: {
            deps: ['eventedcache']
        }
    },


    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

/*

 shim: {
 "events": {
 exports: "EventEmitter"  //attaches "EventEmitter" to the window object
 }
 },

 */
