// Karma configuration
// Generated on Tue Sep 27 2016 13:06:27 GMT+0300 (Belarus Standard Time)

let webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'spec/tests.bundle.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'spec/tests.bundle.js': ['webpack']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    coverageReporter: {
      includeAllSources: true,
      // configure the reporter to use isparta for JavaScript coverage
      // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
      instrumenters: { isparta : require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta'
      },
      check: {
        global: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50
        },
        each: {
          statements: 50,
          branches: 50,
          functions: 50,
          lines: 50
        }
      }
    }

  });
};
