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
        'jquery': '/base/js/lib/jquery/jquery',
        'jquery-ui': '/base/js/lib/jquery/jquery-ui'
//        'EventEmitter':  '/base/js/lib/EventEmitter/EventEmitter'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});