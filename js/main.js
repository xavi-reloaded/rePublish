/**
 * Created with JetBrains PhpStorm.
 * User: fjhidalgo
 * Date: 5/27/13
 * Time: 3:35 PM
 * To change this template use File | Settings | File Templates.
 */


requirejs.config({
    // Karma serves files from '/base'
    baseUrl: './',

    paths: {
        events:   'js/lib/EventEmitter/EventEmitter',
        eventedcache:   'js/lib/homemadecache/EventedCache',
        eventedcacheimpl:   'js/lib/homemadecache/EventedCacheImpl',

        jquery:         'js/lib/jquery/jquery',
        jqueryui:       'js/lib/jquery/jquery-ui',
        zipclass:       'js/zip',
        zipinflateclass:'js/inflate',
        bookloader:     'js/bookLoader',
        enrichedepub:   'js/enrichedEpub',
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
    }

});


define(['jquery','bookloader'],
    function($, bookloader)
    {
        initApp($, bookloader);
    }
);
