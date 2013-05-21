// Sample Karma configuration file, that contain pretty much all the available options
// It's used for running client tests on Travis (http://travis-ci.org/#!/karma-runner/karma)
// Most of the options can be overriden by cli arguments (see karma --help)
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54


// base path, that will be used to resolve files and exclude
basePath = '../';

frameworks = ['jasmine'];

// list of files / patterns to load in the browser
files = [
    'js/lib/jquery/jquery.min.js',
    'js/lib/jquery/jquery-ui.min.js',
    'js/lib/requirejs/require.js',
    'js/lib/zip.js/zip.js',
    'js/lib/zip.js/zip-fs.js',
    'js/lib/zip.js/zip-ext.js',
    'js/lib/zip.js/tests/util.js',

    'js/**/*.js',

    'test/resources/**/*.js',
    'test/unit/helpers.js',

    { pattern: 'test/lib/sinon/sinon-1.7.1.js', watched: false, included: true },
    'test/unit/**/*.js'

];

// list of files to exclude
exclude = ['js/lib/zip.js/tests/*.js'];

preprocessors = {
    '**/*.coffee': 'coffee'
};
// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = ['progress','junit'];

junitReporter = {
    // will be resolved to basePath (in the same way as files/exclude patterns)
    outputFile: 'logs/test-results_site.html'
};

// web server port
// CLI --port 9876
port = 9876;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers = ['Chrome'];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 5000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;

// compile coffee scripts


plugins = [
    'karma-jasmine',
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-junit-reporter']